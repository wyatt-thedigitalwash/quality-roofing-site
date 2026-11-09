import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Quality Roofing, Inc., Tampa FL",
  description:
    "Read how Quality Roofing, Inc. of Tampa, FL collects, uses, and protects the information you share through our website and our roofing estimate request form.",
  path: '/privacy',
});

const sections = [
  {
    title: 'Information We Collect',
    text: 'When you submit our estimate request form, we collect the details you provide: your name, email address, phone number, property address, information about your building and roof, and your message.',
  },
  {
    title: 'How We Use It',
    text: 'We use this information to respond to your request, prepare estimates, and communicate with you about your project.',
  },
  {
    title: 'How It Is Shared',
    text: 'We do not sell your information. Form submissions are delivered to our team through an email service provider that handles the message on our behalf. We may also disclose information when required by law.',
  },
  {
    title: 'Website Hosting and Media',
    text: 'Our website is hosted by a third-party provider, and our video and fonts may load from third-party services. These providers may process technical information, such as your IP address, in order to deliver the site.',
  },
  {
    title: 'Your Choices',
    text: 'To ask about, update, or delete information you have shared with us, call (813) 620-4797 or write to the address below.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Privacy Policy', path: '/privacy' }])} />
      <section aria-label="Privacy Policy" className="bg-[#252525] px-4 pt-[160px] pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.1] text-white font-[family-name:var(--font-dm-serif)]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-[#E6E6E6]">Last updated November 2026</p>
        </div>
      </section>
      <section aria-label="Privacy policy details" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#252525]/70">{section.text}</p>
            </div>
          ))}
          <address className="text-base not-italic leading-relaxed text-[#252525]/70">
            Quality Roofing, Inc.
            <br />
            1905 N. 40th Street
            <br />
            Tampa, FL 33605
          </address>
        </div>
      </section>
    </>
  );
}
