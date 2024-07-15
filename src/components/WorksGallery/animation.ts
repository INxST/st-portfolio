const animation = () => {
  const activeClass = 'is-active';
  const wrapper = document.getElementById('works-gallery');
  const bg = document.getElementById('works-gallery-bg');

  const changeClass = () => {
    const rect = wrapper?.getBoundingClientRect();
    const top = rect?.top || 0;
    const bottom = rect?.bottom || 0;
    const triggerPoint = top + window.innerHeight * 0.7;

    if (triggerPoint < window.innerHeight && bottom > 0) {
      wrapper?.classList.add(activeClass);
      if (bg) bg.dataset.color = 'bright';
    } else {
      wrapper?.classList.remove(activeClass);
      if (bg) bg.dataset.color = 'dark';
    }
  };

  window.addEventListener('scroll', () => {
    changeClass();
  });

  window.addEventListener('resize', () => {
    changeClass();
  });

  window.addEventListener('load', () => {
    changeClass();
  });
};

export default animation;
