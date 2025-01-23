import type { Work } from '@/types/Work';
import React, { useState, useRef } from 'react';
import TitleVertical from '../TitleVertical';
import scrollSlide from './scrollSlide';
import filters from '@/data/filters';
import Stalker from '../Stalker';

type Props = {
  title: string;
  titleEn: string;
  items: Work[];
  path: string;
};

const WorksSlide = ({ title, titleEn, items, path }: Props) => {
  const [selectedOption, setSelectedOption] = useState('ALL');
  const [open, setOpen] = useState(false);
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
    <>
      <section>
        <div ref={wrapper} className="pt-[var(--header-height)]">
          <ul
            ref={container}
            className="flex flex-nowrap justify-start whitespace-nowrap h-[calc(100vh-calc(var(--header-height)+3.25rem))] md:h-[calc(100vh-calc(var(--header-height)+var(--filter-height)))] pb-20"
          >
            <li className="mr-20 md:mr-60">
              <TitleVertical jp={title} en={titleEn} />
            </li>
            {items.map((item, i) => {
              return (
                <li
                  key={`${item.slug}-${i}`}
                  className="h-full aspect-works-slide 
                p-[1.4rem] md:pt-5 md:pb-6 md:px-12 
                border-l peer-last:border-r last-of-type:border-r border-silver 
                whitespace-nowrap max-w-full
                transition-all duration-[1500ms] animate-text-focus-in
                data-[hidden]:animate-text-blur-out data-[hidden]:max-w-0 data-[hidden]:px-0"
                  data-tags={item.tags.join(' ')}
                  data-hidden={
                    selectedOption !== 'ALL' &&
                    !item.tags.includes(selectedOption)
                      ? true
                      : null
                  }
                >
                  <a
                    href={`${path}/works/${item.slug}/`}
                    className="ts-image-link flex flex-col h-full"
                  >
                    <div className="flex">
                      <picture className="flex-1">
                        <img
                          src={`${path}${item.image}`}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </picture>
                      <div className="vertical-rl flex font-serif-en ml-3">
                        <ul className="flex flex-wrap gap-4">
                          {item.categories.map((category, i) => {
                            return (
                              <li key={`${item.slug}-${category}-${i}`}>
                                {category}
                              </li>
                            );
                          })}
                        </ul>
                        <span className="inline-block mt-auto">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex-1 pr-8">
                      <h2
                        className="font-medium text-xl md:text-[1.75rem] whitespace-normal overflow-hidden text-ellipsis"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {item.title}
                      </h2>
                      <ul className="flex flex-wrap gap-x-4 gap-y-[0.2rem] font-serif-en mt-6 text-gray min-h-[2.2rem]">
                        {item.tags.map((tag, i) => {
                          return (
                            <li key={`${item.slug}-${tag}-${i}`}>{tag}</li>
                          );
                        })}
                      </ul>
                    </div>
                  </a>
                </li>
              );
            })}
            <li className="pr-10 flex items-center">
              <a
                href="/about"
                className="group text-2xl md:text-[2rem] font-medium ml-24 md:ml-72
                  inline-flex flex-col items-center"
              >
                <span className="vertical-rl">
                  <span>私について</span>
                </span>
                <span
                  className="border border-black text-black
                  group-hover:bg-black group-hover:text-white
                    mt-6 md:mt-9 mx-auto transition-colors duration-700
                    rounded-full flex justify-center items-center
                    w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem]"
                  aria-hidden="true"
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.92843 0.296874C5.92843 0.296874 6.85821 1.97234 7.07889 3.46277L0.628906 3.80681L0.628906 4.29834L7.07265 4.64238C6.82893 6.11193 5.81863 7.70375 5.81863 7.70375C5.81863 7.70375 8.88732 4.4667 11.6966 4.04838C8.8956 3.62585 5.92843 0.296754 5.92843 0.296754L5.92843 0.296874Z"
                      className="fill-current"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="fixed bottom-0 left-0 w-screen group data-[open]:z-30"
          data-open={open ? open : null}
          ref={filter}
        >
          <div className="w-full h-[1px] bg-silver">
            <div className="w-0 h-full bg-black" ref={progress} />
          </div>

          <div
            className="md:hidden transition-all duration-500 fixed top-0 left-0 w-screen h-screen
        bg-[rgba(0,0,0,0.5)] opacity-0 invisible group-data-[open]:opacity-100 group-data-[open]:visible"
            onClick={() => {
              setOpen(!open);
            }}
          />

          <form
            className="flex items-start container px-5 md:px-20 py-[0.875rem] md:py-7
        overflow-hidden relative group-data-[open]:z-40 bg-gray-texture"
          >
            <button
              type="button"
              className="font-serif-en text-[1.375rem] leading-none flex items-center md:pointer-events-none"
              onClick={() => {
                setOpen(!open);
              }}
            >
              FILTER
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current ml-3 md:hidden transition-transform duration-500 group-data-[open]:-rotate-[540deg]"
              >
                <path d="M5.90872 7.43347L-0.183594 1.78197L0.907946 0.769409L5.90872 5.43189L10.9095 0.792959L12.001 1.80552L5.90872 7.43347Z" />
              </svg>
            </button>
            <ul className="flex flex-wrap items-center md:items-baseline ml-[7.5rem] gap-0 md:gap-6 group-data-[open]:gap-4">
              {filters.map((filter, i) => {
                return (
                  <li
                    key={`${filter}-${i}`}
                    data-checked={selectedOption === filter ? true : null}
                    className="transition-all w-0 h-0 opacity-0 invisible animate-text-blur-out md:w-auto md:h-auto md:opacity-100 md:visible md:animate-none 
                  data-[checked]:w-auto data-[checked]:h-auto data-[checked]:visible data-[checked]:opacity-100 data-[checked]:animate-text-focus-in md:data-[checked]:animate-none
                  group-data-[open]:w-auto group-data-[open]:h-auto group-data-[open]:opacity-100 group-data-[open]:visible group-data-[open]:animate-text-focus-in"
                  >
                    <label className="font-serif-en flex items-center">
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

      <Stalker />
    </>
  );
};

export default WorksSlide;
