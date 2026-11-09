import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Quality Roofing, Inc.',
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section aria-label="Page Not Found" className="flex min-h-[80vh] items-center bg-[#252525] px-4 pt-[96px] pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)]">
            Page Not Found
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#E6E6E6]">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
            back on track.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded bg-[#154D29] px-8 py-4 text-center text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154D29]/85 hover:shadow-lg"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="rounded border-2 border-white px-8 py-4 text-center text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
