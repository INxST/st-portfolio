const changeBg = () => {
  const target = document.getElementById('works-gallery');
  const bg = document.getElementById('bg');
  const mores = document.querySelectorAll<HTMLElement>('.ts-more');

  const changeClass = () => {
    const rect = target?.getBoundingClientRect();
    const top = rect?.top || 0;
    const bottom = rect?.bottom || 0;
    const triggerPoint = top + window.innerHeight * 0.7;

    if (triggerPoint < window.innerHeight && bottom > 0) {
      document.body.dataset.bgColor = 'bright';
      if (bg) bg.dataset.color = 'bright';
      mores.forEach(more => {
        if (more) more.dataset.color = 'dark';
      });
    } else {
      document.body.dataset.bgColor = 'dark';
      if (bg) bg.dataset.color = 'dark';
      mores.forEach(more => {
        if (more) more.dataset.color = 'bright';
      });
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

export default changeBg;
