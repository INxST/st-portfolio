import type { ParallaxGalleryItem } from '@/types/ParallaxGalleryItem';

type ParallaxGalleryItems = {
  left: ParallaxGalleryItem[];
  right: ParallaxGalleryItem[];
};

const parallaxGalleryItems: ParallaxGalleryItems = {
  left: [
    {
      src: '/top/about/left-01.jpg',
      alt: 'left-01',
      class: 'w-46 md:w-[27rem] md:ml-[10rem]',
    },
    {
      src: '/top/about/left-02.jpg',
      alt: 'left-02',
      class: 'w-28 md:w-[14rem] mt-28 md:mt-[15rem] -ml-12 md:ml-0',
    },
    {
      src: '/top/about/left-03.jpg',
      alt: 'left-03',
      class: 'w-46 md:w-[21rem] mt-40 md:mt-[3.75rem] ml-14 md:ml-[34rem]',
    },
    {
      src: '/top/about/left-04.jpg',
      alt: 'left-04',
      class: 'w-32 md:w-[21rem] mt-7 md:mt-[7rem] -ml-3 md:ml-[2.8rem]',
    },
  ],
  right: [
    {
      src: '/top/about/right-01.jpg',
      alt: 'right-01',
      class: 'w-37 md:w-[26rem] mt-20 md:mt-[13rem] -mr-10 md:mr-[6rem]',
    },
    {
      src: '/top/about/right-02.jpg',
      alt: 'right-02',
      class: 'w-28 md:w-[12.5rem] mt-20 md:mt-[6rem]',
    },
    {
      src: '/top/about/right-03.jpg',
      alt: 'right-03',
      class: 'w-32 md:w-[22rem] mt-6 md:mt-[7.3rem] mr-3 md:mr-[24rem]',
    },
    {
      src: '/top/about/right-04.jpg',
      alt: 'right-04',
      class: 'w-41 md:w-[30rem] mt-20 md:mt-[7rem] -mr-8 md:-mr-[3rem]',
    },
  ],
};

export default parallaxGalleryItems;
