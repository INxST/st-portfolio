import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const horizontalScroll = () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = document.getElementById('horizontal-scroll');
    const container = document.getElementById('horizontal-scroll-container');
    const items = gsap.utils.toArray<HTMLElement>('.ts-horizontal-scroll-item');
    const width = container?.clientWidth;
    console.log('width', width);

    gsap.to(container, {
      xPercent: -100 * (items.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${width}`,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};

export default horizontalScroll;
