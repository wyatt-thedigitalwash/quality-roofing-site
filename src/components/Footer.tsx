import Link from 'next/link';
import Image from 'next/image';

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Manufacturers', href: '/manufacturers' },
  { name: 'Contact & Support', href: '/contact' },
];

const serviceLinks = [
  { name: 'All Services', href: '/services' },
  { name: 'Commercial', href: '/services/commercial' },
  { name: 'Residential', href: '/services/residential' },
  { name: 'Multi-Housing', href: '/services/multi-housing' },
  { name: 'Repairs', href: '/services/repairs' },
  { name: 'Condominiums', href: '/services/condominiums' },
];

const areaLinks = [
  { name: 'Tampa', href: '/' },
  { name: 'St. Petersburg', href: '/st-petersburg' },
  { name: 'Clearwater', href: '/clearwater' },
  { name: 'Riverview', href: '/riverview' },
];

const certifications = [
  'GAF Master Elite / Select',
  'Siplast Select Contractor',
  'Johns Manville Certified',
  'Owens Corning Preferred',
  'Polyglass Preferred',
  'Certified SIKA Applicator',
  'Brava Certified Installer',
];

export default function Footer() {
  return (
    <footer className="bg-[#252525]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-5">
          {/* Column 1: Logo + Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" aria-label="Quality Roofing, Inc. home">
              <Image
                src="/assets/quality-roofing-logo-white-no-phone.svg"
                alt="Quality Roofing, Inc."
                width={150}
                height={96}
                className="h-24 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)]">
              A licensed and state certified roofing and general contracting
              firm serving all of Florida since 1994.
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-[#E6E6E6] font-[family-name:var(--font-dm-sans)]">
              1905 N. 40th Street
              <br />
              Tampa, FL 33605
            </address>
            <a
              href="tel:8136204797"
              className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold text-[#E6E6E6] lg:mt-3 lg:min-h-0 hover:text-white transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
            >
              (813) 620-4797
            </a>
            <a
              href="mailto:info@quality-roofing.com"
              className="inline-flex min-h-11 items-center text-sm text-[#E6E6E6] hover:text-white lg:mt-1 lg:min-h-0 transition-colors duration-300"
            >
              info@quality-roofing.com
            </a>
          </div>

          {/* Column 2: Company */}
          <div>
            <h2 className="text-lg font-normal text-white font-[family-name:var(--font-dm-serif)]">
              Company
            </h2>
            <ul className="mt-2 lg:mt-4 lg:space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm text-[#E6E6E6] hover:text-white transition-colors duration-300 lg:min-h-0 lg:min-w-0 font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h2 className="text-lg font-normal text-white font-[family-name:var(--font-dm-serif)]">
              Services
            </h2>
            <ul className="mt-2 lg:mt-4 lg:space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm text-[#E6E6E6] hover:text-white transition-colors duration-300 lg:min-h-0 lg:min-w-0 font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h2 className="text-lg font-normal text-white font-[family-name:var(--font-dm-serif)]">
              Service Areas
            </h2>
            <ul className="mt-2 lg:mt-4 lg:space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm text-[#E6E6E6] hover:text-white transition-colors duration-300 lg:min-h-0 lg:min-w-0 font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Certifications */}
          <div>
            <h2 className="text-lg font-normal text-white font-[family-name:var(--font-dm-serif)]">
              Certifications
            </h2>
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
                className="text-[#E6E6E6] underline hover:text-white transition-colors duration-300"
              >
                The Digital Wash
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              {' | '}
              <Link href="/privacy" className="text-[#E6E6E6] underline hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
