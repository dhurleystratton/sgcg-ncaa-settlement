# Email Setup Guide for Form Submissions

## Current Implementation

The contact form is now fully functional with:
- ✅ Submit button added to the form
- ✅ Form validation (required fields)
- ✅ Success/error message display
- ✅ Loading state while submitting
- ✅ API endpoint at `/api/contact`
- ✅ Email recipients configured:
  - ops@sycamoregroveclaims.com
  - dstratton@sycamoregroveclaims.com
  - jodonnell@sycamoregroveclaims.com
  - jowen@sycamoregroveclaims.com

## Email Service Options for Production

To actually send emails, you'll need to integrate one of these services:

### Option 1: SendGrid (Recommended for ease of use)
```javascript
// Install: npm install @sendgrid/mail

import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// In your API route:
const msg = {
  to: EMAIL_RECIPIENTS,
  from: 'noreply@ncaa-settlement.com',
  subject: emailSubject,
  html: emailBody,
};
await sgMail.sendMultiple(msg);
```

### Option 2: AWS SES (Recommended for cost-effectiveness)
```javascript
// Install: npm install @aws-sdk/client-ses

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const client = new SESClient({ region: "us-east-1" });

// Send email command
const command = new SendEmailCommand({
  Destination: { ToAddresses: EMAIL_RECIPIENTS },
  Message: {
    Body: { Html: { Data: emailBody } },
    Subject: { Data: emailSubject },
  },
  Source: "noreply@ncaa-settlement.com",
});
await client.send(command);
```

### Option 3: Resend (Modern, developer-friendly)
```javascript
// Install: npm install resend

import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'NCAA Settlement <noreply@ncaa-settlement.com>',
  to: EMAIL_RECIPIENTS,
  subject: emailSubject,
  html: emailBody,
});
```

## Environment Variables Needed

Add to your `.env.local` file (or Netlify environment variables):

```env
# For SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# For AWS SES
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1

# For Resend
RESEND_API_KEY=your_resend_api_key
```

## Form Data Collected

The form collects and sends:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Years Played Division I** (required)
- **Additional Information** (optional)

## Testing the Form

1. Fill out the form on the website
2. Click "SUBMIT CLAIM INFORMATION"
3. Check the browser console (F12) for the logged submission data
4. In production, emails will be sent to all 4 recipients

## Email Template

The email sent includes:
- Subject: "New NIL Settlement Claim Inquiry from [Name]"
- Formatted HTML with all form data
- Clear sections for contact and athletic information
- Note indicating it came from the NCAA Settlement landing page

## Next Steps

1. Choose an email service provider
2. Sign up and get API credentials
3. Update the `/app/api/contact/route.ts` file with the actual email sending code
4. Add environment variables to Netlify
5. Test email delivery