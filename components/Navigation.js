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
  const bgClass = router.asPath === href ? 'bg-celadon-green' : 'bg-white';
  const textClass = router.asPath === href ? 'text-white' : 'text-asda-green';

  return (
    <Link href={href}>
      <button className={`group relative z-20 ${bgClass} uppercase inline-block no-underline text-center tracking-widest font-[Lekton] font-extrabold py-2 px-5 outline outline-2 outline-asda-green m-1.5 overflow-hidden`}>
        <span className="absolute w-0 h-full bg-asda-green skew top-0 -left-6 -z-[1] transition-width duration-200 ease-in hover-fill group-hover:w-[150%]" />
        <span className="absolute w-0 h-full bg-celadon-green skew top-0 -left-6 -z-[2] transition-width duration-300 ease-in group-hover:duration-100 group-hover:ease-in-out group-hover:w-[150%]" />
        <span className="absolute w-0 h-full top-0 left-0 -z-[3]" />
        <span className={`uppercase no-underline text-center tracking-widest font-[Lekton] font-extrabold text-xl ${textClass} group-hover:text-white`}>{title}</span>
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
