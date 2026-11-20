'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useScrollReveal } from '@/lib/animations';
import PageHeroBackground from '@/components/PageHeroBackground';
import HeroCta from '@/components/HeroCta';
import FeaturedProjectSpotlight from '@/components/FeaturedProjectSpotlight';

const anim = (visible: boolean) =>
  `transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`;

/* ──────────────────────────────────────────────
   Project data, shown in alphabetical order (a leading "The" is ignored)
   ────────────────────────────────────────────── */
const sortKey = (name: string) => name.replace(/^The /, '');

const projects = [
  { src: '/assets/belleview-biltmore-commercial-roofing-project.webp', name: 'Belleview Biltmore' },
  { src: '/assets/belleview-biltmore-roof-aerial.webp', name: 'Belleview Biltmore Aerial' },
  { src: '/assets/belleview-community-aerial.webp', name: 'Belleview Community' },
  { src: '/assets/skypoint-condos-high-rise-roof-aerial.webp', name: 'Skypoint Condos' },
  { src: '/assets/345-bayshore-highrise-roofing-tampa.webp', name: '345 Bayshore' },
  { src: '/assets/city-center-at-hanna-roofing-aerial.webp', name: 'City Center at Hanna' },
  { src: '/assets/dunedin-city-hall-roofing-aerial.webp', name: 'Dunedin City Hall' },
  { src: '/assets/camden-bay-multi-housing-roofing-aerial.webp', name: 'Camden Bay' },
  { src: '/assets/sparkman-wharf-commercial-roofing-tampa.webp', name: 'Sparkman Wharf' },
  { src: '/assets/harbour-court-condos-roofing-aerial.webp', name: 'Harbour Court Condos' },
  { src: '/assets/multi-housing-tile-roof-community-aerial.webp', name: 'The Landings at Boot Ranch' },
  { src: '/assets/crystal-bay-multi-housing-roofing-aerial.webp', name: 'Crystal Bay' },
  { src: '/assets/multi-housing-townhomes-roof-aerial.webp', name: 'Multi-Housing Townhomes' },
  { src: '/assets/new-life-village-roofing-aerial.webp', name: 'New Life Village' },
  { src: '/assets/copper-shingle-roof-installation-florida.webp', name: 'Copper Shingle Installation' },
  { src: '/assets/museum-of-science-and-industry.webp', name: 'Museum of Science & Industry' },
  { src: '/assets/USF-copper-hall.webp', name: 'USF Cooper Hall' },
  { src: '/assets/usf-tat-enr-building.webp', name: 'USF TAT ENR Building' },
  { src: '/assets/ut-multipurpose-roofing-aerial-tampa.webp', name: 'UT Multipurpose' },
  { src: '/assets/ut-sykes-roof-aerial.webp', name: 'UT Sykes' },
  { src: '/assets/st-petersburg-high-school.webp', name: 'St. Petersburg High School' },
  { src: '/assets/desoto-elementrary-school.webp', name: 'DeSoto Elementary School' },
  { src: '/assets/tampa-police-department.webp', name: 'Tampa Police Department' },
  { src: '/assets/gulfview-resort-towers.webp', name: 'Gulfview Resort Towers' },
  { src: '/assets/stovall-condos.webp', name: 'Stovall Condos' },
  { src: '/assets/stonewood-office-centers.webp', name: 'Stonewood Office Centers' },
  { src: '/assets/shoppes-at-bloomington.webp', name: 'Shoppes at Bloomingdale' },
  { src: '/assets/apollo-industrial.webp', name: 'Apollo Industrial' },
  { src: '/assets/boyette-retail.webp', name: 'Boyette Retail' },
  { src: '/assets/pillars-barbor.webp', name: 'Pillars Harbor' },
  { src: '/assets/oster-catcher-restaurant.webp', name: 'Oystercatcher Restaurant' },
  { src: '/assets/private-residence-metal-roof-front.webp', name: 'Private Residence' },
  { src: '/assets/private-residency-2.webp', name: 'Private Residence II' },
  { src: '/assets/private-residency-3.webp', name: 'Private Residence III' },
  { src: '/assets/private-residence-brick-home.webp', name: 'Private Residence IV' },
  { src: '/assets/private-residence-stone-home.webp', name: 'Private Residence V' },
  { src: '/assets/private-residence-roof-aerial.webp', name: 'Private Residence VI' },
].sort((a, b) => sortKey(a.name).localeCompare(sortKey(b.name), 'en', { numeric: true }));

/* ──────────────────────────────────────────────
   SECTION 1 -- PAGE HERO
   ────────────────────────────────────────────── */
function PageHero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section aria-label="Our Work Speaks for Itself"
      ref={ref}
      className="relative flex items-center min-h-[55vh] lg:min-h-[70vh] bg-[#252525] px-4 sm:px-6 lg:px-8 pt-[96px] pb-24"
    >
      <PageHeroBackground
        src="/assets/345-bayshore-roof-aerial-overhead.webp"
        alt="Overhead aerial view of the 345 Bayshore high-rise roof in Tampa"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1
            className={`text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)] ${anim(isVisible)}`}
          >
            Our Work Speaks for Itself
          </h1>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
          >
            Explore completed roofing projects across Florida, from commercial
            high-rises to residential communities.
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
   PROJECT CARD
   ────────────────────────────────────────────── */
function ProjectCard({
  project,
  delay,
  isVisible,
}: {
  project: (typeof projects)[number];
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div
      style={isVisible ? { transitionDelay: `${delay}ms` } : undefined}
      className={`group relative overflow-hidden rounded-lg bg-[#252525] aspect-[4/3] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <Image
        src={project.src}
        alt={`${project.name} roofing project by Quality Roofing in Florida`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 via-[#252525]/10 to-transparent transition-colors duration-300 group-hover:from-[#252525]/90" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-base font-semibold text-white font-[family-name:var(--font-dm-sans)]">
          {project.name}
        </h3>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   SECTION 2 -- PROJECT GALLERY
   ────────────────────────────────────────────── */
function ProjectGallery() {
  // Split projects into rows of 3 for staggered reveal
  const rows: (typeof projects)[] = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }

  return (
    <section aria-label="Project gallery" className="bg-white pt-28 lg:pt-40 pb-28 lg:pb-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-5">
        <FeaturedProjectSpotlight
          image="/assets/hutchinson-house-finished-roof-aerial-tampa.webp"
          imageAlt="Aerial view of the completed Hutchinson House roof on a brick-paved street corner in Tampa"
        />
        {rows.map((row, rowIdx) => (
          <GalleryRow key={rowIdx} projects={row} />
        ))}
      </div>
    </section>
  );
}

function GalleryRow({
  projects: rowProjects,
}: {
  projects: (typeof projects);
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {rowProjects.map((project, i) => (
        <ProjectCard
          key={project.name}
          project={project}
          delay={i * 150}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   SECTION 3 -- CTA BANNER
   ────────────────────────────────────────────── */
function CtaBanner() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section aria-label="Have a Project in Mind?" ref={ref} className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left ${anim(isVisible)}`}
      >
        <div>
          <h2 className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
            Have a Project in Mind?
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
export default function ProjectsContent() {
  return (
    <>
      <PageHero />
      <ProjectGallery />
      <CtaBanner />
    </>
  );
}
