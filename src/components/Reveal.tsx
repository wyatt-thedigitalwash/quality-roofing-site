'use client';

import type { ReactNode } from 'react';
import { useScrollReveal } from '@/lib/animations';

/* Scroll-reveal wrapper, so content sections can stay server components. */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      style={isVisible && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}
