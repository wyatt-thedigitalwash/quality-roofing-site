import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import ContactContent from './ContactContent';

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Quality Roofing, Inc., Tampa FL",
  description:
    "Request a free roofing estimate from Quality Roofing, Inc. in Tampa, FL for commercial, residential, and multi-housing roofing across Florida. (813) 620-4797.",
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Contact', path: '/contact' }])} />
      <ContactContent />
    </>
  );
}
