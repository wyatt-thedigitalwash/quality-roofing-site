import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

/* Links to the Hutchinson House project page from elsewhere on the site. */
export default function FeaturedProjectSpotlight({
  image,
  imageAlt,
  headingLevel: Heading = 'h2',
}: {
  image: string;
  imageAlt: string;
  headingLevel?: 'h2' | 'h3';
}) {
  return (
    <Reveal>
      <Link
        href="/projects/hutchinson-house"
        className="group grid grid-cols-1 overflow-hidden rounded-lg bg-[#252525] lg:grid-cols-5"
      >
        <div className="relative aspect-[4/3] overflow-hidden lg:col-span-3 lg:aspect-auto lg:min-h-[440px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
          <Heading className="text-[clamp(1.75rem,3.25vw,2.25rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
            The Hutchinson House
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-[#E6E6E6]">
            A 1908 Tampa landmark, re-roofed with Vermont slate, custom-cut fish
            scale detail, and standing seam copper dormers. Recognized with an
            FRSA S.T.A.R. Award for Craftsmanship in Roofing.
          </p>
          <span className="mt-6 self-start rounded border-2 border-white px-6 py-3 text-center text-base font-bold text-white transition-colors duration-200 group-hover:bg-white group-hover:text-[#252525]">
            View the Project
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
