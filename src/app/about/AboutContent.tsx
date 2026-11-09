'use client';

import Link from 'next/link';
import { outlineButton } from '@/lib/buttons';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useScrollReveal, useCountUp } from '@/lib/animations';
import PageHeroBackground from '@/components/PageHeroBackground';
import HeroCta from '@/components/HeroCta';
import TeamSection from './TeamSection';

/* ──────────────────────────────────────────────
   Shared animation helper
   ────────────────────────────────────────────── */
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
    <section aria-label="Three Generations of Roofing Excellence"
      ref={ref}
      className="relative flex items-center min-h-[55vh] lg:min-h-[70vh] bg-[#252525] px-4 sm:px-6 lg:px-8 pt-[96px] pb-24"
    >
      <PageHeroBackground
        src="/assets/ut-multipurpose-roofing-aerial-tampa.webp"
        alt="Aerial view of the UT Multipurpose building with the downtown Tampa skyline beyond"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1
            className={`text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
          >
            Three Generations of Roofing Excellence
          </h1>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
          >
            Since 1994, Quality Roofing has grown from 15 employees to one of
            Florida&apos;s most trusted roofing and general contracting firms.
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
   SECTION 2 -- COMPANY STORY
   ────────────────────────────────────────────── */
function CompanyStory() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="Our Story" className="bg-white pt-28 lg:pt-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          {/* Text -- 60% */}
          <div className="lg:col-span-3">
            <div>
              <h2
                className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
              >
                Our Story
              </h2>

              <div
                style={isVisible ? { transitionDelay: '150ms' } : undefined}
                className={`mt-6 space-y-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
              >
                <p>
                  Quality Roofing, Inc. was founded in 1994 as a third generation
                  licensed and state certified roofing and general contracting firm.
                  What began as a 15-person operation built on family tradition has
                  grown into one of Florida&apos;s most respected roofing companies,
                  with over 100 employees and an annual sales volume exceeding $29
                  million.
                </p>
                <p>
                  Headquartered in Tampa, we serve the entire state of Florida. Our
                  reputation has been built almost entirely on referrals from existing
                  and previous customers, a testament to the relationships we maintain
                  and the quality we deliver on every project.
                </p>
                <p>
                  We are qualified in all phases of commercial, residential, and
                  multi-housing roofing. As certified installers for multiple major
                  manufacturers, we bring manufacturer-backed expertise to every job.
                  The majority of our work is completed in-house with our own
                  dedicated staff and equipment, giving us full control over quality
                  and timelines.
                </p>
                <p>
                  From single-family homes to developments exceeding $5 million in
                  scope, we have the licensing, certifications, and team to handle
                  projects of any scale.
                </p>
              </div>

              <div
                style={isVisible ? { transitionDelay: '300ms' } : undefined}
                className={`mt-8 ${anim(isVisible)}`}
              >
                <Link href="/contact" className={outlineButton}>
                  Work With Us
                </Link>
              </div>
            </div>
          </div>

          {/* Image -- 40% */}
          <div
            style={isVisible ? { transitionDelay: '200ms' } : undefined}
            className={`lg:col-span-2 lg:-mr-8 ${anim(isVisible)}`}
          >
            <div className="relative overflow-hidden rounded-lg aspect-square lg:aspect-[4/3]">
              <Image
                src="/assets/hutchinson-house-crew-on-mansard.webp"
                alt="Quality Roofing crew on the mansard roof of the historic Hutchinson House in Tampa"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
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
   SECTION 3 -- PRESIDENT'S MESSAGE
   ────────────────────────────────────────────── */
function PresidentsMessage() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="A message from our CEO" className="bg-white pt-28 lg:pt-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-3xl">
        {/* Top rule */}
        <hr className="border-[#E6E6E6] mb-16" />

        {/* Decorative quote mark */}
        <div
          className={`${anim(isVisible)}`}
        >
          <span className="block text-[8rem] leading-[0.6] font-normal text-[#154D29]/15 font-[family-name:var(--font-dm-serif)] select-none">
            &ldquo;
          </span>
        </div>

        <div
          style={isVisible ? { transitionDelay: '150ms' } : undefined}
          className={`mt-4 space-y-5 text-lg leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
        >
          <p>
            Quality Roofing was built on a simple principle: do exceptional work,
            stand behind it, and treat every relationship like it matters. Three
            generations of our family have carried that commitment forward, and it
            remains the foundation of everything we do today.
          </p>
          <p>
            We are deeply invested in the communities we serve. Whether
            supporting military facilities across the state, contributing to local
            organizations, or simply showing up on time and delivering on our
            promises, our goal is the same: to be a company that people trust and
            are proud to work with.
          </p>
          <p>
            The relationships we have built over the past three decades are not
            just business connections. They are the reason we have grown from 15
            employees to over 100, and why the majority of our work still comes
            through referrals. That trust is something we earn every day, on every
            roof.
          </p>
        </div>

        {/* Attribution */}
        <div
          style={isVisible ? { transitionDelay: '300ms' } : undefined}
          className={`mt-10 flex items-center gap-4 ${anim(isVisible)}`}
        >
          <Image
            src="/assets/richard-c-jenkins-ceo-quality-roofing.webp"
            alt="Richard C. Jenkins, Chief Executive Officer and Owner of Quality Roofing, Inc."
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
          <div>
            <span className="block text-lg font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
              Richard C. Jenkins
            </span>
            <span className="block text-sm text-[#252525]/70 font-[family-name:var(--font-dm-sans)]">
              Chief Executive Officer and Owner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 4 -- MILITARY SUPPORT
   ────────────────────────────────────────────── */
function MilitarySupport() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="Proudly Supporting Our Military" className="bg-white pt-28 lg:pt-40 pb-28 lg:pb-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          {/* Image placeholder -- 40%, LEFT side */}
          <div
            className={`lg:col-span-2 lg:-ml-8 order-2 lg:order-1 ${anim(isVisible)}`}
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/assets/quality-roofing-crew-metal-roof-install.webp"
                alt="Quality Roofing crew in hard hats working together on a metal roof installation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_72%]"
              />
            </div>
          </div>

          {/* Text -- 60%, RIGHT side */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div>
              <h2
                style={isVisible ? { transitionDelay: '100ms' } : undefined}
                className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
              >
                Proudly Supporting Our Military
              </h2>

              <div
                style={isVisible ? { transitionDelay: '250ms' } : undefined}
                className={`mt-6 space-y-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
              >
                <p>
                  Quality Roofing has built strong relationships with military
                  installations across Florida, completing projects that range from
                  large facility complexes to targeted repairs and maintenance work.
                </p>
                <p>
                  Our approach to military work reflects the same discipline we bring
                  to every project: deliver quality workmanship, meet the schedule,
                  and complete the job without disrupting ongoing operations. These
                  partnerships are a point of pride for our entire team and reflect
                  our commitment to serving those who serve our country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 5 -- STATS BAR
   ────────────────────────────────────────────── */
const statsData = [
  { end: 1994, prefix: '', suffix: '', label: 'Founded' },
  { end: 100, prefix: '', suffix: '+', label: 'Employees' },
  { end: 29, prefix: '$', suffix: 'M+', label: 'Annual Volume' },
  { end: 5, prefix: '$', suffix: 'M+', label: 'Largest Project' },
];

function StatItem({
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

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`text-center transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        start ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <span className="block text-[clamp(2rem,4vw,3.5rem)] font-normal text-white font-[family-name:var(--font-dm-serif)]">
        {display}
      </span>
      <span className="mt-1 block text-sm text-[#E6E6E6] font-[family-name:var(--font-dm-sans)]">
        {label}
      </span>
    </div>
  );
}

function StatsBar() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section aria-label="Company by the numbers" ref={ref} className="bg-[#252525] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-4">
          {statsData.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              start={isVisible}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 6 -- LICENSES & CERTIFICATIONS
   ────────────────────────────────────────────── */
const certLogos = [
  { src: '/certificates/master-elite.webp', alt: 'GAF Master Elite Residential Roofing Contractor' },
  { src: '/certificates/siplast-certified.webp', alt: 'Siplast Select Contractor' },
  { src: '/certificates/johns-manville.webp', alt: 'Johns Manville Certified' },
  { src: '/certificates/owens-corning-preferred-contractor-logo.webp', alt: 'Owens Corning Preferred Contractor' },
  { src: '/certificates/polyglass-preferred-customer.avif', alt: 'Polyglass Preferred Customer' },
  { src: '/certificates/SIKA.webp', alt: 'Certified SIKA Applicator' },
];

function LicensesCerts() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="Licensed, Certified, Trusted" className="bg-white py-28 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: headline + copy */}
          <div>
            <h2
              className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
            >
              Licensed, Certified, Trusted
            </h2>
            <div
              style={isVisible ? { transitionDelay: '150ms' } : undefined}
              className={`mt-6 space-y-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
            >
              <p>
                Quality Roofing holds both a certified roofing contractor license
                and a general contractor license, providing the qualifications to
                handle projects across every category and scale. We are state
                certified and fully insured, giving our clients the confidence that
                their project is in qualified hands from start to finish.
              </p>
              <p>
                As certified installers for the industry&apos;s leading
                manufacturers, we bring manufacturer-backed warranties and technical
                expertise to every installation.
              </p>
            </div>
            <p
              style={isVisible ? { transitionDelay: '300ms' } : undefined}
              className={`mt-6 text-sm text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
            >
              License #CCC042846 (Roofing) &amp; #CGC1507166 (General Contractor)
            </p>
          </div>

          {/* Right: certifications grid */}
          <div
            style={isVisible ? { transitionDelay: '200ms' } : undefined}
            className={`grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 content-start ${anim(isVisible)}`}
          >
            {certLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
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
    <section aria-label="Let's Talk About Your Next Project" ref={ref} className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left ${anim(isVisible)}`}
      >
        <div>
          <h2 className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
            Let&apos;s Talk About Your Next Project
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
export default function AboutContent() {
  return (
    <>
      <PageHero />
      <CompanyStory />
      <PresidentsMessage />
      <TeamSection />
      <MilitarySupport />
      <StatsBar />
      <LicensesCerts />
      <CtaBanner />
    </>
  );
}
