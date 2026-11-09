import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata, serviceSchema } from '@/lib/seo';
import { commercialFaqs } from '@/lib/faqs';
import PillarPageContent from '../_components/PillarPageContent';

const NAME = 'Commercial Roofing';
const PATH = '/services/commercial';
const DESCRIPTION =
  "Commercial roofing in Tampa, FL and across Florida for offices, retail, warehouses, and hotels, including single ply, built up, modified bitumen, and metal.";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Roofing | Quality Roofing, Inc., Tampa FL",
  description: DESCRIPTION,
  path: PATH,
});

export default function CommercialPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: NAME, description: DESCRIPTION, path: PATH })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Services', path: '/services' },
          { name: NAME, path: PATH },
        ])}
      />
      <PillarPageContent
      heroImage="/assets/city-center-at-hanna-roofing-aerial.webp"
      heroImageAlt="Aerial view of the City Center at Hanna roof"
      heroHeadline="Commercial Roofing in Tampa and Across Florida"
      heroSubtext="Expert roofing solutions for offices, retail centers, warehouses, hotels, and large-scale commercial properties."
      overviewImage="/assets/sparkman-wharf-commercial-roofing-tampa.webp"
      overviewImageAlt="Sparkman Wharf commercial roofing project by Quality Roofing in Tampa"
      overviewHeadline="Commercial Roofing at Every Scale"
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
        { name: 'Standing Seam Metal', description: 'Architectural and structural metal panels for durability and aesthetics.', href: '/services/standing-seam-metal' },
        { name: 'Pedestal Pavers', description: 'Elevated paver systems for rooftop decks, terraces, and amenity spaces.' },
        { name: 'Roof Replacement', description: 'Full tear-off and replacement with minimal disruption to building operations.' },
        { name: 'Roof Assessments', description: 'Detailed inspections and condition reports to inform maintenance and budgeting.' },
      ]}
      projectsHeadline="Featured Commercial Projects"
      projects={[
        { label: 'Dunedin City Hall', image: '/assets/dunedin-city-hall-roofing-aerial.webp' },
        { label: 'UT Multipurpose', image: '/assets/ut-multipurpose-roof-aerial.webp' },
        { label: 'Belleview Biltmore', image: '/assets/belleview-biltmore-roof-aerial.webp' },
      ]}
      faqs={commercialFaqs}
      ctaHeadline="Planning a Commercial Roofing Project?"
    />
    </>
  );
}
