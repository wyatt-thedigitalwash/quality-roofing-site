import type { Metadata } from 'next';

export const SITE_URL = 'https://quality-roofing.com';
export const SITE_NAME = 'Quality Roofing, Inc.';
export const DEFAULT_SHARE_IMAGE = '/og-image.png';

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_SHARE_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, type: 'website', images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    areaServed: { '@type': 'State', name: 'Florida' },
    provider: { '@id': `${SITE_URL}/#business` },
  };
}

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/quality-roofing-logo-green-no-phone.svg`,
  image: `${SITE_URL}${DEFAULT_SHARE_IMAGE}`,
  description:
    'Third generation licensed roofing and general contracting firm serving all of Florida from its Tampa headquarters.',
  telephone: '+1-813-620-4797',
  email: 'info@quality-roofing.com',
  faxNumber: '+1-813-626-1756',
  foundingDate: '1994',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1905 N. 40th Street',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33605',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 27.9603, longitude: -82.4141 },
  areaServed: [
    { '@type': 'City', name: 'Tampa' },
    { '@type': 'City', name: 'St. Petersburg' },
    { '@type': 'City', name: 'Clearwater' },
    { '@type': 'City', name: 'Riverview' },
    { '@type': 'State', name: 'Florida' },
  ],
};
