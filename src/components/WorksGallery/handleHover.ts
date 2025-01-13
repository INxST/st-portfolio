const handleHover = () => {
  const items = document.querySelectorAll<HTMLElement>('.ts-image-link');
  const className = 'is-hover';

  items.forEach(item => {
    const link = item.querySelector(':scope > a');
    link?.addEventListener('mouseover', () => {
      item.classList.add(className);
      handleOpacity();
    });

    link?.addEventListener('mouseout', () => {
      item.classList.remove(className);
      handleOpacity();
    });
  });

  const handleOpacity = () => {
    const opacityClass = 'is-opacity';
    const hoverItems = Array.from(items).filter(item =>
      item.classList.contains(className)
    ).length;
    if (hoverItems > 0) {
      items.forEach(item => {
        if (!item.classList.contains(className)) {
          item.classList.add(opacityClass);
        } else {
          item.classList.remove(opacityClass);
        }
      });
    } else {
      items.forEach(item => {
        item.classList.remove(opacityClass);
      });
    }
  };
};

export default handleHover;
