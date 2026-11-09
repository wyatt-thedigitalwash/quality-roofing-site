import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { outlineButton } from '@/lib/buttons';

const services = [
  {
    name: 'Commercial',
    href: '/services/commercial',
    image: '/assets/city-center-at-hanna-roofing-aerial.webp',
    alt: 'Aerial view of the City Center at Hanna commercial roof in Tampa',
    text: 'Roofing for offices, retail centers, warehouses, and hotels, from neighborhood retail to developments exceeding $5 million.',
    items: ['Single Ply Systems', 'Built Up Roofing', 'Modified Bitumen', 'Pedestal Pavers'],
  },
  {
    name: 'Residential',
    href: '/services/residential',
    image: '/assets/private-residence-metal-roof-aerial.webp',
    alt: 'Aerial view of a metal roof on a private Florida residence',
    text: 'Premium materials and three generations of craftsmanship for custom builds and full replacements on Florida homes.',
    items: ['Shingle / Tile / Slate', 'Standing Seam Metal', 'New Construction', 'Roof Replacement'],
  },
  {
    name: 'Multi-Housing',
    href: '/services/multi-housing',
    image: '/assets/multi-housing-townhomes-green-roof-aerial.webp',
    alt: 'Aerial view of green-roofed multi-housing townhomes in Florida',
    text: 'Apartments, condominiums, and HOA communities, with phased schedules that minimize disruption for residents.',
    items: ['Community-Wide Reroofing', 'New Construction', 'Single Ply Systems', 'Shingle / Tile / Slate'],
  },
  {
    name: 'Repairs & Restoration',
    href: '/services/repairs',
    image: '/assets/quality-roofing-crew-metal-roof-install.webp',
    alt: 'Quality Roofing crew in hard hats working together on a roof tear-off and metal panel installation',
    text: 'Responsive repairs, proactive maintenance, storm response, and preservation work on landmark buildings.',
    items: ['Repairs & Maintenance', 'Roof Assessments', 'Disaster Restoration', 'Historical Preservation'],
  },
];

export default function HomeServices() {
  return (
    <section aria-label="Roofing Services for Tampa Bay and Beyond" data-bg="white" className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
            Roofing Services for Tampa Bay and Beyond
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#252525]/70">
            From our Tampa headquarters, we handle every phase of roofing for commercial,
            residential, and multi-housing properties in{' '}
            <Link href="/st-petersburg" className="font-semibold text-[#154D29] underline">St. Petersburg</Link>,{' '}
            <Link href="/clearwater" className="font-semibold text-[#154D29] underline">Clearwater</Link>,{' '}
            <Link href="/riverview" className="font-semibold text-[#154D29] underline">Riverview</Link>, and across
            the entire state of Florida.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={(i % 2) * 120}>
              <article
                className="group relative flex h-full flex-col lg:flex-row lg:gap-6"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#252525] lg:aspect-auto lg:min-h-[340px] lg:w-[46%] lg:shrink-0"
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col lg:py-2">
                  <h3
                    className="mt-5 text-2xl font-normal text-[#252525] lg:mt-0 font-[family-name:var(--font-dm-serif)]"
                  >
                    <Link
                      href={service.href}
                      className="after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#154D29]"
                    >
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#252525]/70">{service.text}</p>
                  <ul className="mt-4 space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#252525]">
                        <span aria-hidden="true" className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#154D29]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span
                    aria-hidden="true"
                    className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-[#154D29] group-hover:underline"
                  >
                    Learn More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col gap-6 rounded-lg bg-[#E6E6E6]/40 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
                Also Offering Standing Seam Metal
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#252525]/70">
                Custom standing seam roofs for any property type, formed with our own mobile roll former
                machines.
              </p>
            </div>
            <Link href="/services/standing-seam-metal" className={`shrink-0 self-start lg:self-center ${outlineButton}`}>
              Learn About Standing Seam
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
