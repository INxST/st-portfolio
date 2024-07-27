type Slide = {
  type: 'image' | 'video';
  src: {
    pc: string;
    sp?: string;
  };
  alt?: string;
};

export type { Slide };
