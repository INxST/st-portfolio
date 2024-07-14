import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const yPercents = [500, 1000, 1500];
  const scrubs = [1, 2, 3];
  const target = document.getElementById('parallax-gallery');
  const images = gsap.utils.toArray<HTMLElement>('.parallax-gallery-image');

  gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: 'top top',
      end: () => `+=${target?.clientHeight}`,
      scrub: true,
      pin: true,
    },
  });

  images.forEach(image => {
    const yPercent = yPercents[Math.floor(Math.random())];
    const scrub = scrubs[Math.floor(Math.random())];
    gsap.fromTo(
      image,
      {
        yPercent: yPercent,
      },
      {
        yPercent: `-${yPercent}`,
        ease: 'none',
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: 'bottom top',
          scrub: scrub,
        },
      }
    );
  });
};

export default animation;
