const getOverflow = (el: HTMLElement | null) => {
  if (!el) return 0;
  return el.scrollWidth - window.innerWidth;
};

export default getOverflow;
