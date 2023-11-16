'use client'

import { useState } from "react";
import { MyMagicString } from "./enums";
import routes from "utils/routes";
import { useRouter } from "next/router";
import Link from "next/link";
import FlashyButton from "./FlashyButton";
import RobotHeadSvg from "./RobotSvg";

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

const useDrawerNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  }

  return {
    openDrawer,
    closeDrawer,
    isDrawerOpen,
  };
}

const DrawerNavigation = () => {
  const router = useRouter();
  const { openDrawer, closeDrawer, isDrawerOpen } = useDrawerNavigation();

  return (
   <>
      <button className="sm:hidden absolute top-0 left-0 px-8 py-4 z-40" onClick={openDrawer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f847c" className="h-8 w-8">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
      <div className={`sm:hidden absolute shadow-lg z-50 bg-zinc-50 h-full w-3/4 px-8 py-4 flex flex-col gap-6 -top-0 -left-3/4 ease-in-out transition-transform ${isDrawerOpen? 'translate-x-full': ''}`}>
        <button className="w-fit self-end" onClick={closeDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f847c" className="h-8 w-8">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
        <Link href={'/'}>
          <span
            className="bg-zinc-50 uppercase no-underline text-center text-celadon-green tracking-widest font-[Lekton] font-bold text-xl  cursor-pointer"
            onClick={closeDrawer}
          >
            {MyMagicString.MyName}
          </span>
        </Link>
        <RobotHeadSvg className="h-11 w-fit self-center" primaryColor="#57534e" secondaryColor="#2f847c" />
        {
          BUTTON_DATA.map(item => (
            <Link href={item.href} key={item.title}>
              <FlashyButton isActive={router.asPath === item.href} onClick={closeDrawer}>
                {item.title}
              </FlashyButton>
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default DrawerNavigation;
