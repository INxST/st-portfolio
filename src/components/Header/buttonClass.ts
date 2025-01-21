import cn from '@/libs/cn';

const buttonClass = cn(
  `font-serif-en border rounded-[30px]
  md:pt-[6px] md:pb-[5px] md:px-4
  pt-[4px] pb-[3px] px-[12px]
  flex gap-2 items-center
  group transition duration-700`
);

const buttonOpenClass = cn(
  `ts-menu-open border-silver
  ml-auto md:ml-14   
  hover:bg-mine-shaft hover:text-pampas
  text-black data-[color=dark]:text-pampas
  data-[color=dark]:hover:bg-pampas data-[color=dark]:hover:text-mine-shaft`,
  buttonClass
);

const buttonCloseClass = cn(
  `ts-menu-close text-pampas border-emperor
  absolute top-5 md:top-10 right-5 md:right-20
  hover:bg-pampas hover:text-mine-shaft`,
  buttonClass
);

export { buttonOpenClass, buttonCloseClass };
