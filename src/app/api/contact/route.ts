import { NextRequest, NextResponse } from 'next/server';

// Environment variables for security
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '12');
const BREVO_NOTIFY_EMAIL = process.env.BREVO_NOTIFY_EMAIL || 'pstm2495@gmail.com';

// Input validation and sanitization
function validateInput(data: any) {
  const errors: string[] = [];
  
  // Required field validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required and must be a valid string');
  }
  
  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }
  
  if (!data.orderType || typeof data.orderType !== 'string' || data.orderType.trim().length === 0) {
    errors.push('Order type is required');
  }
  
  // Length validation to prevent DoS
  if (data.name && data.name.length > 100) errors.push('Name too long (max 100 characters)');
  if (data.email && data.email.length > 254) errors.push('Email too long (max 254 characters)');
  if (data.phone && data.phone.length > 20) errors.push('Phone too long (max 20 characters)');
  if (data.message && data.message.length > 1000) errors.push('Message too long (max 1000 characters)');
  
  // XSS pattern detection
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
    /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi
  ];
  
  const allText = JSON.stringify(data).toLowerCase();
  for (const pattern of xssPatterns) {
    if (pattern.test(allText)) {
      errors.push('Potentially malicious content detected');
      break;
    }
  }
  
  // SQL injection pattern detection
  const sqlPatterns = [
    /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute)\b)/gi,
    /(\b(or|and)\s+\d+\s*=\s*\d+)/gi,
    /(\b(union|select).*from)/gi,
    /(--|\/\*|\*\/)/gi
  ];
  
  for (const pattern of sqlPatterns) {
    if (pattern.test(allText)) {
      errors.push('Potentially malicious SQL content detected');
      break;
    }
  }
  
  return errors;
}

// Sanitize input data
function sanitizeInput(data: any) {
  return {
    name: data.name ? data.name.trim().replace(/[<>]/g, '') : '',
    email: data.email ? data.email.trim().toLowerCase() : '',
    phone: data.phone ? data.phone.trim().replace(/[^0-9+\-()\s]/g, '') : '',
    orderType: data.orderType ? data.orderType.trim().replace(/[<>]/g, '') : '',
    preferredDate: data.preferredDate ? data.preferredDate.trim() : '',
    message: data.message ? data.message.trim().replace(/[<>]/g, '') : '',
    listId: data.listId ? parseInt(data.listId) || BREVO_LIST_ID : BREVO_LIST_ID
  };
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }
    
    // Validate request size
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10000) {
      return NextResponse.json(
        { error: 'Request too large' },
        { status: 413 }
      );
    }
    
    // Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    // Input validation
    const validationErrors = validateInput(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }
    
    // Sanitize input
    const sanitizedData = sanitizeInput(body);
    
    // Prepare contact data for Brevo
    const contactData = {
      email: sanitizedData.email,
      attributes: {
        FIRSTNAME: sanitizedData.name.split(' ')[0] || sanitizedData.name,
        LASTNAME: sanitizedData.name.split(' ').slice(1).join(' ') || '',
        PHONE: sanitizedData.phone || '',
        ORDER_TYPE: sanitizedData.orderType,
        PREFERRED_DATE: sanitizedData.preferredDate || '',
        MESSAGE: sanitizedData.message || '',
      },
      listIds: [sanitizedData.listId],
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

    // Send admin notification email
    const adminEmailData = {
      to: [{ email: BREVO_NOTIFY_EMAIL, name: 'Patisserie St. Martin' }],
      subject: 'Nouvelle demande de commande - Contact Form',
      htmlContent: `
        <h2>Nouvelle demande de commande reçue</h2>
        <p><strong>Nom:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Téléphone:</strong> ${sanitizedData.phone || 'Non fourni'}</p>
        <p><strong>Type de commande:</strong> ${sanitizedData.orderType}</p>
        <p><strong>Date préférée:</strong> ${sanitizedData.preferredDate || 'Non spécifiée'}</p>
        <p><strong>Message:</strong> ${sanitizedData.message || 'Aucun message'}</p>
        <hr>
        <p><em>Envoyé depuis le formulaire de contact du site web</em></p>
      `,
    };

    const adminEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(adminEmailData),
    });

    if (!adminEmailResponse.ok) {
      console.warn('Failed to send admin notification email');
    }

    // Send welcome email to customer (optional)
    const customerEmailData = {
      to: [{ email: sanitizedData.email, name: sanitizedData.name }],
      templateId: 1, // You can create a welcome template in Brevo
      params: {
        name: sanitizedData.name,
        orderType: sanitizedData.orderType,
      },
    };

    const customerEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(customerEmailData),
    });

    if (!customerEmailResponse.ok) {
      console.warn('Failed to send welcome email to customer, but contact was added');
    }

    return NextResponse.json(
      { message: 'Contact added successfully' },
      { status: 200 }
    );

  } catch (error) {
    // Log error without exposing internal details
    console.error('Contact API error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
