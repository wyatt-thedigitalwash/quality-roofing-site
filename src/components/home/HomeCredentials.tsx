import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const awards: { title: string; detail: string; project: string; href?: string }[] = [
  {
    title: 'ATAS First Place',
    detail: '2025 Project of the Year, Commercial Roof',
    project: 'Plant Hall Music Room',
  },
  {
    title: 'FRSA S.T.A.R. Second Place',
    detail: 'Craftsmanship in Roofing',
    project: 'Plant Hall Music Room',
  },
  {
    title: 'FRSA S.T.A.R. Award',
    detail: 'Craftsmanship in Roofing',
    project: 'The Hutchinson House',
    href: '/projects/hutchinson-house',
  },
];

const certLogos = [
  { src: '/certificates/master-elite.webp', alt: 'GAF Master Elite Residential Roofing Contractor' },
  { src: '/certificates/siplast-certified.webp', alt: 'Siplast Select Contractor' },
  { src: '/certificates/johns-manville.webp', alt: 'Johns Manville Certified' },
  { src: '/certificates/owens-corning-preferred-contractor-logo.webp', alt: 'Owens Corning Preferred Contractor' },
  { src: '/certificates/polyglass-preferred-customer.avif', alt: 'Polyglass Preferred Customer' },
  { src: '/certificates/SIKA.webp', alt: 'Certified SIKA Applicator' },
];

function AwardText({ award }: { award: { title: string; detail: string } }) {
  return (
    <>
      <h3 className="text-xl font-normal text-[#252525] xl:text-2xl font-[family-name:var(--font-dm-serif)]">
        {award.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#252525]/70">{award.detail}</p>
    </>
  );
}

export default function HomeCredentials() {
  return (
    <section aria-label="Recognized by the Industry" data-bg="white" className="bg-white pb-28 px-4 sm:px-6 lg:px-8 lg:pb-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-center text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
            Recognized by the Industry
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-y-10">
            {certLogos.map((logo) => (
              <div key={logo.alt} className="flex w-1/3 items-center justify-center lg:w-auto lg:flex-1">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  className="h-14 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={i * 100} className="h-full">
              {award.href ? (
                <Link
                  href={award.href}
                  className="group flex h-full flex-col rounded-lg bg-[#E6E6E6]/40 p-6 transition-colors duration-300 hover:bg-[#E6E6E6]/70 xl:p-8"
                >
                  <AwardText award={award} />
                  <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold text-[#154D29] group-hover:underline">
                    {award.project}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </Link>
              ) : (
                <div className="flex h-full flex-col rounded-lg bg-[#E6E6E6]/40 p-6 xl:p-8">
                  <AwardText award={award} />
                  <span className="mt-auto pt-6 text-sm font-bold text-[#252525]">{award.project}</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-center text-sm text-[#252525]/70">
            State Certified Roofing and General Contractor, Licenses CCC042846 and CGC1507166
          </p>
        </Reveal>
      </div>
    </section>
  );
}
