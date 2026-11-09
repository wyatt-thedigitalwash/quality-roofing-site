import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = pageMetadata({
  title: "Roofing Projects | Quality Roofing, Inc., Tampa FL",
  description:
    "Browse completed roofing projects by Quality Roofing, Inc. of Tampa, FL, from historic landmarks and high-rise condos to commercial and residential roofs.",
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Projects', path: '/projects' }])} />
      <ProjectsContent />
    </>
  );
}
