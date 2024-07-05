import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const scrollSlide = () => {
  gsap.registerPlugin(ScrollTrigger);
  const section = document.getElementById('scroll-slide');
  const slides = gsap.utils.toArray('.ts-scroll-slide-item');
  const width = section?.offsetWidth;
  console.log(width);

  gsap.to(slides, {
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
