const updatePath = (src: string) => {
  const path = import.meta.env.TARGET === 'gh-pages' ? '/st-portfolio' : '';
  return path + src;
};

export default updatePath;
