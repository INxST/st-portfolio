type Work = {
  title: string;
  href: string;
  year: string;
  categories: string[];
  tags: string[];
  image: string;
  // TOPページに表示するかどうか
  isTop?: boolean;
  imageTop?: string;
};

export type { Work };
