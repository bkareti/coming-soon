# Email Setup Instructions for Contact Form

The contact form is now ready and needs an email service to send enquiries to **bkareti@gmail.com**.

## Quick Setup Options

### Option 1: Resend (Recommended - Easiest)

1. **Sign up for Resend** (free tier available): https://resend.com
2. **Install the package**:

   ```bash
   npm install resend
   ```

3. **Get your API key** from Resend dashboard

4. **Create `.env.local` file** in the project root:

   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

5. **Update `/app/api/contact/route.ts`** - uncomment lines 69-79:

   ```typescript
   const { Resend } = require("resend");
   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: "onboarding@resend.dev", // Use your verified domain
     to: emailContent.to,
     subject: emailContent.subject,
     html: emailContent.html,
   });
   ```

### Option 2: Gmail with Nodemailer

1. **Install nodemailer**:

   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Create Gmail App Password**:

   - Go to Google Account settings
   - Enable 2-Step Verification
   - Generate an App Password: https://myaccount.google.com/apppasswords

3. **Create `.env.local` file**:

   ```env
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASSWORD=your_app_password_here
   ```

4. **Update `/app/api/contact/route.ts`** - uncomment lines 82-98:

   ```typescript
   const nodemailer = require("nodemailer");

   const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD,
     },
   });

   await transporter.sendMail({
     from: process.env.EMAIL_USER,
     to: emailContent.to,
     subject: emailContent.subject,
     html: emailContent.html,
     text: emailContent.text,
   });
   ```

### Option 3: SendGrid

1. **Sign up for SendGrid**: https://sendgrid.com
2. **Install the package**:

   ```bash
   npm install @sendgrid/mail
   ```

3. **Get API key** from SendGrid dashboard

4. **Create `.env.local` file**:

   ```env
   SENDGRID_API_KEY=SG.your_api_key_here
   ```

5. **Add this code to `/app/api/contact/route.ts`**:

   ```typescript
   const sgMail = require("@sendgrid/mail");
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   await sgMail.send({
     to: emailContent.to,
     from: "verified@yourdomain.com",
     subject: emailContent.subject,
     html: emailContent.html,
     text: emailContent.text,
   });
   ```

## Testing the Form

Currently, the form is configured to log submissions to the console. To test:

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page

3. Fill out the form and submit

4. Check the terminal/console for the logged enquiry details

## Form Features

✅ **Professional Design**: Clean, modern UI with responsive layout  
✅ **Validation**: Client-side and server-side validation  
✅ **Required Fields**: Name, Email, Phone, Message  
✅ **Loading States**: Shows spinner during submission  
✅ **Success/Error Messages**: Clear feedback to users  
✅ **Email Formatting**: Professional HTML email template  
✅ **Contact Information**: Displays email and response time  
✅ **Mobile Responsive**: Works perfectly on all devices

## Security Notes

- Never commit `.env.local` or `.env` files to Git
- Use environment variables for all sensitive credentials
- The `.env.local` file is already in `.gitignore`
- For production, add environment variables in your hosting platform (Vercel, Netlify, etc.)

## Need Help?

If you encounter any issues:

1. Check that your email service API key is correct
2. Ensure `.env.local` is in the project root
3. Restart the development server after adding environment variables
4. Check the console for error messages
