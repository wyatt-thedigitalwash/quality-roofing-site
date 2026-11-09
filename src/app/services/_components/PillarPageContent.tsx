'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { outlineButton } from '@/lib/buttons';
import type { Faq } from '@/lib/faqs';
import FaqSection from '@/components/FaqSection';
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
   Types
   ────────────────────────────────────────────── */
export interface PillarService {
  name: string;
  description: string;
  href?: string;
}

export interface PillarProject {
  label: string;
  image: string;
  href?: string;
}

export interface PillarPageProps {
  heroImage: string;
  heroImageAlt: string;
  heroHeadline: string;
  heroSubtext: string;
  overviewImage: string;
  overviewImageAlt: string;
  overviewHeadline: string;
  overviewParagraphs: string[];
  afterOverview?: ReactNode;
  services: PillarService[];
  servicesHeadline: string;
  projectsHeadline: string;
  projects: PillarProject[];
  ctaHeadline: string;
  faqs?: Faq[];
}

/* ──────────────────────────────────────────────
   SECTION 1 -- PAGE HERO
   ────────────────────────────────────────────── */
function PageHero({
  headline,
  subtext,
  image,
  imageAlt,
}: {
  headline: string;
  subtext: string;
  image: string;
  imageAlt: string;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section aria-label={headline}
      ref={ref}
      className="relative flex items-center min-h-[55vh] lg:min-h-[70vh] bg-[#252525] px-4 sm:px-6 lg:px-8 pt-[96px] pb-24"
    >
      <PageHeroBackground src={image} alt={imageAlt} />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1
            className={`text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
          >
            {headline}
          </h1>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
          >
            {subtext}
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
   SECTION 2 -- OVERVIEW
   ────────────────────────────────────────────── */
function Overview({ headline, paragraphs, image, imageAlt }: { headline: string; paragraphs: string[]; image: string; imageAlt: string }) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label={headline} className="bg-white pt-28 lg:pt-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div>
              <h2
                className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
              >
                {headline}
              </h2>
              <div
                style={isVisible ? { transitionDelay: '150ms' } : undefined}
                className={`mt-6 space-y-4 text-base leading-relaxed text-[#252525]/70 font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
              >
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div
                style={isVisible ? { transitionDelay: '300ms' } : undefined}
                className={`mt-8 ${anim(isVisible)}`}
              >
                <Link href="/contact" className={outlineButton}>
                  Request an Estimate
                </Link>
              </div>
            </div>
          </div>

          <div
            style={isVisible ? { transitionDelay: '200ms' } : undefined}
            className={`lg:col-span-2 lg:-mr-8 ${anim(isVisible)}`}
          >
            <div className="relative overflow-hidden rounded-lg aspect-square lg:aspect-[4/3]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
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
   SECTION 3 -- SERVICES LIST
   ────────────────────────────────────────────── */
function ServicesList({
  headline,
  services,
}: {
  headline: string;
  services: PillarService[];
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const mid = Math.ceil(services.length / 2);
  const left = services.slice(0, mid);
  const right = services.slice(mid);

  return (
    <section aria-label={headline} className="bg-white pt-28 lg:pt-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <h2
          className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
        >
          {headline}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-0 sm:grid-cols-2">
          <ul className="space-y-0">
            {left.map((s, i) => (
              <li
                key={s.name}
                style={
                  isVisible ? { transitionDelay: `${150 + i * 80}ms` } : undefined
                }
                className={`border-b border-[#E6E6E6] py-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="block text-base font-semibold text-[#252525] font-[family-name:var(--font-dm-sans)]">
                  {s.href ? (
                    <Link href={s.href} className="tap-target text-[#154D29] underline underline-offset-2 hover:no-underline">
                      {s.name}
                    </Link>
                  ) : (
                    s.name
                  )}
                </span>
                <span className="mt-1 block text-sm text-[#252525]/70 font-[family-name:var(--font-dm-sans)]">
                  {s.description}
                </span>
              </li>
            ))}
          </ul>
          <ul className="space-y-0">
            {right.map((s, i) => (
              <li
                key={s.name}
                style={
                  isVisible ? { transitionDelay: `${150 + i * 80}ms` } : undefined
                }
                className={`border-b border-[#E6E6E6] py-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="block text-base font-semibold text-[#252525] font-[family-name:var(--font-dm-sans)]">
                  {s.href ? (
                    <Link href={s.href} className="tap-target text-[#154D29] underline underline-offset-2 hover:no-underline">
                      {s.name}
                    </Link>
                  ) : (
                    s.name
                  )}
                </span>
                <span className="mt-1 block text-sm text-[#252525]/70 font-[family-name:var(--font-dm-sans)]">
                  {s.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 4 -- FEATURED PROJECTS
   ────────────────────────────────────────────── */
function FeaturedProjects({
  headline,
  projects,
}: {
  headline: string;
  projects: PillarProject[];
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label={headline} className="bg-white pt-28 lg:pt-40 pb-28 lg:pb-40 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <h2
          className={`text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
        >
          {headline}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.image}
              style={
                isVisible ? { transitionDelay: `${200 + i * 150}ms` } : undefined
              }
              className={`group relative flex items-end overflow-hidden rounded-lg bg-[#252525] aspect-[4/3] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <Image
                src={project.image}
                alt={`${project.label} roofing project by Quality Roofing in Florida`}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 via-transparent to-transparent transition-colors duration-300 group-hover:from-[#252525]/90" />
              <div className="relative z-10 p-5">
                <h3 className="text-base font-normal text-white font-[family-name:var(--font-dm-serif)]">
                  {project.label}
                </h3>
              </div>
              {project.href && (
                <Link
                  href={project.href}
                  aria-label={`View the ${project.label} project`}
                  className="absolute inset-0 z-20 rounded-lg focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                />
              )}
            </div>
          ))}
        </div>

        <div
          style={isVisible ? { transitionDelay: '600ms' } : undefined}
          className={`mt-8 text-center ${anim(isVisible)}`}
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
   SECTION 5 -- CTA BANNER
   ────────────────────────────────────────────── */
function CtaBanner({ headline }: { headline: string }) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label={headline} ref={ref} className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left ${anim(isVisible)}`}
      >
        <div>
          <h2 className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
            {headline}
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
   PAGE LAYOUT
   ────────────────────────────────────────────── */
export default function PillarPageContent({
  heroImage,
  heroImageAlt,
  heroHeadline,
  heroSubtext,
  overviewImage,
  overviewImageAlt,
  overviewHeadline,
  overviewParagraphs,
  afterOverview,
  services,
  servicesHeadline,
  projectsHeadline,
  projects,
  ctaHeadline,
  faqs,
}: PillarPageProps) {
  return (
    <>
      <PageHero
        headline={heroHeadline}
        subtext={heroSubtext}
        image={heroImage}
        imageAlt={heroImageAlt}
      />
      <Overview headline={overviewHeadline} paragraphs={overviewParagraphs} image={overviewImage} imageAlt={overviewImageAlt} />
      {afterOverview}
      <ServicesList headline={servicesHeadline} services={services} />
      <FeaturedProjects headline={projectsHeadline} projects={projects} />
      {faqs && <FaqSection faqs={faqs} className="pb-28 lg:pb-40" />}
      <CtaBanner headline={ctaHeadline} />
    </>
  );
}
