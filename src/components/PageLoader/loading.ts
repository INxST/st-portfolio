const loading = () => {
  // DOMの読み込みが完了したら実行
  document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.ts-page-loader');

    setTimeout(() => {
      loader?.classList.add('is-hidden');
    }, 500);
  });
};

export default loading;
