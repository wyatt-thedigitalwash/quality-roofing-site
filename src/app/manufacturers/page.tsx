import type { Metadata } from 'next';
import ManufacturersContent from './ManufacturersContent';

export const metadata: Metadata = {
  title:
    'Certified Manufacturer Partnerships | Quality Roofing, Inc. | Florida',
  description:
    'Quality Roofing is a certified installer for GAF, Siplast, Johns Manville, Owens Corning, Polyglass, and SIKA. Manufacturer-backed warranties on every installation across Florida.',
};

export default function ManufacturersPage() {
  return <ManufacturersContent />;
}
