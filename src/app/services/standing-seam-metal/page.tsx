import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata, serviceSchema } from '@/lib/seo';
import { standingSeamFaqs } from '@/lib/faqs';
import PillarPageContent from '../_components/PillarPageContent';

const NAME = 'Standing Seam Metal Roofing';
const PATH = '/services/standing-seam-metal';
const DESCRIPTION =
  "Custom standing seam metal roofing in Tampa, FL and across Florida, formed with our own mobile roll former machines for commercial and residential buildings.";

export const metadata: Metadata = pageMetadata({
  title: "Standing Seam Metal Roofing | Quality Roofing, Inc., Tampa FL",
  description: DESCRIPTION,
  path: PATH,
});

export default function StandingSeamMetalPage() {
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
        heroImage="/assets/harbour-court-standing-seam-metal-roof-aerial.webp"
        heroImageAlt="Aerial view of the Harbour Court standing seam metal roof"
        heroHeadline="Custom Standing Seam Metal Roofing in Tampa"
        heroSubtext="Standing seam roofs fabricated and installed by our own team, using custom sheet metal and mobile roll former machines."
        overviewImage="/assets/private-residence-metal-roof-aerial.webp"
        overviewImageAlt="Aerial view of a metal roof on a private Florida residence by Quality Roofing"
        overviewHeadline="Standing Seam Backed by Custom Fabrication"
        overviewParagraphs={[
          'Quality Roofing specializes in custom sheet metal fabrication, and standing seam roofing is where that experience shows. We install standing seam metal on commercial, residential, and multi-housing properties across Florida, backed by over 30 years in the trade.',
          'We have two mobile roll former machines for standing seam roofs, along with a mobile seamless gutter forming machine. Keeping this equipment in-house gives our team direct control over the fabrication and installation of each roof.',
          'Our standing seam experience ranges from condominium communities to landmark restoration, including the standing seam copper dormers on the historic Hutchinson House in Tampa.',
        ]}
        servicesHeadline="Our Standing Seam Services"
        services={[
          { name: 'Custom Fabrication', description: 'Standing seam panels and sheet metal details made for your building.' },
          { name: 'New Construction', description: 'Standing seam roofing for new commercial and residential buildings.' },
          { name: 'Roof Replacement', description: 'Full replacement of existing roofs with a new standing seam system.' },
          { name: 'Historical Preservation', description: 'Copper and metal work that respects the original design of landmark buildings.' },
          { name: 'Preventative Maintenance', description: 'Ongoing care to keep an existing standing seam roof performing.' },
          { name: 'Seamless Gutters', description: 'Gutters formed with our mobile seamless gutter machine.' },
        ]}
        projectsHeadline="Featured Standing Seam Projects"
        projects={[
          { label: 'Harbour Court Condos', image: '/assets/harbour-court-condos-roofing-aerial.webp' },
          { label: 'The Hutchinson House', image: '/assets/hutchinson-house-copper-dormers-fish-scale-slate.webp', href: '/projects/hutchinson-house' },
          { label: 'Private Residence', image: '/assets/private-residence-metal-roof-front.webp' },
        ]}
        faqs={standingSeamFaqs}
        ctaHeadline="Considering a Standing Seam Roof?"
      />
    </>
  );
}
