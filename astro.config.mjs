// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site's public address. Drives canonical URLs, the sitemap, robots.txt and social cards.
// Override with the SITE_URL environment variable if the site moves to a custom domain.
const SITE_URL = process.env.SITE_URL ?? 'https://muktadirmahit.vercel.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  image: {
    layout: 'constrained',
    responsiveStyles: false,
  },
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
