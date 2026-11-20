import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const audiences = [
  {
    name: 'General Contractors and Developers',
    text: 'A licensed roofing and general contracting partner for new construction and large-scale projects, with in-house crews and equipment.',
    href: '/services/commercial',
    link: 'Commercial Roofing',
  },
  {
    name: 'Property Managers and HOAs',
    text: 'Phased reroofing, assessments, and maintenance for occupied communities, planned around the residents who live there.',
    href: '/services/multi-housing',
    link: 'Multi-Housing Roofing',
  },
  {
    name: 'Institutions and Public Buildings',
    text: 'Experience on campuses, schools, and public buildings, including three University of Tampa buildings and the Tampa Police Department.',
    href: '/projects',
    link: 'View Our Projects',
  },
  {
    name: 'Homeowners',
    text: 'Manufacturer-certified installations and straightforward guidance, from a roofing firm built on referrals since 1994.',
    href: '/services/residential',
    link: 'Residential Roofing',
  },
];

export default function HomeAudiences() {
  return (
    <section aria-label="Who We Work With" data-bg="dark" className="bg-[#252525] px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
              Who We Work With
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#E6E6E6]">
              Every project has different stakeholders and priorities. Here is how we support each of them.
            </p>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[16/10] lg:aspect-[15/16]">
              <Image
                src="/assets/quality-roofing-crew-harness-roof-work.webp"
                alt="Quality Roofing crew member in a hard hat and safety harness working on a high-rise roof"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
        </Reveal>

        <div className="space-y-10 lg:col-span-3 lg:space-y-12">
          {audiences.map((audience, i) => (
            <Reveal key={audience.name} delay={i * 80}>
              <h3 className="text-2xl font-normal text-white font-[family-name:var(--font-dm-serif)]">
                {audience.name}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#E6E6E6]">{audience.text}</p>
              <Link
                href={audience.href}
                className="tap-target group/arrow mt-3 inline-flex items-center gap-1 text-sm font-bold text-white hover:underline"
              >
                {audience.link}
                <span className="inline-block transition-transform duration-300 group-hover/arrow:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
