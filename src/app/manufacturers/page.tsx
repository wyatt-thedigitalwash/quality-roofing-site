import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import ManufacturersContent from './ManufacturersContent';

export const metadata: Metadata = pageMetadata({
  title: "Certified Manufacturers | Quality Roofing, Inc., Tampa FL",
  description:
    "Quality Roofing of Tampa, FL is a certified installer for GAF, Siplast, Johns Manville, Owens Corning, Polyglass, and SIKA roofing systems across Florida.",
  path: '/manufacturers',
});

export default function ManufacturersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Manufacturers', path: '/manufacturers' }])} />
      <ManufacturersContent />
    </>
  );
}
