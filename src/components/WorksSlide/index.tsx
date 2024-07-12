import type { Work } from '@/types/Work';
import React, { useState, useRef, useEffect } from 'react';
import scrollSlide from './scrollSlide';
import filters from '@/data/filters';

type Props = {
  children: React.ReactNode;
  items: Work[];
};

const WorksSlide = ({ children, items }: Props) => {
  const [selectedOption, setSelectedOption] = useState('All');
  const wrapper = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLUListElement | null>(null);
  const progress = useRef<HTMLDivElement | null>(null);
  const filter = useRef<HTMLDivElement | null>(null);

  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  scrollSlide({ wrapper, container, progress, filter });

  return (
    <section>
      <div ref={wrapper} className="pt-[var(--header-height)]">
        <ul
          ref={container}
          className="flex flex-nowrap justify-start whitespace-nowrap h-[calc(100dvh-calc(var(--header-height)+var(--filter-height)))] pt-11 pb-20"
        >
          <li className="ts-scroll-slide-item">{children}</li>
          {items.map((item, i) => {
            return (
              <li
                key={`${item.href}-${i}`}
                className="ts-scroll-slide-item h-full aspect-works-slide pt-5 pb-6 border-l peer-last:border-r last-of-type:border-r border-silver bg-quill-gray bg-[url(/texture-for-gray.png)] bg-repeat px-12 whitespace-nowrap transition-all duration-500 animate-text-focus-in data-[hidden]:animate-text-blur-out data-[hidden]:w-0"
                data-tags={item.tags.join(' ')}
                data-hidden={
                  selectedOption !== 'All' &&
                  !item.tags.includes(selectedOption)
                    ? true
                    : null
                }
              >
                <a href={item.href} className="flex flex-col h-full">
                  <div className="flex flex-1">
                    <picture className="flex-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </picture>
                    <div className="vertical-rl flex font-serif-en ml-3">
                      <ul className="flex flex-wrap gap-4">
                        {item.categories.map((category, i) => {
                          return (
                            <li key={`${item.href}-${category}-${i}`}>
                              {category}
                            </li>
                          );
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
                      {item.tags.map((tag, i) => {
                        return <li key={`${item.href}-${tag}-${i}`}>{tag}</li>;
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
      </div>

      <div className="fixed bottom-0 left-0 w-screen" ref={filter}>
        <div className="w-full h-[1px] bg-silver">
          <div className="w-0 h-full bg-black" ref={progress} />
        </div>

        <form className="flex container px-5 md:px-20 py-[0.875rem] md:py-7 overflow-x-hidden">
          <p className="font-serif-en text-[1.375rem]">Filter</p>
          <ul className="flex flex-wrap ml-[7.5rem] gap-4 md:gap-6">
            {filters.map((filter, i) => {
              return (
                <li key={`${filter}-${i}`}>
                  <label className="font-serif-en flex align-baseline">
                    <input
                      className="block box-content m-0 p-0 appearance-none border border-black rounded-full w-4 md:w-5 h-4 md:h-5 relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:w-3 md:before:w-[0.875rem] before:h-3 md:before:h-[0.875rem] checked:before:bg-black"
                      type="radio"
                      value={filter}
                      checked={selectedOption === filter}
                      onChange={handleOptionChange}
                    />
                    <span className="md:text-[1.125rem] ml-2 flex-1">
                      {filter}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </section>
  );
};

export default WorksSlide;
