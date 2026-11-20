'use client';

import Link from 'next/link';
import { outlineButton } from '@/lib/buttons';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useScrollReveal } from '@/lib/animations';
import PageHeroBackground from '@/components/PageHeroBackground';
import HeroCta from '@/components/HeroCta';

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
    <section aria-label="Roofing Solutions for Every Sector"
      ref={ref}
      className="relative flex items-center min-h-[55vh] lg:min-h-[70vh] bg-[#252525] px-4 sm:px-6 lg:px-8 pt-[96px] md:pt-[124px] pb-24"
    >
      <PageHeroBackground
        src="/assets/harbour-court-standing-seam-metal-roof-aerial.webp"
        alt="Aerial view of the Harbour Court standing seam metal roof"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1
            className={`text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
          >
            Roofing Solutions for Every Sector
          </h1>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
          >
            From commercial high-rises to single-family homes, Quality Roofing
            delivers expert roofing services across the entire state of Florida.
          </p>
          <div
            style={isVisible ? { transitionDelay: '300ms' } : undefined}
            className={`mt-8 ${anim(isVisible)}`}
          >
            <HeroCta />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 2 -- FOUR PILLARS
   ────────────────────────────────────────────── */
const pillars = [
  {
    name: 'Commercial',
    href: '/services/commercial',
    image: '/assets/city-center-at-hanna-roofing-aerial.webp',
    alt: 'City Center at Hanna commercial roofing project by Quality Roofing',
    description:
      'Roofing solutions for offices, retail centers, warehouses, hotels, and large-scale commercial properties. We work with general contractors, developers, and architects on projects of every scale, including developments exceeding $5 million.',
    services: 'New Construction, Single Ply Systems, Built Up Roofing, Modified Bitumen, Standing Seam Metal, Pedestal Pavers',
  },
  {
    name: 'Residential',
    href: '/services/residential',
    image: '/assets/private-residence-metal-roof-aerial.webp',
    alt: 'Metal roof on a private residence by Quality Roofing in Florida',
    description:
      'Protecting Florida homes with premium materials and craftsmanship built on over 30 years of experience. From custom builds to full replacements, we deliver manufacturer-certified installations with the highest warranty coverage available.',
    services: 'Shingle / Tile / Slate, Standing Seam Metal, New Construction, Roof Replacement, Repairs & Maintenance',
  },
  {
    name: 'Multi-Housing',
    href: '/services/multi-housing',
    image: '/assets/multi-housing-townhomes-green-roof-aerial.webp',
    alt: 'Aerial view of green-roofed multi-housing townhomes by Quality Roofing',
    description:
      'Specialized roofing for apartments, condominiums, HOA communities, and multi-family complexes. We coordinate phased project schedules to minimize tenant disruption and manage community-wide reroofing with precision.',
    services: 'New Construction, Roof Replacement, Single Ply Systems, Shingle / Tile / Slate, Repairs & Maintenance',
  },
  {
    name: 'Repairs',
    href: '/services/repairs',
    image: '/assets/quality-roofing-crew-harness-roof-work.webp',
    alt: 'Quality Roofing crew member in a hard hat and safety harness working on a roof repair',
    description:
      'Fast, reliable repair services and proactive maintenance programs to extend the life of your roof. Our team handles emergency storm damage, water intrusion, and specialized historical preservation work on landmark buildings.',
    services: 'Repairs & Maintenance, Roof Assessments, Disaster Restoration, Historical Preservation',
  },
  {
    name: 'Condominiums',
    href: '/services/condominiums',
    image: '/assets/skypoint-condos-high-rise-roof-aerial.webp',
    alt: 'Skypoint Condos high-rise roof in Tampa by Quality Roofing',
    description:
      'Roofing for condominium associations, from garden-style communities to high-rise towers. We work directly with condo boards and association managers on assessments, budgeting, and phased schedules that keep the building running.',
    services: 'Roof Replacement, High-Rise Roofing, Single Ply Systems, Shingle / Tile / Slate, Repairs & Maintenance, Roof Assessments',
  },
];

function PillarRow({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const imageLeft = index % 2 === 0;

  const imageBlock = (
    <div
      style={isVisible ? { transitionDelay: imageLeft ? '0ms' : '200ms' } : undefined}
      className={`lg:col-span-2 ${anim(isVisible)}`}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          src={pillar.image}
          alt={pillar.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );

  const textBlock = (
    <div
      className={`lg:col-span-3 ${imageLeft ? '' : ''}`}
    >
      <div>
        <h2
          style={isVisible ? { transitionDelay: imageLeft ? '100ms' : '0ms' } : undefined}
          className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
        >
          {pillar.name}
        </h2>
        <p
          style={isVisible ? { transitionDelay: imageLeft ? '200ms' : '150ms' } : undefined}
          className={`mt-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
        >
          {pillar.description}
        </p>
        <p
          style={isVisible ? { transitionDelay: imageLeft ? '300ms' : '250ms' } : undefined}
          className={`mt-4 text-sm text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
        >
          {pillar.services}
        </p>
        <div
          style={isVisible ? { transitionDelay: imageLeft ? '400ms' : '350ms' } : undefined}
          className={`mt-6 ${anim(isVisible)}`}
        >
          <Link href={pillar.href} className={outlineButton}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
      {imageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

function FourPillars() {
  return (
    <section aria-label="Service categories" className="bg-white pt-28 lg:pt-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-28 lg:space-y-40">
        {pillars.map((pillar, i) => (
          <PillarRow key={pillar.name} pillar={pillar} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 3 -- FULL SERVICES LIST
   ────────────────────────────────────────────── */
const servicesLeft = [
  'New Construction',
  'Single Ply Systems',
  'Built Up Roofing',
  'Modified Bitumen',
  'Standing Seam Metal',
  'Pedestal Pavers',
];

const servicesRight = [
  'Roof Replacement',
  'Repairs & Maintenance',
  'Roof Assessments',
  'Shingle / Tile / Slate',
  'Historical Preservation',
  'Disaster Restoration',
];

function FullServicesList() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="Complete Roofing Services" className="bg-white pt-28 lg:pt-40 pb-28 lg:pb-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2
              className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
            >
              Complete Roofing Services
            </h2>
            <p
              style={isVisible ? { transitionDelay: '150ms' } : undefined}
              className={`mt-4 max-w-md text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
            >
              From new construction to disaster restoration, we handle every
              phase of commercial and residential roofing across the state of
              Florida.
            </p>
            <Link
              href="/contact"
              style={isVisible ? { transitionDelay: '300ms' } : undefined}
              className={`mt-6 inline-block rounded bg-[#154D29] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#154D29]/85 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
            >
              Request a Free Estimate
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-0">
            <ul className="space-y-0">
              {servicesLeft.map((s, i) => (
                <li
                  key={s}
                  style={
                    isVisible
                      ? { transitionDelay: `${150 + i * 80}ms` }
                      : undefined
                  }
                  className={`flex items-center gap-3 border-b border-[#B6B5B3] py-3.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#154D29]" />
                  <span className="text-sm text-[#252525] font-[family-name:var(--font-dm-sans)]">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="space-y-0">
              {servicesRight.map((s, i) => (
                <li
                  key={s}
                  style={
                    isVisible
                      ? { transitionDelay: `${150 + i * 80}ms` }
                      : undefined
                  }
                  className={`flex items-center gap-3 border-b border-[#B6B5B3] py-3.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#154D29]" />
                  <span className="text-sm text-[#252525] font-[family-name:var(--font-dm-sans)]">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 4 -- CTA
   ────────────────────────────────────────────── */
function CtaBanner() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="Need a Roofing Expert?" ref={ref} className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left ${anim(isVisible)}`}
      >
        <div>
          <h2 className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
            Need a Roofing Expert?
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
            className="tap-target flex items-center gap-2 text-base font-semibold text-[#E6E6E6] hover:text-white transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
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
export default function ServicesContent() {
  return (
    <>
      <PageHero />
      <FourPillars />
      <FullServicesList />
      <CtaBanner />
    </>
  );
}
