import type { Metadata } from 'next';
import ProjectOverview from './_components/ProjectOverview';
import ProjectWork from './_components/ProjectWork';
import ProjectCredits from './_components/ProjectCredits';

const SITE_URL = 'https://quality-roofing.com';
const PAGE_URL = `${SITE_URL}/projects/hutchinson-house`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const PROJECT_IMAGE = `${SITE_URL}/assets/hutchinson-house-og.jpg`;
const TITLE = "The Hutchinson House | Quality Roofing, Inc., Tampa FL";
const DESCRIPTION =
  "How Quality Roofing restored the roof of the 1908 Hutchinson House in Tampa, FL with Vermont slate, custom fish scale detail, and standing seam copper dormers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Quality Roofing, Inc.',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Quality Roofing, Inc. logo over a completed roofing project in Tampa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
        { '@type': 'ListItem', position: 3, name: 'The Hutchinson House', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Article',
      headline: 'The Hutchinson House: Restoring the Roof of a 1908 Tampa Landmark',
      description: DESCRIPTION,
      image: PROJECT_IMAGE,
      mainEntityOfPage: PAGE_URL,
      author: { '@type': 'Organization', name: 'Quality Roofing, Inc.', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'Quality Roofing, Inc.', url: SITE_URL },
    },
  ],
};

export default function HutchinsonHousePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ProjectOverview />
      <ProjectWork />
      <ProjectCredits />
    </>
  );
}
