import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import FaqSection from '@/components/FaqSection';
import HeroCta from '@/components/HeroCta';
import JsonLd from '@/components/JsonLd';
import PageHeroBackground from '@/components/PageHeroBackground';
import Reveal from '@/components/Reveal';
import { outlineButton } from '@/lib/buttons';
import { markets, type Market } from '@/lib/markets';
import { SITE_URL, breadcrumbSchema } from '@/lib/seo';

const SERVICES = [
  { name: 'Commercial Roofing', href: '/services/commercial', text: 'Offices, retail centers, warehouses, and hotels.' },
  { name: 'Residential Roofing', href: '/services/residential', text: 'Shingle, tile, slate, and metal roofs for homes.' },
  { name: 'Multi-Housing Roofing', href: '/services/multi-housing', text: 'Apartments, condominiums, and HOA communities.' },
  { name: 'Roof Repairs & Restoration', href: '/services/repairs', text: 'Repairs, maintenance, and storm restoration.' },
  { name: 'Condominium Roofing', href: '/services/condominiums', text: 'Condo associations, from garden-style to high-rise.' },
];

const h2 = 'text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]';

export default function MarketPage({ market }: { market: Market }) {
  const path = `/${market.slug}`;
  const others = markets.filter((m) => m.slug !== market.slug);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: market.city, path }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Roofing in ${market.city}, FL`,
          serviceType: 'Roofing',
          description: market.description,
          url: `${SITE_URL}${path}`,
          areaServed: { '@type': 'City', name: market.city, containedInPlace: { '@type': 'AdministrativeArea', name: `${market.county}, Florida` } },
          provider: { '@id': `${SITE_URL}/#business` },
        }}
      />

      <section aria-label={`Roofing Company in ${market.city}, FL`} className="relative flex min-h-[55vh] items-center bg-[#252525] px-4 pt-[96px] pb-24 sm:px-6 lg:min-h-[70vh] lg:px-8">
        <PageHeroBackground src={market.heroImage} alt={market.heroImageAlt} />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal className="max-w-2xl">
            <h1 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)]">
              Roofing Company in {market.city}, FL
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6]">{market.heroText}</p>
            <div className="mt-8">
              <HeroCta />
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label={market.introHeading} className="bg-white px-4 pt-28 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <h2 className={h2}>{market.introHeading}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#252525]/70">
              {market.intro.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#252525]">
              <Image src={market.introImage} alt={market.introImageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label={`Roofing Services in ${market.city}`} className="bg-white px-4 pt-28 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className={h2}>Roofing Services in {market.city}</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={(i % 3) * 100}>
                <Link href={s.href} className="group flex h-full flex-col rounded-lg bg-[#E6E6E6]/40 p-6 transition-colors duration-300 hover:bg-[#E6E6E6]/70">
                  <h3 className="text-xl font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#252525]/70">{s.text}</p>
                  <span className="mt-auto pt-5 text-sm font-bold text-[#154D29] group-hover:underline">Learn More &rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label={`Our Work Near ${market.city}`} className="bg-white px-4 pt-28 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className={h2}>Our Work Near {market.city}</h2>
          </Reveal>
          {market.projects.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
              {market.projects.map((p, i) => (
                <Reveal key={p.name} delay={i * 120}>
                  <article>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#252525]">
                      <Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <h3 className="mt-5 text-2xl font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#154D29]">{p.place}</p>
                    <p className="mt-2 text-base leading-relaxed text-[#252525]/70">{p.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
          <Reveal className="mt-10">
            <div className="rounded-lg bg-[#E6E6E6]/40 p-6 sm:p-8">
              <h3 className="text-2xl font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">{market.recordsHeading}</h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#252525]/70">{market.records}</p>
              <Link href="/projects" className={`mt-6 ${outlineButton}`}>
                View All Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={market.faqs} heading={`${market.city} Roofing Questions`} className="py-28 lg:py-40" />

      <section aria-label={`Get a Free Roofing Estimate in ${market.city}`} className="bg-[#154D29] px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
              Need a Roofer in {market.city}?
            </h2>
            <p className="mt-2 text-base text-[#E6E6E6]">
              Contact our team for a free estimate. We also serve{' '}
              {others.map((m, i) => (
                <span key={m.slug}>
                  <Link href={`/${m.slug}`} className="font-semibold text-white underline">
                    {m.city}
                  </Link>
                  {i === 0 ? ', ' : ', and '}
                </span>
              ))}
              all of Florida.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded border-2 border-white px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg"
            >
              Request a Free Estimate
            </Link>
            <a href="tel:8136204797" className="tap-target flex items-center gap-2 text-base font-semibold text-[#E6E6E6] transition-colors duration-300 hover:text-white">
              <Phone size={16} aria-hidden="true" />
              (813) 620-4797
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
