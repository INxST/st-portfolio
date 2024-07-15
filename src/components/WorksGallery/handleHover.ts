const handleHover = () => {
  let timer: NodeJS.Timeout;
  const disableClass = 'is-disable-hover';
  const wrapper = document.getElementById('works-gallery-link');

  window.addEventListener(
    'scroll',
    () => {
      clearTimeout(timer);
      if (!wrapper?.classList.contains(disableClass)) {
        wrapper?.classList.add(disableClass);
      }

      timer = setTimeout(() => {
        wrapper?.classList.remove(disableClass);
      }, 200);
    },
    false
  );
};

export default handleHover;
