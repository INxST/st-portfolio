import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Zen Old Mincho', ...defaultTheme.fontFamily.serif],
        'serif-en': ['Marcellus', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
