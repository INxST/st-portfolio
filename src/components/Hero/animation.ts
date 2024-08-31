import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imageSequence from './imageSequence';

const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.getElementById('hero');
  const height = hero?.clientHeight;
  const container = document.getElementById('hero-container');

  const frameCount = 133;
  const urls = new Array(frameCount)
    .fill(null)
    .map((_o, i) => `/top/moon/moon_${i.toString().padStart(3, '0')}.png`);

  // 1枚目の画像にリクエストを送り、存在するかを確認
  const img = new Image();
  img.src = urls[0];
  // 画像が存在しない場合は画像のパスに第一ディレクトリを追加
  if (!img.complete) {
    const path = location.pathname.split('/')[1];
    console.log(path);
    urls.forEach((url, i) => {
      urls[i] = `/${path}${url}`;
    });
  }

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
