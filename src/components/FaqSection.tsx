import JsonLd from '@/components/JsonLd';
import FaqList from '@/components/FaqList';
import Reveal from '@/components/Reveal';
import type { Faq } from '@/lib/faqs';

/* Questions and answers, with matching FAQPage structured data. */
export default function FaqSection({
  faqs,
  heading = 'Frequently Asked Questions',
  className = '',
}: {
  faqs: Faq[];
  heading?: string;
  className?: string;
}) {
  return (
    <section aria-label={heading} className={`bg-white px-4 sm:px-6 lg:px-8 ${className}`}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15] font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
            {heading}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#252525]/70">
            Have a question that isn&apos;t answered here? Call us at{' '}
            <a href="tel:8136204797" className="tap-target font-semibold text-[#154D29] underline">
              (813) 620-4797
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-3">
          <FaqList faqs={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
