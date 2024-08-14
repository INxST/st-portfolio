const focusIn = () => {
  const targets = document.querySelectorAll('.ts-focus-in');
  // 表示領域に入ったらdata-activeをtrueにする
  targets.forEach(target => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.setAttribute('data-active', 'true');
        }
      });
    });
    observer.observe(target);
  });
};

export default focusIn;
