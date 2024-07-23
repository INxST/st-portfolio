import { useRef, useLayoutEffect } from 'react';
import type { MutableRefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

      const getOverflow = (el: HTMLElement | null) => {
        if (!el) return 0;
        return el.scrollWidth - window.innerWidth;
      };

      const x = window.matchMedia('(min-width: 768px)').matches ? -4 : -1.05;

      const anime = gsap.to(container.current, {
        x: getOverflow(container.current) * x,
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
    }

    const filterHeight = filter?.current?.offsetHeight;
    document.documentElement.style.setProperty(
      '--filter-height',
      `${filterHeight}px`
    );
  }, [wrapper, container, progress, filter]);
};

export default scrollSlide;
