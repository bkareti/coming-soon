import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = {
      to: "bkareti@gmail.com",
      subject: `New Enquiry from ${name} - Alpha5Academy`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background: linear-gradient(135deg, #1a4d6d 0%, #2b6b93 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 10px 10px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #1a4d6d;
                margin-bottom: 5px;
              }
              .value {
                padding: 10px;
                background-color: #f5f5f5;
                border-left: 3px solid #f59e0b;
                border-radius: 4px;
              }
              .message-box {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
                border-left: 3px solid #f59e0b;
                white-space: pre-wrap;
              }
              .footer {
                margin-top: 20px;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Enquiry Received</h1>
                <p>Alpha5Academy Contact Form</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email Address:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Phone Number:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message-box">${message}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the Alpha5Academy contact form</p>
                  <p>Received on ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Enquiry from Alpha5Academy Contact Form

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
Received on ${new Date().toLocaleString()}
      `,
    };

    // Send email using nodemailer
    try {
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

      console.log("=== Email Sent Successfully ===");
      console.log(`To: ${emailContent.to}`);
      console.log(`From: ${name} (${email})`);
      console.log(`Phone: ${phone}`);
      console.log("================================");

      return NextResponse.json(
        {
          success: true,
          message: "Your message has been sent successfully!",
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      
      // Log the details even if email fails
      console.log("=== Contact Form Submission (Email Failed) ===");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
      console.log(`Message: ${message}`);
      console.log("==============================================");

      return NextResponse.json(
        {
          error:
            "Failed to send email. Please try again or contact us directly at bkareti@gmail.com",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
