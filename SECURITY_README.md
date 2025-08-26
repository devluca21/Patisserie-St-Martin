# 🔒 Security Stack Implementation Guide

## Overview

This document provides a comprehensive guide to the security stack implemented in the Patisserie St. Martin project. The security measures include input validation, threat detection, rate limiting, security headers, and comprehensive monitoring.

## 🚀 Quick Start

### 1. Environment Setup

Copy the environment template and configure your secrets:

```bash
cp env.template .env
```

Fill in your environment variables:

```bash
# Required
BREVO_API_KEY=your_actual_api_key_here
BREVO_LIST_ID=12
BREVO_NEWSLETTER_LIST_ID=12
BREVO_NOTIFY_EMAIL=your_email@domain.com

# Optional (defaults are secure)
SECURITY_API_TOKEN=your_security_token
RATE_LIMIT_CONTACT_MAX=10
RATE_LIMIT_NEWSLETTER_MAX=5
```

### 2. Verify Installation

The security stack is automatically active once the environment variables are configured. You can verify it's working by:

- Checking that the middleware is running (requests should include security headers)
- Testing the API endpoints with invalid input (should return 400 errors)
- Monitoring the console for security events

## 🛡️ Security Features

### Input Validation & Sanitization

All user inputs are automatically validated and sanitized:

```typescript
import { InputValidator, InputSanitizer } from '@/lib/security';

// Validate email
if (!InputValidator.isValidEmail(email)) {
  return { error: 'Invalid email format' };
}

// Sanitize input
const sanitizedName = InputSanitizer.sanitizeName(userInput);
```

### Threat Detection

The system automatically detects and blocks:

- **XSS Attacks**: Script injection attempts
- **SQL Injection**: Database attack patterns
- **Command Injection**: System command attempts
- **Path Traversal**: Directory traversal attacks
- **Suspicious User Agents**: Penetration testing tools

### Rate Limiting

Configurable rate limiting per endpoint:

- **Contact Form**: 10 requests/minute per IP
- **Newsletter**: 5 requests/minute per IP
- **General**: 100 requests/minute per IP

### Security Headers

Comprehensive security headers are automatically applied:

- `X-Frame-Options: DENY` - Prevents clickjacking
- `Content-Security-Policy` - XSS and injection protection
- `Strict-Transport-Security` - Enforces HTTPS
- `Permissions-Policy` - Restricts browser features

## 🔧 Configuration

### Rate Limiting

Customize rate limits in `src/lib/security.ts`:

```typescript
export const SECURITY_CONFIG = {
  RATE_LIMITS: {
    CONTACT_FORM: { max: 10, window: 60 * 1000 }, // 10 per minute
    NEWSLETTER: { max: 5, window: 60 * 1000 },    // 5 per minute
    GENERAL: { max: 100, window: 60 * 1000 }      // 100 per minute
  }
};
```

### Threat Detection

Add new threat patterns:

```typescript
SUSPICIOUS_PATTERNS: {
  XSS: [
    // Add new XSS patterns here
    /new-xss-pattern/gi
  ],
  SQL_INJECTION: [
    // Add new SQL injection patterns here
    /new-sql-pattern/gi
  ]
}
```

### Blocked User Agents

Update the list of blocked tools:

```typescript
BLOCKED_USER_AGENTS: [
  'sqlmap', 'nmap', 'nikto',
  // Add new tools here
  'new-scanner-tool'
]
```

## 📊 Monitoring & Logging

### Security Events

All security events are automatically logged:

```typescript
import { SecurityMonitor } from '@/lib/security';

// Log security events
SecurityMonitor.logEvent(ip, 'THREAT_DETECTED', 'XSS attempt blocked', 'high');
```

### Event Types

- **Low**: Normal operations, rate limit warnings
- **Medium**: Validation failures, suspicious activity
- **High**: Threat detection, blocked attacks
- **Critical**: System compromise attempts

### Accessing Logs

```typescript
// Get recent events
const events = SecurityMonitor.getEvents(100);

// Get events by severity
const highEvents = SecurityMonitor.getEventsBySeverity('high');

// Get events for specific IP
const ipEvents = SecurityMonitor.getEventsByIP('192.168.1.1');
```

## 🧪 Testing

### Security Testing Utility

Use the built-in security testing utility:

```typescript
import { SecurityTester } from '@/lib/security-test';

// Run all tests
const results = SecurityTester.runAllTests();

// Generate report
const report = SecurityTester.generateReport();
console.log(report);
```

### Manual Testing

Test the security measures manually:

```bash
# Test XSS protection
curl -X POST /api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"<script>alert(\"XSS\")</script>","email":"test@example.com"}'

# Test rate limiting
for i in {1..15}; do
  curl -X POST /api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com"}'
done

# Test suspicious user agent
curl -H "User-Agent: sqlmap/1.0" /api/contact
```

## 🚨 Incident Response

### Automatic Response

The system automatically:

1. **Detects** threats using pattern matching
2. **Blocks** malicious requests immediately
3. **Logs** all security events with timestamps
4. **Notifies** through console logging (development)

### Manual Response

For security incidents:

1. **Review logs**: Check `SecurityMonitor.getEvents()`
2. **Identify source**: Note IP addresses and patterns
3. **Update patterns**: Add new threat signatures
4. **Monitor**: Watch for repeated attempts
5. **Report**: Document incidents for analysis

## 🔄 Maintenance

### Regular Tasks

- **Weekly**: Review security logs and blocked IPs
- **Monthly**: Update threat patterns and blocked tools
- **Quarterly**: Review rate limit effectiveness
- **Annually**: Conduct security audit and penetration testing

### Updates

Keep the security stack updated:

```bash
# Update dependencies
npm update

# Review security advisories
npm audit

# Test security measures
npm run test:security
```

## 📚 API Reference

### Security Classes

#### `InputValidator`
- `isValidEmail(email: string): boolean`
- `isValidName(name: string): boolean`
- `isValidPhone(phone: string): boolean`
- `isValidMessage(message: string): boolean`

#### `InputSanitizer`
- `sanitizeString(input: string): string`
- `sanitizeEmail(email: string): string`
- `sanitizeName(name: string): string`
- `sanitizeMessage(message: string): string`

#### `ThreatDetector`
- `detectXSS(input: string): boolean`
- `detectSQLInjection(input: string): boolean`
- `detectCommandInjection(input: string): boolean`
- `detectThreats(input: any): { hasThreats: boolean; threats: string[] }`

#### `RateLimiter`
- `checkRateLimit(ip: string, type: string): { allowed: boolean; remaining: number; resetTime: number }`

#### `SecurityMonitor`
- `logEvent(ip: string, event: string, details: string, severity: string): void`
- `getEvents(limit?: number): Array<SecurityEvent>`
- `getEventsBySeverity(severity: string): Array<SecurityEvent>`

## 🆘 Troubleshooting

### Common Issues

#### Rate Limiting Not Working
- Check that middleware is properly configured
- Verify IP address detection in your deployment environment
- Check console for middleware errors

#### Security Headers Missing
- Verify Next.js configuration includes `async headers()`
- Check that middleware is running
- Ensure no other middleware is overriding headers

#### Threat Detection False Positives
- Review threat patterns in `SECURITY_CONFIG`
- Adjust pattern sensitivity
- Add legitimate patterns to whitelist

### Debug Mode

Enable detailed logging:

```typescript
// In development
if (process.env.NODE_ENV === 'development') {
  console.log(`[SECURITY] ${event} - IP: ${ip} - ${details}`);
}
```

## 🔐 Best Practices

### Development

1. **Never hardcode secrets** - Always use environment variables
2. **Validate all inputs** - Use the provided validation functions
3. **Sanitize data** - Apply sanitization before processing
4. **Log security events** - Monitor for suspicious activity
5. **Test security measures** - Use the testing utility regularly

### Production

1. **Use HTTPS only** - Enforce secure connections
2. **Monitor logs** - Set up alerting for security events
3. **Regular updates** - Keep dependencies patched
4. **Backup security** - Document security configurations
5. **Incident response** - Have a plan for security incidents

## 📞 Support

For security issues or questions:

1. **Check logs** - Review security event logs first
2. **Review documentation** - Check this guide and `SECURITY.md`
3. **Test functionality** - Use the security testing utility
4. **Contact team** - Reach out for complex issues

---

**🔒 Remember: Security is an ongoing process, not a one-time setup.**
