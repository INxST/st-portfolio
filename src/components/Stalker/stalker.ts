import { gsap } from 'gsap';
const stalker = () => {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('follower');
  const pos = { x: 0, y: 0 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.5;

  const cursorSetX = gsap.quickSetter(cursor, 'x', 'px');
  const cursorSetY = gsap.quickSetter(cursor, 'y', 'px');

  const followerSetX = gsap.quickSetter(follower, 'x', 'px');
  const followerSetY = gsap.quickSetter(follower, 'y', 'px');

  document.addEventListener('mousemove', function (event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  gsap.ticker.add(function () {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    cursorSetX(pos.x);
    cursorSetY(pos.y);
    followerSetX(pos.x);
    followerSetY(pos.y);
  });

  const links = document.querySelectorAll<HTMLLinkElement>('a');
  const activeClass = 'is-active';

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor?.classList.add(activeClass);
      follower?.classList.add(activeClass);
    });

    link.addEventListener('mouseleave', () => {
      cursor?.classList.remove(activeClass);
      follower?.classList.remove(activeClass);
    });
  });

  const bgs = document.querySelectorAll<HTMLElement>('.bg-mine-shaft');
  const bgClass = 'is-bg-bright';

  bgs.forEach(bg => {
    bg.addEventListener('mouseenter', () => {
      cursor?.classList.add(bgClass);
      follower?.classList.add(bgClass);
    });

    bg.addEventListener('mouseleave', () => {
      cursor?.classList.remove(bgClass);
      follower?.classList.remove(bgClass);
    });
  });
};

export default stalker;
