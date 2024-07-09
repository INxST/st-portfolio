import type { Work } from '@/types/Work';
import React, { useLayoutEffect } from 'react';
import scrollSlide from './scrollSlide';

type Props = {
  children: React.ReactNode;
  items: Work[];
};

const WorksSlide = ({ children, items }: Props) => {
  useLayoutEffect(() => {
    scrollSlide();
  }, []);

  return (
    <section
      id="scroll-slide"
      className="pt-[var(--header-height)] overflow-x-hidden"
    >
      <ul
        id="scroll-slide-container"
        className="flex flex-nowrap justify-start whitespace-nowrap"
      >
        <li className="ts-scroll-slide-item whitespace-nowrap">{children}</li>
        {items.map(item => {
          return (
            <li
              key={item.href}
              className="ts-scroll-slide-item md:w-[calc(calc(590/16)*1rem)] pt-5 pb-6 border-l peer-last:border-r last-of-type:border-r border-silver bg-quill-gray bg-[url(/texture-for-gray.png)] bg-repeat px-12 whitespace-nowrap"
            >
              <a href={item.href} className="flex flex-col h-full">
                <div className="flex flex-1">
                  <picture className="flex-1 w-[calc(calc(247/14)*1rem)] md:w-[calc(calc(464/16)*1rem)] h-[calc(calc(368/14)*1rem)] md:h-[calc(calc(560/16)*1rem)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </picture>
                  <div className="vertical-rl flex font-serif-en ml-3">
                    <ul className="flex flex-wrap gap-4">
                      {item.categories.map(category => {
                        return <li>{category}</li>;
                      })}
                    </ul>
                    <span className="inline-block mt-auto">{item.year}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="font-semibold text-xl md:text-3xl">
                    {item.title}
                  </h2>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 font-serif-en mt-6 text-gray">
                    {item.tags.map(tag => {
                      return <li>{tag}</li>;
                    })}
                  </ul>
                </div>
              </a>
            </li>
          );
        })}
        <li className="ts-scroll-slide-item pr-10 flex items-center">
          <a
            href="/about"
            className="ts-text-link text-2xl md:text-[2rem] vertical-rl font-semibold ml-24 md:ml-72 border-r pr-2"
            data-vertical="rl"
          >
            <span>私について</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default WorksSlide;
