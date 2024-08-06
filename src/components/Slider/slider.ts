const slider = () => {
  const sliders = document.querySelectorAll('.ts-slider');

  sliders.forEach(slider => {
    const items = slider.querySelectorAll<HTMLElement>('.ts-slider-item');
    items[0].classList.add('is-active');
    let number = 0;
    const changeItem = () => {
      items[number].classList.remove('is-active');
      number = (number + 1) % items.length;
      items[number].classList.add('is-active');
    };
    setInterval(changeItem, 1500);
  });
};

export default slider;
