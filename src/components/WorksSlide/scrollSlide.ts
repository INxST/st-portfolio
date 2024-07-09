import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const scrollSlide = () => {
  gsap.registerPlugin(ScrollTrigger);
  const section = document.getElementById('scroll-slide');
  const container = document.getElementById('scroll-slide-container');
  const slides = gsap.utils.toArray<HTMLElement>('.ts-scroll-slide-item');
  const width = container?.offsetWidth;

  gsap.to(container, {
    xPercent: -100 * (slides.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      pin: true,
      scrub: 1,
      start: 'top top',
      end: `+=${width}`,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
};

export default scrollSlide;
