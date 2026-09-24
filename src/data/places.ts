import type { ImageMetadata } from 'astro';

import dhaka from '../assets/places/dhaka.jpg';
import sylhetTea from '../assets/places/sylhet-tea.jpg';
import sylhetJaflong from '../assets/places/sylhet-jaflong.jpg';
import khulnaStation from '../assets/places/khulna-station.jpg';
import khulnaNight from '../assets/places/khulna-night.jpg';
import ctgRoad from '../assets/places/ctg-road.jpg';
import ctgGroup from '../assets/places/ctg-group.jpg';
import coxBoats from '../assets/places/cox-boats.jpg';
import coxMe from '../assets/places/cox-me.jpg';
import bandarbanHills from '../assets/places/bandarban-hills.jpg';
import bandarbanLake from '../assets/places/bandarban-lake.jpg';
import stmartinRocks from '../assets/places/stmartin-rocks.jpg';
import stmartinGulls from '../assets/places/stmartin-gulls.jpg';
import chapaiFlood from '../assets/places/chapai-flood.jpg';
import chapaiGroup from '../assets/places/chapai-group.jpg';
import mithamoin from '../assets/places/mithamoin.jpg';
import austagram from '../assets/places/austagram.jpg';
import banglabandhaZero from '../assets/places/banglabandha-zero-point.jpg';
import banglabandhaPort from '../assets/places/banglabandha-port.jpg';
import barapukuria1 from '../assets/places/barapukuria-1.jpg';
import barapukuria2 from '../assets/places/barapukuria-2.jpg';
import teesta1 from '../assets/places/teesta-1.jpg';
import teesta2 from '../assets/places/teesta-2.jpg';

export interface Place {
  id: string;
  name: string;
  region?: string;
  /** [longitude, latitude] */
  coords: [number, number];
  kind: 'home' | 'contest' | 'travel';
  with?: string;
  contests?: string[];
  note: string;
  photos: { src: ImageMetadata; alt: string }[];
}

/** The place shown first when the map loads, whatever order the list is in. */
export const defaultPlaceId = 'sylhet';

export const places: Place[] = [
  {
    id: 'sylhet', name: 'Sylhet', coords: [91.87, 24.9], kind: 'contest', with: 'Friends',
    contests: ['SUST IUPC 2026'],
    note: 'Jaflong, and Mayabi Jhorna, the first waterfall I had ever seen. I still can’t forget it.',
    photos: [
      { src: sylhetJaflong, alt: 'With two friends on the riverbank at Jaflong, misty green hills behind us.' },
      { src: sylhetTea, alt: 'Laughing in a hat among the bushes of a tea garden.' },
    ],
  },
  {
    id: 'kishoreganj', name: 'Mithamain & Austagram', region: 'Kishoreganj haor', coords: [91.08, 24.36], kind: 'travel', with: 'Friends',
    note: 'A road running through the middle of the haor, water in every direction, and a wind that never stops. Unforgettable.',
    photos: [
      { src: mithamoin, alt: 'A painted road stretching straight through open water under a heavy grey sky.' },
      { src: austagram, alt: 'The bow of a wooden boat on wide brown water under a sky full of clouds.' },
    ],
  },
  {
    id: 'stmartin', name: 'St. Martin’s Island', coords: [92.32, 20.63], kind: 'travel',
    note: 'Clear blue water with fish you can see from the shore, trees you won’t find on the mainland, and coconuts on the beach.',
    photos: [
      { src: stmartinRocks, alt: 'Dark coral rocks in shallow, clear sea water.' },
      { src: stmartinGulls, alt: 'Seagulls flying low over the sea at sunset.' },
    ],
  },
  {
    id: 'bandarban', name: 'Bandarban', coords: [92.22, 22.2], kind: 'travel', with: 'Family',
    note: 'The hills, the forest and the sky left me without words. My first time in the hills.',
    photos: [
      { src: bandarbanHills, alt: 'Layers of forested hills fading into haze.' },
      { src: bandarbanLake, alt: 'A lake between wooded hills with a suspension bridge and a small boat.' },
    ],
  },
  {
    id: 'cox', name: 'Cox’s Bazar', coords: [91.98, 21.43], kind: 'travel', with: 'Family',
    note: 'My first look at the longest natural sea beach in the world, with my family.',
    photos: [
      { src: coxBoats, alt: 'Colourful wooden fishing boats resting on the sand by the sea.' },
      { src: coxMe, alt: 'Standing alone on a rock in the surf.' },
    ],
  },
  {
    id: 'chattogram', name: 'Chattogram', coords: [91.8, 22.36], kind: 'contest', with: 'Seniors, juniors and friends from UIU',
    contests: ['CUET IUPC 2025'],
    note: 'What stayed with me was how the seniors looked out for everyone: our priorities, our problems, our safety.',
    photos: [
      { src: ctgGroup, alt: 'A group of UIU students by a campus map board surrounded by trees.' },
      { src: ctgRoad, alt: 'An empty road climbing between forested hills.' },
    ],
  },
  {
    id: 'khulna', name: 'Khulna', coords: [89.55, 22.85], kind: 'contest', with: 'Friends and juniors from UIU',
    contests: ['NWU IUPC 2025'],
    note: 'My first trip outside Dhaka with friends. We went for a contest and came back with a first-solve prize.',
    photos: [
      { src: khulnaStation, alt: 'Selfie with friends in front of the Khulna railway station sign.' },
      { src: khulnaNight, alt: 'Four friends holding tea cups at night.' },
    ],
  },
  {
    id: 'chapai', name: 'Chapainawabganj', region: 'Rajshahi', coords: [88.28, 24.6], kind: 'travel',
    note: 'My hometown. I was there during the flood season and spent the days exploring the villages around it. It felt like going deep into nature.',
    photos: [
      { src: chapaiFlood, alt: 'People and a bicycle standing in floodwater at dusk.' },
      { src: chapaiGroup, alt: 'Selfie with two friends in a boat on floodwater at sunset.' },
    ],
  },
  {
    id: 'banglabandha', name: 'Banglabandha', region: 'Tetulia, Panchagarh', coords: [88.42, 26.63], kind: 'travel',
    note: 'The northernmost tip of Bangladesh: the zero point, and the land port where the country meets its neighbours.',
    photos: [
      { src: banglabandhaZero, alt: 'The circular zero-point monument at Banglabandha at dusk.' },
      { src: banglabandhaPort, alt: 'The road into the Banglabandha land port, with a border gate and signboard.' },
    ],
  },
  {
    id: 'teesta', name: 'Teesta Barrage', region: 'Nilphamari', coords: [89.05, 26.18], kind: 'travel',
    note: 'The long barrage across the Teesta River, the country’s largest irrigation project, with water stretching out on both sides.',
    photos: [
      { src: teesta1, alt: 'Aerial view of the Teesta Barrage and its gates spanning the river.' },
      { src: teesta2, alt: 'The barrage’s row of concrete piers and sluice gates across calm water.' },
    ],
  },
  {
    id: 'barapukuria', name: 'Barapukuria Coal Mine', region: 'Dinajpur', coords: [88.96, 25.55], kind: 'travel',
    note: 'The country’s only working underground coal mine: conveyor towers, coal heaps, and an industry most people only read about.',
    photos: [
      { src: barapukuria1, alt: 'Conveyor towers and elevated belts above heaps of coal at the Barapukuria mine.' },
      { src: barapukuria2, alt: 'Large coal piles in front of the mine buildings and headframe.' },
    ],
  },
  {
    id: 'dhaka', name: 'Dhaka', coords: [90.41, 23.81], kind: 'home',
    contests: ['ICPC ×2', 'BUET', 'NSU', 'NDUB', 'UIU', 'UU', 'IUT & DUET (Gazipur)'],
    note: 'Where I grew up. Loud, crowded, polluted, and still the city I love.',
    photos: [{ src: dhaka, alt: 'A quiet metro rail platform in Dhaka at night.' }],
  },
];

