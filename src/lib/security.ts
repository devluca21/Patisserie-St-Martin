/**
 * Security Utilities for Patisserie St. Martin
 * Comprehensive security functions for input validation, sanitization, and threat detection
 */

// Security configuration
export const SECURITY_CONFIG = {
  // Input length limits
  MAX_LENGTHS: {
    NAME: 100,
    EMAIL: 254,
    PHONE: 20,
    MESSAGE: 1000,
    ORDER_TYPE: 50,
    DATE: 20,
    URL: 2048,
    USER_AGENT: 500
  },
  
  // Rate limiting
  RATE_LIMITS: {
    CONTACT_FORM: { max: 10, window: 60 * 1000 }, // 10 requests per minute
    NEWSLETTER: { max: 5, window: 60 * 1000 },    // 5 requests per minute
    GENERAL: { max: 100, window: 60 * 1000 }      // 100 requests per minute
  },
  
  // Suspicious patterns
  SUSPICIOUS_PATTERNS: {
    XSS: [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
      /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
      /<link\b[^<]*(?:(?!<\/link>)<[^<]*)*<\/link>/gi,
      /<meta\b[^<]*(?:(?!<\/meta>)<[^<]*)*>/gi
    ],
    SQL_INJECTION: [
      /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute)\b)/gi,
      /(\b(or|and)\s+\d+\s*=\s*\d+)/gi,
      /(\b(union|select).*from)/gi,
      /(--|\/\*|\*\/)/gi,
      /(\b(declare|cast|convert|sp_|xp_)\b)/gi
    ],
    COMMAND_INJECTION: [
      /(\b(cmd|powershell|bash|sh|zsh|fish|tcsh|ksh)\b)/gi,
      /(\b(system|exec|eval|Function|setTimeout|setInterval)\b)/gi,
      /(\b(require|import|include|load)\b)/gi,
      /(\b(document\.|window\.|global\.|process\.)\b)/gi
    ],
    PATH_TRAVERSAL: [
      /\.\.\//gi,
      /\.\.\\/gi,
      /\/etc\/passwd/gi,
      /\/etc\/shadow/gi,
      /\/proc\/version/gi,
      /\/sys\/class/gi,
      /\/dev\/null/gi
    ]
  },
  
  // Blocked user agents
  BLOCKED_USER_AGENTS: [
    'sqlmap', 'nmap', 'nikto', 'acunetix', 'burp', 'zap', 'w3af',
    'nessus', 'openvas', 'metasploit', 'cobalt', 'beef', 'sql injection',
    'xss', 'csrf', 'lfi', 'rfi', 'xxe', 'ssrf', 'nosql injection',
    'dirb', 'gobuster', 'wfuzz', 'ffuf', 'hydra', 'medusa', 'ncrack'
  ],
  
  // Blocked referers
  BLOCKED_REFERERS: [
    'evil.com', 'malicious.site', 'hacker.com', 'attack.net',
    'phishing.com', 'malware.org', 'spam.net', 'bot.com',
    'scanner.com', 'exploit.net', 'vulnerability.org'
  ]
};

// Input validation functions
export class InputValidator {
  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    if (!email || typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim()) && email.length <= SECURITY_CONFIG.MAX_LENGTHS.EMAIL;
  }
  
  /**
   * Validate phone number format
   */
  static isValidPhone(phone: string): boolean {
    if (!phone || typeof phone !== 'string') return true; // Phone is optional
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
    return phoneRegex.test(phone.trim()) && phone.length <= SECURITY_CONFIG.MAX_LENGTHS.PHONE;
  }
  
  /**
   * Validate name format
   */
  static isValidName(name: string): boolean {
    if (!name || typeof name !== 'string') return false;
    const nameRegex = /^[a-zA-ZÀ-ÿ\s\-'\.]{1,100}$/;
    return nameRegex.test(name.trim()) && name.length <= SECURITY_CONFIG.MAX_LENGTHS.NAME;
  }
  
  /**
   * Validate message content
   */
  static isValidMessage(message: string): boolean {
    if (!message || typeof message !== 'string') return true; // Message is optional
    return message.trim().length <= SECURITY_CONFIG.MAX_LENGTHS.MESSAGE;
  }
  
  /**
   * Validate order type
   */
  static isValidOrderType(orderType: string): boolean {
    if (!orderType || typeof orderType !== 'string') return false;
    const validTypes = ['gateau', 'patisserie', 'boulangerie', 'traiteur', 'autre'];
    return validTypes.includes(orderType.toLowerCase().trim());
  }
  
  /**
   * Validate date format
   */
  static isValidDate(date: string): boolean {
    if (!date || typeof date !== 'string') return true; // Date is optional
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date.trim()) && date.length <= SECURITY_CONFIG.MAX_LENGTHS.DATE;
  }
}

// Input sanitization functions
export class InputSanitizer {
  /**
   * Sanitize string input
   */
  static sanitizeString(input: string): string {
    if (!input || typeof input !== 'string') return '';
    
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .substring(0, 1000); // Limit length
  }
  
  /**
   * Sanitize email input
   */
  static sanitizeEmail(email: string): string {
    if (!email || typeof email !== 'string') return '';
    
    return email
      .trim()
      .toLowerCase()
      .replace(/[<>]/g, '')
      .substring(0, SECURITY_CONFIG.MAX_LENGTHS.EMAIL);
  }
  
  /**
   * Sanitize phone input
   */
  static sanitizePhone(phone: string): string {
    if (!phone || typeof phone !== 'string') return '';
    
    return phone
      .trim()
      .replace(/[^0-9+\-()\s]/g, '') // Keep only valid phone characters
      .substring(0, SECURITY_CONFIG.MAX_LENGTHS.PHONE);
  }
  
  /**
   * Sanitize name input
   */
  static sanitizeName(name: string): string {
    if (!name || typeof name !== 'string') return '';
    
    return name
      .trim()
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .substring(0, SECURITY_CONFIG.MAX_LENGTHS.NAME);
  }
  
  /**
   * Sanitize message input
   */
  static sanitizeMessage(message: string): string {
    if (!message || typeof message !== 'string') return '';
    
    return message
      .trim()
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .substring(0, SECURITY_CONFIG.MAX_LENGTHS.MESSAGE);
  }
}

// Threat detection functions
export class ThreatDetector {
  /**
   * Detect XSS patterns
   */
  static detectXSS(input: string): boolean {
    if (!input || typeof input !== 'string') return false;
    
    const lowerInput = input.toLowerCase();
    for (const pattern of SECURITY_CONFIG.SUSPICIOUS_PATTERNS.XSS) {
      if (pattern.test(lowerInput)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Detect SQL injection patterns
   */
  static detectSQLInjection(input: string): boolean {
    if (!input || typeof input !== 'string') return false;
    
    const lowerInput = input.toLowerCase();
    for (const pattern of SECURITY_CONFIG.SUSPICIOUS_PATTERNS.SQL_INJECTION) {
      if (pattern.test(lowerInput)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Detect command injection patterns
   */
  static detectCommandInjection(input: string): boolean {
    if (!input || typeof input !== 'string') return false;
    
    const lowerInput = input.toLowerCase();
    for (const pattern of SECURITY_CONFIG.SUSPICIOUS_PATTERNS.COMMAND_INJECTION) {
      if (pattern.test(lowerInput)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Detect path traversal attempts
   */
  static detectPathTraversal(input: string): boolean {
    if (!input || typeof input !== 'string') return false;
    
    const lowerInput = input.toLowerCase();
    for (const pattern of SECURITY_CONFIG.SUSPICIOUS_PATTERNS.PATH_TRAVERSAL) {
      if (pattern.test(lowerInput)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Detect suspicious user agent
   */
  static detectSuspiciousUserAgent(userAgent: string): boolean {
    if (!userAgent || typeof userAgent !== 'string') return false;
    
    const lowerUA = userAgent.toLowerCase();
    for (const blocked of SECURITY_CONFIG.BLOCKED_USER_AGENTS) {
      if (lowerUA.includes(blocked.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Detect blocked referer
   */
  static detectBlockedReferer(referer: string): boolean {
    if (!referer || typeof referer !== 'string') return false;
    
    const lowerReferer = referer.toLowerCase();
    for (const blocked of SECURITY_CONFIG.BLOCKED_REFERERS) {
      if (lowerReferer.includes(blocked.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Comprehensive threat detection
   */
  static detectThreats(input: any): { hasThreats: boolean; threats: string[] } {
    const threats: string[] = [];
    const inputString = JSON.stringify(input);
    
    if (this.detectXSS(inputString)) {
      threats.push('XSS pattern detected');
    }
    
    if (this.detectSQLInjection(inputString)) {
      threats.push('SQL injection pattern detected');
    }
    
    if (this.detectCommandInjection(inputString)) {
      threats.push('Command injection pattern detected');
    }
    
    if (this.detectPathTraversal(inputString)) {
      threats.push('Path traversal attempt detected');
    }
    
    return {
      hasThreats: threats.length > 0,
      threats
    };
  }
}

// Rate limiting utilities
export class RateLimiter {
  private static store = new Map<string, { count: number; resetTime: number }>();
  
  /**
   * Check rate limit for an IP address
   */
  static checkRateLimit(ip: string, type: keyof typeof SECURITY_CONFIG.RATE_LIMITS): { allowed: boolean; remaining: number; resetTime: number } {
    const config = SECURITY_CONFIG.RATE_LIMITS[type];
    const now = Date.now();
    const key = `${ip}:${type}`;
    const record = this.store.get(key);
    
    if (!record || now > record.resetTime) {
      // Reset or create new record
      this.store.set(key, {
        count: 1,
        resetTime: now + config.window
      });
      return { 
        allowed: true, 
        remaining: config.max - 1, 
        resetTime: now + config.window 
      };
    }
    
    if (record.count >= config.max) {
      return { allowed: false, remaining: 0, resetTime: record.resetTime };
    }
    
    record.count++;
    return { 
      allowed: true, 
      remaining: config.max - record.count, 
      resetTime: record.resetTime 
    };
  }
  
  /**
   * Clean up expired rate limit records
   */
  static cleanup(): void {
    const now = Date.now();
    for (const [key, record] of this.store.entries()) {
      if (now > record.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

// Security monitoring
export class SecurityMonitor {
  private static events: Array<{
    timestamp: number;
    ip: string;
    event: string;
    details: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
  }> = [];
  
  /**
   * Log security event
   */
  static logEvent(ip: string, event: string, details: string, severity: 'low' | 'medium' | 'high' | 'critical' = 'low'): void {
    this.events.push({
      timestamp: Date.now(),
      ip,
      event,
      details,
      severity
    });
    
    // Keep only last 1000 events
    if (this.events.length > 1000) {
      this.events.splice(0, this.events.length - 1000);
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[SECURITY:${severity.toUpperCase()}] ${event} - IP: ${ip} - ${details}`);
    }
  }
  
  /**
   * Get security events
   */
  static getEvents(limit: number = 100): typeof this.events {
    return this.events.slice(-limit);
  }
  
  /**
   * Get events by severity
   */
  static getEventsBySeverity(severity: 'low' | 'medium' | 'high' | 'critical'): typeof this.events {
    return this.events.filter(event => event.severity === severity);
  }
  
  /**
   * Get events for specific IP
   */
  static getEventsByIP(ip: string): typeof this.events {
    return this.events.filter(event => event.ip === ip);
  }
}

// Clean up rate limit store periodically
setInterval(() => {
  RateLimiter.cleanup();
}, 60000); // Every minute
