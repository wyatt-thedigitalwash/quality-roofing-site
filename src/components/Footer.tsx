import Link from 'next/link';
import Image from 'next/image';

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Manufacturers', href: '/manufacturers' },
  { name: 'Contact & Support', href: '/contact' },
];

const serviceLinks = [
  { name: 'Commercial', href: '/services/commercial' },
  { name: 'Residential', href: '/services/residential' },
  { name: 'Multi-Housing', href: '/services/multi-housing' },
  { name: 'Repairs', href: '/services/repairs' },
];

const certifications = [
  'GAF Master Elite / Select',
  'Siplast Select Contractor',
  'Johns Manville Certified',
  'Owens Corning Preferred',
  'Polyglass Preferred',
  'Certified SIKA Applicator',
];

export default function Footer() {
  return (
    <footer className="bg-[#252525]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* Column 1: Logo + Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/assets/quality-roofing-logo-white.png"
                alt="Quality Roofing, Inc."
                width={180}
                height={36}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)]">
              A third generation licensed and state certified roofing and general
              contracting firm serving all of Florida since 1994.
            </p>
            <a
              href="tel:8136204797"
              className="mt-4 text-sm font-semibold text-[#E6E6E6] hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
            >
              (813) 620-4797
            </a>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider text-white font-[family-name:var(--font-dm-serif)]">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E6E6E6] hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider text-white font-[family-name:var(--font-dm-serif)]">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E6E6E6] hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider text-white font-[family-name:var(--font-dm-serif)]">
              Certifications
            </h3>
            <ul className="mt-4 space-y-2.5">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="text-sm text-[#E6E6E6] font-[family-name:var(--font-dm-sans)]"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#B6B5B3]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col items-center gap-2 text-center text-xs text-[#B6B5B3] font-[family-name:var(--font-dm-sans)]">
            <p>
              License #CCC042846 (Roofing) &amp; #CGC1507166 (General Contractor)
            </p>
            <p>
              &copy; {new Date().getFullYear()} Quality Roofing, Inc. All rights
              reserved.
              {' '}
              Website by{' '}
              <a
                href="https://thedigitalwash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6E6E6] hover:text-[#154D29] transition-colors duration-300"
              >
                The Digital Wash
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
