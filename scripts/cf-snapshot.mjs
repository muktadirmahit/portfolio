// Refreshes src/data/cf-snapshot.json, the fallback used when the Codeforces API
// is unreachable at build time. Leaves the file untouched if nothing changed.
import { readFileSync, writeFileSync } from 'node:fs';

const handle = 'Ethical_Mahit';
const file = new URL('../src/data/cf-snapshot.json', import.meta.url);

const res = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`, { signal: AbortSignal.timeout(15000) });
const body = await res.json();
if (body.status !== 'OK') throw new Error(body.comment ?? 'Codeforces API error');

const history = body.result.map((x) => ({ t: x.ratingUpdateTimeSeconds, r: x.newRating, c: x.contestName }));
const previous = JSON.parse(readFileSync(file, 'utf8'));

if (JSON.stringify(previous.history) === JSON.stringify(history)) {
  console.log(`No change (${history.length} rated contests).`);
} else {
  const snapshot = { handle, fetchedAt: new Date().toISOString().slice(0, 10), history };
  writeFileSync(file, JSON.stringify(snapshot, null, 1) + '\n');
  console.log(`Saved ${history.length} rated contests (max ${Math.max(...history.map((p) => p.r))}).`);
}
