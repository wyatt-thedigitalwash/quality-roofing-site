'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone } from 'lucide-react';

const servicePillars = [
  {
    name: 'Commercial',
    href: '/services/commercial',
    description: 'Offices, retail, warehouses, and hospitality',
  },
  {
    name: 'Residential',
    href: '/services/residential',
    description: 'Single-family homes, custom builds, and homeowner projects',
  },
  {
    name: 'Multi-Housing',
    href: '/services/multi-housing',
    description: 'Apartments, condos, HOA communities, and multi-family complexes',
  },
  {
    name: 'Repairs',
    href: '/services/repairs',
    description: 'Repairs, maintenance, roof assessments, and disaster restoration',
  },
];

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Manufacturers', href: '/manufacturers' },
  { name: 'Contact & Support', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-transparent'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[64px]' : 'h-[96px]'}`}>
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={scrolled ? '/assets/quality-roofing-logo.png' : '/assets/quality-roofing-logo-white.png'}
              alt="Quality Roofing, Inc."
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-300 font-[family-name:var(--font-dm-sans)] ${
                      scrolled ? 'text-[#252525] hover:text-[#154D29]' : 'text-white hover:text-white/75'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </Link>

                  {/* Dropdown */}
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="w-[520px] rounded-lg bg-white shadow-xl border border-[#E6E6E6] p-4 grid grid-cols-2 gap-2">
                      {servicePillars.map((pillar) => (
                        <Link
                          key={pillar.name}
                          href={pillar.href}
                          className="rounded-md p-3 hover:bg-[#E6E6E6]/50 transition-colors group/item"
                        >
                          <span className="block text-sm font-bold text-[#252525] group-hover/item:text-[#154D29] font-[family-name:var(--font-dm-sans)]">
                            {pillar.name}
                          </span>
                          <span className="block text-xs text-[#B6B5B3] mt-0.5 font-[family-name:var(--font-dm-sans)]">
                            {pillar.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors duration-300 font-[family-name:var(--font-dm-sans)] ${
                    scrolled ? 'text-[#252525] hover:text-[#154D29]' : 'text-white hover:text-white/75'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8136204797"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 font-[family-name:var(--font-dm-sans)] ${
                scrolled ? 'text-[#252525] hover:text-[#154D29]' : 'text-white hover:text-white/75'
              }`}
            >
              <Phone size={15} />
              (813) 620-4797
            </a>
            <Link
              href="/contact"
              className="rounded px-5 py-2.5 text-sm font-bold transition-all duration-300 font-[family-name:var(--font-dm-sans)] bg-[#154D29] text-white hover:bg-[#154D29]/85 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Request Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-7 h-5 flex flex-col justify-between"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ease-in-out origin-center ${
                scrolled && !mobileOpen ? 'bg-[#252525]' : 'bg-white'
              } ${mobileOpen ? 'translate-y-[9px] rotate-45 !bg-white' : ''}`}
            />
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ease-in-out ${
                scrolled && !mobileOpen ? 'bg-[#252525]' : 'bg-white'
              } ${mobileOpen ? 'opacity-0 scale-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ease-in-out origin-center ${
                scrolled && !mobileOpen ? 'bg-[#252525]' : 'bg-white'
              } ${mobileOpen ? '-translate-y-[9px] -rotate-45 !bg-white' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile slide-in panel */}
      <div
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Navigation menu"
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-[400px] bg-[#252525] overflow-y-auto transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo + Close */}
          <div className="flex items-center justify-between px-6 pt-8 pb-6">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/assets/quality-roofing-logo-white.png"
                alt="Quality Roofing, Inc."
                width={160}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="relative w-6 h-6 flex items-center justify-center"
              aria-label="Close menu"
            >
              <span className="absolute block h-0.5 w-5 rounded-full bg-white rotate-45" />
              <span className="absolute block h-0.5 w-5 rounded-full bg-white -rotate-45" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col">
            {navLinks.map((link, i) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  style={{
                    transitionDelay: mobileOpen ? `${300 + i * 50}ms` : '0ms',
                  }}
                  className={`transition-all duration-300 ease-out ${
                    mobileOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4'
                  }`}
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex w-full items-center justify-between py-4 px-6 text-lg font-semibold text-white hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.name}
                    <ChevronDown
                      size={18}
                      className={`text-[#B6B5B3] transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-10 pr-6 pb-2 flex flex-col gap-1">
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="py-2 text-base font-semibold text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
                      >
                        All Services
                      </Link>
                      {servicePillars.map((pillar) => (
                        <Link
                          key={pillar.name}
                          href={pillar.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-base text-[#E6E6E6] hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
                        >
                          {pillar.name}
                          <span className="block text-sm text-[#B6B5B3] font-[family-name:var(--font-dm-sans)]">
                            {pillar.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    transitionDelay: mobileOpen ? `${300 + i * 50}ms` : '0ms',
                  }}
                  className={`py-4 px-6 text-lg font-semibold text-white hover:text-[#154D29] transition-all duration-300 ease-out font-[family-name:var(--font-dm-sans)] ${
                    mobileOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Divider */}
            <hr className="mx-6 my-4 border-[#B6B5B3]/20" />

            {/* Bottom actions */}
            <div className="mt-auto px-6 pb-8">
              <a
                href="tel:8136204797"
                className="flex items-center gap-2 py-3 text-base font-semibold text-[#E6E6E6] hover:text-white transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
              >
                <Phone size={18} />
                (813) 620-4797
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block rounded bg-[#154D29] px-5 py-3.5 text-center text-base font-bold text-white hover:bg-[#154D29]/85 transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
              >
                Request Estimate
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
