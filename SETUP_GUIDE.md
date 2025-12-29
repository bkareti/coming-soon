# ✅ Contact Form - Ready to Use!

The contact form is now **fully configured** with nodemailer and will send enquiries to **bkareti@gmail.com**.

## 🚀 Quick Setup (3 Steps)

### Step 1: Create Gmail App Password

1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and your device
3. Click "Generate" and copy the 16-character password

### Step 2: Add Environment Variables

Create a file named `.env.local` in the `alpha-five-academy-app` folder:

```env
EMAIL_USER=bkareti@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

Replace `abcdefghijklmnop` with your actual App Password (no spaces).

### Step 3: Restart the Server

```bash
npm run dev
```

## ✅ That's It!

The contact form will now send emails to **bkareti@gmail.com** with:

- ✉️ Professional HTML formatting
- 📋 All form details (Name, Email, Phone, Message)
- ⏰ Submission timestamp
- 📱 Mobile-responsive email design

## 🧪 Test the Form

1. Visit http://localhost:3000/contact
2. Fill out the form
3. Click "Send Message"
4. Check bkareti@gmail.com inbox

## ⚠️ Important Notes

- Never commit `.env.local` to Git (already in .gitignore)
- Use Gmail App Password, not your regular password
- Requires 2-Step Verification enabled on Google Account

## 🔧 Troubleshooting

**"Failed to send email" error?**

- Check that EMAIL_USER and EMAIL_PASSWORD are correct in `.env.local`
- Verify 2-Step Verification is enabled
- Make sure you're using an App Password, not your regular password
- Restart the dev server after adding environment variables

**Still not working?**

- Check the terminal for detailed error messages
- Form submissions are logged to console even if email fails
- Contact details will still be captured in the logs
