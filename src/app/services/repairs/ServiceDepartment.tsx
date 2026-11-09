import Link from 'next/link';
import { Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function ServiceDepartment() {
  return (
    <section aria-label="A Dedicated Service Department" className="bg-white pt-28 px-4 sm:px-6 lg:px-8 lg:pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
            A Dedicated Service Department
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-4 text-base leading-relaxed text-[#252525]/70">
            <p>
              Repairs at Quality Roofing are handled by our own knowledgeable and qualified service
              department, experienced in repairing and maintaining all types of roofing.
            </p>
            <p>
              From a single leak to an ongoing maintenance program, our service team is equipped to
              diagnose the issue and deliver a lasting solution.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="tel:8136204797"
              className="tap-target inline-flex items-center gap-2 text-sm font-bold text-[#154D29] hover:underline"
            >
              <Phone size={16} aria-hidden="true" />
              Call (813) 620-4797
            </a>
            <Link href="/about#team" className="tap-target group/arrow inline-flex items-center gap-1 text-sm font-bold text-[#154D29] hover:underline">
              Meet the Team
              <span className="inline-block transition-transform duration-300 group-hover/arrow:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
