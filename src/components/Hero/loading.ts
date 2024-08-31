const loading = () => {
  // リロード時にページ最上部にスクロール
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  const body = document.body;
  const bg = document.getElementById('opening-bg');
  const video = document.getElementById('hero-video');
  const logo = document.getElementById('hero-logo');
  const loader = document.querySelector<HTMLElement>('.ts-page-loader');
  const time = 3000;
  body.classList.add('is-no-scroll');

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      bg?.classList.add('is-hidden');
      video?.classList.remove('is-loading');
      loader?.classList.add('is-hidden');
      body.classList.remove('is-no-scroll');
    }, time);

    setTimeout(() => {
      logo?.classList.remove('is-loading');
    }, time + 700);
  });
};

export default loading;
