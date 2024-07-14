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
  const mask = document.getElementById('mask');

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
    .to(mask, { left: `-${moonMaskAjustSize / 2}px`, ease: 'Power4.out' });
};

export default animation;
