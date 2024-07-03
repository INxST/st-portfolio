import type { Link } from '@/types/Link';

export type Menu = Link & {
  number: string;
  en: string;
};

const menus: Menu[] = [
  {
    number: '一',
    en: 'HOME',
    text: 'ホーム',
    href: '/',
  },
  {
    number: '二',
    en: 'ABOUT',
    text: '私について',
    href: '/about',
  },
  {
    number: '三',
    en: 'WORKS',
    text: '制作実績',
    href: '/works',
  },
  {
    number: '四',
    en: 'CONTACT',
    text: 'お問い合わせ',
    href: '/contact',
  },
];

export default menus;
