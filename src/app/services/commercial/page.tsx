import type { Metadata } from 'next';
import PillarPageContent from '../_components/PillarPageContent';

export const metadata: Metadata = {
  title:
    'Commercial Roofing Services in Florida | Quality Roofing, Inc.',
  description:
    'Expert commercial roofing for offices, retail, warehouses, and hospitality across Florida. New construction, single ply, built up, metal roofing and more. Projects exceeding $5M.',
};

export default function CommercialPage() {
  return (
    <PillarPageContent
      heroHeadline="Commercial Roofing Across Florida"
      heroSubtext="Expert roofing solutions for offices, retail centers, warehouses, hotels, and large-scale commercial properties."
      overviewImage="/assets/sparkman-wharf-commercial-roofing-tampa.webp"
      overviewImageAlt="Sparkman Wharf commercial roofing project by Quality Roofing in Tampa"
      overviewParagraphs={[
        'Quality Roofing brings over 30 years of commercial roofing experience to projects across the entire state of Florida. From new construction to full roof replacements, our team works with general contractors, developers, architects, and property management companies to deliver roofing systems that perform for decades.',
        'We handle commercial projects of every scale, from neighborhood retail centers to developments exceeding $5 million. Our in-house staff and equipment give us full control over quality, safety, and scheduling, so your project stays on track from start to finish.',
        'As certified installers for GAF, Siplast, Johns Manville, and other leading manufacturers, we specify and install the right system for your building, backed by manufacturer warranties and our own commitment to craftsmanship.',
      ]}
      servicesHeadline="Our Commercial Services"
      services={[
        { name: 'New Construction', description: 'Complete roofing systems for new commercial buildings and developments.' },
        { name: 'Single Ply Systems', description: 'TPO, PVC, and EPDM membranes for flat and low-slope commercial roofs.' },
        { name: 'Built Up Roofing', description: 'Multi-layer BUR systems delivering proven long-term performance.' },
        { name: 'Modified Bitumen', description: 'Heat-welded and self-adhered modified bitumen for demanding commercial applications.' },
        { name: 'Standing Seam Metal', description: 'Architectural and structural metal panels for durability and aesthetics.' },
        { name: 'Pedestal Pavers', description: 'Elevated paver systems for rooftop decks, terraces, and amenity spaces.' },
        { name: 'Roof Replacement', description: 'Full tear-off and replacement with minimal disruption to building operations.' },
        { name: 'Roof Assessments', description: 'Detailed inspections and condition reports to inform maintenance and budgeting.' },
      ]}
      projectsHeadline="Featured Commercial Projects"
      projects={[
        { label: 'Apollo Industrial', image: '/assets/apollo-industrial.jpg' },
        { label: 'Boyette Retail', image: '/assets/boyette-retail.jpg' },
        { label: 'Shoppes at Bloomington', image: '/assets/shoppes-at-bloomington.jpg' },
      ]}
      ctaHeadline="Planning a Commercial Roofing Project?"
    />
  );
}
