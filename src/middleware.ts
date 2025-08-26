import { NextRequest, NextResponse } from 'next/server';

// Security configuration
const SECURITY_CONFIG = {
  // Rate limiting
  RATE_LIMIT_WINDOW: 60 * 1000, // 1 minute
  MAX_REQUESTS_PER_IP: 10,
  
  // Request size limits
  MAX_REQUEST_SIZE: 10 * 1024, // 10KB
  
  // Suspicious patterns
  SUSPICIOUS_USER_AGENTS: [
    'sqlmap', 'nmap', 'nikto', 'acunetix', 'burp', 'zap', 'w3af',
    'nessus', 'openvas', 'metasploit', 'cobalt', 'beef', 'sql injection',
    'xss', 'csrf', 'lfi', 'rfi', 'xxe', 'ssrf', 'nosql injection'
  ],
  
  // Blocked referers
  BLOCKED_REFERERS: [
    'evil.com', 'malicious.site', 'hacker.com', 'attack.net',
    'phishing.com', 'malware.org', 'spam.net', 'bot.com'
  ],
  
  // Suspicious query patterns
  SUSPICIOUS_QUERY_PATTERNS: [
    /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute)\b)/gi,
    /(\b(or|and)\s+\d+\s*=\s*\d+)/gi,
    /(\b(union|select).*from)/gi,
    /(--|\/\*|\*\/)/gi,
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
    /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi
  ]
};

// In-memory rate limiting store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Security monitoring
const securityEvents: Array<{
  timestamp: number;
  ip: string;
  event: string;
  details: string;
}> = [];

// Log security event
function logSecurityEvent(ip: string, event: string, details: string) {
  securityEvents.push({
    timestamp: Date.now(),
    ip,
    event,
    details
  });
  
  // Keep only last 1000 events
  if (securityEvents.length > 1000) {
    securityEvents.splice(0, securityEvents.length - 1000);
  }
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[SECURITY] ${event} - IP: ${ip} - ${details}`);
  }
}

// Check rate limiting
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + SECURITY_CONFIG.RATE_LIMIT_WINDOW
    });
    return { allowed: true, remaining: SECURITY_CONFIG.MAX_REQUESTS_PER_IP - 1, resetTime: now + SECURITY_CONFIG.RATE_LIMIT_WINDOW };
  }
  
  if (record.count >= SECURITY_CONFIG.MAX_REQUESTS_PER_IP) {
    logSecurityEvent(ip, 'RATE_LIMIT_EXCEEDED', `Rate limit exceeded: ${record.count} requests`);
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }
  
  record.count++;
  return { allowed: true, remaining: SECURITY_CONFIG.MAX_REQUESTS_PER_IP - record.count, resetTime: record.resetTime };
}

// Detect suspicious activity
function detectSuspiciousActivity(request: NextRequest): { suspicious: boolean; reason: string } {
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const url = request.url;
  
  // Check suspicious user agents
  for (const pattern of SECURITY_CONFIG.SUSPICIOUS_USER_AGENTS) {
    if (userAgent.toLowerCase().includes(pattern.toLowerCase())) {
      return { suspicious: true, reason: `Suspicious user agent: ${pattern}` };
    }
  }
  
  // Check blocked referers
  for (const blocked of SECURITY_CONFIG.BLOCKED_REFERERS) {
    if (referer.toLowerCase().includes(blocked.toLowerCase())) {
      return { suspicious: true, reason: `Blocked referer: ${blocked}` };
    }
  }
  
  // Check suspicious query patterns
  for (const pattern of SECURITY_CONFIG.SUSPICIOUS_QUERY_PATTERNS) {
    if (pattern.test(url)) {
      return { suspicious: true, reason: `Suspicious query pattern detected` };
    }
  }
  
  // Check for excessive path segments (potential path traversal)
  const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
  if (pathSegments.length > 10) {
    return { suspicious: true, reason: 'Excessive path segments' };
  }
  
  // Check for suspicious headers
  const suspiciousHeaders = ['x-forwarded-for', 'x-real-ip', 'x-forwarded-proto'];
  for (const header of suspiciousHeaders) {
    if (request.headers.get(header) && !request.headers.get('x-forwarded-for')) {
      return { suspicious: true, reason: `Suspicious header: ${header}` };
    }
  }
  
  return { suspicious: false, reason: '' };
}

// Clean up old rate limit records
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 60000); // Clean up every minute

export function middleware(request: NextRequest) {
  const startTime = Date.now();
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const url = request.url;
  
  // Skip middleware for static files and API routes that handle their own security
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api/contact') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Check rate limiting
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    logSecurityEvent(ip, 'RATE_LIMIT_BLOCKED', `Blocked due to rate limiting`);
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': rateLimit.resetTime.toString(),
        'Retry-After': '60'
      }
    });
  }
  
  // Detect suspicious activity
  const suspicious = detectSuspiciousActivity(request);
  if (suspicious.suspicious) {
    logSecurityEvent(ip, 'SUSPICIOUS_ACTIVITY_BLOCKED', suspicious.reason);
    return new NextResponse('Forbidden', { status: 403 });
  }
  
  // Create response
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  response.headers.set('Origin-Agent-Cluster', '?1');
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.brevo.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  // Add rate limit headers
  response.headers.set('X-RateLimit-Remaining', rateLimit.remaining.toString());
  response.headers.set('X-RateLimit-Reset', rateLimit.resetTime.toString());
  
  // Log request for monitoring
  const duration = Date.now() - startTime;
  if (process.env.NODE_ENV === 'development') {
    console.log(`[REQUEST] ${request.method} ${request.nextUrl.pathname} - IP: ${ip} - UA: ${userAgent.substring(0, 50)} - Duration: ${duration}ms`);
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api routes that handle their own security
     */
    '/((?!_next/static|_next/image|favicon.ico|api/contact).*)',
  ],
};
