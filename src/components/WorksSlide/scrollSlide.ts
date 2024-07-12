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

      const slides = gsap.utils.toArray<HTMLElement>('.ts-scroll-slide-item');
      const width = container.current?.clientWidth;
      const magnification = document.body.clientWidth > 768 ? -30 : -110;

      gsap.to(container.current, {
        xPercent: magnification * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${width}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            progress.current!.style.width = `${(self.progress * 100).toFixed(5)}%`;
          },
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
