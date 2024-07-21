import type { Slide } from '@/types/Slide';

const slides: Slide[] = [
  {
    type: 'image',
    src: 'https://placehold.jp/3d4070/ffffff/840x473.png',
    alt: 'image 1',
  },
  {
    type: 'image',
    src: 'https://placehold.jp/7e1b1b/ffffff/840x673.png',
    alt: 'image 2',
  },
  {
    type: 'image',
    src: 'https://placehold.jp/000000/ffffff/840x473.png',
    alt: 'image 3',
  },
  {
    type: 'video',
    src: '/sample-5s.mp4',
  },
];

export default slides;
