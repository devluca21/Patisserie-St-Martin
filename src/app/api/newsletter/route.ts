import { NextRequest, NextResponse } from 'next/server';
import { InputValidator, InputSanitizer, ThreatDetector, RateLimiter, SecurityMonitor } from '@/lib/security';

// Environment variables for security
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_NEWSLETTER_LIST_ID = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '12');

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  
  try {
    // Check if API key is configured
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }
    
    // Rate limiting check
    const rateLimit = RateLimiter.checkRateLimit(ip, 'NEWSLETTER');
    if (!rateLimit.allowed) {
      SecurityMonitor.logEvent(ip, 'NEWSLETTER_RATE_LIMIT_EXCEEDED', 'Newsletter subscription rate limit exceeded', 'medium');
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
            'Retry-After': '60'
          }
        }
      );
    }
    
    // Validate request size
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 5000) { // 5KB limit for newsletter
      SecurityMonitor.logEvent(ip, 'NEWSLETTER_REQUEST_TOO_LARGE', `Request size: ${contentLength} bytes`, 'low');
      return NextResponse.json(
        { error: 'Request too large' },
        { status: 413 }
      );
    }
    
    // Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      SecurityMonitor.logEvent(ip, 'NEWSLETTER_INVALID_CONTENT_TYPE', `Content-Type: ${contentType}`, 'low');
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    // Input validation
    const validationErrors: string[] = [];
    
    if (!body.email || !InputValidator.isValidEmail(body.email)) {
      validationErrors.push('Valid email is required');
    }
    
    if (body.name && !InputValidator.isValidName(body.name)) {
      validationErrors.push('Name must be valid (max 100 characters, letters only)');
    }
    
    if (validationErrors.length > 0) {
      SecurityMonitor.logEvent(ip, 'NEWSLETTER_VALIDATION_FAILED', `Validation errors: ${validationErrors.join(', ')}`, 'low');
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }
    
    // Threat detection
    const threatCheck = ThreatDetector.detectThreats(body);
    if (threatCheck.hasThreats) {
      SecurityMonitor.logEvent(ip, 'NEWSLETTER_THREAT_DETECTED', `Threats: ${threatCheck.threats.join(', ')}`, 'high');
      return NextResponse.json(
        { error: 'Invalid input detected' },
        { status: 400 }
      );
    }
    
    // Sanitize input
    const sanitizedData = {
      email: InputSanitizer.sanitizeEmail(body.email),
      name: body.name ? InputSanitizer.sanitizeName(body.name) : '',
      preferences: body.preferences ? InputSanitizer.sanitizeString(body.preferences) : ''
    };
    
    // Prepare contact data for Brevo
    const contactData = {
      email: sanitizedData.email,
      attributes: {
        FIRSTNAME: sanitizedData.name.split(' ')[0] || '',
        LASTNAME: sanitizedData.name.split(' ').slice(1).join(' ') || '',
        NEWSLETTER_PREFERENCES: sanitizedData.preferences || '',
        SUBSCRIPTION_DATE: new Date().toISOString().split('T')[0],
        SOURCE: 'Website Newsletter Form'
      },
      listIds: [BREVO_NEWSLETTER_LIST_ID],
      updateEnabled: true,
    };

    // Add contact to Brevo with HTTPS-only call
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(contactData),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Brevo API error:', { 
        status: brevoResponse.status,
        error: errorData.message || 'Unknown error'
      });
      throw new Error('Failed to add contact to Brevo');
    }

    // Send welcome email to subscriber
    const welcomeEmailData = {
      to: [{ email: sanitizedData.email, name: sanitizedData.name || 'Subscriber' }],
      templateId: 2, // Newsletter welcome template ID
      params: {
        name: sanitizedData.name || 'there',
        subscriptionDate: new Date().toLocaleDateString('fr-FR'),
        preferences: sanitizedData.preferences || 'General'
      },
    };

    const welcomeEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(welcomeEmailData),
    });

    if (!welcomeEmailResponse.ok) {
      console.warn('Failed to send welcome email to newsletter subscriber');
    }

    // Log successful subscription
    SecurityMonitor.logEvent(ip, 'NEWSLETTER_SUBSCRIPTION_SUCCESS', `Email: ${sanitizedData.email}`, 'low');
    
    const duration = Date.now() - startTime;
    console.log(`[NEWSLETTER] Subscription successful - IP: ${ip} - Duration: ${duration}ms`);

    return NextResponse.json(
      { 
        message: 'Newsletter subscription successful',
        email: sanitizedData.email
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString()
        }
      }
    );

  } catch (error) {
    // Log error without exposing internal details
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Newsletter API error:', errorMessage);
    
    SecurityMonitor.logEvent(ip, 'NEWSLETTER_API_ERROR', `Error: ${errorMessage}`, 'medium');
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET method for health check
export async function GET() {
  return NextResponse.json(
    { status: 'Newsletter API is running' },
    { status: 200 }
  );
}
