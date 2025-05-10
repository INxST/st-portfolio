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
            className="flex h-[calc(100vh-calc(var(--header-height)+3.25rem))] flex-nowrap justify-start whitespace-nowrap pb-20 md:h-[calc(100vh-calc(var(--header-height)+var(--filter-height)))]"
          >
            <li className="mr-20 md:mr-60">
              <TitleVertical jp={title} en={titleEn} />
            </li>
            {items.map((item, i) => {
              return (
                <li
                  key={`${item.slug}-${i}`}
                  className="aspect-works-slide h-full max-w-full animate-text-focus-in whitespace-nowrap border-l border-silver p-[1.4rem] transition-all duration-[1500ms] last-of-type:border-r peer-last:border-r data-[hidden]:max-w-0 data-[hidden]:animate-text-blur-out data-[hidden]:px-0 md:px-12 md:pb-6 md:pt-5"
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
                    className="ts-image-link flex h-full flex-col"
                  >
                    <div className="flex">
                      <picture className="flex-1">
                        <img
                          src={`${path}${item.image}`}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </picture>
                      <div className="ml-3 flex font-serif-en vertical-rl">
                        <ul className="flex flex-wrap gap-4">
                          {item.categories.map((category, i) => {
                            return (
                              <li key={`${item.slug}-${category}-${i}`}>
                                {category}
                              </li>
                            );
                          })}
                        </ul>
                        <span className="mt-auto inline-block">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex-1 pr-8">
                      <h2
                        className="overflow-hidden text-ellipsis whitespace-normal text-xl font-medium md:text-[1.75rem]"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {item.title}
                      </h2>
                      <ul className="mt-6 flex min-h-[2.2rem] flex-wrap gap-x-4 gap-y-[0.2rem] font-serif-en text-gray">
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
            <li className="flex items-center pr-10">
              <a
                href="/about"
                className="group ml-24 inline-flex flex-col items-center text-2xl font-medium md:ml-72 md:text-[2rem]"
              >
                <span className="vertical-rl">
                  <span>私について</span>
                </span>
                <span
                  className="mx-auto mt-6 flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full border border-black text-black transition-colors duration-700 group-hover:bg-black group-hover:text-white md:mt-9 md:h-[2rem] md:w-[2rem]"
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
          className="group fixed bottom-0 left-0 w-screen data-[open]:z-30"
          data-open={open ? open : null}
          ref={filter}
        >
          <div className="h-[1px] w-full bg-silver">
            <div className="h-full w-0 bg-black" ref={progress} />
          </div>

          <div
            className="invisible fixed left-0 top-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] opacity-0 transition-all duration-500 group-data-[open]:visible group-data-[open]:opacity-100 md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />

          <form className="container relative flex items-start overflow-hidden px-5 py-[0.875rem] bg-gray-texture group-data-[open]:z-40 md:px-20 md:py-7">
            <button
              type="button"
              className="flex items-center font-serif-en text-[1.375rem] leading-none md:pointer-events-none"
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
                className="ml-3 fill-current transition-transform duration-500 group-data-[open]:-rotate-[540deg] md:hidden"
              >
                <path d="M5.90872 7.43347L-0.183594 1.78197L0.907946 0.769409L5.90872 5.43189L10.9095 0.792959L12.001 1.80552L5.90872 7.43347Z" />
              </svg>
            </button>
            <ul className="ml-[7.5rem] flex flex-wrap items-center gap-0 group-data-[open]:gap-4 md:items-baseline md:gap-6">
              {filters.map((filter, i) => {
                return (
                  <li
                    key={`${filter}-${i}`}
                    data-checked={selectedOption === filter ? true : null}
                    className="invisible h-0 w-0 animate-text-blur-out opacity-0 transition-all data-[checked]:visible data-[checked]:h-auto data-[checked]:w-auto data-[checked]:animate-text-focus-in data-[checked]:opacity-100 group-data-[open]:visible group-data-[open]:h-auto group-data-[open]:w-auto group-data-[open]:animate-text-focus-in group-data-[open]:opacity-100 md:visible md:h-auto md:w-auto md:animate-none md:opacity-100 md:data-[checked]:animate-none"
                  >
                    <label className="flex items-center font-serif-en">
                      <input
                        className="relative m-0 box-content block h-4 w-4 appearance-none rounded-full border border-black p-0 before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full checked:before:bg-black md:h-5 md:w-5 md:before:h-[0.875rem] md:before:w-[0.875rem]"
                        type="radio"
                        value={filter}
                        checked={selectedOption === filter}
                        onChange={handleOptionChange}
                      />
                      <span className="ml-2 flex-1 md:text-[1.125rem]">
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
