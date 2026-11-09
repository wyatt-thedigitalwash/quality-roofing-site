'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section aria-label="Something Went Wrong" className="flex min-h-[80vh] items-center bg-[#252525] px-4 pt-[96px] pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)]">
            Something Went Wrong
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6]">
            An unexpected error occurred. Please try again, or call us at{' '}
            <a href="tel:8136204797" className="tap-target font-semibold text-white underline">
              (813) 620-4797
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="rounded bg-[#154D29] px-8 py-4 text-center text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154D29]/85 hover:shadow-lg"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="rounded border-2 border-white px-8 py-4 text-center text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
