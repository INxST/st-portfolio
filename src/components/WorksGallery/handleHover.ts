const handleHover = () => {
  const items = document.querySelectorAll('.ts-image-link');
  const className = 'is-hover';

  items.forEach(item => {
    const link = item.querySelector(':scope > a');
    link?.addEventListener('mouseover', () => {
      item.classList.add(className);
    });

    link?.addEventListener('mouseout', () => {
      item.classList.remove(className);
    });
  });
};

export default handleHover;
