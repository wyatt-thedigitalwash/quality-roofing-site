import Link from 'next/link';
import { outlineButton } from '@/lib/buttons';
import { Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';

const credits = [
  { role: 'Project MVP', names: ['Ismael Almaraz, Foreman'] },
  { role: 'Crew Recognition', names: ['Julio "Junior" Romero', 'Jose Romero'] },
  { role: 'Building Owner', names: ['Matt Powell, Matt Law'] },
];

function Award() {
  return (
    <section aria-label="Recognized for Craftsmanship" data-bg="white" className="bg-white px-4 py-28 lg:py-40 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
              Recognized for Craftsmanship
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#252525]/70">
              This project earned a S.T.A.R. Award, the Spotlight Trophy for the
              Advancement of Roofing, from the Florida Roofing and Sheet Metal
              Contractors Association (FRSA) in the Craftsmanship in Roofing
              category.
            </p>
            <Link href="/projects" className={`mt-8 ${outlineButton}`}>
              View All Projects
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <dl>
            {credits.map((credit) => (
              <div key={credit.role} className="border-b border-[#E6E6E6] py-5 first:pt-0">
                <dt className="text-sm text-[#252525]/70">
                  {credit.role}
                </dt>
                {credit.names.map((name) => (
                  <dd key={name} className="mt-2 text-base font-semibold text-[#252525]">
                    {name}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section aria-label="Caring for a Historic Building?" data-bg="primary" className="bg-[#154D29] px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
            Caring for a Historic Building?
          </h2>
          <p className="mt-2 text-base text-[#E6E6E6]">
            Talk to our team about preservation roofing. We serve the entire
            state of Florida.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded border-2 border-white px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg"
          >
            Request a Free Estimate
          </Link>
          <a
            href="tel:8136204797"
            className="tap-target flex items-center gap-2 text-base font-semibold text-[#E6E6E6] transition-colors duration-300 hover:text-white"
          >
            <Phone size={16} aria-hidden="true" />
            (813) 620-4797
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default function ProjectCredits() {
  return (
    <>
      <Award />
      <CtaBanner />
    </>
  );
}
