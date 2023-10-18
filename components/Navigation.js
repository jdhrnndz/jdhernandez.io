'use client'

import Link from 'next/link';
import routes from 'utils/routes';
import { useRouter } from 'next/router';

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
]

const NavButtons = ({ title, href }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <button className={`rounded z-20 hover:text-white ${router.asPath === href ? 'bg-celadon-green' : ''}`}>
        <i className="hover-fill">{title}</i>
        <i className="hover-fill secondary-fill">{title}</i>
        <i className="inactive-fill">{title}</i>
        <span>{title}</span>
      </button>
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className="navigation">
      {
        BUTTON_DATA.map(item => (
          <NavButtons {...item} key={item.title} />
        ))
      }
    </div>
  );
};

export default Navigation;
