'use client';

import { useState, useEffect, useRef, type MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { navLinks, servicePillars } from '@/lib/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setMobileOpen(false);
  // Closes the Services dropdown after a click. Hovering or focusing it again re-enables it.
  const [dropdownDismissed, setDropdownDismissed] = useState(false);

  const dismissDropdown = (event: MouseEvent<HTMLAnchorElement>) => {
    setDropdownDismissed(true);
    event.currentTarget.blur();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-transparent'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className={`relative flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[64px]' : 'h-[96px]'}`}>
          {/* Logo */}
          <Link href="/" aria-label="Quality Roofing, Inc. home" className="shrink-0">
            <Image
              src={scrolled ? '/assets/quality-roofing-logo-green-no-phone.svg' : '/assets/quality-roofing-logo-white-no-phone.svg'}
              alt="Quality Roofing, Inc."
              width={75}
              height={48}
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-12' : 'h-16 md:h-[76px]'}`}
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center justify-center gap-1 whitespace-nowrap absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseLeave={() => setDropdownDismissed(false)}
                  onFocus={() => setDropdownDismissed(false)}
                >
                  <Link
                    href={link.href}
                    onClick={dismissDropdown}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-300 font-[family-name:var(--font-dm-sans)] ${
                      scrolled ? 'text-[#252525] hover:text-[#154D29]' : 'text-white hover:text-white/75'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownDismissed ? '' : 'group-hover:rotate-180'}`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`invisible opacity-0 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-2 ${
                      dropdownDismissed
                        ? ''
                        : 'group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100'
                    }`}
                  >
                    <div className="w-[520px] whitespace-normal rounded-lg bg-white shadow-xl border border-[#E6E6E6] p-4 grid grid-cols-2 gap-2">
                      {servicePillars.map((pillar) => (
                        <Link
                          key={pillar.name}
                          href={pillar.href}
                          onClick={dismissDropdown}
                          className="rounded-md p-3 hover:bg-[#E6E6E6]/50 transition-colors group/item odd:last:col-span-2"
                        >
                          <span className="block text-sm font-bold text-[#252525] group-hover/item:text-[#154D29] font-[family-name:var(--font-dm-sans)]">
                            {pillar.name}
                          </span>
                          <span className="block text-xs text-[#252525]/70 mt-0.5 font-[family-name:var(--font-dm-sans)]">
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
              className={`hidden xl:flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 font-[family-name:var(--font-dm-sans)] ${
                scrolled ? 'text-[#252525] hover:text-[#154D29]' : 'text-white hover:text-white/75'
              }`}
            >
              <Phone size={15} aria-hidden="true" />
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
            ref={toggleRef}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative box-content -m-3 p-3 w-7 h-5 flex flex-col justify-between"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
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

      <MobileMenu open={mobileOpen} onClose={closeMenu} returnFocusRef={toggleRef} />
    </header>
  );
}
