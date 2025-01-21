const reload = () => {
  let width = window.innerWidth;

  window.addEventListener('resize', () => {
    if (width === window.innerWidth) {
      return;
    } else {
      width = window.innerWidth;
      window.location.reload();
    }
  });
};

export default reload;
