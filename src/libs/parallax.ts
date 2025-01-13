import SimpleParallax from 'simple-parallax-js/vanilla';
import getIsMobile from './getIsMobile';

const parallax = () => {
  const className = '.ts-parallax';
  const targets = document.querySelectorAll<HTMLElement>(`${className} > img`);

  new SimpleParallax(targets, {
    orientation: `${getIsMobile() ? 'down' : 'right'}`,
    customWrapper: className,
    delay: 1,
    scale: 1.5,
    transition: 'cubic-bezier(0,0,0,1)',
  });
};

export default parallax;
