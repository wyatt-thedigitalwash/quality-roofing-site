import Link from 'next/link';

/* Primary call to action used in page headers. Matches the homepage hero button. */
export default function HeroCta() {
  return (
    <Link
      href="/contact"
      className="inline-block rounded bg-[#154D29] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154D29]/85 hover:shadow-lg"
    >
      Request a Free Estimate
    </Link>
  );
}
