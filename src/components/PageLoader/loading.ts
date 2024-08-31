const loading = () => {
  const loader = document.querySelector<HTMLElement>('.ts-page-loader');
  const isOpening = loader?.dataset.opening === 'true';
  const body = document.body;
  const classLoading = 'is-loading';
  // DOMの読み込みが完了したら実行
  body.classList.add(classLoading);
  document.addEventListener('DOMContentLoaded', () => {
    if (!isOpening) {
      setTimeout(() => {
        loader?.classList.add('is-hidden');
        body.classList.remove(classLoading);
      }, 500);
    }
  });
};

export default loading;
