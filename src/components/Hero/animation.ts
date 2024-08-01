import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const moonMaskAjustSize = 20;
  document.documentElement.style.setProperty(
    '--moon-mask-ajust-size',
    `${moonMaskAjustSize}px`
  );
  const hero = document.getElementById('hero');
  const height = hero?.clientHeight;
  const moonMask = document.getElementById('moon-mask');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: () => `+=${height}`,
        scrub: true,
      },
    })
    .to(moonMask, { right: 150, ease: 'Power4.out' })
    .to(hero, { autoAlpha: 0, scale: 1.1, ease: 'Power4.out' }, '<');
};

export default animation;
