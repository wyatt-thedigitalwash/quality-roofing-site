'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone } from 'lucide-react';
import { navLinks, servicePillars } from '@/lib/navigation';

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/* Slide-in navigation for phones and tablets. While open it traps focus, closes on Escape,
   and returns focus to the menu button. While closed it is inert, so nothing in it can be
   reached with the keyboard. */
export default function MobileMenu({
  open,
  onClose,
  returnFocusRef,
}: {
  open: boolean;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      wasOpen.current = true;
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      if (wasOpen.current) {
        wasOpen.current = false;
        returnFocusRef.current?.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, returnFocusRef]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = [...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null && !el.closest('[inert]')
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
    {/* Mobile overlay */}
    <div
      className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
      aria-hidden="true"
    />

    {/* Mobile slide-in panel */}
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      inert={!open}
      className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-[400px] bg-[#252525] overflow-y-auto transition-transform duration-300 ease-in-out ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo + Close */}
        <div className="flex items-center justify-between px-6 pt-8 pb-6">
          <Link href="/" aria-label="Quality Roofing, Inc. home" onClick={() => onClose()}>
            <Image
              src="/assets/quality-roofing-logo-white-no-phone.svg"
              alt="Quality Roofing, Inc."
              width={75}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="relative box-content -m-2.5 p-2.5 w-6 h-6 flex items-center justify-center"
            aria-label="Close menu"
          >
            <span className="absolute block h-0.5 w-5 rounded-full bg-white rotate-45" />
            <span className="absolute block h-0.5 w-5 rounded-full bg-white -rotate-45" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Main navigation" className="flex-1 flex flex-col">
          {navLinks.map((link, i) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                style={{
                  transitionDelay: open ? `${300 + i * 50}ms` : '0ms',
                }}
                className={`transition-all duration-300 ease-out ${
                  open
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services"
                  className="flex w-full items-center justify-between py-4 px-6 text-lg font-semibold text-white hover:text-[#154D29] transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`text-[#B6B5B3] transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id="mobile-services"
                  inert={!servicesOpen}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    servicesOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-10 pr-6 pb-2 flex flex-col gap-1">
                    <Link
                      href="/services"
                      onClick={() => onClose()}
                      className="py-2.5 text-base font-semibold text-white transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
                    >
                      All Services
                    </Link>
                    {servicePillars.map((pillar) => (
                      <Link
                        key={pillar.name}
                        href={pillar.href}
                        onClick={() => onClose()}
                        className="py-2 text-base text-[#E6E6E6] hover:text-white transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
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
                onClick={() => onClose()}
                style={{
                  transitionDelay: open ? `${300 + i * 50}ms` : '0ms',
                }}
                className={`py-4 px-6 text-lg font-semibold text-white hover:text-[#154D29] transition-all duration-300 ease-out font-[family-name:var(--font-dm-sans)] ${
                  open
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
              <Phone size={18} aria-hidden="true" />
              (813) 620-4797
            </a>

            <Link
              href="/contact"
              onClick={() => onClose()}
              className="mt-3 block rounded bg-[#154D29] px-5 py-3.5 text-center text-base font-bold text-white hover:bg-[#154D29]/85 transition-colors duration-300 font-[family-name:var(--font-dm-sans)]"
            >
              Request Estimate
            </Link>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
}
