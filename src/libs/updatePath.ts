const updatePath = (src?: string) => {
  const path =
    import.meta.env.TARGET === 'gh-pages'
      ? '/st-portfolio'
      : import.meta.env.SUB_DIR
        ? `/${import.meta.env.SUB_DIR}`
        : '';
  if (!src) return path;
  return path + src;
};

export default updatePath;
