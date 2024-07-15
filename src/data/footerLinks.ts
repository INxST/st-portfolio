import type { Link } from '@/types/Link';

export const footerLinks: Link[] = [
  {
    text: 'ホーム',
    href: '/',
  },
  {
    text: '私について',
    href: '/about',
  },
  {
    text: '制作実績',
    href: '/works',
  },
  {
    text: 'お問い合わせ',
    href: 'mailto:hoge@hoge.com?subject=お問い合わせ',
    target: '_blank',
  },
];

export default footerLinks;
