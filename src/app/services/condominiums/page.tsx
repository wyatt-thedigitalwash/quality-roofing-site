import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata, serviceSchema } from '@/lib/seo';
import { condominiumFaqs } from '@/lib/faqs';
import PillarPageContent from '../_components/PillarPageContent';

const NAME = 'Condominium Roofing';
const PATH = '/services/condominiums';
const DESCRIPTION =
  'Condominium roofing in Tampa, FL and across Florida, from garden-style communities to high-rise towers, for condo boards and association managers.';

export const metadata: Metadata = pageMetadata({
  title: 'Condominium Roofing | Quality Roofing, Inc., Tampa FL',
  description: DESCRIPTION,
  path: PATH,
});

export default function CondominiumsPage() {
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
        heroImage="/assets/skypoint-condos-roofing-aerial-tampa.webp"
        heroImageAlt="Aerial view of the Skypoint Condos high-rise roof in downtown Tampa"
        heroHeadline="Condominium Roofing in Tampa Bay and Across Florida"
        heroSubtext="Roof replacement, repairs, and maintenance for condominium associations, from garden-style communities to high-rise towers."
        overviewImage="/assets/harbour-court-condos-roofing-aerial.webp"
        overviewImageAlt="Aerial view of the Harbour Court Condos towers and pool deck"
        overviewHeadline="A Roofing Partner for Your Association"
        overviewParagraphs={[
          'Condominium roofing comes with its own set of challenges: occupied buildings, shared budgets, board approvals, and in many cases, work high above the street. Quality Roofing has completed condominium projects across Florida, from garden-style communities to downtown high-rises like Skypoint Condos and 345 Bayshore in Tampa.',
          'We work directly with condo boards, community association managers, and their engineers. Our team provides clear roof condition reports, straightforward proposals, and a realistic schedule, so the board can make decisions with confidence and keep owners informed.',
          'Because we self-perform the majority of our work with our own trained crews and company-owned equipment, we control quality, safety, and scheduling on every building. As certified installers for multiple major manufacturers, we also offer manufacturer-backed warranties on the systems we install.',
        ]}
        servicesHeadline="Our Condominium Services"
        services={[
          { name: 'Roof Replacement', description: 'Full reroofing for condo buildings, phased to keep the property running.' },
          { name: 'High-Rise Roofing', description: 'Low-slope and specialty systems for mid-rise and high-rise towers.' },
          { name: 'Single Ply Systems', description: 'TPO, PVC, and EPDM membranes for flat condominium roofs.' },
          { name: 'Shingle / Tile / Slate', description: 'Steep-slope roofing for townhome and garden-style condo communities.' },
          { name: 'Repairs & Maintenance', description: 'Responsive leak repairs and ongoing maintenance programs for associations.' },
          { name: 'Roof Assessments', description: 'Condition reports that support capital planning and reserve budgeting.' },
        ]}
        projectsHeadline="Featured Condominium Projects"
        projects={[
          { label: 'Skypoint Condos', image: '/assets/skypoint-condos-high-rise-roof-aerial.webp' },
          { label: '345 Bayshore', image: '/assets/345-bayshore-highrise-roofing-tampa.webp' },
          { label: 'Stovall Condos', image: '/assets/stovall-condos.webp' },
        ]}
        faqs={condominiumFaqs}
        ctaHeadline="Planning Roof Work for Your Condo Association?"
      />
    </>
  );
}
