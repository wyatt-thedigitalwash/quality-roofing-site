'use client';

import { useId, useState } from 'react';
import type { Faq } from '@/lib/faqs';

/* One answer open at a time. Answers stay in the HTML for search engines; collapsed ones are
   hidden from screen readers and the tab order. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div
            key={faq.question}
            className={`rounded-lg transition-colors duration-300 ${isOpen ? 'bg-[#154D29]/[0.07]' : 'bg-[#E6E6E6]/40 hover:bg-[#E6E6E6]/70'}`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-4 rounded-lg p-5 text-left text-lg font-semibold transition-colors duration-200 sm:p-6 ${
                  isOpen ? 'text-[#154D29]' : 'text-[#252525] hover:text-[#154D29]'
                }`}
              >
                {faq.question}
                <span
                  aria-hidden="true"
                  className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen ? 'bg-[#154D29]' : 'bg-white'
                  }`}
                >
                  <span className={`absolute h-0.5 w-3.5 rounded-full ${isOpen ? 'bg-white' : 'bg-[#154D29]'}`} />
                  <span
                    className={`absolute h-3.5 w-0.5 rounded-full transition-transform duration-300 ${
                      isOpen ? 'scale-y-0 bg-white' : 'bg-[#154D29]'
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out ${
                isOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-base leading-relaxed text-[#252525]/80 sm:px-6">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
