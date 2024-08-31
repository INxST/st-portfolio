import { useRef, useLayoutEffect } from 'react';
import type { MutableRefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import getOverflow from '@/libs/getOverflow';

type Args = {
  wrapper: MutableRefObject<HTMLElement | null>;
  container: MutableRefObject<HTMLElement | null>;
  progress: MutableRefObject<HTMLSpanElement | null>;
  filter?: MutableRefObject<HTMLDivElement | null>;
};

const scrollSlide = ({ wrapper, container, progress, filter }: Args) => {
  gsap.registerPlugin(ScrollTrigger);

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
        const anime = gsap.to(container.current, {
          x: () => getOverflow(container.current) * -1.3,
          ease: 'none',
        });

        ScrollTrigger.create({
          trigger: wrapper.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${getOverflow(container.current)}`,
          animation: anime,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            progress.current!.style.width = `${(self.progress * 100).toFixed(5)}%`;
          },
        });
      } else {
        wrapper.current!.style.overflowX = 'auto';
        wrapper.current!.style.scrollbarWidth = 'none';
        wrapper.current!.style.overflowY = 'hidden';

        wrapper.current!.addEventListener('scroll', () => {
          const scrollLeft = wrapper.current!.scrollLeft;
          const scrollWidth = container.current!.scrollWidth;
          const clientWidth = container.current!.clientWidth;
          const progressWidth =
            (scrollLeft / (scrollWidth - clientWidth)) * 100;
          progress.current!.style.width = `${progressWidth.toFixed(5)}%`;
        });
      }
    }

    const filterHeight = filter?.current?.offsetHeight;
    document.documentElement.style.setProperty(
      '--filter-height',
      `${filterHeight}px`
    );
  }, [wrapper, container, progress, filter]);
};

export default scrollSlide;
