import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/commercial', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/residential', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/multi-housing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/repairs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/standing-seam-metal', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/st-petersburg', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/clearwater', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/riverview', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects/hutchinson-house', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/manufacturers', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
