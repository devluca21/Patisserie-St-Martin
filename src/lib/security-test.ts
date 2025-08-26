/**
 * Security Testing Utility for Patisserie St. Martin
 * This file contains test functions to verify security measures
 * IMPORTANT: Only use in development/testing environments
 */

import { ThreatDetector, InputValidator, InputSanitizer } from './security';

// Test payloads for security validation
export const SECURITY_TEST_PAYLOADS = {
  XSS: [
    '<script>alert("XSS")</script>',
    'javascript:alert("XSS")',
    'onload="alert(\'XSS\')"',
    '<iframe src="javascript:alert(\'XSS\')"></iframe>',
    '<object data="javascript:alert(\'XSS\')"></object>',
    '<embed src="javascript:alert(\'XSS\')"></embed>',
    '<link rel="stylesheet" href="javascript:alert(\'XSS\')">',
    '<meta http-equiv="refresh" content="0;url=javascript:alert(\'XSS\')">'
  ],
  
  SQL_INJECTION: [
    "' OR '1'='1",
    "'; DROP TABLE users; --",
    "' UNION SELECT * FROM users --",
    "admin'--",
    "1' OR '1' = '1' --",
    "'; EXEC xp_cmdshell('dir'); --",
    "' OR 1=1#",
    "admin' OR '1'='1' #"
  ],
  
  COMMAND_INJECTION: [
    "; rm -rf /",
    "| cat /etc/passwd",
    "&& whoami",
    "|| id",
    "; system('ls')",
    "eval('alert(1)')",
    "Function('alert(1)')()",
    "setTimeout('alert(1)', 1000)"
  ],
  
  PATH_TRAVERSAL: [
    "../../../etc/passwd",
    "..\\..\\..\\windows\\system32\\drivers\\etc\\hosts",
    "/proc/version",
    "/sys/class/net",
    "/dev/null",
    "....//....//....//etc/passwd",
    "..%2F..%2F..%2Fetc%2Fpasswd"
  ],
  
  SUSPICIOUS_USER_AGENTS: [
    'sqlmap/1.0',
    'nmap/7.80',
    'nikto/2.1.6',
    'Acunetix-Web-Security-Scanner',
    'Burp Suite Professional',
    'OWASP ZAP',
    'w3af.org',
    'Nessus',
    'OpenVAS',
    'Metasploit'
  ]
};

// Test functions
export class SecurityTester {
  /**
   * Test XSS detection
   */
  static testXSSDetection(): { passed: boolean; failed: string[] } {
    const failed: string[] = [];
    
    for (const payload of SECURITY_TEST_PAYLOADS.XSS) {
      if (!ThreatDetector.detectXSS(payload)) {
        failed.push(payload);
      }
    }
    
    return {
      passed: failed.length === 0,
      failed
    };
  }
  
  /**
   * Test SQL injection detection
   */
  static testSQLInjectionDetection(): { passed: boolean; failed: string[] } {
    const failed: string[] = [];
    
    for (const payload of SECURITY_TEST_PAYLOADS.SQL_INJECTION) {
      if (!ThreatDetector.detectSQLInjection(payload)) {
        failed.push(payload);
      }
    }
    
    return {
      passed: failed.length === 0,
      failed
    };
  }
  
  /**
   * Test command injection detection
   */
  static testCommandInjectionDetection(): { passed: boolean; failed: string[] } {
    const failed: string[] = [];
    
    for (const payload of SECURITY_TEST_PAYLOADS.COMMAND_INJECTION) {
      if (!ThreatDetector.detectCommandInjection(payload)) {
        failed.push(payload);
      }
    }
    
    return {
      passed: failed.length === 0,
      failed
    };
  }
  
  /**
   * Test path traversal detection
   */
  static testPathTraversalDetection(): { passed: boolean; failed: string[] } {
    const failed: string[] = [];
    
    for (const payload of SECURITY_TEST_PAYLOADS.PATH_TRAVERSAL) {
      if (!ThreatDetector.detectPathTraversal(payload)) {
        failed.push(payload);
      }
    }
    
    return {
      passed: failed.length === 0,
      failed
    };
  }
  
  /**
   * Test suspicious user agent detection
   */
  static testSuspiciousUserAgentDetection(): { passed: boolean; failed: string[] } {
    const failed: string[] = [];
    
    for (const payload of SECURITY_TEST_PAYLOADS.SUSPICIOUS_USER_AGENTS) {
      if (!ThreatDetector.detectSuspiciousUserAgent(payload)) {
        failed.push(payload);
      }
    }
    
    return {
      passed: failed.length === 0,
      failed
    };
  }
  
  /**
   * Test input validation
   */
  static testInputValidation(): { passed: boolean; failed: string[] } {
    const failed: string[] = [];
    
    // Test email validation
    if (InputValidator.isValidEmail('invalid-email')) {
      failed.push('Email validation failed: invalid-email should be rejected');
    }
    
    if (!InputValidator.isValidEmail('test@example.com')) {
      failed.push('Email validation failed: test@example.com should be accepted');
    }
    
    // Test name validation
    if (InputValidator.isValidName('<script>alert("XSS")</script>')) {
      failed.push('Name validation failed: XSS payload should be rejected');
    }
    
    if (!InputValidator.isValidName('Jean Dupont')) {
      failed.push('Name validation failed: Jean Dupont should be accepted');
    }
    
    // Test phone validation
    if (InputValidator.isValidPhone('abc123')) {
      failed.push('Phone validation failed: abc123 should be rejected');
    }
    
    if (!InputValidator.isValidPhone('+33 1 23 45 67 89')) {
      failed.push('Phone validation failed: +33 1 23 45 67 89 should be accepted');
    }
    
    return {
      passed: failed.length === 0,
      failed
    };
  }
  
  /**
   * Test input sanitization
   */
  static testInputSanitization(): { passed: boolean; failed: string[] } {
    const failed: string[] = [];
    
    // Test XSS sanitization
    const xssInput = '<script>alert("XSS")</script>';
    const sanitizedXSS = InputSanitizer.sanitizeString(xssInput);
    if (sanitizedXSS.includes('<script>') || sanitizedXSS.includes('alert')) {
      failed.push('XSS sanitization failed: script tags not properly removed');
    }
    
    // Test SQL injection sanitization
    const sqlInput = "'; DROP TABLE users; --";
    const sanitizedSQL = InputSanitizer.sanitizeString(sqlInput);
    if (sanitizedSQL.includes('DROP TABLE')) {
      failed.push('SQL injection sanitization failed: dangerous SQL not properly sanitized');
    }
    
    // Test command injection sanitization
    const cmdInput = "; rm -rf /";
    const sanitizedCmd = InputSanitizer.sanitizeString(cmdInput);
    if (sanitizedCmd.includes('rm -rf')) {
      failed.push('Command injection sanitization failed: dangerous commands not properly sanitized');
    }
    
    return {
      passed: failed.length === 0,
      failed
    };
  }
  
  /**
   * Run all security tests
   */
  static runAllTests(): {
    overall: boolean;
    results: {
      xss: { passed: boolean; failed: string[] };
      sqlInjection: { passed: boolean; failed: string[] };
      commandInjection: { passed: boolean; failed: string[] };
      pathTraversal: { passed: boolean; failed: string[] };
      suspiciousUserAgent: { passed: boolean; failed: string[] };
      inputValidation: { passed: boolean; failed: string[] };
      inputSanitization: { passed: boolean; failed: string[] };
    };
  } {
    const results = {
      xss: this.testXSSDetection(),
      sqlInjection: this.testSQLInjectionDetection(),
      commandInjection: this.testCommandInjectionDetection(),
      pathTraversal: this.testPathTraversalDetection(),
      suspiciousUserAgent: this.testSuspiciousUserAgentDetection(),
      inputValidation: this.testInputValidation(),
      inputSanitization: this.testInputSanitization()
    };
    
    const overall = Object.values(results).every(result => result.passed);
    
    return {
      overall,
      results
    };
  }
  
  /**
   * Generate security test report
   */
  static generateReport(): string {
    const testResults = this.runAllTests();
    
    let report = '🔒 Security Test Report\n';
    report += '========================\n\n';
    
    report += `Overall Status: ${testResults.overall ? '✅ PASSED' : '❌ FAILED'}\n\n`;
    
    // XSS Tests
    report += 'XSS Detection:\n';
    report += `  Status: ${testResults.results.xss.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
    if (testResults.results.xss.failed.length > 0) {
      report += `  Failed: ${testResults.results.xss.failed.length} payloads\n`;
    }
    report += '\n';
    
    // SQL Injection Tests
    report += 'SQL Injection Detection:\n';
    report += `  Status: ${testResults.results.sqlInjection.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
    if (testResults.results.sqlInjection.failed.length > 0) {
      report += `  Failed: ${testResults.results.sqlInjection.failed.length} payloads\n`;
    }
    report += '\n';
    
    // Command Injection Tests
    report += 'Command Injection Detection:\n';
    report += `  Status: ${testResults.results.commandInjection.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
    if (testResults.results.commandInjection.failed.length > 0) {
      report += `  Failed: ${testResults.results.commandInjection.failed.length} payloads\n`;
    }
    report += '\n';
    
    // Path Traversal Tests
    report += 'Path Traversal Detection:\n';
    report += `  Status: ${testResults.results.pathTraversal.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
    if (testResults.results.pathTraversal.failed.length > 0) {
      report += `  Failed: ${testResults.results.pathTraversal.failed.length} payloads\n`;
    }
    report += '\n';
    
    // Suspicious User Agent Tests
    report += 'Suspicious User Agent Detection:\n';
    report += `  Status: ${testResults.results.suspiciousUserAgent.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
    if (testResults.results.suspiciousUserAgent.failed.length > 0) {
      report += `  Failed: ${testResults.results.suspiciousUserAgent.failed.length} user agents\n`;
    }
    report += '\n';
    
    // Input Validation Tests
    report += 'Input Validation:\n';
    report += `  Status: ${testResults.results.inputValidation.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
    if (testResults.results.inputValidation.failed.length > 0) {
      report += `  Failed: ${testResults.results.inputValidation.failed.length} validations\n`;
    }
    report += '\n';
    
    // Input Sanitization Tests
    report += 'Input Sanitization:\n';
    report += `  Status: ${testResults.results.inputSanitization.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
    if (testResults.results.inputSanitization.failed.length > 0) {
      report += `  Failed: ${testResults.results.inputSanitization.failed.length} sanitizations\n`;
    }
    report += '\n';
    
    report += 'Test completed at: ' + new Date().toISOString() + '\n';
    
    return report;
  }
}

// Export test payloads for external testing
export { SECURITY_TEST_PAYLOADS as TestPayloads };
