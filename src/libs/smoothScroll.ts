import Lenis from 'lenis';

const smoothScroll = () => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const anchor = document.querySelector('.ts-anchor');

  anchor?.addEventListener('click', e => {
    e.preventDefault();
    lenis.scrollTo('#main');
  });
};

export default smoothScroll;
