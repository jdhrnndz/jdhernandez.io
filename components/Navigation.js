'use client'

import Link from 'next/link';
import routes from 'utils/routes';
import { useRouter } from 'next/router';

const BUTTON_DATA = [
  {
    title: 'About',
    href: routes.About,
    displaySvgData: 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z',
    selectedSvgData: 'M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z',
  },
  {
    title: 'Projects',
    href: routes.Projects,
    displaySvgData: 'M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z',
    selectedSvgData: 'M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z',
  },
  {
    title: 'Contact',
    href: routes.Contact,
    displaySvgData: 'M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M4,4V17.17L5.17,16H20V4H4M6,7H18V9H6V7M6,11H15V13H6V11Z',
    selectedSvgData: 'M20 2A2 2 0 0 1 22 4L22 16A2 2 0 0 1 20 18L6 18 2 22 2 4C2 2.9 2.9 2 4 2L20 2M4 4L4 17.2 5.2 16 20 16 20 4 4 4M10.6 8.1L18 9',
  },
]

const NavButtons = ({ title, displaySvgData, selectedSvgData, href }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <button className={`rounded z-20 ${router.asPath === href ? 'bg-celadon-green' : ''}`}>
        <i className="hover-fill">{title}</i>
        <i className="hover-fill secondary-fill">{title}</i>
        <i className="inactive-fill">{title}</i>
        <svg className="display fill-neutral-500" viewBox="0 0 24 24">
          <path d={displaySvgData} />
        </svg>
        <svg className="selected fill-celadon-green" viewBox="0 0 24 24">
          <path d={selectedSvgData} />
        </svg>
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
