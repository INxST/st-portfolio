import works from '@/data/works';

const getWork = (pathname: string) => {
  const work = works.find(work => pathname.includes(work.slug));
  // slugが一致したworkの次のworkを取得
  const nextWork =
    works
      .map((work, i) => {
        if (pathname.includes(work.slug)) {
          return works[i + 1];
        }
      })
      .filter(Boolean)[0] || works[0];

  return { work, nextWork };
};

export default getWork;
