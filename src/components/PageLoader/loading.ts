const loading = () => {
  const loader = document.querySelector<HTMLElement>('.ts-page-loader');
  const isOpening = loader?.dataset.opening === 'true';
  // DOMの読み込みが完了したら実行
  document.addEventListener('DOMContentLoaded', () => {
    if (!isOpening) {
      setTimeout(() => {
        loader?.classList.add('is-hidden');
      }, 500);
    }
  });
};

export default loading;
