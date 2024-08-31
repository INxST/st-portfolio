import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imageSequence from './imageSequence';
import updatePath from '@/libs/updatePath';

const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.getElementById('hero');
  const height = hero?.clientHeight;
  const container = document.getElementById('hero-container');

  const frameCount = 133;
  const urls = new Array(frameCount)
    .fill(null)
    .map(
      (_o, i) =>
        `${updatePath('/top/moon')}/moon_${i.toString().padStart(3, '0')}.png`
    );

  imageSequence({
    urls,
    canvas: '#moon',
    scrollTrigger: {
      start: 0,
      end: () => `+=${height! * 0.8}`,
      scrub: true,
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: () => `+=${height}`,
        scrub: true,
      },
    })
    .to(
      container,
      { transform: 'translate3d(0, 20rem, 0)', ease: 'Power4.out' },
      '<'
    );
};

export default animation;
