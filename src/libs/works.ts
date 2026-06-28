import fs from 'node:fs';
import path from 'node:path';
import { getCollection } from 'astro:content';
import type { Work } from '@/types/Work';

const DETAIL_DIR = path.resolve('public/detail');

/**
 * 詳細フォルダ（public/detail/<slug>/）から連番画像のパスを取得する。
 * 1.jpg, 2.png ... のように拡張子が混在していても数値順に並べて返す。
 */
export function getDetailImages(slug: string): string[] {
  const dir = path.join(DETAIL_DIR, slug);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter(file => /^\d+\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .map(file => `/detail/${slug}/${file}`);
}

/**
 * 実績一覧データを Content Collection（src/content/works/*.md）から生成する。
 * 画像パスは「public/detail/<slug>/」のフォルダ規約から自動で導出するため、
 * 実績を追加するときは「フォルダに画像を入れる」+「md ファイルにテキストを書く」だけでよい。
 */
export async function getWorks(): Promise<Work[]> {
  const entries = await getCollection('works');

  return entries
    .map(entry => {
      const { slug } = entry;
      return {
        slug,
        title: entry.data.title,
        year: entry.data.year,
        categories: entry.data.categories,
        tags: entry.data.tags,
        image: `/detail/${slug}/mv-vertical.jpg`,
        mv: `/detail/${slug}/mv-pc.jpg`,
        mvSp: `/detail/${slug}/mv-sp.jpg`,
        isTop: entry.data.isTop,
        imageTop: entry.data.imageTop ?? `/detail/${slug}/mv-pc.jpg`,
        order: entry.data.order,
      } satisfies Work;
    })
    .sort((a, b) => a.order - b.order);
}
