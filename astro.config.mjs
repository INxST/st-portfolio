import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');
const site =
  env.TARGET === 'gh-pages' ? 'https://inxst.github.io' : 'https://hoge.com';
const base = env.TARGET === 'gh-pages' ? '/st-portfolio' : '';

// https://astro.build/config
export default defineConfig({
  site: site,
  base: base,
  prefetch: {
    prefetchAll: true,
  },
  integrations: [tailwind(), sitemap(), react()],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents'],
    },
  },
});
