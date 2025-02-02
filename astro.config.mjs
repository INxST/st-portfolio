import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');
const site =
  env.TARGET === 'gh-pages'
    ? 'https://inxst.github.io'
    : 'https://taikisato.com';
const base =
  env.TARGET === 'gh-pages'
    ? '/st-portfolio'
    : env.SUB_DIR
      ? `/${env.SUB_DIR}`
      : '';

// https://astro.build/config
export default defineConfig({
  site: site,
  base: base,
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        lib: `${base}/partytown/`,
      },
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents'],
    },
  },
});
