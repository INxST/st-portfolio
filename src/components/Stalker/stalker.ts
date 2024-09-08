import { useLayoutEffect, useRef, type MutableRefObject } from 'react';
import { gsap } from 'gsap';

type Args = {
  cursor: MutableRefObject<HTMLDivElement | null>;
  follower: MutableRefObject<HTMLDivElement | null>;
};

const activeStalker = (
  target: HTMLElement,
  cursor: HTMLDivElement | null,
  follower: HTMLDivElement | null,
  className: string[]
) => {
  cursor?.classList.add(...className);
  follower?.classList.add(...className);
  const bodyBgColor = document.body.dataset.bgColor;
  const linkStalkerColor = target.dataset.stalkerColor;

  if (follower && cursor) {
    if (linkStalkerColor) {
      cursor.dataset.stalkerColor = linkStalkerColor;
      follower.dataset.stalkerColor = linkStalkerColor;
    } else {
      cursor.dataset.stalkerColor = bodyBgColor === 'dark' ? 'bright' : 'dark';
      follower.dataset.stalkerColor =
        bodyBgColor === 'dark' ? 'bright' : 'dark';
    }
  }
};

const removeStalker = (
  cursor: HTMLDivElement | null,
  follower: HTMLDivElement | null,
  className: string[]
) => {
  if (follower && cursor) {
    cursor.classList.remove(...className);
    follower.classList.remove(...className);
    cursor.dataset.stalkerColor = '';
    follower.dataset.stalkerColor = '';
  }
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

        const handleMouseMove = (event: MouseEvent) => {
          mouse.x = event.clientX;
          mouse.y = event.clientY;
        };

        document.addEventListener('mousemove', handleMouseMove);

        gsap.ticker.add(() => {
          const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

          pos.x += (mouse.x - pos.x) * dt;
          pos.y += (mouse.y - pos.y) * dt;

          cursorSetX(pos.x);
          cursorSetY(pos.y + window.scrollY);
          followerSetX(pos.x);
          followerSetY(pos.y + window.scrollY);
        });

        const dragSelector = '.ts-drag-scroll';
        const imageLinkSelector = '.ts-image-link';
        const crossingLinkSelector = '.ts-crossing-link';
        const links = document.querySelectorAll<HTMLLinkElement>(
          `a:not(${dragSelector}, ${imageLinkSelector}, ${crossingLinkSelector})`
        );
        const activeClass = ['is-active'];
        const linkClass = ['is-active-link', ...activeClass];
        const drags = document.querySelectorAll<HTMLElement>(dragSelector);
        const dragClass = ['is-active-drag', ...activeClass];
        const imageLinks =
          document.querySelectorAll<HTMLLinkElement>(imageLinkSelector);
        const imageClass = ['is-active-image', ...activeClass];
        const crossingLinks =
          document.querySelectorAll<HTMLLinkElement>(crossingLinkSelector);
        const crossingClass = ['is-active-crossing', ...activeClass];

        links.forEach(link => {
          link.addEventListener('mouseenter', () => {
            activeStalker(link, cursor.current, follower.current, linkClass);
          });

          link.addEventListener('mouseleave', () => {
            removeStalker(cursor.current, follower.current, linkClass);
          });
        });

        drags.forEach(drag => {
          drag.addEventListener('mouseenter', () => {
            activeStalker(drag, cursor.current, follower.current, dragClass);
          });

          drag.addEventListener('mouseleave', () => {
            removeStalker(cursor.current, follower.current, dragClass);
          });
        });

        imageLinks.forEach(imageLink => {
          imageLink.addEventListener('mouseenter', () => {
            activeStalker(
              imageLink,
              cursor.current,
              follower.current,
              imageClass
            );
          });

          imageLink.addEventListener('mouseleave', () => {
            removeStalker(cursor.current, follower.current, imageClass);
          });
        });

        crossingLinks.forEach(crossingLink => {
          crossingLink.addEventListener('mouseenter', () => {
            activeStalker(
              crossingLink,
              cursor.current,
              follower.current,
              crossingClass
            );
          });

          crossingLink.addEventListener('mouseleave', () => {
            removeStalker(cursor.current, follower.current, crossingClass);
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
