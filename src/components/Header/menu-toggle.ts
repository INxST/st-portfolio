const menuToggle = () => {
  const open = document.querySelector('.ts-menu-open');
  const close = document.querySelector('.ts-menu-close');
  const menu = document.getElementById('menu');
  const classOpen = 'is-open';

  open?.addEventListener('click', () => {
    menu?.classList.add(classOpen);
  });

  close?.addEventListener('click', () => {
    menu?.classList.remove(classOpen);
  });
};

export default menuToggle;
