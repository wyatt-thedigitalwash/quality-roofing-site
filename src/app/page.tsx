'use client';

import Link from 'next/link';
import { outlineButton } from '@/lib/buttons';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useScrollReveal } from '@/lib/animations';
import FeaturedProjectSpotlight from '@/components/FeaturedProjectSpotlight';
import HomeAudiences from '@/components/home/HomeAudiences';
import HomeCredentials from '@/components/home/HomeCredentials';
import HomeServices from '@/components/home/HomeServices';
import HomeTeam from '@/components/home/HomeTeam';
import FaqSection from '@/components/FaqSection';
import { homeFaqs } from '@/lib/faqs';
import HeroVideo from '@/components/HeroVideo';

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
    <section aria-label="Florida's Trusted Roofing Contractor Since 1994"
      ref={ref}
      data-bg="dark"
      className="relative flex flex-1 items-center bg-[#252525] px-4 pt-[120px] md:pt-[148px] pb-20 sm:px-6 lg:px-8"
    >
      {/* Full-bleed video behind the text at every width */}
      <div className="absolute inset-0 overflow-hidden">
        <HeroVideo />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#252525]/85 to-transparent" />
        {/* Flat below 1280px, where the text spans too much of the width for a gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[#252525]/72 xl:bg-transparent xl:bg-gradient-to-r xl:from-[#252525]/85 xl:via-[#252525]/70 xl:via-50% xl:to-[#252525]/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1
            {...rev(isVisible)}
            className={`text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)] ${rev(isVisible).className}`}
          >
            Tampa Bay&apos;s Trusted Roofing Company Since 1994
          </h1>

          <p
            {...rev(isVisible, 150)}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)] ${rev(isVisible, 150).className}`}
          >
            Commercial, residential, and multi-housing roofing from our Tampa
            headquarters, with 30+ years of expertise serving the entire state of Florida.
          </p>

          <div
            {...rev(isVisible, 300)}
            className={`mt-10 flex flex-col gap-4 sm:flex-row ${rev(isVisible, 300).className}`}
          >
            <Link
              href="/contact"
              className="rounded text-center bg-[#154D29] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#154D29]/85 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-dm-sans)]"
            >
              Request a Free Estimate
            </Link>
            <Link
              href="/projects"
              className="rounded text-center border-2 border-white px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg font-[family-name:var(--font-dm-sans)]"
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
   SECTION 3 -- ABOUT INTRO
   ────────────────────────────────────────────── */
function AboutIntro() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="Built on Three Decades of Roofing Excellence" data-bg="white" className="bg-white pt-28 lg:pt-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          {/* Text -- 60% */}
          <div className="lg:col-span-3">
            <div>
              <h2
                style={isVisible ? { transitionDelay: '0ms' } : undefined}
                className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Built on Three Decades of Roofing Excellence
              </h2>

              <div
                style={isVisible ? { transitionDelay: '150ms' } : undefined}
                className={`mt-6 space-y-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <p>
                  Founded in 1994, Quality Roofing, Inc. is a licensed,
                  state-certified roofing and general contracting company
                  headquartered in Tampa and serving the entire state of Florida.
                  Over three decades, we have grown from a small local operation
                  into one of Florida&apos;s most respected roofing contractors,
                  with our growth built almost entirely on referrals from current
                  and past customers.
                </p>
                <p>
                  We are qualified in all phases of commercial, residential, and
                  multi-family roofing, from single-family homes to large-scale
                  developments. As certified installers for multiple major
                  manufacturers, we provide manufacturer-backed warranties that give
                  our customers added confidence on every project.
                </p>
                <p>
                  We self-perform the majority of our projects with our own
                  trained crews and company-owned equipment, so we manage quality,
                  scheduling, and costs directly rather than depending on
                  subcontractors.
                </p>
              </div>

              <div
                style={isVisible ? { transitionDelay: '300ms' } : undefined}
                className={`mt-8 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <Link href="/about" className={outlineButton}>
                  Learn More About Us
                </Link>
              </div>
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
                src="/assets/quality-roofing-crew-rooftop-material-rolls.webp"
                alt="Quality Roofing crew working among rolls of roofing material on a Florida rooftop"
                fill
                sizes="(max-width: 640px) 100vw, 60vw"
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
        sizes="(max-width: 640px) 100vw, 60vw"
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
    <section aria-label="Featured Projects" data-bg="white" className="bg-white px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <h2
          className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
            name="Skypoint Condos"
            image="/assets/skypoint-condos-high-rise-roof-aerial.webp"
            alt="Skypoint Condos high-rise roofing project in Tampa by Quality Roofing"
            style={isVisible ? { transitionDelay: '350ms' } : undefined}
            className={`aspect-[16/10] sm:col-span-2 sm:aspect-auto sm:min-h-0 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          />
          <ProjectCard
            name="Private Residence"
            image="/assets/private-residence-roof-aerial.webp"
            alt="Aerial view of a private residence roof by Quality Roofing in Florida"
            style={isVisible ? { transitionDelay: '500ms' } : undefined}
            className={`aspect-[16/10] sm:col-span-2 sm:aspect-auto sm:min-h-0 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          />
        </div>

        {/* Featured project spotlight */}
        <div className="mt-4">
          <FeaturedProjectSpotlight
            headingLevel="h3"
            image="/assets/hutchinson-house-copper-dormers-fish-scale-slate.webp"
            imageAlt="Standing seam copper dormers above fish scale slate on the historic Hutchinson House in Tampa"
          />
        </div>

        <div
          style={isVisible ? { transitionDelay: '750ms' } : undefined}
          className={`mt-8 text-center transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link href="/projects" className={`${outlineButton}`}>
            View All Projects
          </Link>
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
    <section aria-label="Ready to Start Your Next Roofing Project?" ref={ref} data-bg="primary" className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div>
          <h2 className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
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
   PAGE
   ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <div className="flex min-h-svh flex-col">
        <Hero />
      </div>
      <div className="space-y-28 lg:space-y-40 bg-white">
        <AboutIntro />
        <HomeTeam />
        <HomeServices />
        <HomeAudiences />
        <FeaturedProjects />
        <FaqSection faqs={homeFaqs} />
        <HomeCredentials />
      </div>
      <CtaBanner />
    </>
  );
}
