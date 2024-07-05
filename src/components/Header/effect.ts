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

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('is-scroll');
      } else {
        header.classList.remove('is-scroll');
      }
    }
  });
};

export default effect;
