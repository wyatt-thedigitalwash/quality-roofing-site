import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata, serviceSchema } from '@/lib/seo';
import ServicesContent from './ServicesContent';

const DESCRIPTION =
  "Commercial, residential, and multi-housing roofing plus roof repairs from Tampa, FL. A GAF Master Elite certified roofing contractor serving Florida since 1994.";

export const metadata: Metadata = pageMetadata({
  title: "Roofing Services | Quality Roofing, Inc., Tampa FL",
  description: DESCRIPTION,
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: 'Roofing Services', description: DESCRIPTION, path: '/services' })} />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', path: '/services' }])} />
      <ServicesContent />
    </>
  );
}
