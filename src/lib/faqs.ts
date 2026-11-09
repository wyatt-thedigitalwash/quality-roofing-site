/* FAQ content. Every answer restates claims already made elsewhere on the site, so the client
   should review this list alongside the page copy. */
export type Faq = { question: string; answer: string };

export const homeFaqs: Faq[] = [
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. Request an estimate through our contact form or call (813) 620-4797, and a member of our team will follow up within one business day.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are headquartered in Tampa and serve the entire state of Florida, from Tampa Bay to Central and South Florida.',
  },
  {
    question: 'Are you licensed in Florida?',
    answer:
      'Yes. Quality Roofing holds a state certified roofing contractor license, CCC042846, and a certified general contractor license, CGC1507166.',
  },
  {
    question: 'What types of properties do you work on?',
    answer:
      'We handle commercial, residential, and multi-housing roofing, along with repairs, maintenance, and restoration for all types of roofs.',
  },
  {
    question: 'Which roofing manufacturers are you certified with?',
    answer:
      'We are certified with GAF, Siplast, Johns Manville, Owens Corning, Polyglass, and SIKA, which gives our clients access to manufacturer-backed warranties.',
  },
];

export const commercialFaqs: Faq[] = [
  {
    question: 'What commercial roofing systems do you install?',
    answer:
      'We install single ply systems including TPO, PVC, and EPDM, along with built up roofing, modified bitumen, standing seam metal, and pedestal paver systems.',
  },
  {
    question: 'How large a commercial project can you take on?',
    answer:
      'We handle commercial projects of every scale, from neighborhood retail centers to developments exceeding $5 million.',
  },
  {
    question: 'Do you work with general contractors and developers?',
    answer:
      'Yes. We work with general contractors, developers, architects, and property management companies on new construction and roof replacements.',
  },
  {
    question: 'Can you replace a roof while the building stays open?',
    answer:
      'Yes. We plan full tear-off and replacement projects to keep disruption to building operations to a minimum.',
  },
  {
    question: 'Are your commercial roofs backed by manufacturer warranties?',
    answer:
      'As a certified installer for GAF, Siplast, Johns Manville, and other leading manufacturers, we install systems that can be backed by manufacturer warranties.',
  },
];

export const residentialFaqs: Faq[] = [
  {
    question: 'What roofing materials do you offer for homes?',
    answer:
      'We install shingle, tile, and slate roofs as well as standing seam metal, matched to your home and to Florida weather.',
  },
  {
    question: 'Do you roof new homes?',
    answer: 'Yes. We install roofing for new homes and custom builds, coordinating directly with your builder.',
  },
  {
    question: 'Can you repair my roof instead of replacing it?',
    answer:
      'Often, yes. We provide repairs, maintenance, and roof assessments, and we will recommend a replacement only when it is the right choice.',
  },
  {
    question: 'Do you offer warranties on residential roofs?',
    answer:
      'As certified installers for GAF, Owens Corning, and other leading manufacturers, we can offer manufacturer-backed warranty coverage on qualifying installations.',
  },
];

export const multiHousingFaqs: Faq[] = [
  {
    question: 'What types of communities do you work with?',
    answer: 'We roof apartment communities, condominiums, HOA-managed properties, and multi-family complexes across Florida.',
  },
  {
    question: 'How do you limit disruption for residents?',
    answer:
      'We build phased project schedules, coordinate access across multiple buildings, and communicate timelines with property managers, tenants, and stakeholders.',
  },
  {
    question: 'Who do you coordinate with on a project?',
    answer: 'We work directly with property managers, HOA boards, and ownership groups from planning through completion.',
  },
  {
    question: 'Can you help us plan and budget for roof work?',
    answer:
      'Yes. We provide detailed roof condition reports to support capital planning and reserve budgeting.',
  },
];

export const repairsFaqs: Faq[] = [
  {
    question: 'Do you handle storm damage?',
    answer:
      'Yes. Our disaster restoration team repairs storm damage, addresses water intrusion, and helps with hurricane recovery. Call (813) 620-4797.',
  },
  {
    question: 'Do you work with insurance companies?',
    answer:
      'Yes. We work with insurance adjusters and property owners to navigate the process from assessment through completion.',
  },
  {
    question: 'Do you offer maintenance programs?',
    answer:
      'Yes. We offer ongoing maintenance programs to extend the life of your roof and catch problems before they become costly.',
  },
  {
    question: 'Do you repair historic roofs?',
    answer:
      'Yes. We restore landmark and heritage buildings with period-appropriate materials and techniques, including the 1908 Hutchinson House in Tampa.',
  },
  {
    question: 'What types of roofs do you repair?',
    answer: 'Our service department is experienced in repairing and maintaining all types of roofing.',
  },
];

export const standingSeamFaqs: Faq[] = [
  {
    question: 'What is a standing seam metal roof?',
    answer:
      'A standing seam roof is made of long metal panels joined by raised, interlocking seams that run from the top of the roof to the bottom.',
  },
  {
    question: 'Do you make the panels yourselves?',
    answer:
      'Yes. We have two mobile roll former machines for standing seam roofs, backed by our experience in custom sheet metal fabrication.',
  },
  {
    question: 'Is standing seam available for homes and businesses?',
    answer: 'Yes. We install standing seam metal on commercial, residential, and multi-housing properties across Florida.',
  },
  {
    question: 'Do you install seamless gutters?',
    answer: 'Yes. We form seamless gutters with our own mobile seamless gutter forming machine.',
  },
];
