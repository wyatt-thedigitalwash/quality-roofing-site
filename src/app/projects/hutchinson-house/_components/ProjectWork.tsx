import Image from 'next/image';
import Reveal from '@/components/Reveal';

const scope = [
  {
    title: 'Protecting the Architecture',
    text: 'Scaffolding went up around the building, equipped with mesh to catch any falling debris and safeguard the architecture during renovations.',
    image: '/assets/hutchinson-house-material-staging-telehandler.webp',
    alt: 'Quality Roofing telehandler lifting materials to the Hutchinson House roof beside mesh-wrapped scaffolding',
  },
  {
    title: 'Vermont Slate Mansard',
    text: 'The mansard roof is clad in Vermont SW Gray roofing slate, wrapping each corner and dormer of the building.',
    image: '/assets/hutchinson-house-slate-mansard-copper-dormer.webp',
    alt: 'Corner of the finished Vermont gray slate mansard roof with a copper dormer',
  },
  {
    title: 'Custom-Cut Fish Scale Slate',
    text: 'Quality Roofing custom cut fish scale pattern slate and integrated it into the roof to match the original building design.',
    image: '/assets/hutchinson-house-fish-scale-slate-install.webp',
    alt: 'Custom-cut fish scale slate courses being installed over underlayment beside a copper valley',
  },
  {
    title: 'Copper Trim, Dormers, and Flashings',
    text: 'High-quality copper trim and standing seam dormers enhance the exterior. New copper window flashings and decorative corbels complete the details.',
    image: '/assets/hutchinson-house-copper-dormers-fish-scale-slate.webp',
    alt: 'Standing seam copper dormers above fish scale slate and copper trim on the red brick Hutchinson House',
  },
  {
    title: 'White TPO at the Pinnacle',
    text: 'A white TPO roof tops the building at the pinnacle, framed by its tall brick chimneys.',
    image: '/assets/hutchinson-house-dried-in-roof-aerial.webp',
    alt: 'Aerial view of the white TPO roof and brick chimneys at the top of the Hutchinson House',
  },
  {
    title: 'Structural Repairs and Internal Gutters',
    text: 'Extensive structural support repairs made it possible to accommodate the copper internal gutter system and preserve the decorative trim details.',
    image: '/assets/hutchinson-house-slate-install-scaffolding-aerial.webp',
    alt: 'Aerial view of the slate mansard and copper internal gutter system seen from above the scaffolding',
  },
];

/* Grid spans are per image so portrait and landscape shots share a row cleanly. */
const stages = [
  {
    title: 'Tear-Off',
    text: 'Removing the old roof exposed corroded dormer metal, worn slate, and the wood deck beneath.',
    images: [
      {
        src: '/assets/hutchinson-house-corroded-dormer-tear-off.webp',
        alt: 'Corroded metal dormer cap and worn slate uncovered during tear-off',
        span: 'aspect-[3/4]',
      },
      {
        src: '/assets/hutchinson-house-roofer-working-slate.webp',
        alt: 'Roofer in a safety harness working on the old slate by hand',
        span: 'aspect-[3/4]',
      },
      {
        src: '/assets/hutchinson-house-crew-on-mansard.webp',
        alt: 'Quality Roofing crew on the stripped wood deck of the mansard roof with a Tampa high-rise behind them',
        span: 'col-span-2 aspect-[16/10] lg:aspect-auto',
      },
    ],
  },
  {
    title: 'Dry-In',
    text: 'The crew worked around every dormer by hand, sealing the mansard in Polyglass self-adhered underlayment before the slate went on.',
    images: [
      {
        src: '/assets/hutchinson-house-crew-underlayment-dormer.webp',
        alt: 'Roofers in harnesses installing underlayment around an arched dormer window',
        span: 'col-span-2 aspect-[4/5] lg:col-span-1 lg:aspect-[3/4]',
      },
      {
        src: '/assets/hutchinson-house-underlayment-downtown-skyline.webp',
        alt: 'Mansard roof wrapped in Polyglass underlayment with the downtown Tampa skyline behind it',
        span: 'col-span-2 aspect-[16/10] lg:col-span-3 lg:aspect-auto',
      },
    ],
  },
  {
    title: 'Slate and Copper',
    text: 'Vermont slate and custom-cut fish scale courses went on from the scaffolding, tied into new copper dormers, trim, and gutters.',
    images: [
      {
        src: '/assets/hutchinson-house-scaffolding-copper-dormers-skyline.webp',
        alt: 'New slate and copper dormers on the Hutchinson House with a Quality Roofing banner on the scaffolding and the Tampa skyline beyond',
        span: 'col-span-2 aspect-[16/10] lg:col-span-4 lg:aspect-[16/9]',
      },
    ],
  },
  {
    title: 'Finished',
    text: 'The finished roof pairs white TPO at the pinnacle with gray slate on the mansard and copper at the dormers, trim, and windows.',
    images: [
      {
        src: '/assets/hutchinson-house-finished-roof-aerial-tampa.webp',
        alt: 'Aerial view of the completed Hutchinson House on its brick-paved Tampa street corner',
        span: 'col-span-2 aspect-[16/10] lg:col-span-4 lg:aspect-[16/9]',
      },
    ],
  },
];

function Scope() {
  return (
    <section aria-label="The Scope of Work" data-bg="white" className="bg-white px-4 pb-28 lg:pb-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
            The Scope of Work
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {scope.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 120}>
              <article>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#252525]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#252525]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#252525]/70">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section aria-label="From Tear-Off to Finish" data-bg="dark" className="bg-[#252525] px-4 py-28 lg:py-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-white font-[family-name:var(--font-dm-serif)]">
            From Tear-Off to Finish
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16">
          {stages.map((stage) => (
            <Reveal key={stage.title}>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                <div>
                  <h3 className="text-2xl font-normal text-white font-[family-name:var(--font-dm-serif)]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#B6B5B3]">
                    {stage.text}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-cols-4">
                  {stage.images.map((image) => (
                    <div
                      key={image.src}
                      className={`relative overflow-hidden rounded-lg ${image.span}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectWork() {
  return (
    <>
      <Scope />
      <Process />
    </>
  );
}
