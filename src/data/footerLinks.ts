import type { Link } from '@/types/Link';
import mail from './mail';

export const footerLinks: Link[] = [
  {
    text: 'ホーム',
    href: '/',
  },
  {
    text: '私について',
    href: '/about/',
  },
  {
    text: '制作実績',
    href: '/works/',
  },
  {
    text: 'お問い合わせ',
    href: mail,
    target: '_blank',
  },
];

export default footerLinks;
