import type { Link } from '@/types/Link';
import mail from './mail';

const headerLinks: Link[] = [
  {
    text: 'お問い合わせ',
    href: mail,
    target: '_blank',
  },
  {
    text: '制作実績',
    href: '/works/',
  },
  {
    text: '私について',
    href: '/about/',
  },
];

export default headerLinks;
