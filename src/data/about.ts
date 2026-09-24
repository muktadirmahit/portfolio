// Leadership, the timeline, education and skills.
import type { ImageMetadata } from 'astro';
import cpcLogo from '../assets/logos/uiu-cpc.png';
import clubLogo from '../assets/logos/uiu-computer-club.png';
import wristoraLogo from '../assets/logos/wristora.png';

/** `logo` is an image tile; roles without one get an icon tile instead. */
export interface Role {
  org: string;
  role: string;
  period: string;
  body: string;
  logo?: ImageMetadata;
}

export const beatcode = {
  name: 'BeatCode 5.0',
  role: 'Main lead & coordinator',
  context: 'Intra-UIU programming contest for junior students',
  summary:
    'I led it end to end: secured the title sponsor, managed the budget, planned the preparation sessions, wrote the contest guidelines, and ran the day on stage.',
  figure: { value: '300+', label: 'participants, volunteers and guests' },
};

export const roles: Role[] = [
  {
    org: 'UIU Competitive Programming Community',
    role: 'Coordinator & problem setter',
    period: 'Nov 2024 – present',
    logo: cpcLogo,
    body: 'Run the community’s contests and training sessions, set problems, mentor juniors, coordinate volunteers and the budget, and organize UIU teams for external contests.',
  },
  {
    org: 'UIU Computer Club',
    role: 'Head, Programming Department',
    period: 'Sept 2023 – present',
    logo: clubLogo,
    body: 'Organize programming workshops and technical sessions and help run intra-university contests.',
  },
  {
    org: 'Competitive programming mentor',
    role: 'Instructor',
    period: '',
    body: 'Teach C++ and beginner-to-intermediate competitive programming in structured training sessions.',
  },
];

export const venture = {
  name: 'Wristora',
  role: 'Founder',
  period: 'Aug 2025 – present',
  logo: wristoraLogo,
  body: 'A small online watch store I run on the side: sourcing, inventory, pricing, customer support after the sale, and the books.',
  links: [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61578280334692' },
    { label: 'Instagram', href: 'https://www.instagram.com/watches.wristora/' },
  ],
};

export const timeline = [
  { year: '2020', items: ['SSC, Mohammadpur Preparatory School & College. GPA 5.00'] },
  { year: '2022', items: ['HSC, Birshreshtha Noor Mohammad Public College. GPA 5.00', 'Built the Supervision & Security Bot, exhibited at the 43rd National Science & Technology Fair'] },
  { year: '2023', items: ['Started BSc in CSE at United International University', 'Head of the Programming Department, UIU Computer Club'] },
  { year: '2024', items: ['First rated Codeforces contest; first ICPC Asia Dhaka Regional (198th)', 'Coordinator of the UIU Competitive Programming Community'] },
  { year: '2025', items: ['Back at the ICPC regional: 121st', 'First team to solve problem A at NWU IUPC', 'Started Wristora'] },
  { year: '2026', items: ['Six IUPCs, from Sylhet to Gazipur', '{cfContests} rated Codeforces contests and counting'] },
  { year: '2027', items: ['Graduating. Next: a software engineering role, and graduate study abroad'], future: true },
];

export const skills = [
  { group: 'Languages', items: ['C++', 'Java', 'Python', 'JavaScript', 'HTML & CSS'], evidence: 'C++ for contests and teaching; Java for AsterraQuest' },
  { group: 'Computer science', items: ['Data structures & algorithms', 'Object-oriented design', 'Client–server networking', 'Concurrency basics'], evidence: '1,500+ problems; AsterraQuest’s game server' },
  { group: 'Embedded', items: ['Arduino', 'ESP32 / ESP32-CAM', 'Sensors & servos', 'Bluetooth'], evidence: 'Supervision & Security Bot' },
  { group: 'Tools', items: ['Git & GitHub', 'VS Code', 'Maven', 'Gradle', 'JavaFX', 'Figma'], evidence: 'Across all three projects' },
];
