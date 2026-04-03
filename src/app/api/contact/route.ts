import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      streetAddress,
      city,
      state,
      zip,
      buildingType,
      roofingType,
      pendingSale,
      message,
    } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const addressParts = [streetAddress, city, state, zip].filter(Boolean);
    const fullAddress = addressParts.length > 0 ? addressParts.join(', ') : 'Not provided';

    await resend.emails.send({
      from: 'Quality Roofing Website <onboarding@resend.dev>',
      to: 'info@qualityroofing.com',
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Name</td><td style="padding: 8px 12px;">${name}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Email</td><td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Phone</td><td style="padding: 8px 12px;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Address</td><td style="padding: 8px 12px;">${fullAddress}</td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Building Type</td><td style="padding: 8px 12px;">${buildingType || 'Not specified'}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Roofing Type</td><td style="padding: 8px 12px;">${roofingType || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Pending Sale</td><td style="padding: 8px 12px;">${pendingSale || 'Not specified'}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px 12px;">${message.replace(/\n/g, '<br>')}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
