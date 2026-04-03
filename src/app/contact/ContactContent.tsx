'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, FileText, Wrench, Shield, ClipboardList } from 'lucide-react';
import { useScrollReveal } from '@/lib/animations';

const anim = (visible: boolean) =>
  `transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`;

/* ──────────────────────────────────────────────
   SECTION 1 -- PAGE HERO
   ────────────────────────────────────────────── */
function PageHero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className="relative flex items-center min-h-[55vh] bg-[#252525] px-4 sm:px-6 lg:px-8 pt-[96px] pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#252525]/95 via-[#252525]/85 to-[#252525]/70 md:bg-gradient-to-r md:from-[#252525] md:via-[#252525]/95 md:to-[#252525]/80" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1
            className={`text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
          >
            Let&apos;s Get Started
          </h1>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#B6B5B3] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
          >
            Whether you need an estimate, have a question about a current
            project, or need support, our team is here to help.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 2 -- CONTACT FORM + INFO
   ────────────────────────────────────────────── */
const inputBase =
  'w-full rounded border border-[#E6E6E6] bg-white px-4 py-3 text-sm text-[#252525] placeholder:text-[#B6B5B3] font-[family-name:var(--font-dm-sans)] focus:outline-none focus:ring-2 focus:ring-[#154D29]/30 focus:border-[#154D29] transition-colors duration-200';

const labelBase =
  'block text-sm font-semibold text-[#252525] mb-1.5 font-[family-name:var(--font-dm-sans)]';

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      streetAddress: (form.elements.namedItem('streetAddress') as HTMLInputElement).value,
      city: (form.elements.namedItem('city') as HTMLInputElement).value,
      state: (form.elements.namedItem('state') as HTMLInputElement).value,
      zip: (form.elements.namedItem('zip') as HTMLInputElement).value,
      buildingType: (form.elements.namedItem('buildingType') as HTMLSelectElement).value,
      roofingType: (form.elements.namedItem('roofingType') as HTMLSelectElement).value,
      pendingSale: (form.elements.namedItem('pendingSale') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Failed to send message.');
      }

      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-[#154D29]/20 bg-[#154D29]/5 p-8 text-center">
        <h3 className="text-2xl font-normal text-[#154D29] font-[family-name:var(--font-dm-serif)]">
          Thank You
        </h3>
        <p className="mt-3 text-base text-[#252525]/70 font-[family-name:var(--font-dm-sans)]">
          Your request has been submitted. Our team will be in touch within one
          business day. If you need immediate assistance, call us at{' '}
          <a href="tel:8136204797" className="font-semibold text-[#154D29]">
            (813) 620-4797
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelBase}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Full name"
            className={inputBase}
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelBase}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@email.com"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelBase}>
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(555) 555-5555"
              className={inputBase}
            />
          </div>
        </div>

        {/* Street Address */}
        <div>
          <label htmlFor="streetAddress" className={labelBase}>
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            placeholder="123 Main St"
            className={inputBase}
          />
        </div>

        {/* City, State, Zip */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="city" className={labelBase}>
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Tampa"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="state" className={labelBase}>
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              defaultValue="FL"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="zip" className={labelBase}>
              Zip
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="33601"
              className={inputBase}
            />
          </div>
        </div>

        {/* Building Type + Roofing Type */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="buildingType" className={labelBase}>
              Building Type
            </label>
            <select id="buildingType" name="buildingType" className={inputBase}>
              <option value="">Select...</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Multi-Housing">Multi-Housing</option>
            </select>
          </div>
          <div>
            <label htmlFor="roofingType" className={labelBase}>
              Roofing Type
            </label>
            <select id="roofingType" name="roofingType" className={inputBase}>
              <option value="">Select...</option>
              <option value="Shingle">Shingle</option>
              <option value="Metal">Metal</option>
              <option value="Flat / Single Ply">Flat / Single Ply</option>
              <option value="Tile">Tile</option>
              <option value="Built Up">Built Up</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Pending Sale */}
        <div>
          <label htmlFor="pendingSale" className={labelBase}>
            Pending Sale / Closing?
          </label>
          <select id="pendingSale" name="pendingSale" className={inputBase}>
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelBase}>
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project or question..."
            className={inputBase + ' resize-none'}
          />
        </div>

        {/* Error */}
        {status === 'error' && (
          <p className="text-sm text-red-600 font-[family-name:var(--font-dm-sans)]">
            {errorMsg}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded bg-[#154D29] px-6 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-[#154D29]/85 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none font-[family-name:var(--font-dm-sans)]"
        >
          {status === 'sending' ? 'Sending...' : 'Submit Request'}
        </button>
      </div>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="border-l-2 border-[#154D29] pl-6 space-y-8">
      {/* Contact details */}
      <div className="space-y-4">
        <h3 className="text-lg font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
          Contact Information
        </h3>
        <a
          href="tel:8136204797"
          className="flex items-center gap-3 text-base text-[#252525] hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
        >
          <Phone size={18} className="shrink-0 text-[#154D29]" />
          (813) 620-4797
        </a>
        <a
          href="mailto:info@qualityroofing.com"
          className="flex items-center gap-3 text-base text-[#252525] hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
        >
          <Mail size={18} className="shrink-0 text-[#154D29]" />
          info@qualityroofing.com
        </a>
        <div className="flex items-center gap-3 text-base text-[#252525] font-[family-name:var(--font-dm-sans)]">
          <MapPin size={18} className="shrink-0 text-[#154D29]" />
          Tampa, FL
        </div>
      </div>

      {/* Service Area */}
      <div>
        <h3 className="text-lg font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
          Service Area
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)]">
          We serve the entire state of Florida from our Tampa headquarters.
        </p>
      </div>

      {/* Licenses */}
      <div>
        <h3 className="text-lg font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
          Licenses
        </h3>
        <div className="mt-2 space-y-1 text-sm text-[#252525]/70 font-[family-name:var(--font-dm-sans)]">
          <p>CCC042846 (Roofing Contractor)</p>
          <p>CGC1507166 (General Contractor)</p>
        </div>
      </div>
    </div>
  );
}

function ContactFormSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="contact-form" className="bg-white pt-28 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Form -- 60% */}
          <div
            className={`lg:col-span-3 ${anim(isVisible)}`}
          >
            <h2 className="text-2xl font-normal text-[#252525] sm:text-3xl font-[family-name:var(--font-dm-serif)]">
              Request an Estimate
            </h2>
            <p className="mt-3 mb-8 text-base text-[#252525]/70 font-[family-name:var(--font-dm-sans)]">
              Fill out the form below and a member of our team will follow up
              within one business day.
            </p>
            <ContactForm />
          </div>

          {/* Info -- 40%, sticky */}
          <div
            style={isVisible ? { transitionDelay: '200ms' } : undefined}
            className={`lg:col-span-2 ${anim(isVisible)}`}
          >
            <div className="lg:sticky lg:top-[96px]">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 3 -- SALES & SUPPORT
   ────────────────────────────────────────────── */
const supportCards = [
  {
    icon: ClipboardList,
    title: 'New Project Estimates',
    description:
      'Planning a new roofing project? We provide free, no-obligation estimates for commercial, residential, and multi-housing properties across Florida.',
    linkText: 'Request an Estimate',
  },
  {
    icon: Wrench,
    title: 'Existing Project Support',
    description:
      'Have questions about an ongoing project? Our team is available to provide updates, answer questions, and address any concerns.',
    linkText: 'Contact Us',
  },
  {
    icon: Shield,
    title: 'Warranty & Maintenance',
    description:
      'Need warranty service or interested in a maintenance program? We back our work and maintain relationships long after the project is complete.',
    linkText: 'Get in Touch',
  },
];

function SalesSupport() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="bg-white pt-28 pb-28 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <hr className="border-[#E6E6E6] mb-28" />

        <h2
          className={`text-2xl font-normal text-[#252525] sm:text-3xl font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
        >
          Sales &amp; Support
        </h2>
        <p
          style={isVisible ? { transitionDelay: '150ms' } : undefined}
          className={`mt-4 max-w-2xl text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
        >
          However we can help, we&apos;re here.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {supportCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                style={isVisible ? { transitionDelay: `${250 + i * 100}ms` } : undefined}
                className={`${anim(isVisible)}`}
              >
                <Icon size={28} className="text-[#154D29]" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#252525]/60 font-[family-name:var(--font-dm-sans)]">
                  {card.description}
                </p>
                <a
                  href="#contact-form"
                  className="group/arrow mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#154D29] hover:underline font-[family-name:var(--font-dm-sans)]"
                >
                  {card.linkText}
                  <span className="inline-block transition-transform duration-300 group-hover/arrow:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 4 -- CTA BANNER
   ────────────────────────────────────────────── */
function CtaBanner() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-4 text-center ${anim(isVisible)}`}
      >
        <h2 className="text-2xl font-normal text-white sm:text-3xl font-[family-name:var(--font-dm-serif)]">
          Prefer to Call?
        </h2>
        <p className="text-base text-[#E6E6E6] font-[family-name:var(--font-dm-sans)]">
          Speak directly with our team.
        </p>
        <a
          href="tel:8136204797"
          className="mt-2 flex items-center gap-3 text-3xl font-normal text-white hover:text-[#E6E6E6] transition-colors duration-300 sm:text-4xl font-[family-name:var(--font-dm-serif)]"
        >
          <Phone size={28} />
          (813) 620-4797
        </a>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   PAGE CONTENT
   ────────────────────────────────────────────── */
export default function ContactContent() {
  return (
    <>
      <PageHero />
      <ContactFormSection />
      <SalesSupport />
      <CtaBanner />
    </>
  );
}
