'use client'

import Link from 'next/link';
import routes from 'utils/routes';
import { useRouter } from 'next/router';
import FlashyButton from './FlashyButton';

const BUTTON_DATA = [
  {
    title: 'About',
    href: routes.About,
  },
  {
    title: 'Projects',
    href: routes.Projects,
  },
  {
    title: 'Contact',
    href: routes.Contact,
  },
  {
    title: 'Linkshrub',
    href: routes.Linkshrub,
  }
];

const Navigation = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-center">
      {
        BUTTON_DATA.map(item => (
          <Link href={item.href} key={item.title}>
            <FlashyButton isActive={router.asPath === item.href}>
                {item.title}
            </FlashyButton>
          </Link>
        ))
      }
    </div>
  );
};

export default Navigation;
