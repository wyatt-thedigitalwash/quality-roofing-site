import type { Metadata } from 'next';
import PillarPageContent from '../_components/PillarPageContent';

export const metadata: Metadata = {
  title:
    'Roof Repairs, Maintenance & Restoration in Florida | Quality Roofing, Inc.',
  description:
    'Fast, reliable roof repairs, proactive maintenance programs, disaster restoration, and historical preservation across Florida. Emergency response available. Since 1994.',
};

export default function RepairsPage() {
  return (
    <PillarPageContent
      heroHeadline="Roof Repairs, Maintenance & Restoration"
      heroSubtext="Fast, reliable repair services and proactive maintenance programs to extend the life of your roof."
      overviewImage="/assets/st-petersburg-high-school.jpg"
      overviewImageAlt="St. Petersburg High School roof restoration by Quality Roofing"
      overviewParagraphs={[
        'Not every roofing need is a full replacement. Quality Roofing provides responsive repair services, proactive maintenance programs, and specialized restoration work for commercial, residential, and multi-housing properties across Florida. When your roof needs attention, our team is equipped to diagnose the issue and deliver a lasting solution.',
        'Florida weather demands a roof that can withstand hurricanes, heavy rain, and intense sun. Our disaster restoration team has extensive experience repairing storm damage, addressing water intrusion, and restoring buildings to full protection quickly and efficiently. We work with insurance adjusters and property owners to navigate the process from assessment through completion.',
        'We also specialize in historical preservation roofing, restoring landmark and heritage buildings with period-appropriate materials and techniques that honor the original architecture while meeting modern building codes. From emergency leak repairs to comprehensive maintenance contracts, Quality Roofing keeps your roof performing at its best.',
      ]}
      servicesHeadline="Our Repair & Restoration Services"
      services={[
        { name: 'Repairs & Maintenance', description: 'Leak repairs, patching, and ongoing maintenance programs for all roof types.' },
        { name: 'Roof Assessments', description: 'Comprehensive inspections to identify issues before they become costly problems.' },
        { name: 'Disaster Restoration', description: 'Emergency response for storm damage, water intrusion, and hurricane recovery.' },
        { name: 'Historical Preservation', description: 'Period-appropriate restoration of landmark and heritage building roofs.' },
      ]}
      projectsHeadline="Featured Repair & Restoration Projects"
      projects={[
        { label: 'USF Copper Hall', image: '/assets/USF-copper-hall.jpg' },
        { label: 'Gulfview Resort Towers', image: '/assets/gulfview-resort-towers.jpg' },
        { label: 'USF TAT ENR Building', image: '/assets/usf-tat-enr-building.jpg' },
      ]}
      ctaHeadline="Need a Roof Repair?"
    />
  );
}
