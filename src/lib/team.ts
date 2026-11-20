/* Team roster, shared by the About page team grid and the home page team highlight. */
export type TeamMember = { name: string; title: string; photo?: string; since?: number };

const photo = (slug: string) => `/assets/team/${slug}-headshot-quality-roofing.webp`;

export const team: TeamMember[] = [
  { name: 'Richard C. Jenkins', title: 'Chief Executive Officer and Owner', photo: photo('richard-jenkins') },
  { name: 'John Garrison', title: 'Vice President', since: 1997, photo: photo('john-garrison') },
  { name: 'Miriah Akers', title: 'Vice President of Operations', since: 2012, photo: '/assets/team/miriah-akers-headshot-quality-roofing-v2.webp' },
  { name: 'Adam Drury', title: 'Vice President of Construction', since: 2013, photo: photo('adam-drury') },
  { name: 'Chris Brooks', title: 'Vice President of Sales', photo: photo('chris-brooks') },
  { name: 'Susan Jenkins', title: 'Marketing Director', since: 2012, photo: photo('susan-jenkins') },
  { name: 'David Placensio', title: 'Safety Director', since: 2018, photo: photo('david-placensio') },
  { name: 'Vivian Reliz', title: 'Human Resource Manager', since: 2018, photo: photo('vivian-reliz') },
  { name: 'Lauren Willmar', title: 'Production Manager', since: 2020, photo: '/assets/team/lauren-willmar-headshot-quality-roofing-v2.webp' },
  { name: 'Ron Wiggins', title: 'Service Department Manager', since: 2025, photo: photo('ron-wiggins') },
  { name: 'Desmond Barrow', title: 'Warehouse Manager', since: 2021, photo: photo('desmond-barrow') },
  { name: 'Marvin Maldonado Diaz', title: 'Sheet Metal Shop Supervisor', photo: photo('marvin-maldonado-diaz') },
  { name: 'Caleb Ingram', title: 'Project Manager', since: 2026, photo: photo('caleb-ingram') },
  { name: 'Ken Davis', title: 'Estimator', photo: photo('ken-davis') },
  { name: 'Jorge Rodriguez', title: 'Estimator', since: 2025, photo: photo('jorge-rodriguez') },
  { name: 'Ehsan Siddiqui', title: 'Sales Representative', photo: photo('ehsan-siddiqui') },
  { name: 'Haley Novak', title: 'Accounts Payable Specialist', since: 2018, photo: photo('haley-novak') },
  { name: 'Jennifer Palamonka', title: 'Contract and Billing Administrator', since: 2025, photo: photo('jennifer-palamonka') },
  { name: 'Juan Hernandez', title: 'CDL Driver', photo: photo('juan-hernandez') },
  { name: 'George Cruz', title: 'CDL Driver', photo: photo('george-cruz') },
];

/* Shown on the home page: company leadership. */
export const homeTeamHighlight = [
  'Richard C. Jenkins',
  'John Garrison',
  'Miriah Akers',
  'Adam Drury',
  'Chris Brooks',
]
  .map((name) => team.find((member) => member.name === name))
  .filter((member): member is TeamMember => Boolean(member));
