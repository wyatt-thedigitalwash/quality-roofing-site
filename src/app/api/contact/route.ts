import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const LEAD_RECIPIENTS = ['Lauren.Willmar@quality-roofing.com', 'Miriah.Akers@quality-roofing.com'];
// The sending domain must be verified in Resend, or every send is rejected.
const FROM_ADDRESS =
  process.env.CONTACT_FROM_EMAIL ?? 'Quality Roofing Website <website@quality-roofing.com>';

// Field limits. Anything longer is rejected, not trimmed.
const LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  streetAddress: 200,
  city: 100,
  state: 50,
  zip: 20,
  buildingType: 50,
  roofingType: 50,
  pendingSale: 50,
  message: 2000,
} as const;

// Basic rate limit: 3 submissions per IP per 5 minutes. This lives in server memory, so each
// server instance keeps its own count and it resets when the instance restarts.
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 5 * 60 * 1000;
const recentByIp = new Map<string, number[]>();

function isRateLimited(ip: string, now: number) {
  const recent = (recentByIp.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    recentByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentByIp.set(ip, recent);
  if (recentByIp.size > 5000) {
    for (const [key, times] of recentByIp) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) recentByIp.delete(key);
    }
  }
  return false;
}

function clientIp(request: Request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const row = (label: string, valueHtml: string, shaded: boolean) =>
  `<tr${shaded ? ' style="background: #f9f9f9;"' : ''}><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">${label}</td><td style="padding: 8px 12px;">${valueHtml}</td></tr>`;

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request), Date.now())) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes or call us at (813) 620-4797.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not an object');
    body = parsed;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  try {

    // Honeypot: real visitors never see this field. Report success so bots move on.
    if (clean(body.company_website, 200)) {
      return NextResponse.json({ success: true });
    }

    const tooLong = (Object.keys(LIMITS) as (keyof typeof LIMITS)[]).find(
      (key) => typeof body[key] === 'string' && (body[key] as string).trim().length > LIMITS[key]
    );
    if (tooLong) {
      return NextResponse.json(
        { error: 'One of the fields is too long. Please shorten it and try again.' },
        { status: 400 }
      );
    }

    const name = clean(body.name, LIMITS.name);
    const email = clean(body.email, LIMITS.email);
    const phone = clean(body.phone, LIMITS.phone);
    const message = clean(body.message, LIMITS.message);

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (phone.replace(/\D/g, '').length < 7) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number.' },
        { status: 400 }
      );
    }

    const address = [
      clean(body.streetAddress, LIMITS.streetAddress),
      clean(body.city, LIMITS.city),
      clean(body.state, LIMITS.state),
      clean(body.zip, LIMITS.zip),
    ].filter(Boolean);
    const optional = (value: unknown) => escapeHtml(clean(value, 50) || 'Not specified');

    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);

    const resend = new Resend(process.env.RESEND_API_KEY);
    // The SDK reports delivery failures in its response instead of throwing.
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: LEAD_RECIPIENTS,
      replyTo: email,
      subject: `New Contact Request from ${name.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <h2>New Contact Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          ${row('Name', escapeHtml(name), false)}
          ${row('Email', `<a href="mailto:${safeEmail}">${safeEmail}</a>`, true)}
          ${row('Phone', `<a href="tel:${phone.replace(/[^\d+]/g, '')}">${safePhone}</a>`, false)}
          ${row('Address', address.length > 0 ? escapeHtml(address.join(', ')) : 'Not provided', true)}
          ${row('Building Type', optional(body.buildingType), false)}
          ${row('Roofing Type', optional(body.roofingType), true)}
          ${row('Pending Sale', optional(body.pendingSale), false)}
          ${row('Message', escapeHtml(message).replace(/\n/g, '<br>'), true)}
        </table>
      `,
    });

    if (error) {
      console.error('Contact form email failed:', error.name, error.message);
      return NextResponse.json(
        { error: 'We could not send your request. Please call us at (813) 620-4797.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form request failed:', err instanceof Error ? err.message : 'unknown');
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us at (813) 620-4797.' },
      { status: 500 }
    );
  }
}
