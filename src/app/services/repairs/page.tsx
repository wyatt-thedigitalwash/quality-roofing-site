import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata, serviceSchema } from '@/lib/seo';
import { repairsFaqs } from '@/lib/faqs';
import PillarPageContent from '../_components/PillarPageContent';
import ServiceDepartment from './ServiceDepartment';

const NAME = 'Roof Repairs and Restoration';
const PATH = '/services/repairs';
const DESCRIPTION =
  "Roof repairs, maintenance, storm restoration, and historical preservation in Tampa, FL and across Florida from our own dedicated roofing service department.";

export const metadata: Metadata = pageMetadata({
  title: "Roof Repairs & Restoration | Quality Roofing, Inc., Tampa FL",
  description: DESCRIPTION,
  path: PATH,
});

export default function RepairsPage() {
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
      heroImage="/assets/hutchinson-house-scaffolding-copper-dormers-skyline.webp"
      heroImageAlt="Restoration work on the Hutchinson House roof in Tampa, with scaffolding and new copper dormers"
      heroHeadline="Roof Repairs, Maintenance & Restoration in Tampa Bay"
      heroSubtext="Fast, reliable repair services and proactive maintenance programs to extend the life of your roof."
      overviewImage="/assets/quality-roofing-crew-harness-roof-work.webp"
      overviewImageAlt="Quality Roofing crew member in a hard hat and safety harness working on a roof"
      overviewHeadline="Keeping Your Roof at Its Best"
        overviewParagraphs={[
        'Not every roofing need is a full replacement. Quality Roofing provides responsive repair services, proactive maintenance programs, and specialized restoration work for commercial, residential, and multi-housing properties across Florida. When your roof needs attention, our team is equipped to diagnose the issue and deliver a lasting solution.',
        'Florida weather demands a roof that can withstand hurricanes, heavy rain, and intense sun. Our disaster restoration team has extensive experience repairing storm damage, addressing water intrusion, and restoring buildings to full protection quickly and efficiently. We work with insurance adjusters and property owners to navigate the process from assessment through completion.',
        'We also specialize in historical preservation roofing, restoring landmark and heritage buildings with period-appropriate materials and techniques that honor the original architecture while meeting modern building codes. From emergency leak repairs to comprehensive maintenance contracts, Quality Roofing keeps your roof performing at its best.',
      ]}
      afterOverview={<ServiceDepartment />}
      servicesHeadline="Our Repair & Restoration Services"
      services={[
        { name: 'Repairs & Maintenance', description: 'Leak repairs, patching, and ongoing maintenance programs for all roof types.' },
        { name: 'Roof Assessments', description: 'Comprehensive inspections to identify issues before they become costly problems.' },
        { name: 'Disaster Restoration', description: 'Emergency response for storm damage, water intrusion, and hurricane recovery.' },
        { name: 'Historical Preservation', description: 'Period-appropriate restoration of landmark and heritage building roofs.' },
      ]}
      projectsHeadline="Featured Repair & Restoration Projects"
      projects={[
        { label: 'The Hutchinson House', image: '/assets/hutchinson-house-slate-mansard-copper-dormer.webp', href: '/projects/hutchinson-house' },
        { label: 'Belleview Biltmore', image: '/assets/belleview-biltmore-roof-aerial.webp' },
        { label: 'Gulfview Resort Towers', image: '/assets/gulfview-resort-towers.webp' },
      ]}
      faqs={repairsFaqs}
      ctaHeadline="Need a Roof Repair?"
    />
    </>
  );
}
