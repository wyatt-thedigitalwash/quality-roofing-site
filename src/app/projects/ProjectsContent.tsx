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
   Project data — derived from public/assets
   ────────────────────────────────────────────── */
const projects = [
  { src: '/assets/belleview-biltmore-commercial-roofing-project.webp', name: 'Belleview Biltmore' },
  { src: '/assets/345-bayshore-highrise-roofing-tampa.webp', name: '345 Bayshore' },
  { src: '/assets/harbour-court-standing-seam-metal-roof-aerial.webp', name: 'Harbour Court' },
  { src: '/assets/camden-bay-multi-housing-roofing-aerial.webp', name: 'Camden Bay' },
  { src: '/assets/sparkman-wharf-commercial-roofing-tampa.webp', name: 'Sparkman Wharf' },
  { src: '/assets/harbour-court-condos-roofing-aerial.webp', name: 'Harbour Court Condos' },
  { src: '/assets/multi-housing-tile-roof-community-aerial.webp', name: 'Multi-Housing Community' },
  { src: '/assets/copper-shingle-roof-installation-florida.webp', name: 'Copper Shingle Installation' },
  { src: '/assets/museum-of-science-and-industry.jpg', name: 'Museum of Science & Industry' },
  { src: '/assets/USF-copper-hall.jpg', name: 'USF Copper Hall' },
  { src: '/assets/usf-tat-enr-building.jpg', name: 'USF TAT ENR Building' },
  { src: '/assets/st-petersburg-high-school.jpg', name: 'St. Petersburg High School' },
  { src: '/assets/desoto-elementrary-school.jpg', name: 'DeSoto Elementary School' },
  { src: '/assets/tampa-police-department.jpg', name: 'Tampa Police Department' },
  { src: '/assets/gulfview-resort-towers.jpg', name: 'Gulfview Resort Towers' },
  { src: '/assets/stovall-condos.jpg', name: 'Stovall Condos' },
  { src: '/assets/stonewood-office-centers.jpg', name: 'Stonewood Office Centers' },
  { src: '/assets/shoppes-at-bloomington.jpg', name: 'Shoppes at Bloomington' },
  { src: '/assets/apollo-industrial.jpg', name: 'Apollo Industrial' },
  { src: '/assets/boyette-retail.jpg', name: 'Boyette Retail' },
  { src: '/assets/pillars-barbor.jpg', name: 'Pillars Harbor' },
  { src: '/assets/oster-catcher-restaurant.jpg', name: 'Oystercatcher Restaurant' },
  { src: '/assets/private-reseidence-project.jpg', name: 'Private Residence' },
  { src: '/assets/private-residency-2.jpg', name: 'Private Residence II' },
  { src: '/assets/private-residency-3.jpg', name: 'Private Residence III' },
];

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
            Our Work Speaks for Itself
          </h1>
          <p
            style={isVisible ? { transitionDelay: '150ms' } : undefined}
            className={`mt-6 max-w-xl text-lg leading-relaxed text-[#B6B5B3] font-[family-name:var(--font-dm-sans)] ${anim(isVisible)}`}
          >
            Explore completed roofing projects across Florida, from commercial
            high-rises to residential communities.
          </p>
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
    <section className="bg-white pt-28 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-5">
        {rows.map((row, rowIdx) => (
          <GalleryRow key={rowIdx} projects={row} rowIndex={rowIdx} />
        ))}
      </div>
    </section>
  );
}

function GalleryRow({
  projects: rowProjects,
  rowIndex,
}: {
  projects: (typeof projects);
  rowIndex: number;
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
    <section ref={ref} className="bg-[#154D29] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left ${anim(isVisible)}`}
      >
        <div>
          <h2 className="text-2xl font-normal text-white sm:text-3xl font-[family-name:var(--font-dm-serif)]">
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
export default function ProjectsContent() {
  return (
    <>
      <PageHero />
      <ProjectGallery />
      <CtaBanner />
    </>
  );
}
