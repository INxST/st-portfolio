import works from '@/data/works';

const getWork = (slug: string) => {
  const work = works.find(work => work.slug === slug);
  // slugが一致したworkの次のworkを取得
  const nextWork =
    works
      .map((work, i) => {
        if (work.slug === slug) {
          return works[i + 1];
        }
      })
      .filter(Boolean)[0] || works[0];

  return { work, nextWork };
};

export default getWork;
