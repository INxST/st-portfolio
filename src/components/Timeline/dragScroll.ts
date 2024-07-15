const dragScroll = () => {
  const scrollContainer =
    document.querySelector<HTMLElement>('.ts-drag-scroll');
  const scrollContent = document.querySelector<HTMLElement>('.scroll-content');

  let isDragging = false;
  let startX: number;
  let scrollLeft: number;

  scrollContainer?.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = 'grabbing';
  });

  scrollContainer?.addEventListener('mouseleave', () => {
    isDragging = false;
    scrollContainer.style.cursor = 'grab';
  });

  scrollContainer?.addEventListener('mouseup', () => {
    isDragging = false;
    scrollContainer.style.cursor = 'grab';
  });

  scrollContainer?.addEventListener('mousemove', e => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  if (scrollContainer) scrollContainer.style.cursor = 'grab';
};

export default dragScroll;
