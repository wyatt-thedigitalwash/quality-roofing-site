import Image from 'next/image';

/* Photo behind an inner-page header. The overlays keep the header text and navigation
   readable over bright roofs, using the same treatment as the homepage hero. Fills its
   positioned parent. */
export default function PageHeroBackground({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      <Image src={src} alt={alt} fill preload loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
      {/* Flat below 1280px, where the text spans too much of the width for a gradient */}
      <div className="absolute inset-0 bg-[#252525]/72 xl:bg-transparent xl:bg-gradient-to-r xl:from-[#252525]/85 xl:via-[#252525]/70 xl:via-50% xl:to-[#252525]/15" />
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#252525]/85 to-transparent" />
    </>
  );
}
