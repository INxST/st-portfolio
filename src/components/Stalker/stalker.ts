import { useLayoutEffect, useRef, type MutableRefObject } from 'react';
import { gsap } from 'gsap';

type Args = {
  cursor: MutableRefObject<HTMLDivElement | null>;
  follower: MutableRefObject<HTMLDivElement | null>;
};

const stalker = ({ cursor, follower }: Args) => {
  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;

      const ua = navigator.userAgent;

      if (
        ua.indexOf('iPhone') < 0 &&
        ua.indexOf('iPod') < 0 &&
        ua.indexOf('Android') < 0 &&
        ua.indexOf('Mobile') < 0
      ) {
        const pos = { x: 0, y: 0 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.5;

        const cursorSetX = gsap.quickSetter(cursor.current, 'x', 'px');
        const cursorSetY = gsap.quickSetter(cursor.current, 'y', 'px');

        const followerSetX = gsap.quickSetter(follower.current, 'x', 'px');
        const followerSetY = gsap.quickSetter(follower.current, 'y', 'px');

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
            cursor.current?.classList.add(activeClass);
            follower.current?.classList.add(activeClass);
          });

          link.addEventListener('mouseleave', () => {
            cursor.current?.classList.remove(activeClass);
            follower.current?.classList.remove(activeClass);
          });
        });

        const bgs = document.querySelectorAll<HTMLElement>(
          '.bg-mine-shaft-texture'
        );
        const bgClass = 'is-bg-bright';

        bgs.forEach(bg => {
          bg.addEventListener('mouseenter', () => {
            cursor.current?.classList.add(bgClass);
            follower.current?.classList.add(bgClass);
          });

          bg.addEventListener('mouseleave', () => {
            cursor.current?.classList.remove(bgClass);
            follower.current?.classList.remove(bgClass);
          });
        });
      } else {
        cursor.current?.remove();
        follower.current?.remove();
      }
    }
  }, []);
};

export default stalker;
