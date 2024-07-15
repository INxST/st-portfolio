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
  const moonMask = document.getElementById('moon-mask');
  const nextMask = document.getElementById('next-mask');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=1400',
        scrub: true,
        pin: true,
      },
    })
    .to(moonMask, { left: `-${moonMaskAjustSize / 2}px`, ease: 'Power4.out' })
    .fromTo(
      nextMask,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    );
};

export default animation;
