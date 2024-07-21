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
      // slideの最後から3つの幅を引いた値を取得
      const width =
        container.current?.clientWidth! -
        (document.body.clientWidth > 768
          ? slides[0].clientWidth +
            slides[slides.length - 3].clientWidth +
            slides[slides.length - 2].clientWidth +
            slides[slides.length - 1].clientWidth
          : 0);

      gsap.to(container.current, {
        xPercent: -100 * (slides.length - 1),
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
