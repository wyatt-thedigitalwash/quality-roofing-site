import Reveal from '@/components/Reveal';

const team = [
  { name: 'Richard C. Jenkins', title: 'Chief Executive Officer and Owner' },
  { name: 'John Garrison', title: 'Vice President', since: 1997 },
  { name: 'Vivian Reliz', title: 'Project Specialist', since: 2018 },
  { name: 'Haley Novak', title: 'Accounts Payable Specialist', since: 2018 },
  { name: 'Miriah Akers', title: 'Administration Director', since: 2012 },
  { name: 'Jennifer Palmonka', title: 'Accounts Receivable Specialist', since: 2025 },
  { name: 'David Placensio', title: 'Safety Director', since: 2018 },
  { name: 'Chris Brooks', title: 'Vice President of Sales' },
  { name: 'Susan Jenkins', title: 'Marketing Director', since: 2012 },
  { name: 'Adam Drury', title: 'Operations Director', since: 2013 },
  { name: 'Lauren Willmar', title: 'Production Manager', since: 2020 },
  { name: 'Ron Wiggins', title: 'Service Operations Manager', since: 2025 },
  { name: 'Ehsan Siddiqui', title: 'Sales Representative' },
  { name: 'Ken Davis', title: 'Sales Representative' },
];

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
          <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member) => (
              <li key={member.name}>
                <h3 className="text-xl font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
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
