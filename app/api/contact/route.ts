import { NextResponse } from 'next/server';

// Email configuration
const EMAIL_RECIPIENTS = [
  'dstratton@sycamoregroveclaims.com',
  'jodonnell@sycamoregroveclaims.com',
  'jowen@sycamoregroveclaims.com'
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Extract form data
    const { name, email, phone, sport, yearFrom, yearTo, message } = body;
    
    // Basic validation
    if (!name || !email || !yearFrom || !yearTo) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Email content
    const emailSubject = `New NIL Settlement Claim Inquiry from ${name}`;
    const emailBody = `
      <h2>New NIL Settlement Claim Inquiry</h2>
      
      <p><strong>Contact Information:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
      </ul>
      
      <p><strong>Athletic Information:</strong></p>
      <ul>
        <li><strong>Sport:</strong> ${sport || 'Not provided'}</li>
        <li><strong>Years Played Division I:</strong> ${yearFrom} - ${yearTo}</li>
      </ul>
      
      <p><strong>Additional Information:</strong></p>
      <p>${message || 'None provided'}</p>
      
      <hr>
      <p><em>This inquiry was submitted via the NCAA Settlement landing page.</em></p>
    `;
    
    // TODO: Implement actual email sending
    // For now, we'll return success and log the data
    // In production, you would use a service like SendGrid, AWS SES, or Nodemailer
    
    console.log('Form submission received:', {
      recipients: EMAIL_RECIPIENTS,
      subject: emailSubject,
      body: emailBody,
      formData: body
    });
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your submission. We will contact you within 24 hours.'
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}