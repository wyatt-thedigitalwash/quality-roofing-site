import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title:
    'About Quality Roofing, Inc. | Florida\'s Trusted Roofing Contractor Since 1994',
  description:
    'Third generation roofing and general contracting firm serving all of Florida. Over 100 employees, $29M+ annual volume, and 30+ years of expertise in commercial, residential, and multi-housing roofing.',
};

export default function AboutPage() {
  return <AboutContent />;
}
