import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      screens: {
        default: '100%',
      },
    },
    extend: {
      fontFamily: {
        serif: ['Zen Old Mincho', ...defaultTheme.fontFamily.serif],
        'serif-en': ['Marcellus', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        black: '#3D3D3D',
        'mine-shaft': '#2F2F2F',
        gray: '#808080',
        silver: '#BBBBBB',
        'taupe-gray': '#B4AC97',
        'quill-gray': '#DEDEDA',
        pampas: '#F9F9F6',
        emperor: '#4F4F4F',
      },
      animation: {
        'text-focus-in':
          'text-focus-in 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'text-blur-out':
          'text-blur-out 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
      },
      aspectRatio: {
        'works-slide': '59/72',
      },
      keyframes: {
        'text-focus-in': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          to: {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'text-blur-out': {
          '0%': {
            filter: 'blur(.01)',
          },
          to: {
            filter: 'blur(12px) opacity(0%)',
          },
        },
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
          whiteSpace: 'pre',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
          whiteSpace: 'pre',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
