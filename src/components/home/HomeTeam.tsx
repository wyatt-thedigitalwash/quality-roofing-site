import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { outlineButton } from '@/lib/buttons';
import { homeTeamHighlight } from '@/lib/team';

export default function HomeTeam() {
  return (
    <section aria-label="The People Behind Every Roof" data-bg="white" className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
              The People Behind Every Roof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#252525]/70">
              Quality Roofing is a team of real people, many of whom have been with us for over a
              decade. From the office to the sheet metal shop to the job site, the same in-house team
              handles your project from the first estimate to the final walkthrough.
            </p>
          </Reveal>
          <Reveal delay={120} className="shrink-0">
            <Link href="/about#team" className={outlineButton}>
              Meet the Full Team
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {homeTeamHighlight.map((member, i) => (
            <li
              key={member.name}
              // Keep the two-column mobile grid even: drop an odd last card (Chris Brooks) below 768px
              className={homeTeamHighlight.length % 2 === 1 && i === homeTeamHighlight.length - 1 ? 'hidden md:block' : undefined}
            >
              <Reveal delay={i * 80}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#E6E6E6]">
                  {member.photo && (
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.title} at Quality Roofing, Inc.`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <h3 className="mt-3 text-lg font-normal leading-snug text-[#252525] font-[family-name:var(--font-dm-serif)]">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm text-[#252525]/70">{member.title}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
