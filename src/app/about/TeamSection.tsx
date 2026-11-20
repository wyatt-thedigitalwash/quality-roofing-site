import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { team } from '@/lib/team';

const initials = (name: string) =>
  name
    .split(' ')
    .filter((part) => /^[A-Z]/.test(part) && !part.endsWith('.'))
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

export default function TeamSection() {
  return (
    <section aria-label="Meet the Team" id="team" className="bg-white pt-28 px-4 sm:px-6 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
            Meet the Team
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#E6E6E6]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.title} at Quality Roofing, Inc.`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center text-5xl text-[#154D29]/40 font-[family-name:var(--font-dm-serif)]"
                    >
                      {initials(member.name)}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-normal text-[#252525] sm:text-xl font-[family-name:var(--font-dm-serif)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[#252525]/70">{member.title}</p>
                {member.since && (
                  <p className="mt-1 text-sm text-[#252525]/70">Team Member Since {member.since}</p>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
