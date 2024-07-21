const imageWhiteIn = () => {
  const targets = document.querySelectorAll('.ts-image-white-in');

  targets.forEach(target => {
    const threshold = 0.5;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > threshold) {
            target.classList.add('is-active');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    observer.observe(target);
  });
};

export default imageWhiteIn;
