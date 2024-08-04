import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import getOverflow from '@/libs/getOverflow';

const horizontalScroll = () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = document.getElementById('horizontal-scroll');
    const container = document.getElementById('horizontal-scroll-container');

    const anime = gsap.to(container, {
      x: getOverflow(container) * -1,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: wrapper,
      pin: true,
      scrub: 1,
      start: 'top top',
      end: () => `+=${getOverflow(container)}`,
      animation: anime,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });
  }
};

export default horizontalScroll;
