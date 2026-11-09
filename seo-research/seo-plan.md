# SEO Plan: Quality Roofing, Inc.

Priorities from the July 2026 interview: commercial first, then multi-housing, then residential/repairs. Truly statewide with Tampa Bay as home turf; expansion emphasis across Orlando/Central FL, Southwest FL, and South & North FL. Positioning: third-generation family firm, statewide scale, manufacturer certifications.

Strategy in one sentence: win Tampa Bay commercial outright (the incumbents there are hollow), take the undefended statewide condo/multifamily SERP with compliance content, then roll the city-page grid out region by region, because no competitor in the field runs a statewide grid.

---

## QUICK WINS (days)

### QW1. Fix the domain and email plumbing (do this first, hours of work)

- Confirm with the client: canonical domain (assume `https://quality-roofing.com` per their BBB profile and live site) and the REAL email address. `info@qualityroofing.com` in `ContactContent.tsx:310` and `route.ts:45` points at a Connecticut company's domain; this may be misdirecting leads.
- Set `metadataBase: new URL('https://quality-roofing.com')` in `src/app/layout.tsx`; add `alternates: { canonical: ... }` per page.
- Replace `DOMAIN.com` in `sitemap.ts` and `robots.ts`; expand the sitemap to all 10 routes.
- Verify the Resend sender: replace `onboarding@resend.dev` with a verified sender on the brand domain so estimate requests do not land in spam.
- Why it wins here: none of this is competitive genius, it is the price of entry, and right now the site fails it.

### QW2. Ship sitewide JSON-LD

- `RoofingContractor` (subtype of LocalBusiness) in the root layout: legal name, street address (get it from the client, it appears nowhere), phone (813) 620-4797, geo, hours, licenses CCC042846 and CGC1507166, areaServed Florida, sameAs links (BBB, Facebook, LinkedIn, GAF profile).
- `Service` schema on each of the four pillar pages; `BreadcrumbList` on every interior page.
- Why it wins here: 8 of 12 deep-dived competitors have no meaningful schema (Sutter, McEnany, Biscayne, Baker, Tecta, Advanced, TeamCraft partial, Best partial). Matching CentiMark/Colonial's stack immediately puts us in the field's top tier technically.

### QW3. Open Graph + Twitter Cards + OG image

Every competitor's CMS emits these by default; this site emits none. Add to the root layout with per-page overrides, plus one branded 1200x630 OG image.

### QW4. Breadcrumbs and internal cross-links

Visible breadcrumbs (with BreadcrumbList markup) on services, pillar, and future city pages. Add in-copy links: each pillar page should link its sibling services, the hub, and `/manufacturers`. Currently pillar pages link only to `/contact` and `/projects` (`PillarPageContent.tsx`).

### QW5. NAP completion and consistency

- Add street address and business hours to the footer and contact page (needed for GBP consistency and schema).
- Resolve the employee-count conflict (repo says 100+, live site says 175+) and use one number everywhere.
- Standardize on "Florida's Trusted Roofing Contractor Since 1994" (matches the statewide interview answer; update SITE.md's Tampa Bay tagline).

### QW6. On-site social proof block

Add a testimonials/reviews section to the homepage and pillar pages using real review content (BBB A+, 98% Facebook recommend, named client quotes once collected). Advanced is the only competitor doing this well; everyone else shows nothing.

### QW7. President's photo and named leadership

Replace the "Photo" placeholder (`AboutContent.tsx:186-191`) with a real photo; add names and short bios. Evidence: Sutter's and Colonial's About pages are anonymous, and legacy is our positioning fight. Faces win it.

### QW8. Directory and listing cleanup (off-site, ~a day of outreach)

- FRSA listing points to the dead `qualityroofinginc.net` (broken SSL): get it updated to the real domain.
- Claim/verify the Google Business Profile (health currently unknown), confirm categories, address, hours, and start a review-request routine on completed jobs. The whole field is weak on reviews; a steady GBP review stream plus later aggregateRating markup is a durable edge.

---

## STRATEGIC (weeks to months)

### S1. Tampa Bay commercial city pages (weeks; first grid phase)

Build a real `/service-areas/` (or `/locations/`) hierarchy, NOT blog-path URLs (Colonial's known weakness). Target pattern per page: "Commercial Roofing [City], FL | Quality Roofing, Inc." title, 800-1,200 words genuinely local (nearby completed projects, county permit notes, wind-zone specifics), embedded reviews when available, RoofingContractor + Service + FAQPage schema (the Colonial/CentiMark stack), and links to the relevant pillar pages.

Phase 1 cities (home turf, from the interview): Tampa, St. Petersburg, Clearwater, Brandon, Lakeland, Wesley Chapel, Sarasota, Bradenton.

Why it wins: McEnany (the Tampa incumbent) has ZERO geo pages; Sutter's Tampa page is ~450 words titled partly for Orlando; Baker's is ~250 words with a brand-only title; CentiMark's "Tampa" office is in Lakeland; Best Roofing and Colonial have no Tampa address. We are the only firm in this set with an actual Tampa headquarters plus $29M commercial scale.

### S2. Multifamily/condo cluster (weeks; the biggest prize)

- Upgrade `/services/multi-housing` and add segment pages: Condo Association Roofing, HOA Community Roofing, Apartment Complex Roofing, plus a page for Community Association Managers (CAMs).
- Anchor content on Florida compliance: SB-4D milestone inspections, SIRS reserve studies, phased re-roofing for occupied communities. (Verify current statute details at writing time.)
- Statewide framing in titles ("Condo Roofing Contractor | Florida") because that is how Biscayne ranks statewide from a tri-county base.

Why it wins: Advanced holds statewide condo visibility with NO dedicated pages; Biscayne holds it with an ~850-word template containing unfilled FAQ placeholders and zero SB-4D content. Best Roofing proves the CAM audience is worth courting and has no condo page either. This is the largest gap between search demand and serving content that we found anywhere in the research.

### S3. System-depth service pages (weeks)

Add per-system commercial pages at SPC-grade depth (their ~4,200-word TPO page is the benchmark): TPO/Single-Ply, Modified Bitumen/Built-Up, Metal & Standing Seam (the live site already advertises a sheet metal shop, an asset the new site does not mention), Tile & Slate, Roof Coatings/Restoration, and a productized Maintenance Program page (CentiMark, TeamCraft, Crowther, Sutter all productize maintenance; recurring-revenue keywords like "commercial roof maintenance program Florida" are in reach).

### S4. Project case-study pages (weeks, rolling)

Convert the 25 name-only project cards into individual case-study pages: city, scope, system installed, manufacturer/warranty, timeline, a quote from the client where possible. Lead with marquee wins (Tampa Police Department, military installations, schools). Each page is proof for buyers AND a geo-relevance asset feeding the city grid.

### S5. Statewide grid rollout (months; phases 2-4)

- Phase 2, Central FL: Orlando, Kissimmee, Winter Park, Sanford, Daytona Beach, Ocala. Tecta targets Orlando via a "Sanford" office page and TeamCraft's Orlando title says just "Roofer"; keyword-correct pages compete immediately.
- Phase 3, Southwest FL: Fort Myers, Naples, Cape Coral, Port Charlotte, Bonita Springs. Crowther has zero city pages; Colonial's are blog-path templates with no review proof.
- Phase 4, South & North FL: Miami, Fort Lauderdale, West Palm Beach, Jacksonville, St. Augustine, Gainesville, Tallahassee, Pensacola. Note CentiMark has NO Miami page; SPC has zero geo pages beyond its domain name; Advanced is strongest here, so South FL is the late-game fight.
- Each phase only after the prior phase's pages have real content (projects, reviews); thin doorway pages replicate Colonial's weakness instead of beating it.

### S6. Blog engine (ongoing; see blog-plan.md)

Cadence target: 2 posts/month, sustainable beats bursty (Baker's 10-posts-in-3-days pattern and SPC's 5-month gaps both read as bulk pushes). Priority queue and outlines are in blog-plan.md.

### S7. Review flywheel to aggregateRating (ongoing)

Systematic post-job review requests routed to Google. Milestones: 50+ Google reviews, then surface counts and stars on-site, then add aggregateRating schema (Crowther-style, but visible on-page too). Current third-party base is modest (14 Yelp / 36 Facebook / 83 Chamber), so this is a 6-12 month build that most of the field is not even attempting.

### S8. Legacy E-E-A-T campaign (months)

The positioning fight is with Sutter (since 1902) and Crowther (since 1955). We cannot out-date them; we can out-TELL them: a three-generation timeline page with photos and names, licensed-contractor credentials displayed, manufacturer certification proof (the /manufacturers page is already good), and the military/government work story. Both rivals present anonymous About pages; ours should be the one with faces, names, and dollar figures.

---

## Area-page priority map (from the interview's service area)

| Phase | Region | Cities | Rationale from research |
|-------|--------|--------|------------------------|
| 1 | Tampa Bay (HQ) | Tampa, St. Petersburg, Clearwater, Brandon, Lakeland, Wesley Chapel, Sarasota, Bradenton | Home field; incumbent McEnany has zero geo pages; invaders have no Tampa address |
| 2 | Central FL | Orlando, Kissimmee, Winter Park, Sanford, Daytona Beach, Ocala | Tecta's Orlando page is a Sanford office page; TeamCraft's title is generic |
| 3 | Southwest FL | Fort Myers, Naples, Cape Coral, Port Charlotte, Bonita Springs | Crowther has no city pages; Colonial's are blog-path templates |
| 4 | South & North FL | Miami, Fort Lauderdale, West Palm Beach, Jacksonville, St. Augustine, Gainesville, Tallahassee, Pensacola | CentiMark lacks a Miami page; SPC has no geo pages; Advanced is the real fight, save it for last |

Sequencing rule: a city gets a page when we can populate it with at least one real local project or client proof point. Statewide claim, local evidence.

---

## One-screen summary (the whole package in brief)

The 3 biggest opportunities:

1. The statewide condo/multifamily SERP is undefended. Advanced Roofing holds it with generic commercial pages (no condo page at all); Biscayne holds it with an ~850-word template containing unfilled FAQ placeholders and zero mention of SB-4D or milestone inspections. Dedicated condo/HOA/CAM pages plus compliance content takes it (S2).
2. Tampa Bay commercial is winnable outright. The home-market incumbent McEnany has zero location pages, no schema, a blog dead since 2023, and 2.9 stars on Birdeye. Every other Tampa contender is a branch office. Quality Roofing is the only $29M commercial roofer actually headquartered in Tampa (S1).
3. Nobody runs a statewide city-page grid. The big firms stop at 5-8 office pages; the only programmatic players (Colonial, Biscayne) are each confined to one coast. The phased grid in S1/S5 has no statewide competitor.

The single most important fix: the domain/email plumbing (QW1). Confirm the real domain and email (the repo currently emails a domain owned by an unrelated Connecticut roofer), replace the DOMAIN.com placeholders, expand the sitemap from 1 route to all 10, set metadataBase and canonicals. Everything else builds on a site Google can index under the right identity.

First blog topic to write: "Florida's Milestone Inspection Law: What Condo Boards Need to Know About Their Roof" (blog-plan.md #1). Least-defended high-value query found in the research; compliance-driven buyers on deadlines; anchors the multifamily cluster S2 builds toward.
