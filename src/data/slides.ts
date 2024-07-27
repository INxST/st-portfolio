import type { Slide } from '@/types/Slide';

const slides: Slide[] = [
  {
    type: 'image',
    src: {
      pc: 'https://placehold.jp/3d4070/ffffff/840x473.png',
      sp: 'https://placehold.jp/3d4070/ffffff/375x667.png',
    },
    alt: 'image 1',
  },
  {
    type: 'image',
    src: {
      pc: 'https://placehold.jp/3d4070/ffffff/840x473.png',
      sp: 'https://placehold.jp/3d4070/ffffff/375x667.png',
    },
    alt: 'image 2',
  },
  {
    type: 'image',
    src: {
      pc: 'https://placehold.jp/3d4070/ffffff/840x473.png',
      sp: 'https://placehold.jp/3d4070/ffffff/375x667.png',
    },
    alt: 'image 3',
  },
  {
    type: 'video',
    src: {
      pc: '/sample-5s.mp4',
      sp: '/sample-5s.mp4',
    },
  },
];

export default slides;
