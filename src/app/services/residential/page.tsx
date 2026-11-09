import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata, serviceSchema } from '@/lib/seo';
import { residentialFaqs } from '@/lib/faqs';
import PillarPageContent from '../_components/PillarPageContent';

const NAME = 'Residential Roofing';
const PATH = '/services/residential';
const DESCRIPTION =
  "Residential roofing in Tampa, FL and across Florida. Shingle, tile, slate, and standing seam metal roofs installed by a third generation certified roofer.";

export const metadata: Metadata = pageMetadata({
  title: "Residential Roofing | Quality Roofing, Inc., Tampa FL",
  description: DESCRIPTION,
  path: PATH,
});

export default function ResidentialPage() {
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
      heroImage="/assets/private-residence-roof-aerial.webp"
      heroImageAlt="Aerial view of a private residence roof in Florida"
      heroHeadline="Residential Roofing in Tampa Bay"
      heroSubtext="Protecting Tampa Bay and Florida homes with quality craftsmanship, premium materials, and a reputation built on referrals."
      overviewImage="/assets/private-residence-roof-overhead.webp"
      overviewImageAlt="Overhead view of a private residence roof by Quality Roofing in Florida"
      overviewHeadline="A Roof Built to Protect Your Home"
        overviewParagraphs={[
        'Your home is your most important investment, and the roof protecting it should be built to last. Quality Roofing has been serving Florida homeowners since 1994, delivering residential roofing solutions that combine premium materials with the craftsmanship that three generations of experience demand.',
        'Whether you are building a new home, replacing an aging roof, or need expert repairs, our team handles every project with the same attention to detail. We work directly with homeowners to explain options, recommend the right materials, and deliver results that exceed expectations.',
        'As certified installers for GAF, Owens Corning, and other top manufacturers, we offer the highest levels of warranty coverage available. The majority of our residential work comes through referrals, a reflection of the trust and satisfaction our homeowners experience.',
      ]}
      servicesHeadline="Our Residential Services"
      services={[
        { name: 'Shingle / Tile / Slate', description: 'Premium roofing materials matched to your home\'s style and Florida\'s climate.' },
        { name: 'Standing Seam Metal', description: 'Durable metal roofing with clean lines and exceptional wind resistance.', href: '/services/standing-seam-metal' },
        { name: 'New Construction', description: 'Roofing for new homes and custom builds, coordinated with your builder.' },
        { name: 'Roof Replacement', description: 'Complete tear-off and replacement with premium materials and manufacturer warranties.' },
        { name: 'Repairs & Maintenance', description: 'Leak repairs, storm damage fixes, and proactive maintenance to extend roof life.' },
        { name: 'Roof Assessments', description: 'Thorough inspections to evaluate condition and plan for the future.' },
      ]}
      projectsHeadline="Featured Residential Projects"
      projects={[
        { label: 'Private Residence', image: '/assets/private-residence-metal-roof-front.webp' },
        { label: 'Private Residence', image: '/assets/private-residence-brick-home.webp' },
        { label: 'Copper Shingle Installation', image: '/assets/copper-shingle-roof-installation-florida.webp' },
      ]}
      faqs={residentialFaqs}
      ctaHeadline="Ready to Protect Your Home?"
    />
    </>
  );
}
