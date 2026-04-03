import type { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Completed Roofing Projects | Quality Roofing, Inc. | Florida',
  description:
    'Browse completed commercial, residential, and multi-housing roofing projects across Florida by Quality Roofing, Inc. Over 30 years of proven results.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
