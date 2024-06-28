import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');
const site =
  env.TARGET === 'gh-pages' ? 'https://inxst.github.io' : 'https://hoge.com';

// https://astro.build/config
export default defineConfig({
  site: site,
  integrations: [tailwind()],
});
