const getIsMobile = () => {
  const ua = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(ua);

  return isMobile;
};

export default getIsMobile;
