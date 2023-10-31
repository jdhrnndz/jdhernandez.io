'use client'

import Link from 'next/link';
import routes from 'utils/routes';
import { useRouter } from 'next/router';
import FlashyButton from './FlashyButton';
import { MyMagicString } from './enums';

const BUTTON_DATA = [
  {
    title: MyMagicString.Projects.title,
    href: routes.Projects,
  },
  {
    title: MyMagicString.Contact.title,
    href: routes.Contact,
  },
  {
    title: MyMagicString.Links.title,
    href: routes.Linkshrub,
  }
];

const Navigation = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-center">
      <Link href={'/'}>
        <span className="bg-zinc-50 uppercase no-underline text-center text-celadon-green tracking-widest font-[Lekton] font-bold text-xl inline-block py-2 px-5 m-1.5 cursor-pointer">
          {MyMagicString.MyName}
        </span>
      </Link>
      <span className="hidden sm:block">
        {
          BUTTON_DATA.map(item => (
            <Link href={item.href} key={item.title}>
              <FlashyButton isActive={router.asPath === item.href}>
                {item.title}
              </FlashyButton>
            </Link>
          ))
        }
      </span>
    </div>
  );
};

export default Navigation;
