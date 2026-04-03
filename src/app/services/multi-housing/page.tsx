import type { Metadata } from 'next';
import PillarPageContent from '../_components/PillarPageContent';

export const metadata: Metadata = {
  title:
    'Multi-Housing Roofing Services in Florida | Quality Roofing, Inc.',
  description:
    'Specialist multi-housing roofing contractor in Florida. Apartments, condos, HOA communities, and multi-family complexes. Phased scheduling, statewide coverage since 1994.',
};

export default function MultiHousingPage() {
  return (
    <PillarPageContent
      heroHeadline="Multi-Housing Roofing Specialists"
      heroSubtext="Apartments, condominiums, HOA communities, and multi-family complexes across Florida."
      overviewImage="/assets/camden-bay-multi-housing-roofing-aerial.webp"
      overviewImageAlt="Camden Bay multi-housing roofing aerial view by Quality Roofing"
      overviewParagraphs={[
        'Multi-housing roofing requires a contractor who understands the complexity of working across occupied properties. Quality Roofing has built a reputation as one of Florida\'s most trusted multi-housing roofing specialists, delivering large-scale projects for apartment communities, condominium associations, and HOA-managed properties statewide.',
        'We work closely with property managers, HOA boards, and ownership groups to develop phased project schedules that minimize disruption to residents. Our team is experienced in managing the logistics of community-wide reroofing, from coordinating access across multiple buildings to communicating timelines with tenants and stakeholders.',
        'With over 100 employees and a full complement of in-house equipment, we have the capacity to take on large multi-housing projects while maintaining the quality and attention to detail that smaller jobs demand. Every project is backed by manufacturer-certified installations and our own 30-year track record.',
      ]}
      servicesHeadline="Our Multi-Housing Services"
      services={[
        { name: 'New Construction', description: 'Complete roof systems for new apartment and condo developments.' },
        { name: 'Roof Replacement', description: 'Community-wide reroofing with phased scheduling to minimize resident impact.' },
        { name: 'Single Ply Systems', description: 'TPO, PVC, and EPDM solutions for flat-roof multi-housing buildings.' },
        { name: 'Built Up Roofing', description: 'Multi-layer systems for long-term performance on large multi-family structures.' },
        { name: 'Shingle / Tile / Slate', description: 'Steep-slope roofing materials for townhomes, condos, and garden-style apartments.' },
        { name: 'Repairs & Maintenance', description: 'Responsive repairs and ongoing maintenance programs for property managers.' },
        { name: 'Roof Assessments', description: 'Detailed condition reports to support capital planning and reserve budgeting.' },
      ]}
      projectsHeadline="Featured Multi-Housing Projects"
      projects={[
        { label: 'Harbour Court Condos', image: '/assets/harbour-court-condos-roofing-aerial.webp' },
        { label: 'Stovall Condos', image: '/assets/stovall-condos.jpg' },
        { label: 'Multi-Housing Community', image: '/assets/multi-housing-tile-roof-community-aerial.webp' },
      ]}
      ctaHeadline="Managing a Multi-Housing Property?"
    />
  );
}
