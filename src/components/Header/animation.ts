import type { ThemeColor } from '@/types/ThemeColor';

const animation = () => {
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
  const bgGrayTexture = document.querySelectorAll(
    ':scope main .bg-gray-texture'
  );
  const open = document.querySelector<HTMLElement>('.ts-menu-open');
  const logo = document.querySelector<HTMLElement>('.ts-logo');

  const changeDataset = (rect: DOMRect, value: ThemeColor) => {
    if (header && open && logo) {
      if (rect.top < height! && rect.bottom > 0) {
        header.dataset.color = value;
        open.dataset.color = value;
        logo.dataset.color = value;
      }
    }
  };

  const colorChenge = () => {
    bgMineShaftTexture.forEach(bg => {
      const rect = bg.getBoundingClientRect();
      changeDataset(rect, 'dark');
    });

    bgGrayTexture.forEach(bg => {
      const rect = bg.getBoundingClientRect();
      changeDataset(rect, 'bright');
    });
  };

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

export default animation;
