import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notifyEmail = process.env.NOTIFY_EMAIL || 'ideatorevenue@gmail.com';

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: smtpUser, pass: smtpPass },
    });

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:24px;border-radius:12px;">
        <div style="background:#4f46e5;padding:20px 24px;border-radius:8px 8px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:20px;">📬 New Inquiry — NeuralSoft</h1>
        </div>
        <div style="background:#fff;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;width:140px;">👤 Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">✉️ Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">
                <a href="mailto:${email}" style="color:#4f46e5;">${email}</a>
              </td>
            </tr>
            ${company ? `<tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">🏢 Company</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-weight:600;">${company}</td>
            </tr>` : ''}
            ${phone ? `<tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">📞 Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-weight:600;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding:10px 0;color:#6b7280;font-size:13px;vertical-align:top;">💬 Message</td>
              <td style="padding:10px 0;color:#111827;font-weight:500;white-space:pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:14px 18px;background:#eef2ff;border-left:4px solid #4f46e5;border-radius:4px;color:#3730a3;font-size:13px;">
            Reply directly to <strong>${email}</strong> to follow up with this lead.
          </div>
        </div>
        <p style="text-align:center;color:#9ca3af;font-size:11px;margin-top:16px;">
          Sent automatically by NeuralSoft website
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"NeuralSoft Inquiries" <${smtpUser}>`,
      to: notifyEmail,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` · ${company}` : ''}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
