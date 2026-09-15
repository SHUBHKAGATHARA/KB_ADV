import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, legalMatter, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const referenceKey = `KAG-${Date.now().toString().slice(-6)}`;

    // If SMTP credentials exist, dispatch emails
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const emailHtml = `
        <div style="font-family: Georgia, serif; max-width: 650px; margin: 0 auto; padding: 24px; background: #e2dedb; color: #1d1d1b;">
          <div style="background: #1d1d1b; color: #e2dedb; padding: 24px; border-bottom: 3px solid #c03f13;">
            <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 1px;">NEW LEGAL CONSULTATION INQUIRY</h1>
            <p style="margin: 6px 0 0 0; font-size: 12px; color: #cdc6be; font-family: monospace;">REFERENCE: ${referenceKey}</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #1d1d1b; margin-top: 16px;">
            <p><strong>Client Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telephone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Legal Matter:</strong> ${legalMatter}</p>
            <p><strong>Subject:</strong> ${subject || 'General Consultation'}</p>
            <hr style="border: 0; border-top: 1px solid #e2dedb; margin: 16px 0;" />
            <p><strong>Brief Summary:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Legal Website" <${process.env.SMTP_USER}>`,
        to: 'kbk.advocatedhrol@gmail.com, jbk1630@gmail.com',
        subject: `[Consultation ${referenceKey}] ${legalMatter} - ${name}`,
        html: emailHtml,
        replyTo: email,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation request received successfully.',
      referenceKey,
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while transmitting your request.' },
      { status: 500 }
    );
  }
}
