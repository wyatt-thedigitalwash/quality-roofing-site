import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title:
    'Roofing Services | Commercial, Residential & Multi-Housing | Quality Roofing',
  description:
    'Full-service roofing contractor in Florida. Commercial, residential, multi-housing roofing and repairs. GAF Master Elite certified. Serving all of Florida since 1994.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
