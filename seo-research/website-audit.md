# Website Audit: quality-roofing-site vs the Florida Competitive Field

Audit date: July 18, 2026. Scope: this repo (the new Next.js site, 10 indexable routes) audited against the 12 deep-dived competitors in competitor-analysis.md, plus Quality Roofing's CURRENT live web presence. Every finding cites its evidence: a file in this repo, a competitor doing it better, or an observed search behavior going unserved.

---

## Critical findings (launch blockers)

### 1. The domain is wrong in the code, and the email may belong to another company

- The live site is `https://quality-roofing.com` (hyphenated). Confirmed via their BBB profile and brand searches.
- `qualityroofing.com` (no hyphen) belongs to Quality Roofing Services, Inc. of West Haven, CONNECTICUT (fetched directly: 599 Island Lane, West Haven CT). Yet this repo displays and sends to `info@qualityroofing.com` in `src/app/contact/ContactContent.tsx:310` and `src/app/api/contact/route.ts:45`. If that address is wrong, customer estimate requests route toward a domain owned by an unrelated Connecticut roofer. VERIFY THE REAL EMAIL WITH THE CLIENT BEFORE LAUNCH.
- `src/app/sitemap.ts:4` and `src/app/robots.ts:9` still use the placeholder `https://DOMAIN.com`.
- A third domain, `qualityroofinginc.net`, is listed on their FRSA directory listing and serves a broken SSL certificate (cert is for the web designer's server). The FRSA listing points customers at a dead URL.
- SITE.md says the website is `quality-roofing.com` while the email domain in code is `qualityroofing.com`. Inconsistent inside our own project.

### 2. Zero structured data

Grep across `src/` for `ld+json` / `schema.org`: zero results. No LocalBusiness, RoofingContractor, Service, BreadcrumbList, or Organization schema anywhere.

Evidence this matters in this field: CentiMark's Tampa location page carries LocalBusiness + GeoCoordinates + BreadcrumbList + FAQPage; Colonial's 104 city pages carry RoofingContractor + City + Service + FAQPage; SPC's TPO page carries a five-type stack; Crowther's homepage carries aggregateRating (4.5, 464 reviews) that feeds rich results. Meanwhile Sutter, McEnany, Biscayne, and Baker skip it, and they are exactly the ones we called beatable. Schema is one of the few technical levers where half the field is asleep.

### 3. The sitemap contains 1 of 10 routes

`src/app/sitemap.ts` lists only the homepage. `/about`, `/services`, all four pillar pages, `/projects`, `/manufacturers`, and `/contact` are absent. Combined with the placeholder domain, the sitemap is currently useless to Google.

### 4. No Open Graph, Twitter Card, canonical, or metadataBase anywhere

No `openGraph` key, no `alternates.canonical`, no `metadataBase` in any metadata export (verified across all pages). Every competitor on WordPress gets basic OG tags for free from Yoast/AIOSEO; this site currently has none, so shared links render bare.

---

## Structural gaps vs the field

### 5. Zero area/location pages despite a statewide claim

The site says "serving all of Florida" on every page, but the only geo signals are "Tampa" text mentions and "Tampa, FL" on the contact page. There is not a single city, county, or service-area page.

Evidence of the unserved behavior: our 21 customer-style searches ("commercial roofing contractor Tampa/Orlando/Sarasota/Miami/Jacksonville" etc.) returned competitors' location pages in every market; that is the page type Google serves for these queries. The competitors beating us to it are doing it thinly: Baker's Tampa page is ~250 words with a brand-only title, CentiMark's "Tampa" is in Lakeland, Best Roofing's Tampa page has no Tampa address. A Tampa-headquartered firm with zero location pages is forfeiting its strongest natural advantage.

### 6. Thin service pages vs the depth benchmark

Word counts measured in this repo: commercial ~350-380 (`src/app/services/commercial/`), residential ~320-350, multi-housing ~360-390, repairs ~310-340. The field benchmark: SPC's TPO page is ~4,200 words with FAQs; Advanced runs 15+ service pages to our 4; TeamCraft has 13 service pages plus 6 system-education pages; Biscayne pages out 14+ commercial services including waterproofing sub-services.

Specific missing page types every serious commercial competitor has and we lack:
- Per-system pages (TPO, metal, modified bitumen, tile, coatings): Advanced, CentiMark, TeamCraft, SPC, Biscayne all have them.
- Maintenance-program page: CentiMark, TeamCraft (ShelterCare), Crowther (RoofCheck), Sutter all productize this.
- Segment pages for condo associations / HOAs / property managers: Colonial and Biscayne have them; McEnany has condo + hospital; we have one generic multi-housing page.

### 7. No blog

The field: Baker posts multiple times weekly, CentiMark 1-3/month, SPC reactivated with hurricane/insurance content, Best Roofing publishes property-manager guides. And yet the highest-value Florida topics (SB-4D milestone inspections, SIRS reserve budgeting, the 15-year insurance rule, Section 179) are covered by almost nobody (only Advanced touches the 15-year rule, and their blog died April 2025). We have no blog infrastructure at all. This is both a gap and the single clearest content opening.

### 8. No on-site social proof

Zero testimonials, review counts, or badges anywhere in this repo. The live WordPress site also has none, and the third-party footprint is modest for a 30-year, $29M firm: Yelp 14 reviews, Facebook 36 (98% recommend), ChamberOfCommerce 83 at 4.1 stars, BBB A+ accredited, Google Business Profile health UNCONFIRMED (no GBP data surfaced in our searches; treat as unknown, not as absent). Advanced embeds 16 Google reviews on their Tampa page with a 4.6 badge. Even matching Advanced's on-site review display would put us ahead of the other ten.

### 9. Projects page is a missed evidence engine

`src/app/projects/` renders 25 image cards with names only (~70 words of prose, no locations, dates, scopes, or detail pages). Tecta's office pages carry client testimonials tied to named projects (Disney Springs); Advanced name-drops institutional clients; SPC maintains a portfolio section. Project detail pages with city names are also geo-relevance fuel that a statewide firm needs. We have marquee material (Tampa Police Department appears in `AboutContent.tsx`, military installations on the live site) with no pages telling those stories.

### 10. Internal linking and breadcrumbs

Pillar pages link only to `/contact` and `/projects` (verified in `PillarPageContent.tsx`): no links to sibling services, the services hub, or `/manufacturers` in body copy, and no breadcrumb navigation anywhere. TeamCraft cross-links services to locations; SPC and CentiMark run BreadcrumbList markup. Cheap fix, currently missing.

### 11. NAP is incomplete and inconsistent

- No street address anywhere on the site or in SITE.md ("Tampa, FL" only). LocalBusiness schema and GBP consistency need a real address.
- Employee count conflicts: this repo says 100+ (`AboutContent.tsx:77`), the live site's about page says 175+. One is wrong; both are publicly visible.
- Hours: not listed anywhere.
- Tagline divergence: SITE.md says "Tampa Bay's Trusted..." while the site copy says "Florida's Trusted..." (the statewide version matches the interview and should win).
- Resend sender is `onboarding@resend.dev` (`route.ts:44`), a sandbox sender that will hurt deliverability of estimate requests.

### 12. Brand-name SERP dilution (off-site, but plan-relevant)

Observed in brand searches: R.L. Mathews Quality Roofing, Quality Roofing & Construction (Tampa), qualityroofingfla.com, and floridaqualityroofing.com all appear for "Quality Roofing Tampa" queries. With directory listings split across quality-roofing.com / qualityroofinginc.net / no site, the brand entity is fragmented exactly where name collisions make consistency matter most. (Inference: consolidating every listing onto one domain and one NAP will sharpen the brand entity; we could not measure current brand rankings directly.)

---

## Genuine strengths worth doubling down on

1. Modern stack against a WordPress field. All 12 competitors run WordPress or HubSpot; several show template sloppiness we verified (Best Roofing's schema leaks "2026 Homepage - New", Colonial has live 404 slugs, Crowther's title tag contains a line break, Baker's breadcrumbs point to a 404 hub). A fast Next.js site with clean metadata is a real technical edge once the placeholders are fixed.
2. Title/meta discipline already beats most of the field. 9 of 10 routes have unique, keyword-sensible titles ("Commercial Roofing Services in Florida | Quality Roofing, Inc."). Compare Sutter's mismatched-city titles, McEnany's duplicated descriptions, Baker's keyword-free location titles. Keep this pattern and extend it to new pages.
3. 100% image alt-text coverage with descriptive, keyworded alts (verified across all components). None of the checklist debt most competitors carry.
4. Heading hierarchy is correct sitewide: one h1 per page, ordered h2/h3.
5. The raw positioning material is top-tier for this field: third generation since 1994, 100+ (or 175+) employees, $29M+ volume, statewide footprint, GAF Master Elite plus five other manufacturer certifications (`/manufacturers` is already a solid page), government/military project history, BBB A+, BuildZoom top 9%. Only Sutter and Crowther can out-legacy this, and neither tells their story with names and faces. Our About page is the deepest page on the site (~650-700 words) and the president's message just needs a real photo (`AboutContent.tsx:186-191` currently renders a "Photo" placeholder).

---

## Opportunities, ranked by impact vs effort

| # | Opportunity | Impact | Effort | Evidence |
|---|------------|--------|--------|----------|
| 1 | Fix domain/canonical/sitemap/robots/email plumbing | Critical | Hours | Findings 1, 3, 4 |
| 2 | Sitewide JSON-LD (RoofingContractor + Service + Breadcrumb) | High | Days | Finding 2; only 4 of 12 competitors have any |
| 3 | Tampa Bay city pages (10-15 pages) | High | Weeks | Finding 5; McEnany has zero geo pages, invaders have no Tampa address |
| 4 | Multifamily/condo content cluster (SB-4D, SIRS, milestone) | High | Weeks | competitor-analysis: statewide condo SERP held by thin/generic pages |
| 5 | Per-system service pages at SPC-grade depth | High | Weeks | Finding 6 |
| 6 | Review engine + on-site proof + aggregateRating | High | Ongoing | Finding 8; whole field weak here |
| 7 | Blog launch with Florida commercial topics | Medium-High | Ongoing | Finding 7; see blog-plan.md |
| 8 | Project case-study pages | Medium | Weeks | Finding 9 |
| 9 | Statewide city grid (Orlando, SWFL, Jax, South FL) | High | Months | Finding 5; nobody runs a statewide grid |
| 10 | Breadcrumbs + internal cross-linking | Medium | Days | Finding 10 |
| 11 | NAP completion (street address, hours, one email) + directory cleanup (FRSA .net, BBB seal) | Medium | Days | Findings 11, 12 |
| 12 | E-E-A-T: leadership photos/bios, president's photo | Medium | Days | Strength 5; Sutter/Colonial are anonymous |
