import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const selectorImage = '.ts-parallax-gallery-image';
  const yPercents = [500, 1000, 1500];
  const scrubs = [1, 2, 3];
  const target = document.getElementById('parallax-gallery');
  const images = gsap.utils.toArray<HTMLElement>(selectorImage);

  gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: 'top top',
      end: () => `+=${target?.clientHeight! - 250}`,
      scrub: true,
      pin: true,
    },
  });

  images.forEach(image => {
    const yPercent = yPercents[Math.floor(Math.random())];
    const scrub = scrubs[Math.floor(Math.random())];
    gsap.set(image, { zIndex: yPercent / 100, position: 'relative' });
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

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    images.forEach(image => {
      const targetPos = image.getBoundingClientRect().top + scroll;

      if (scroll > targetPos - windowHeight) {
        image.classList.add('is-active');
      }
    });
  });
};

export default animation;
