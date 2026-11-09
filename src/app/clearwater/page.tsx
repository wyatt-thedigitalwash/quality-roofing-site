import type { Metadata } from 'next';
import MarketPage from '@/components/market/MarketPage';
import { marketBySlug } from '@/lib/markets';
import { pageMetadata } from '@/lib/seo';

const market = marketBySlug('clearwater');

export const metadata: Metadata = pageMetadata({
  title: market.title,
  description: market.description,
  path: '/clearwater',
});

export default function Page() {
  return <MarketPage market={market} />;
}
