import type { Metadata } from 'next';
import PillarPageContent from '../_components/PillarPageContent';

export const metadata: Metadata = {
  title:
    'Residential Roofing Services in Florida | Quality Roofing, Inc.',
  description:
    'Trusted residential roofing contractor in Florida. Shingle, tile, slate, metal roofing for homes. New construction and replacement. GAF Master Elite certified since 1994.',
};

export default function ResidentialPage() {
  return (
    <PillarPageContent
      heroHeadline="Residential Roofing You Can Trust"
      heroSubtext="Protecting Florida homes with quality craftsmanship, premium materials, and a reputation built on referrals."
      overviewImage="/assets/private-residency-2.jpg"
      overviewImageAlt="Private residential roofing project by Quality Roofing in Florida"
      overviewParagraphs={[
        'Your home is your most important investment, and the roof protecting it should be built to last. Quality Roofing has been serving Florida homeowners since 1994, delivering residential roofing solutions that combine premium materials with the craftsmanship that three generations of experience demand.',
        'Whether you are building a new home, replacing an aging roof, or need expert repairs, our team handles every project with the same attention to detail. We work directly with homeowners to explain options, recommend the right materials, and deliver results that exceed expectations.',
        'As certified installers for GAF, Owens Corning, and other top manufacturers, we offer the highest levels of warranty coverage available. The majority of our residential work comes through referrals, a reflection of the trust and satisfaction our homeowners experience.',
      ]}
      servicesHeadline="Our Residential Services"
      services={[
        { name: 'Shingle / Tile / Slate', description: 'Premium roofing materials matched to your home\'s style and Florida\'s climate.' },
        { name: 'Standing Seam Metal', description: 'Durable metal roofing with clean lines and exceptional wind resistance.' },
        { name: 'New Construction', description: 'Roofing for new homes and custom builds, coordinated with your builder.' },
        { name: 'Roof Replacement', description: 'Complete tear-off and replacement with premium materials and manufacturer warranties.' },
        { name: 'Repairs & Maintenance', description: 'Leak repairs, storm damage fixes, and proactive maintenance to extend roof life.' },
        { name: 'Roof Assessments', description: 'Thorough inspections to evaluate condition and plan for the future.' },
      ]}
      projectsHeadline="Featured Residential Projects"
      projects={[
        { label: 'Private Residence', image: '/assets/private-reseidence-project.jpg' },
        { label: 'Private Residence III', image: '/assets/private-residency-3.jpg' },
        { label: 'Copper Shingle Installation', image: '/assets/copper-shingle-roof-installation-florida.webp' },
      ]}
      ctaHeadline="Ready to Protect Your Home?"
    />
  );
}
