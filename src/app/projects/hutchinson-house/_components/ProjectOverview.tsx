import Image from 'next/image';
import Link from 'next/link';
import { outlineButton } from '@/lib/buttons';
import HeroCta from '@/components/HeroCta';
import Reveal from '@/components/Reveal';

const facts = [
  { label: 'Location', value: 'Tampa, Florida' },
  { label: 'Built', value: '1908' },
  { label: 'Historic Listing', value: 'National Register, 1977' },
  { label: 'Recognition', value: 'FRSA S.T.A.R. Award' },
];

function Hero() {
  return (
    <section aria-label="The Hutchinson House"
      data-bg="dark"
      className="relative flex min-h-[80vh] items-end bg-[#252525] px-4 pt-[128px] pb-14 sm:px-6 lg:px-8"
    >
      <Image
        src="/assets/hutchinson-house-finished-roof-downtown-skyline.webp"
        alt="The Hutchinson House in Tampa with its finished slate mansard roof and copper dormers, downtown skyline behind it"
        fill
        preload
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/55 to-[#252525]/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-sm text-[#E6E6E6]">
            <Link href="/projects" className="tap-target hover:text-white hover:underline">
              Projects
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">The Hutchinson House</span>
          </nav>
          <h1 className="mt-5 text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)]">
            The Hutchinson House
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#E6E6E6]">
            A 1908 Tampa landmark and the offices of Matt Law, re-roofed in
            Vermont slate and copper to match its original design.
          </p>
          <div className="mt-8">
            <HeroCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Facts() {
  return (
    <section aria-label="Project facts" data-bg="dark" className="bg-[#252525] px-4 pb-10 sm:px-6 lg:px-8">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 pt-8 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-sm text-[#B6B5B3]">
              {fact.label}
            </dt>
            <dd className="mt-2 text-xl text-white font-[family-name:var(--font-dm-serif)]">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Story() {
  return (
    <section aria-label="A Landmark With a Long History" data-bg="white" className="bg-white px-4 py-28 lg:py-40 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
              A Landmark With a Long History
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#252525]/70">
              <p>
                Currie J. Hutchinson built this home in 1908, and it is still
                known as the Hutchinson House. It began as a family residence,
                later functioned as a hospital, and then became a fraternity.
                Despite its state of disrepair, it was listed on the National
                Register of Historic Places in 1977.
              </p>
              <p>
                Attorney William B. Plowman acquired the home in 1980. It was
                later purchased by Matt Powell, its current owner, and today it
                serves as the offices of Matt Law.
              </p>
              <p>
                A building with this much history called for a roof that honors
                it. Our job was to deliver a new roofing system while matching
                the original design and preserving the decorative details that
                make the house what it is.
              </p>
            </div>
            <Link href="/services/repairs" className={`mt-8 ${outlineButton}`}>
              Our Historical Preservation Services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/assets/hutchinson-house-original-slate-scaffolding-setup.webp"
                alt="Red brick Hutchinson House with its original slate mansard roof as scaffolding goes up around the building"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-[#252525]/70">
              The original slate mansard as scaffolding goes up around the
              building.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default function ProjectOverview() {
  return (
    <>
      <Hero />
      <Facts />
      <Story />
    </>
  );
}
