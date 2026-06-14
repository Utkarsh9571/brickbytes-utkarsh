import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, projectType, message } = body;

    // Validate required fields
    if (!name || !company || !email || !projectType) {
      return NextResponse.json(
        { error: "Missing required fields (name, company, email, project type)." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const portStr = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL;

    // Validate SMTP environment variables
    if (!host || !portStr || !user || !pass || !toEmail) {
      console.error("Missing SMTP environment variables in route.ts:", {
        SMTP_HOST: !!host,
        SMTP_PORT: !!portStr,
        SMTP_USER: !!user,
        SMTP_PASS: !!pass,
        TO_EMAIL: !!toEmail,
      });
      return NextResponse.json(
        { error: "Email delivery service is currently misconfigured." },
        { status: 500 }
      );
    }

    const port = parseInt(portStr, 10);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // Use SSL/TLS for port 465
      auth: {
        user,
        pass,
      },
      tls: {
        // Essential to prevent potential self-signed/host mismatch certificate warnings in some environments
        rejectUnauthorized: true,
      },
    });

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" }) + " UTC";

    // Build Email #1: Internal Lead Notification
    const internalEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #ff5e13; margin-bottom: 24px; font-family: serif; font-weight: normal; font-size: 22px;">New BrickBytes Demo Request</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; width: 140px; text-transform: uppercase; font-size: 11px; color: #71717a;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #1c1a17;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; text-transform: uppercase; font-size: 11px; color: #71717a;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #1c1a17;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; text-transform: uppercase; font-size: 11px; color: #71717a;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #1c1a17;"><a href="mailto:${email}" style="color: #ff5e13; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; text-transform: uppercase; font-size: 11px; color: #71717a;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #1c1a17;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; text-transform: uppercase; font-size: 11px; color: #71717a;">Project Type</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #1c1a17;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; text-transform: uppercase; font-size: 11px; color: #71717a; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #1c1a17; white-space: pre-line; line-height: 1.5;">${message || "No message provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; text-transform: uppercase; font-size: 11px; color: #71717a;">Submitted At</td>
            <td style="padding: 10px 0; color: #a1a1aa; font-size: 12px;">${timestamp}</td>
          </tr>
        </table>
      </div>
    `;

    // Build Email #2: Customer Confirmation
    const customerEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #faf9f5;">
        <div style="text-align: left; margin-bottom: 30px;">
          <span style="font-size: 20px; font-weight: bold; color: #1c1a17; font-family: serif;">Brick<span style="color: #ff5e13;">Bytes</span></span>
        </div>
        <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #f4f4f5; box-shadow: 0 4px 12px rgba(28,26,23,0.02);">
          <h2 style="color: #1c1a17; font-family: serif; font-weight: normal; margin-top: 0; margin-bottom: 16px; font-size: 22px;">Thank You For Contacting BrickBytes</h2>
          <p style="color: #71717a; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            Hi ${name},
          </p>
          <p style="color: #71717a; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            We have successfully received your inquiry and project details. Our team is excited to learn more about your development.
          </p>
          <p style="color: #71717a; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
            A BrickBytes spatial solutions expert will review your layout specifications and reach out to you shortly (typically within one business day) to set up a customized interactive demo walkthrough.
          </p>
          <div style="border-top: 1px solid #f4f4f5; padding-top: 20px;">
            <p style="color: #a1a1aa; font-size: 11px; margin: 0;">
              Best regards,<br />
              <strong>The BrickBytes Team</strong><br />
              <a href="mailto:business@brickbytes.in" style="color: #ff5e13; text-decoration: none;">business@brickbytes.in</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Configure common sender name with SMTP authenticated address to comply with Hostinger SPF/DMARC policies
    const fromSender = `"BrickBytes Support" <${user}>`;

    // Concurrently deliver both emails using Nodemailer
    await Promise.all([
      transporter.sendMail({
        from: fromSender,
        to: toEmail,
        replyTo: email, // Direct reply back to the contact submitter
        subject: "New BrickBytes Demo Request",
        html: internalEmailHtml,
      }),
      transporter.sendMail({
        from: fromSender,
        to: email,
        subject: "Thank You For Contacting BrickBytes",
        html: customerEmailHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SMTP API route error caught:", error);
    return NextResponse.json(
      { 
        error: "An error occurred while dispatching the emails.",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
