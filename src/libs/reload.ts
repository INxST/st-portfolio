const reload = () => {
  window.addEventListener('resize', () => {
    window.location.reload();
  });
};

export default reload;
