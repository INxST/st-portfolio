import { loadEnv } from 'vite';
const updatePath = (src: string) => {
  const env = loadEnv(process.env.NODE_ENV!, process.cwd(), '');
  const path = env.TARGET === 'gh-pages' ? '/st-portfolio' : '';
  return path + src;
};

export default updatePath;
