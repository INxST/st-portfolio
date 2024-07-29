import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.getElementById('hero');
  const moon = document.getElementById('moon');
  const moonMask = document.getElementById('moon-mask');
  const nextMask = document.getElementById('next-mask');
  const moonWidth = moon?.clientWidth;

  gsap.set(moonMask, {
    left: moonWidth! * 1.5,
    width: moonWidth,
    height: moonWidth! * 1.3,
  });

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
    // 満月 → 半月
    .to(moon, {
      right: '20%',
      height: moonWidth! * 1.3,
    })
    .to(moon, {
      right: '50%',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    })
    // 半月 → 新月
    .to(moonMask, {
      left: moonWidth! * 0.5,
    })
    .to(moonMask, {
      left: moonWidth! * 0.2,
      height: moonWidth! * 1.1,
    })
    .to(moonMask, {
      left: 0,
    })
    .to(
      moon,
      {
        autoAlpha: 0,
      },
      '<'
    )
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
