import type { ImageMetadata } from 'astro';

import icpc2024 from '../assets/contests/icpc-2024.jpg';
import icpc2025Team from '../assets/contests/icpc-2025-team.jpg';
import icpc2025Solo from '../assets/contests/icpc-2025-solo.jpg';
import buet from '../assets/contests/buet-2026.jpg';
import cuet from '../assets/contests/cuet-2025.jpg';
import duet from '../assets/contests/duet-2026.jpg';
import iut from '../assets/contests/iut-2026.jpg';
import ndub from '../assets/contests/ndub-2026.jpg';
import nsu from '../assets/contests/nsu-2026.jpg';
import nwu from '../assets/contests/nwu-2025.jpg';
import sust from '../assets/contests/sust-2026.jpg';
import uiu from '../assets/contests/uiu-2025.jpg';
import uu from '../assets/contests/uu-2025.jpg';

export const TEAM = 'UIU_Entropy';
export const TEAMMATES = ['SK Istiaq Arefin', 'Tashfiq Ahmed Taki'];

export interface Contest {
  id: string;
  name: string;
  kind: 'ICPC' | 'IUPC';
  season: number;
  rank: number;
  team: string;
  city: string;
  host?: string;
  highlight?: string;
  photo?: { src: ImageMetadata; alt: string; caption: string };
}

/**
 * Onsite team contests, oldest season first. To add one: import the photo above
 * (put it in src/assets/contests/), then add an entry to this list.
 */
export const contests: Contest[] = [
  {
    id: 'icpc-2024', name: 'ICPC Asia Dhaka Regional', kind: 'ICPC', season: 2024, rank: 198, team: TEAM, city: 'Dhaka',
    highlight: 'First ICPC regional',
    photo: { src: icpc2024, alt: 'Three team members in blue ICPC 2024 shirts in front of the contest banner.', caption: 'ICPC Asia Dhaka Regional 2024: my first regional. I’m on the left.' },
  },
  {
    id: 'uiu-2025', name: 'UIU IUPC', kind: 'IUPC', season: 2025, rank: 145, team: TEAM, city: 'Dhaka', host: 'United International University',
    photo: { src: uiu, alt: 'Three team members in matching contest shirts in front of a large astronaut mural.', caption: 'UIU IUPC 2025, on home ground. I’m on the right.' },
  },
  {
    id: 'uu-2025', name: 'UU IUPC', kind: 'IUPC', season: 2025, rank: 93, team: 'UIU_অরুণ_প্রাতের_তরুণ_দল', city: 'Dhaka',
    photo: { src: uu, alt: 'Reading a problem statement at the contest desk while teammates work at the computer behind.', caption: 'UU IUPC 2025, mid-contest: reading the next problem while my teammates code.' },
  },
  {
    id: 'nwu-2025', name: 'NWU IUPC', kind: 'IUPC', season: 2025, rank: 29, team: TEAM, city: 'Khulna', host: 'North Western University, Khulna',
    highlight: 'First team to solve problem A',
    photo: { src: nwu, alt: 'The team receiving a prize on stage at NWU.', caption: 'NWU IUPC 2025, Khulna: receiving the first-solve prize for problem A.' },
  },
  {
    id: 'cuet-2025', name: 'CUET IUPC', kind: 'IUPC', season: 2025, rank: 66, team: TEAM, city: 'Chattogram', host: 'Chittagong University of Engineering & Technology',
    photo: { src: cuet, alt: 'Three team members in front of a dome-shaped building.', caption: 'CUET IUPC 2025, Chattogram. I’m on the left.' },
  },
  {
    id: 'icpc-2025', name: 'ICPC Asia Dhaka Regional', kind: 'ICPC', season: 2025, rank: 121, team: TEAM, city: 'Dhaka', host: 'Hosted by BUBT',
    highlight: '77 places higher than 2024',
    photo: { src: icpc2025Solo, alt: 'Standing with arms crossed in front of the ICPC 2025 Asia Dhaka Regional banner.', caption: 'ICPC Asia Dhaka Regional 2025, hosted by BUBT.' },
  },
  {
    id: 'buet-2026', name: 'BUET IUPC', kind: 'IUPC', season: 2026, rank: 96, team: TEAM, city: 'Dhaka', host: 'Bangladesh University of Engineering & Technology',
    photo: { src: buet, alt: 'Three team members outside a tall campus building.', caption: 'BUET IUPC 2026. I’m on the left.' },
  },
  {
    id: 'ndub-2026', name: 'NDUB IUPC', kind: 'IUPC', season: 2026, rank: 65, team: TEAM, city: 'Dhaka', host: 'Notre Dame University Bangladesh',
    photo: { src: ndub, alt: 'Three team members in front of the NDUB CSE Fest 2026 banner.', caption: 'NDUB IUPC 2026, part of NDUB CSE Fest. I’m on the left.' },
  },
  {
    id: 'nsu-2026', name: 'NSU IUPC', kind: 'IUPC', season: 2026, rank: 70, team: TEAM, city: 'Dhaka', host: 'North South University',
    photo: { src: nsu, alt: 'Three team members holding contest backpacks in a university hallway.', caption: 'NSU IUPC 2026. I’m on the right.' },
  },
  {
    id: 'duet-2026', name: 'DUET IUPC', kind: 'IUPC', season: 2026, rank: 69, team: TEAM, city: 'Gazipur', host: 'Dhaka University of Engineering & Technology',
    photo: { src: duet, alt: 'Team members in front of the DUET CSE Carnival 2026 backdrop.', caption: 'DUET IUPC 2026, Gazipur. I’m on the right.' },
  },
  {
    id: 'sust-2026', name: 'SUST IUPC', kind: 'IUPC', season: 2026, rank: 70, team: TEAM, city: 'Sylhet', host: 'Shahjalal University of Science & Technology',
    photo: { src: sust, alt: 'Three team members at Sylhet railway station beside the station name board.', caption: 'SUST IUPC 2026: arriving at Sylhet station. My favourite photo from all of it.' },
  },
  {
    id: 'iut-2026', name: 'IUT IUPC', kind: 'IUPC', season: 2026, rank: 50, team: TEAM, city: 'Gazipur', host: 'Islamic University of Technology',
    photo: { src: iut, alt: 'Three team members smiling in front of red-brick campus architecture.', caption: 'IUT IUPC 2026, Gazipur. I’m on the right.' },
  },
];

export const icpcTeamPhoto = {
  src: icpc2025Team,
  alt: 'Three teammates working through problems on paper beside a computer during the ICPC 2025 regional.',
  caption: 'Mid-contest at ICPC 2025: two on paper, one at the keyboard.',
};

/** Other contests worth listing, kept short on purpose. */
export const otherResults = [
  { name: 'CodeClash, Oscillon 2025 (AUST)', result: '15th', note: 'as UIU_Entropy' },
  { name: 'Youth Competitive Programming Challenge 2024 (Phitron)', result: '19th', note: '' },
  { name: 'Code of Clash (UIU, onsite)', result: '7th', note: '' },
  { name: 'Samsung R&D Bangladesh Code Contest 2024', result: '276th', note: 'Qualified for round 2' },
  { name: 'BeatCode 2024 (Intra-UIU)', result: 'Bronze', note: 'Medalist' },
];

/** Problems I set for Intra UIU Programming Contests (public on Codeforces Gym). */
export const problemsSet = [
  { title: 'Earthquake', ref: 'Gym 656262 · B', href: 'https://codeforces.com/gym/656262/problem/B' },
  { title: 'Why So Cards?', ref: 'Gym 689348 · E', href: 'https://codeforces.com/gym/689348/problem/E' },
  { title: 'Valid Bracket', ref: 'Gym 689348 · F', href: 'https://codeforces.com/gym/689348/problem/F' },
];

export const PROBLEMS_SOLVED = '1,500+';
