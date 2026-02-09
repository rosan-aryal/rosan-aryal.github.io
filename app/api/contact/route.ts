import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: "roshanaryal.dev@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: monospace; padding: 20px; background: #0d0d0d; color: #fff;">
          <h2 style="color: #ff4d00; border-bottom: 2px solid #333; padding-bottom: 10px;">
            NEW TRANSMISSION RECEIVED
          </h2>
          <p><strong style="color: #ff4d00;">FROM:</strong> ${safeName}</p>
          <p><strong style="color: #ff4d00;">EMAIL:</strong> ${safeEmail}</p>
          <p><strong style="color: #ff4d00;">SUBJECT:</strong> ${safeSubject}</p>
          <div style="margin-top: 20px; padding: 15px; border: 1px solid #333; background: #1a1a1a;">
            <p style="color: #999;">MESSAGE:</p>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message transmitted successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Transmission failed. Try again later." },
      { status: 500 }
    );
  }
}
