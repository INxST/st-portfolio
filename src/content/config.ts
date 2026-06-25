import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content', // markdown ファイル（本文 = Overview）
  schema: z.object({
    title: z.string(),
    year: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    isTop: z.boolean().optional(),
    imageTop: z.string().optional(), // TOPページ用画像（デフォルトはmv-pc.jpg）
    imageCount: z.number(), // 詳細画像の枚数（2.jpg〜N.jpg）
    url: z.string().optional(), // 外部URL（Overviewに表示）
    description: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    ),
  }),
});

export const collections = { works };
