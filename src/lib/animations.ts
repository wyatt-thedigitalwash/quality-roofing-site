'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/* ──────────────────────────────────────────────
   useScrollReveal
   Attaches an IntersectionObserver to the ref.
   Returns { ref, isVisible } — apply CSS classes
   based on isVisible. Fires once.
   ────────────────────────────────────────────── */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/* ──────────────────────────────────────────────
   useCountUp
   Counts from 0 to `end` over `duration` ms
   using an ease-out curve. Returns the current
   display value as a string with optional
   prefix/suffix.
   ────────────────────────────────────────────── */
export function useCountUp({
  end,
  duration = 1800,
  prefix = '',
  suffix = '',
  start = false,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (!start) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setDisplay(`${prefix}${end}${suffix}`);
      return;
    }

    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);

      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration, prefix, suffix]);

  return display;
}

/* ──────────────────────────────────────────────
   Animation class helpers
   These return Tailwind-compatible class strings
   for consistent reveal animations.
   ────────────────────────────────────────────── */
export function revealClasses(isVisible: boolean, delay = 0): string {
  const base =
    'transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]';
  const hidden = 'opacity-0 translate-y-6';
  const visible = 'opacity-100 translate-y-0';
  const delayClass = delay > 0 ? `delay-[${delay}ms]` : '';

  return `${base} ${isVisible ? visible : hidden} ${delayClass}`.trim();
}
