import type { ImageMetadata } from 'astro';

import aqLoading from '../assets/projects/asterra/loading.png';
import aqModes from '../assets/projects/asterra/modes.png';
import aqSun from '../assets/projects/asterra/explore-sun.png';
import aqBlackhole from '../assets/projects/asterra/explore-blackhole.png';
import aqPlanet from '../assets/projects/asterra/explore-planet.png';
import aqAsteroids from '../assets/projects/asterra/asteroids.png';
import aqCombat from '../assets/projects/asterra/combat.png';

import botSide from '../assets/projects/spybot/side.jpg';
import botTop from '../assets/projects/spybot/top.jpg';
import botFair from '../assets/projects/spybot/fair-visitors.jpg';
import botTable from '../assets/projects/spybot/fair-table.jpg';

import cqGame from '../assets/projects/codequest/game.png';
import cqGames from '../assets/projects/codequest/games.png';
import cqPractice from '../assets/projects/codequest/practice.png';
import cqContests from '../assets/projects/codequest/contests.png';
import cqInterviews from '../assets/projects/codequest/interviews.png';
import cqCommunity from '../assets/projects/codequest/community.png';

export interface Shot {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface Note {
  title: string;
  body: string;
}

export interface Project {
  id: string;
  name: string;
  /** Short line under the name: domain · format · team. */
  kicker: string;
  tagline: string;
  recognition?: string;
  team: string;
  /** My own contribution to the project. */
  myPart: string[];
  stack: string[];
  notes: Note[];
  links: { label: string; href: string }[];
  cover: Shot;
  gallery: Shot[];
}

export const projects: Project[] = [
  {
    id: 'asterraquest',
    name: 'AsterraQuest',
    kicker: 'Java desktop game · Networked multiplayer',
    tagline:
      'A JavaFX space game you can explore alone or play head-to-head against a friend over the network, with accounts, a coin store, rankings, a world chat and an AI co-pilot.',
    recognition: '2nd Runner-up, Intra-UIU Advanced OOP Project Show',
    team: 'Team of 2',
    myPart: ['Multiplayer game server', 'Store & player-data backend', 'Character design'],
    stack: ['Java 17', 'JavaFX + FXML', 'Java sockets', 'java.util.concurrent', 'java.net.http', 'Maven'],
    notes: [
      {
        title: 'A game server written from scratch',
        body: 'Multiplayer runs on a TCP server I wrote with plain Java sockets. Each player who connects gets a handler on a thread pool. The server keeps track of who is online, routes match invites, pairs two players into a timed 30-second session, relays positions and scores between them, and tells the remaining player if their opponent drops.',
      },
      {
        title: 'A small protocol of my own',
        body: 'Clients and server talk in a line-based text protocol I designed: AUTH, INVITE, INVITE_ACCEPT, POS, SCORE, END. Shared state such as online players and active pairings lives in concurrent maps so many handler threads can read and update it safely.',
      },
      {
        title: 'Store and player data',
        body: 'Accounts, coins, levels and win/loss records are saved to a flat file. The store checks a player’s balance, deducts coins for a purchase and writes their record back, and profile and ranking screens read from the same data.',
      },
    ],
    links: [
      { label: 'Source code', href: 'https://github.com/muktadirmahit/Asterra-Quest_JavaFX-based-2D-Space-battle-game' },
    ],
    cover: { src: aqPlanet, alt: 'AsterraQuest exploration mode: a small spaceship passing a large pixel-art planet, with asteroids below and a boost meter.' },
    gallery: [
      { src: aqLoading, alt: 'Loading screen showing a cockpit view and a progress bar at 62%.', caption: 'Loading into a mission' },
      { src: aqModes, alt: 'Menu offering single player and multiplayer modes over a space battle backdrop.', caption: 'Single player or multiplayer' },
      { src: aqCombat, alt: 'Multiplayer combat: two rows of rocket ships facing each other with a score counter.', caption: 'Head-to-head combat, synced through the game server' },
      { src: aqAsteroids, alt: 'Ship flying through an asteroid field collecting gold coins, with a boost meter.', caption: 'Destroy asteroids to earn coins for the store' },
      { src: aqSun, alt: 'Info card about the Sun appearing as the ship approaches it.', caption: 'Open-world exploration with info cards for each body' },
      { src: aqBlackhole, alt: 'Ship near a black hole with markers pointing to off-screen planets.', caption: 'Edge markers point to everything off-screen' },
    ],
  },
  {
    id: 'security-bot',
    name: 'Supervision & Security Bot',
    kicker: 'Embedded systems · Robotics',
    tagline:
      'A remote-controlled field robot that scouts ahead, detects hazards and marks them, so a person does not have to walk into them first. All eight subsystems worked in the final demo.',
    recognition: 'Exhibited at the 43rd National Science & Technology Fair, 2022',
    team: 'Team of 2 · 2022',
    myPart: ['Mechanical build & wiring', 'All firmware', 'Bluetooth control', 'Live camera', 'Radar display'],
    stack: ['Arduino Uno', 'ESP32-CAM', 'Ultrasonic & gas sensors', 'Servos', 'Bluetooth', 'Solar charging'],
    notes: [],
    links: [],
    cover: { src: botFair, alt: 'Explaining the robot to visitors, including a military officer, at the 43rd National Science & Technology Fair (frame from myTV coverage).' },
    gallery: [
      { src: botSide, alt: 'Side view of the robot on a concrete floor.', caption: 'Four-wheel drive chassis with the arm folded forward' },
      { src: botTop, alt: 'Top-down view showing the solar panel, Arduino, LCD and paint reservoir.', caption: 'From above: solar panel, controller, display and the paint reservoir' },
      { src: botTable, alt: 'The robot on the exhibition table with its radar display running on a laptop beside it.', caption: 'At the fair, with the radar display running on the laptop (frame from myTV coverage)' },
    ],
  },
  {
    id: 'codequest',
    name: 'CodeQuest',
    kicker: 'Product & UX design · Figma prototype',
    tagline:
      'A LeetCode-style practice platform designed end to end, built around one idea: learn an algorithm by writing code that plays a game.',
    recognition: '4th Runner-up, Intra-UIU System Analysis & Design Project Show',
    team: 'Team of 2',
    myPart: ['Product concept & screens, co-designed with my teammate'],
    stack: ['Figma', 'Interactive prototyping', 'System analysis'],
    notes: [
      {
        title: 'Play & Learn',
        body: 'Each game is tied to a topic. In one, your program receives the two nearest enemy ships every turn and has to print which one to shoot, so you practice implementation and comparisons against a live scoreboard.',
      },
      {
        title: 'The rest of the platform',
        body: 'Practice by topic with progress tracking, rated contests with countdowns and leaderboards, mock-interview scheduling and a community feed, all designed as one connected product rather than separate pages.',
      },
      {
        title: 'What it is, and what it is not',
        body: 'This is a clickable prototype, not a coded product. The work was in the analysis: deciding who the users are, what they need at each step, and how the screens connect before writing any code.',
      },
    ],
    links: [
      {
        label: 'Open the Figma prototype',
        href: 'https://www.figma.com/proto/N2r7LNk1yaISQ5lfD5ZoXf/Code_Quest?node-id=1-2&p=f&t=vpCRA5p9uUvaT669-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
      },
    ],
    cover: { src: cqGame, alt: 'CodeQuest game screen: a space shooter on the left and a C++ code editor on the right.' },
    gallery: [
      { src: cqGames, alt: 'A grid of algorithm games with topic tags such as implementation and binary search.', caption: 'Games grouped by algorithm topic' },
      { src: cqPractice, alt: 'DSA topics page with progress bars for arrays, linked lists, graphs and dynamic programming.', caption: 'Practice by topic, with progress' },
      { src: cqContests, alt: 'Contest page featuring a weekly contest countdown and a leaderboard.', caption: 'Contests and leaderboards' },
      { src: cqInterviews, alt: 'Interviews page listing upcoming mock interviews and past feedback.', caption: 'Mock interview scheduling' },
      { src: cqCommunity, alt: 'Community feed with a question about binary search and a code snippet.', caption: 'Community feed' },
    ],
  },
];

/** Subsystems of the Security Bot. `spot` marks the ones visible in the front photo (x/y in %). */
export const botSystems: { name: string; detail: string; spot?: { x: number; y: number } }[] = [
  { name: 'Remote driving', detail: 'Driven from a phone app over Bluetooth, from a distance, with no one on board.' },
  { name: 'Live camera', detail: 'An ESP32-CAM streams live video to a browser so the operator can see what the robot sees.', spot: { x: 43, y: 64 } },
  { name: 'Radar', detail: 'An ultrasonic sensor sweeps on a servo; a laptop radar display I wrote plots each object’s direction and distance.', spot: { x: 72, y: 18 } },
  { name: 'Robotic arm', detail: 'Handles a suspected bomb while the operator watches through the camera.', spot: { x: 49, y: 45 } },
  { name: 'Hazard marking', detail: 'If a device cannot be defused, the robot sprays red paint on the spot as a warning.' },
  { name: 'Landmine detection', detail: 'A metal detector on the chassis flags buried metal ahead of the robot.' },
  { name: 'Gas detection', detail: 'A gas sensor detects toxic gas in the area.', spot: { x: 28, y: 70 } },
  { name: 'Solar charging', detail: 'An onboard solar panel recharges the battery without mains power.' },
];

/** Line-based protocol sample shown next to the AsterraQuest architecture diagram. */
export const protocolSample = [
  ['→', 'AUTH:nova'],
  ['←', 'AUTH_OK'],
  ['→', 'INVITE:orion'],
  ['←', 'INVITE_ACCEPTED:orion'],
  ['←', 'ID:1'],
  ['←', 'START'],
  ['→', 'POS:412'],
  ['←', 'POS:412:388'],
  ['←', 'SCORE:7:5'],
  ['←', 'END'],
] as const;
