const effect = () => {
  const header = document.getElementById('header');
  const headerList = document.querySelector('.ts-header-list');
  const height = header?.clientHeight;
  const headerListHeight = headerList?.clientHeight;
  document.documentElement.style.setProperty('--header-height', `${height}px`);
  document.documentElement.style.setProperty(
    '--header-list-height',
    `${headerListHeight}px`
  );
  const bgMineShaftTexture = document.querySelectorAll(
    ':scope main .bg-mine-shaft-texture'
  );
  const open = document.querySelector<HTMLElement>('.ts-menu-open');

  const colorChenge = () => {
    bgMineShaftTexture.forEach(bg => {
      const rect = bg.getBoundingClientRect();
      if (header && open) {
        if (rect.top < height! && rect.bottom > 0) {
          header.dataset.color = 'dark';
          open.dataset.color = 'dark';
        } else {
          header.dataset.color = 'bright';
          open.dataset.color = 'bright';
        }
      }
    });
  };

  window.addEventListener('load', () => {
    colorChenge();
  });

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('is-scroll');
      } else {
        header.classList.remove('is-scroll');
      }

      colorChenge();
    }
  });
};

export default effect;
