# portfolio

My personal website: [muktadirmahit.vercel.app](https://muktadirmahit.vercel.app)

Built with [Astro](https://astro.build). Static HTML, very little JavaScript, images optimized at build time.

## Running locally

```bash
npm install
npm run dev       # dev server on http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the build
```

Requires Node 22.12+. On macOS, `Start Portfolio.command` builds and opens the site with a double-click.

## Structure

Content is kept in typed data files, separate from the components:

| Content | File |
| --- | --- |
| Name, links, SEO | `src/data/profile.ts` |
| Projects | `src/data/projects.ts` |
| Contests, problems set | `src/data/contests.ts` |
| Leadership, timeline, skills | `src/data/about.ts` |
| Places on the map | `src/data/places.ts` |

Images live in `src/assets/` and are imported from the data files, so a missing or misnamed image fails the build instead of breaking the page.

Some details:

- **Codeforces data** (rating chart, contest count, max rating, rank) is fetched from the Codeforces API at build time, with `src/data/cf-snapshot.json` as a fallback when the API is unavailable. A weekly GitHub Action refreshes the snapshot, which also triggers a redeploy.
- **The Bangladesh map** is projected at build time from Natural Earth data with `d3-geo`, so the browser only receives an SVG path.
- **The rating chart** is plain SVG plus positioned HTML labels, so text stays readable at any width.
- **SEO:** `ProfilePage`/`Person` structured data, sitemap, robots.txt, Open Graph image (`npm run og` regenerates it).

## Scripts

| Command | Does |
| --- | --- |
| `npm run check` | Type-check the project |
| `npm run cf:snapshot` | Refresh the Codeforces fallback data |
| `npm run og` | Regenerate the social preview image and touch icon |
