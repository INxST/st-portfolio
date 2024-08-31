const menuToggle = () => {
  const open = document.querySelector('.ts-menu-open');
  const close = document.querySelector('.ts-menu-close');
  const menu = document.getElementById('menu');
  const body = document.body;
  const classOpen = 'is-open';
  const classMenuOpen = 'is-menu-open';

  open?.addEventListener('click', () => {
    menu?.classList.add(classOpen);
    body.classList.add(classMenuOpen);
  });

  close?.addEventListener('click', () => {
    menu?.classList.remove(classOpen);
    body.classList.remove(classMenuOpen);
  });
};

export default menuToggle;
