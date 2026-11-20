/* Service-area pages. Project facts come from the client's own project records (the map on
   their previous website) and from the project photos. No homeowner names or addresses. */
import type { Faq } from '@/lib/faqs';

export type MarketProject = { name: string; place: string; detail: string; image: string; alt: string; href?: string };

export type Market = {
  slug: string;
  city: string;
  county: string;
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  heroText: string;
  introHeading: string;
  intro: string[];
  introImage: string;
  introImageAlt: string;
  projects: MarketProject[];
  recordsHeading: string;
  records: string;
  faqs: Faq[];
};

const ESTIMATE_FAQ: Faq = {
  question: 'How do I get a free roofing estimate?',
  answer:
    'Request an estimate through our contact form or call (813) 620-4797, and a member of our team will follow up within one business day.',
};

const servicesFaq = (city: string): Faq => ({
  question: `What roofing services do you offer in ${city}?`,
  answer: `We provide commercial, residential, and multi-housing roofing in ${city}, along with roof repairs, maintenance, restoration, and custom standing seam metal roofs.`,
});

const officeFaq = (city: string): Faq => ({
  question: `Do you have an office in ${city}?`,
  answer: `Our office is at 1905 N. 40th Street in Tampa. Our crews and equipment travel from there to projects in ${city}, and our team is reachable at (813) 620-4797.`,
});

export const markets: Market[] = [
  {
    slug: 'st-petersburg',
    city: 'St. Petersburg',
    county: 'Pinellas County',
    title: 'Roofing Company in St. Petersburg, FL | Quality Roofing, Inc.',
    description:
      'Quality Roofing is a licensed roofing company serving St. Petersburg, FL with commercial, residential, and multi-housing roofing, repairs, and free estimates.',
    heroImage: '/assets/multi-housing-tile-roof-community-aerial.webp',
    heroImageAlt: 'Aerial view of a multi-housing community with clay tile roofs by Quality Roofing',
    heroText:
      'Commercial, residential, and multi-housing roofing for St. Petersburg, from a roofing company based across the bay in Tampa since 1994.',
    introHeading: 'Your St. Petersburg Roofing Company',
    intro: [
      'Since 1994, Quality Roofing has served property owners across Tampa Bay from our Tampa headquarters, including St. Petersburg. Our work here ranges from the tile roof at St. Petersburg High School to new shingle roofs on homes across the city.',
      'St. Petersburg roofs face salt air, intense sun, and hurricane season. We install systems from GAF, Siplast, Johns Manville, and other leading manufacturers that are built for those conditions, and we are a state certified roofing and general contractor.',
      'Whether you need a roofer for a home, a commercial building, or a condominium community, our own crews and equipment handle the work from estimate through completion.',
    ],
    introImage: '/assets/quality-roofing-crew-harness-roof-work.webp',
    introImageAlt: 'Quality Roofing crew member in a hard hat and safety harness working on a roof',
    projects: [
      {
        name: 'St. Petersburg High School',
        place: 'St. Petersburg',
        detail: 'Ludowici clay tile roofing on one of the city’s landmark school campuses.',
        image: '/assets/st-petersburg-high-school.webp',
        alt: 'Aerial view of St. Petersburg High School with its tile roof',
      },
    ],
    recordsHeading: 'Homes Across St. Petersburg',
    records:
      'Our project records include four residential reroofs in St. Petersburg, using GAF Timberline HD, GAF American Harvest, and Atlas Glass Master shingles.',
    faqs: [
      { question: 'Do you serve St. Petersburg?', answer: 'Yes. We serve St. Petersburg and the rest of Pinellas County from our Tampa headquarters, for commercial, residential, and multi-housing properties.' },
      servicesFaq('St. Petersburg'),
      officeFaq('St. Petersburg'),
      { question: 'Have you completed projects in St. Petersburg?', answer: 'Yes. Our St. Petersburg work includes Ludowici tile roofing at St. Petersburg High School and shingle reroofs on homes across the city.' },
      ESTIMATE_FAQ,
    ],
  },
  {
    slug: 'clearwater',
    city: 'Clearwater',
    county: 'Pinellas County',
    title: 'Roofing Company in Clearwater, FL | Quality Roofing, Inc.',
    description:
      'Quality Roofing serves Clearwater, FL and North Pinellas with commercial, residential, and multi-housing roofing, roof repairs, and free roofing estimates.',
    heroImage: '/assets/dunedin-city-hall-roofing-aerial.webp',
    heroImageAlt: 'Aerial view of the Dunedin City Hall roof, just north of Clearwater',
    heroText:
      'Commercial, residential, and multi-housing roofing for Clearwater and North Pinellas, from a roofing company headquartered in Tampa since 1994.',
    introHeading: 'Your Clearwater Roofing Company',
    intro: [
      'Quality Roofing serves Clearwater and the surrounding North Pinellas communities from our Tampa headquarters. Our work in the area includes Dunedin City Hall and the historic Belleview Biltmore in Belleair.',
      'Clearwater roofs face salt air, intense sun, and hurricane season. We install systems from GAF, Siplast, Johns Manville, and other leading manufacturers that are built for those conditions, and we are a state certified roofing and general contractor.',
      'Whether you need a roofer for a home, a commercial building, or a condominium community, our own crews and equipment handle the work from estimate through completion.',
    ],
    introImage: '/assets/belleview-biltmore-commercial-roofing-project.webp',
    introImageAlt: 'The Belleview Biltmore in Belleair, near Clearwater, roofed by Quality Roofing',
    projects: [
      {
        name: 'Dunedin City Hall',
        place: 'Dunedin',
        detail: 'Roofing for the City of Dunedin’s city hall, just north of Clearwater.',
        image: '/assets/dunedin-city-hall-roofing-aerial.webp',
        alt: 'Aerial view of the Dunedin City Hall roof',
      },
      {
        name: 'Belleview Biltmore',
        place: 'Belleair',
        detail: 'Roofing on the historic Belleview Biltmore, just south of downtown Clearwater.',
        image: '/assets/belleview-biltmore-roof-aerial.webp',
        alt: 'Aerial view of the Belleview Biltmore roof in Belleair',
      },
    ],
    recordsHeading: 'Homes Across North Pinellas',
    records:
      'Our project records also include residential roofs in nearby Largo and Tarpon Springs, using GAF Timberline HD shingles and GAF Liberty low-slope roofing.',
    faqs: [
      { question: 'Do you serve Clearwater?', answer: 'Yes. We serve Clearwater and the rest of Pinellas County from our Tampa headquarters, including Dunedin, Belleair, Largo, and Tarpon Springs.' },
      servicesFaq('Clearwater'),
      officeFaq('Clearwater'),
      { question: 'Have you completed projects near Clearwater?', answer: 'Yes. Our nearby work includes Dunedin City Hall, the Belleview Biltmore in Belleair, and homes in Largo and Tarpon Springs.' },
      ESTIMATE_FAQ,
    ],
  },
  {
    slug: 'riverview',
    city: 'Riverview',
    county: 'Hillsborough County',
    title: 'Roofing Company in Riverview, FL | Quality Roofing, Inc.',
    description:
      'Quality Roofing is a roofing company serving Riverview, FL, just south of Tampa, with residential and commercial roofing, roof repair, and free estimates.',
    heroImage: '/assets/private-residence-metal-roof-aerial.webp',
    heroImageAlt: 'Aerial view of a metal roof on a Florida home by Quality Roofing',
    heroText:
      'Residential, commercial, and multi-housing roofing for Riverview, from a roofing company a short drive north in Tampa.',
    introHeading: 'Your Riverview Roofing Company',
    intro: [
      'Riverview sits just south of our Tampa headquarters, and its neighborhoods are some of our closest residential work. Our project records include five residential reroofs in Riverview.',
      'Florida roofs face intense sun, heavy rain, and hurricane season. We install shingle, tile, metal, and low-slope systems from GAF, Atlas, Owens Corning, and other manufacturers, and we are a state certified roofing and general contractor.',
      'Whether you need a roofer for a home, a commercial building, or a community association, our own crews and equipment handle the work from estimate through completion.',
    ],
    introImage: '/assets/private-residence-roof-aerial.webp',
    introImageAlt: 'Aerial view of a shingle roof on a private Florida residence by Quality Roofing',
    projects: [],
    recordsHeading: 'Homes Across Riverview',
    records:
      'Our project records include five residential reroofs in Riverview, using Atlas Pinnacle Pristine and Glass Master shingles, GAF Timberline HD shingles, and GAF Liberty low-slope roofing. Nearby, we have also reroofed homes in Brandon, Valrico, and Lithia.',
    faqs: [
      { question: 'Do you serve Riverview?', answer: 'Yes. Riverview is a short drive south of our Tampa headquarters, and we serve homes and businesses throughout southern Hillsborough County.' },
      servicesFaq('Riverview'),
      officeFaq('Riverview'),
      { question: 'Have you completed projects in Riverview?', answer: 'Yes. Our records include five residential reroofs in Riverview, plus homes in nearby Brandon, Valrico, and Lithia.' },
      ESTIMATE_FAQ,
    ],
  },
];

export const marketBySlug = (slug: string) => markets.find((m) => m.slug === slug)!;
