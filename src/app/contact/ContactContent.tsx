'use client';

import { Phone, Mail, MapPin, Printer } from 'lucide-react';
import { useScrollReveal } from '@/lib/animations';
import PageHeroBackground from '@/components/PageHeroBackground';
import ContactForm from './ContactForm';

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
    <section aria-label="Let's Get Started"
      ref={ref}
      className="relative flex items-center min-h-[55vh] lg:min-h-[70vh] bg-[#252525] px-4 sm:px-6 lg:px-8 pt-[96px] md:pt-[124px] pb-24"
    >
      <PageHeroBackground
        src="/assets/hutchinson-house-finished-roof-aerial-tampa.webp"
        alt="Aerial view of the Hutchinson House roof on a brick street corner in Tampa"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1
            className={`text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
          >
            Let&apos;s Get Started
          </h1>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
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
function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact details */}
      <div className="space-y-4">
        <h3 className="text-lg font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
          Contact Information
        </h3>
        <a
          href="tel:8136204797"
          className="tap-target flex items-center gap-3 text-base text-[#252525] hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
        >
          <Phone size={18} aria-hidden="true" className="shrink-0 text-[#154D29]" />
          (813) 620-4797
        </a>
        <a
          href="mailto:info@quality-roofing.com"
          className="tap-target flex items-center gap-3 text-base text-[#252525] hover:text-[#154D29] transition-colors duration-300"
        >
          <Mail size={18} aria-hidden="true" className="shrink-0 text-[#154D29]" />
          info@quality-roofing.com
        </a>
        <div className="flex items-center gap-3 text-base text-[#252525] font-[family-name:var(--font-dm-sans)]">
          <Printer size={18} aria-hidden="true" className="shrink-0 text-[#154D29]" />
          Fax: (813) 626-1756
        </div>
        <address className="flex items-start gap-3 text-base not-italic text-[#252525] font-[family-name:var(--font-dm-sans)]">
          <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-[#154D29]" />
          <span>
            1905 N. 40th Street
            <br />
            Tampa, FL 33605
          </span>
        </address>
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
    <section aria-label="Request an Estimate" id="contact-form" className="bg-white pt-28 lg:pt-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Form -- 60% */}
          <div
            className={`lg:col-span-3 ${anim(isVisible)}`}
          >
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
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
    title: 'New Project Estimates',
    description:
      'Planning a new roofing project? We provide free, no-obligation estimates for commercial, residential, and multi-housing properties across Florida.',
  },
  {
    title: 'Existing Project Support',
    description:
      'Have questions about an ongoing project? Our team is available to provide updates, answer questions, and address any concerns.',
  },
  {
    title: 'Warranty & Maintenance',
    description:
      'Need warranty service or interested in a maintenance program? We back our work and maintain relationships long after the project is complete.',
  },
];

function SalesSupport() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="Sales & Support" className="bg-white pt-28 lg:pt-40 pb-28 lg:pb-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <h2
          className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
        >
          Sales &amp; Support
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {supportCards.map((card, i) => (
            <div
              key={card.title}
              style={isVisible ? { transitionDelay: `${150 + i * 100}ms` } : undefined}
              className={anim(isVisible)}
            >
              <h3 className="text-2xl font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)]">
                {card.description}
              </p>
            </div>
          ))}
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
    <section aria-label="Prefer to Call?" ref={ref} className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-4 text-center ${anim(isVisible)}`}
      >
        <h2 className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
          Prefer to Call?
        </h2>
        <p className="text-base text-[#E6E6E6] font-[family-name:var(--font-dm-sans)]">
          Speak directly with our team.
        </p>
        <a
          href="tel:8136204797"
          className="tap-target mt-2 flex items-center gap-3 text-3xl font-normal text-white hover:text-[#E6E6E6] transition-colors duration-300 sm:text-4xl font-[family-name:var(--font-dm-serif)]"
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
