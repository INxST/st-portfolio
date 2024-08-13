type Work = {
  slug: string;
  title: string;
  year: string;
  categories: string[];
  tags: string[];
  image: string;
  mv: string;
  mvSp: string;
  // TOPページに表示するかどうか
  isTop?: boolean;
  imageTop?: string;
};

export type { Work };
