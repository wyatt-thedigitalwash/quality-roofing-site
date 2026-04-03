'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
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
            Manufacturer Partnerships
          </h1>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#B6B5B3] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
          >
            Quality Roofing is a certified installer for the industry&apos;s
            leading roofing manufacturers, delivering manufacturer-backed
            warranties and proven performance on every project.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 2 -- CERTIFIED MANUFACTURER PROFILES
   ────────────────────────────────────────────── */
const certifiedPartners = [
  {
    name: 'GAF',
    certification: 'Master Elite Contractor',
    logo: '/certificates/master-elite.webp',
    alt: 'GAF Master Elite Residential Roofing Contractor',
    description:
      'As a GAF Master Elite contractor, Quality Roofing belongs to an exclusive group representing the top 3% of roofing contractors in North America. This certification provides our clients access to the strongest warranties GAF offers, including the Golden Pledge Limited Warranty with 25-year workmanship coverage.',
  },
  {
    name: 'Siplast',
    certification: 'Select Contractor',
    logo: '/certificates/siplast-certified.jpg',
    alt: 'Siplast Select Contractor',
    description:
      'Our Siplast Select Contractor designation reflects our proven expertise in installing high-performance modified bitumen and single ply roofing systems. Siplast products are engineered for demanding commercial applications, and this partnership ensures our installations meet the highest manufacturer standards.',
  },
  {
    name: 'Johns Manville',
    certification: 'Certified Installer',
    logo: '/certificates/johns-manville.png',
    alt: 'Johns Manville Certified',
    description:
      'Quality Roofing is a certified installer for Johns Manville, one of the most respected names in commercial roofing. Our team is trained and qualified to install JM single ply, built up, and modified bitumen systems, backed by comprehensive manufacturer warranties.',
  },
  {
    name: 'Owens Corning',
    certification: 'Preferred Contractor',
    logo: '/certificates/owens-corning-preferred-contractor-logo.png',
    alt: 'Owens Corning Preferred Contractor',
    description:
      'As an Owens Corning Preferred Contractor, we offer homeowners and building owners access to enhanced warranty options and industry-leading shingle, insulation, and roofing accessory products. This partnership reflects our commitment to quality residential roofing installations.',
  },
  {
    name: 'Polyglass',
    certification: 'Preferred Customer',
    logo: '/certificates/polyglass-preferred-customer.avif',
    alt: 'Polyglass Preferred Customer',
    description:
      'Our Polyglass Preferred Customer status gives us direct access to their full line of self-adhered modified bitumen membranes, underlayments, and waterproofing solutions. Polyglass products are trusted for their durability and ease of installation across Florida commercial and residential projects.',
  },
  {
    name: 'SIKA',
    certification: 'Certified Applicator',
    logo: '/certificates/SIKA.png',
    alt: 'Certified SIKA Applicator',
    description:
      'Quality Roofing is a Certified SIKA Applicator, qualified to install SIKA Sarnafil single ply roofing membranes and liquid waterproofing systems. SIKA products are known for exceptional longevity and performance in commercial and institutional roofing applications.',
  },
];

function ManufacturerProfile({
  partner,
  index,
}: {
  partner: (typeof certifiedPartners)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const imageLeft = index % 2 === 0;

  const logoBlock = (
    <div
      style={isVisible ? { transitionDelay: imageLeft ? '0ms' : '200ms' } : undefined}
      className={`flex items-center justify-center lg:col-span-2 ${anim(isVisible)}`}
    >
      <div className="flex items-center justify-center rounded-lg border border-[#E6E6E6] bg-white p-8 w-full aspect-[3/2]">
        <Image
          src={partner.logo}
          alt={partner.alt}
          width={240}
          height={120}
          className="h-20 w-auto object-contain"
        />
      </div>
    </div>
  );

  const textBlock = (
    <div className="lg:col-span-3">
      <div className="border-l-2 border-[#154D29] pl-6">
        <h3
          style={isVisible ? { transitionDelay: imageLeft ? '100ms' : '0ms' } : undefined}
          className={`text-2xl font-normal text-[#252525] sm:text-3xl font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
        >
          {partner.name}
        </h3>
        <span
          style={isVisible ? { transitionDelay: imageLeft ? '150ms' : '100ms' } : undefined}
          className={`mt-1 inline-block text-sm font-semibold uppercase tracking-wider text-[#154D29] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
        >
          {partner.certification}
        </span>
        <p
          style={isVisible ? { transitionDelay: imageLeft ? '250ms' : '200ms' } : undefined}
          className={`mt-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
        >
          {partner.description}
        </p>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
      {imageLeft ? (
        <>
          {logoBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {logoBlock}
        </>
      )}
    </div>
  );
}

function CertifiedProfiles() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal(0.15);

  return (
    <section className="bg-white pt-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="mb-16">
          <h2
            className={`text-2xl font-normal text-[#252525] sm:text-3xl font-[family-name:var(--font-dm-serif)] ${anim(headingVisible)}`}
          >
            Our Certified Partnerships
          </h2>
          <p
            style={headingVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-4 max-w-2xl text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(headingVisible)}`}
          >
            These certifications are earned through rigorous training,
            demonstrated expertise, and a proven track record. They unlock the
            highest levels of manufacturer warranty coverage for our clients.
          </p>
        </div>

        <div className="space-y-24">
          {certifiedPartners.map((partner, i) => (
            <ManufacturerProfile key={partner.name} partner={partner} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 3 -- ADDITIONAL MANUFACTURERS
   ────────────────────────────────────────────── */
const additionalManufacturers = [
  'HeiTech Systems',
  'Hanson',
  'FiberTite',
  'Fabral Metal Wall & Roof Systems',
  'CMF Roof',
  'CertainTeed',
  'ASI Building Products',
  'Duro-Last',
  'TAMKO Roofing Products',
  'Soprema',
  'Sealoflex Waterproofing Systems',
  'Semule',
  'Performance Roof Systems',
  'MonierLifetile',
  'Ludowici Roof Tile',
];

function AdditionalManufacturers() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="bg-white pt-28 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <h2
          className={`text-2xl font-normal text-[#252525] sm:text-3xl font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
        >
          Additional Manufacturers We Work With
        </h2>
        <p
          style={isVisible ? { transitionDelay: '150ms' } : undefined}
          className={`mt-4 max-w-2xl text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
        >
          We source and install products from a wide range of trusted roofing
          material manufacturers.
        </p>

        <div
          style={isVisible ? { transitionDelay: '300ms' } : undefined}
          className={`mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 ${anim(isVisible)}`}
        >
          {additionalManufacturers.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-lg border border-[#E6E6E6] bg-white px-4 py-8 text-center transition-colors duration-300 hover:border-[#154D29]/30"
            >
              <span className="text-sm font-semibold text-[#252525] font-[family-name:var(--font-dm-sans)]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 4 -- WHY CERTIFICATIONS MATTER
   ────────────────────────────────────────────── */
const benefits = [
  {
    title: 'Extended Warranties',
    description:
      'Certified installations unlock manufacturer warranty coverage that goes well beyond standard terms, protecting your investment for decades.',
  },
  {
    title: 'Verified Expertise',
    description:
      'Every certification requires rigorous training, testing, and ongoing performance reviews. Our team meets the highest standards set by each manufacturer.',
  },
  {
    title: 'Premium Materials',
    description:
      'Direct partnerships give us priority access to the full product lines of each manufacturer, ensuring the right system for your building.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Manufacturers audit certified contractors regularly. This accountability means our work is held to the highest industry standards on every project.',
  },
];

function WhyCertificationsMatter() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="bg-white pt-28 pb-28 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-2xl font-normal text-[#252525] sm:text-3xl font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
          >
            Why Certifications Matter
          </h2>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
          >
            Not all roofing contractors can offer the same level of warranty
            coverage. Manufacturer certifications set us apart by giving our
            clients verified quality and long-term protection.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              style={isVisible ? { transitionDelay: `${250 + i * 100}ms` } : undefined}
              className={`text-center ${anim(isVisible)}`}
            >
              <h3 className="text-lg font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#252525]/60 font-[family-name:var(--font-dm-sans)]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 5 -- CTA BANNER
   ────────────────────────────────────────────── */
function CtaBanner() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left ${anim(isVisible)}`}
      >
        <div>
          <h2 className="text-2xl font-normal text-white sm:text-3xl font-[family-name:var(--font-dm-serif)]">
            Ready to Work With a Certified Contractor?
          </h2>
          <p className="mt-2 text-base text-[#E6E6E6] font-[family-name:var(--font-dm-sans)]">
            Contact our team for a free estimate. We serve the entire state of
            Florida.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded border-2 border-white px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-dm-sans)]"
          >
            Request a Free Estimate
          </Link>
          <a
            href="tel:8136204797"
            className="flex items-center gap-2 text-base font-semibold text-[#E6E6E6] hover:text-white transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
          >
            <Phone size={16} />
            (813) 620-4797
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   PAGE CONTENT
   ────────────────────────────────────────────── */
export default function ManufacturersContent() {
  return (
    <>
      <PageHero />
      <CertifiedProfiles />
      <AdditionalManufacturers />
      <WhyCertificationsMatter />
      <CtaBanner />
    </>
  );
}
