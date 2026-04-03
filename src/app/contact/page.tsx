import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title:
    'Contact Quality Roofing, Inc. | Free Estimates | Florida Roofing Contractor',
  description:
    'Request a free roofing estimate from Quality Roofing, Inc. Commercial, residential, and multi-housing roofing services across Florida. Call (813) 620-4797.',
};

export default function ContactPage() {
  return <ContactContent />;
}
