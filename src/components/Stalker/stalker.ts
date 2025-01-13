import { useLayoutEffect, useRef, type MutableRefObject } from 'react';
import { gsap } from 'gsap';

type Args = {
  follower: MutableRefObject<HTMLDivElement | null>;
};

const activeStalker = (
  target: HTMLElement,
  follower: HTMLDivElement | null,
  className: string[]
) => {
  follower?.classList.add(...className);
  const bodyBgColor = document.body.dataset.bgColor;
  const linkStalkerColor = target.dataset.stalkerColor;

  if (follower) {
    if (linkStalkerColor) {
      follower.dataset.stalkerColor = linkStalkerColor;
    } else {
      follower.dataset.stalkerColor =
        bodyBgColor === 'dark' ? 'bright' : 'dark';
    }
  }
};

const removeStalker = (
  follower: HTMLDivElement | null,
  className: string[]
) => {
  if (follower) {
    follower.classList.remove(...className);

    follower.dataset.stalkerColor = '';
  }
};

const stalker = ({ follower }: Args) => {
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
            activeStalker(link, follower.current, linkClass);
          });

          link.addEventListener('mouseleave', () => {
            removeStalker(follower.current, linkClass);
          });
        });

        drags.forEach(drag => {
          drag.addEventListener('mouseenter', () => {
            activeStalker(drag, follower.current, dragClass);
          });

          drag.addEventListener('mouseleave', () => {
            removeStalker(follower.current, dragClass);
          });
        });

        imageLinks.forEach(imageLink => {
          imageLink.addEventListener('mouseenter', () => {
            activeStalker(imageLink, follower.current, imageClass);
          });

          imageLink.addEventListener('mouseleave', () => {
            removeStalker(follower.current, imageClass);
          });
        });

        crossingLinks.forEach(crossingLink => {
          crossingLink.addEventListener('mouseenter', () => {
            activeStalker(crossingLink, follower.current, crossingClass);
          });

          crossingLink.addEventListener('mouseleave', () => {
            removeStalker(follower.current, crossingClass);
          });
        });
      } else {
        follower.current?.remove();
      }
    }
  }, []);
};

export default stalker;
