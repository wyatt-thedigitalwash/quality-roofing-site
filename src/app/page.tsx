'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useScrollReveal, useCountUp } from '@/lib/animations';

/* ──────────────────────────────────────────────
   Shared animation style helpers
   ────────────────────────────────────────────── */
function rev(visible: boolean, delay = 0) {
  return {
    className: `transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`,
    style: delay > 0 ? { transitionDelay: `${delay}ms` } : undefined,
  };
}

/* ──────────────────────────────────────────────
   SECTION 1 -- HERO
   ────────────────────────────────────────────── */
function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      data-bg="dark"
      className="relative flex flex-1 items-center bg-[#252525] px-4 sm:px-6 lg:px-8 pt-[96px]"
    >
      <Image
        src="/assets/multi-housing-tile-roof-community-aerial.webp"
        alt="Aerial view of multi-housing tile roof community in Florida by Quality Roofing"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#252525]/95 via-[#252525]/85 to-[#252525]/35 md:bg-gradient-to-r md:from-[#252525] md:via-[#252525]/90 md:to-[#252525]/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl text-center md:text-left">
          <h1
            {...rev(isVisible)}
            className={`text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)] ${rev(isVisible).className}`}
          >
            Florida&apos;s Trusted Roofing Contractor Since 1994
          </h1>

          <p
            {...rev(isVisible, 150)}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#B6B5B3] font-[family-name:var(--font-dm-sans)] ${rev(isVisible, 150).className}`}
          >
            Commercial, residential, and multi-housing roofing services delivered
            with 30+ years of expertise. Serving the entire state of Florida.
          </p>

          <div
            {...rev(isVisible, 300)}
            className={`mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start ${rev(isVisible, 300).className}`}
          >
            <Link
              href="/contact"
              className="rounded bg-[#154D29] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#154D29]/85 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-dm-sans)]"
            >
              Request a Free Estimate
            </Link>
            <Link
              href="/projects"
              className="rounded border-2 border-white px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-dm-sans)]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 2 -- SERVICE PILLARS
   ────────────────────────────────────────────── */
const pillars = [
  { name: 'Commercial', href: '/services/commercial' },
  { name: 'Residential', href: '/services/residential' },
  { name: 'Multi-Housing', href: '/services/multi-housing' },
  { name: 'Repairs', href: '/services/repairs' },
];

function ServicePillars() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} data-bg="dark" className="bg-[#252525] border-t border-[#B6B5B3]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Link
              key={pillar.name}
              href={pillar.href}
              style={isVisible ? { transitionDelay: `${i * 100}ms` } : undefined}
              className={`group relative flex items-center justify-center py-6 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${
                i < pillars.length - 1 ? 'lg:border-r lg:border-[#B6B5B3]/20' : ''
              } ${i % 2 === 0 ? 'border-r border-[#B6B5B3]/20 lg:border-r' : ''} ${
                i < 2 ? 'border-b border-[#B6B5B3]/20 lg:border-b-0' : ''
              }`}
            >
              <span className="relative text-sm font-normal uppercase tracking-[0.2em] text-white group-hover:text-[#154D29] transition-colors duration-300 sm:text-base lg:text-lg font-[family-name:var(--font-dm-serif)]">
                {pillar.name}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#154D29] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 3 -- ABOUT INTRO
   ────────────────────────────────────────────── */
const statsData = [
  { end: 30, prefix: '', suffix: '+', label: 'Years in Business' },
  { end: 100, prefix: '', suffix: '+', label: 'Employees' },
  { end: 29, prefix: '$', suffix: 'M+', label: 'Annual Volume' },
];

function StatCounter({
  end,
  prefix,
  suffix,
  label,
  start,
  delay,
}: {
  end: number;
  prefix: string;
  suffix: string;
  label: string;
  start: boolean;
  delay: number;
}) {
  const display = useCountUp({ end, prefix, suffix, start, duration: 1800 });
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      style={isVisible ? { transitionDelay: `${delay}ms` } : undefined}
      className={`text-center lg:text-left transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <span className="block text-[clamp(1.5rem,2.5vw,2rem)] text-[#154D29] font-[family-name:var(--font-dm-serif)]">
        {display}
      </span>
      <span className="text-[11px] tracking-wide text-[#B6B5B3] uppercase font-[family-name:var(--font-dm-sans)]">
        {label}
      </span>
    </div>
  );
}

function AboutIntro() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section data-bg="white" className="bg-white pt-28 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          {/* Text -- 60% */}
          <div className="lg:col-span-3">
            <div className="border-l-2 border-[#154D29] pl-6">
              <h2
                style={isVisible ? { transitionDelay: '0ms' } : undefined}
                className={`text-3xl font-normal text-[#252525] sm:text-4xl font-[family-name:var(--font-dm-serif)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Built on Three Generations of Roofing Excellence
              </h2>

              <div
                style={isVisible ? { transitionDelay: '150ms' } : undefined}
                className={`mt-6 space-y-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <p>
                  Quality Roofing, Inc. was founded in 1994 as a third generation
                  roofing and general contracting firm. What started as a family
                  trade has grown into one of Florida&apos;s most trusted roofing
                  companies, with over 100 employees and a reputation built almost
                  entirely on referrals.
                </p>
                <p>
                  Under the leadership of President Richard C. Jenkins, the company
                  serves the entire state of Florida from its Tampa headquarters.
                  Our team delivers commercial, residential, and multi-housing
                  roofing solutions with the craftsmanship and reliability that
                  three generations of experience demand.
                </p>
                <p>
                  We hold both a certified roofing contractor license and a general
                  contractor license, giving us the range to handle projects of
                  any scale, from single-family homes to developments exceeding $5
                  million.
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#E6E6E6] pt-8">
                {statsData.map((stat, i) => (
                  <StatCounter
                    key={stat.label}
                    {...stat}
                    start={isVisible}
                    delay={300 + i * 100}
                  />
                ))}
              </div>

              <Link
                href="/about"
                style={isVisible ? { transitionDelay: '600ms' } : undefined}
                className={`group/arrow mt-8 inline-flex items-center gap-1 text-sm font-bold text-[#154D29] hover:underline font-[family-name:var(--font-dm-sans)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Learn More About Us
                <span className="inline-block transition-transform duration-300 group-hover/arrow:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Image -- 40%, breaks grid on desktop */}
          <div
            style={isVisible ? { transitionDelay: '200ms' } : undefined}
            className={`lg:col-span-2 lg:-mr-8 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative overflow-hidden rounded-lg aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src="/assets/copper-shingle-roof-installation-florida.webp"
                alt="Copper shingle roof installation by Quality Roofing in Florida"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 4 -- SERVICES OVERVIEW
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

function ServicesOverview() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section data-bg="white" className="bg-white px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: headline + intro */}
          <div>
            <h2
              className={`text-2xl font-normal text-[#252525] sm:text-3xl font-[family-name:var(--font-dm-serif)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Roofing Services Across Florida
            </h2>
            <p
              style={isVisible ? { transitionDelay: '150ms' } : undefined}
              className={`mt-4 max-w-md text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              From new construction to disaster restoration, we handle every phase
              of commercial and residential roofing.
            </p>
            <Link
              href="/contact"
              style={isVisible ? { transitionDelay: '300ms' } : undefined}
              className={`mt-6 inline-block rounded bg-[#154D29] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#154D29]/85 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-dm-sans)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Request a Free Estimate
            </Link>
          </div>

          {/* Right: two-column service list */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-0">
            <ul className="space-y-0">
              {servicesLeft.map((s, i) => (
                <li
                  key={s}
                  style={isVisible ? { transitionDelay: `${150 + i * 80}ms` } : undefined}
                  className={`flex items-center gap-3 border-b border-[#B6B5B3] py-3.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
                  style={isVisible ? { transitionDelay: `${150 + i * 80}ms` } : undefined}
                  className={`flex items-center gap-3 border-b border-[#B6B5B3] py-3.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
   SECTION 5 -- FEATURED PROJECTS
   ────────────────────────────────────────────── */
function ProjectCard({
  name,
  image,
  alt,
  className,
  style,
}: {
  name: string;
  image: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`group relative flex items-end overflow-hidden rounded-lg bg-[#252525] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 via-[#252525]/20 to-transparent transition-colors duration-300 group-hover:from-[#252525]/90" />
      <div className="relative z-10 w-full p-5 lg:p-6">
        <h3 className="text-base font-normal text-white lg:text-lg font-[family-name:var(--font-dm-serif)]">
          {name}
        </h3>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section data-bg="white" className="bg-white px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <h2
          className={`text-2xl font-normal text-[#252525] sm:text-3xl font-[family-name:var(--font-dm-serif)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Featured Projects
        </h2>
        <p
          style={isVisible ? { transitionDelay: '150ms' } : undefined}
          className={`mt-4 text-base text-[#252525]/70 font-[family-name:var(--font-dm-sans)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Delivering quality across Florida for over 30 years.
        </p>

        {/* Bento layout */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-5">
          {/* Large left */}
          <ProjectCard
            name="Belleview Biltmore"
            image="/assets/belleview-biltmore-commercial-roofing-project.webp"
            alt="Belleview Biltmore commercial roofing project by Quality Roofing in Florida"
            style={isVisible ? { transitionDelay: '200ms' } : undefined}
            className={`aspect-[4/3] sm:col-span-3 sm:row-span-2 sm:aspect-auto sm:min-h-[420px] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          />
          {/* Two stacked right */}
          <ProjectCard
            name="345 Bayshore"
            image="/assets/345-bayshore-highrise-roofing-tampa.webp"
            alt="345 Bayshore highrise roofing project in Tampa by Quality Roofing"
            style={isVisible ? { transitionDelay: '350ms' } : undefined}
            className={`aspect-[16/10] sm:col-span-2 sm:aspect-auto sm:min-h-0 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          />
          <ProjectCard
            name="Harbour Court"
            image="/assets/harbour-court-standing-seam-metal-roof-aerial.webp"
            alt="Harbour Court standing seam metal roof aerial view by Quality Roofing"
            style={isVisible ? { transitionDelay: '500ms' } : undefined}
            className={`aspect-[16/10] sm:col-span-2 sm:aspect-auto sm:min-h-0 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          />
        </div>

        {/* Cinematic banner */}
        <div className="mt-4">
          <ProjectCard
            name="Camden Bay"
            image="/assets/camden-bay-multi-housing-roofing-aerial.webp"
            alt="Camden Bay multi-housing roofing aerial view by Quality Roofing"
            style={isVisible ? { transitionDelay: '650ms' } : undefined}
            className={`aspect-[21/9] w-full sm:aspect-[3/1] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          />
        </div>

        <div
          style={isVisible ? { transitionDelay: '750ms' } : undefined}
          className={`mt-8 text-center transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            href="/projects"
            className="group/arrow inline-flex items-center gap-1 text-sm font-bold text-[#154D29] hover:underline font-[family-name:var(--font-dm-sans)]"
          >
            View All Projects
            <span className="inline-block transition-transform duration-300 group-hover/arrow:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 6 -- CERTIFICATIONS
   ────────────────────────────────────────────── */
const certLogos = [
  { src: '/certificates/master-elite.webp', alt: 'GAF Master Elite Residential Roofing Contractor' },
  { src: '/certificates/siplast-certified.jpg', alt: 'Siplast Select Contractor' },
  { src: '/certificates/johns-manville.png', alt: 'Johns Manville Certified' },
  { src: '/certificates/owens-corning-preferred-contractor-logo.png', alt: 'Owens Corning Preferred Contractor' },
  { src: '/certificates/polyglass-preferred-customer.avif', alt: 'Polyglass Preferred Customer' },
  { src: '/certificates/SIKA.png', alt: 'Certified SIKA Applicator' },
];

function Certifications() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section data-bg="white" className="bg-white pb-28 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <h2
          className={`text-2xl font-normal text-[#252525] sm:text-3xl text-center font-[family-name:var(--font-dm-serif)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Trusted by the Industry&apos;s Leading Manufacturers
        </h2>

        <div
          style={isVisible ? { transitionDelay: '200ms' } : undefined}
          className={`mt-10 flex flex-wrap items-center justify-between gap-y-10 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {certLogos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center w-1/3 sm:w-1/3 lg:w-auto lg:flex-1">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 7 -- CTA BANNER
   ────────────────────────────────────────────── */
function CtaBanner() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} data-bg="primary" className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div>
          <h2 className="text-2xl font-normal text-white sm:text-3xl font-[family-name:var(--font-dm-serif)]">
            Ready to Start Your Next Roofing Project?
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
   PAGE
   ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Hero />
        <ServicePillars />
      </div>
      <div className="space-y-28 bg-white">
        <AboutIntro />
        <ServicesOverview />
        <FeaturedProjects />
        <Certifications />
      </div>
      <CtaBanner />
    </>
  );
}
