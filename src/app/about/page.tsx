import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import AboutContent from './AboutContent';

export const metadata: Metadata = pageMetadata({
  title: "About Us | Quality Roofing, Inc., Tampa FL",
  description:
    "Meet Quality Roofing, Inc., a licensed, state-certified roofing and general contracting company headquartered in Tampa, FL and serving all of Florida since 1994.",
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'About', path: '/about' }])} />
      <AboutContent />
    </>
  );
}
