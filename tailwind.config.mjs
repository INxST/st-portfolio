import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        default: '1360px',
      },
    },
    extend: {
      fontFamily: {
        serif: ['Zen Old Mincho', ...defaultTheme.fontFamily.serif],
        'serif-en': ['Marcellus', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        black: '#3D3D3D',
        gray: '#808080',
        silver: '#BBBBBB',
        'taupe-gray': '#B4AC97',
        'quill-gray': '#DEDEDA',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
