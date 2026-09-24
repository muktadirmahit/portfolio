// Codeforces data, fetched once at build time.
// If the API is slow or down, the build falls back to the committed snapshot
// (cf-snapshot.json) so the site always deploys. Refresh the snapshot with:
//   npm run cf:snapshot

import snapshot from './cf-snapshot.json';
import { profile } from './profile';

export interface RatingPoint {
  t: number; // unix seconds
  r: number; // rating after the contest
  c: string; // contest name
}

export interface CodeforcesData {
  handle: string;
  maxRating: number;
  contests: number;
  history: RatingPoint[];
  source: 'live' | 'snapshot';
  asOf: string;
}

/** Codeforces rank titles by rating (lower bound inclusive). `key` maps to a .cf-<key> color class. */
const RANKS = [
  { min: 3000, title: 'Legendary Grandmaster', key: 'gm' },
  { min: 2600, title: 'International Grandmaster', key: 'gm' },
  { min: 2400, title: 'Grandmaster', key: 'gm' },
  { min: 2300, title: 'International Master', key: 'master' },
  { min: 2100, title: 'Master', key: 'master' },
  { min: 1900, title: 'Candidate Master', key: 'cm' },
  { min: 1600, title: 'Expert', key: 'expert' },
  { min: 1400, title: 'Specialist', key: 'specialist' },
  { min: 1200, title: 'Pupil', key: 'pupil' },
  { min: -Infinity, title: 'Newbie', key: 'newbie' },
] as const;

export function rankFor(rating: number) {
  return RANKS.find((r) => rating >= r.min)!;
}

const API = 'https://codeforces.com/api';
const TIMEOUT_MS = 8000;

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const body = (await res.json()) as { status: string; result: T; comment?: string };
  if (body.status !== 'OK') throw new Error(body.comment ?? `Codeforces API error for ${url}`);
  return body.result;
}

function fromSnapshot(): CodeforcesData {
  const history = snapshot.history as RatingPoint[];
  return {
    handle: snapshot.handle,
    maxRating: Math.max(...history.map((p) => p.r)),
    contests: history.length,
    history,
    source: 'snapshot',
    asOf: snapshot.fetchedAt,
  };
}

let cached: Promise<CodeforcesData> | undefined;

async function load(): Promise<CodeforcesData> {
  const handle = profile.codeforcesHandle;
  try {
    const rating = await getJson<{ ratingUpdateTimeSeconds: number; newRating: number; contestName: string }[]>(
      `${API}/user.rating?handle=${encodeURIComponent(handle)}`,
    );
    if (rating.length === 0) throw new Error('Empty rating history');
    const history = rating.map((x) => ({ t: x.ratingUpdateTimeSeconds, r: x.newRating, c: x.contestName }));
    return {
      handle,
      maxRating: Math.max(...history.map((p) => p.r)),
      contests: history.length,
      history,
      source: 'live',
      asOf: new Date().toISOString().slice(0, 10),
    };
  } catch (err) {
    console.warn(`[codeforces] Using snapshot from ${snapshot.fetchedAt}: ${(err as Error).message}`);
    return fromSnapshot();
  }
}

/** Memoized so several components can call it during one build without refetching. */
export function getCodeforces(): Promise<CodeforcesData> {
  cached ??= load();
  return cached;
}
