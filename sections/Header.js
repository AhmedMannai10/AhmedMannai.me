"use client";

import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import FeatherIcon from "../components/icons/FeatherIcon";
import CodeIcon from "../components/icons/CodeIcon";
import MoonIcon from "../components/icons/MoonIcon";
import SunIcon from "../components/icons/SunIcon";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounded] = useState(false);

  useEffect(() => {
    setMounded(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div onClick={() => setTheme("light")}>
          <SunIcon className='sm:w-6 w-4 duration-300' />
        </div>
      );
    } else {
      return (
        <div onClick={() => setTheme("dark")}>
          <MoonIcon className='sm:w-5 w-3 duration-300' />
        </div>
      );
    }
  };

  return (
    <div
      className='sticky top-0 z-50 bg-secondary
             dark:bg-dark_secondary shadow-md '
    >
      <div className="           font-bold text-lg md:text-xl lg:text-2xl
             h-16  flex items-center
            justify-between
          mx-auto max-w-3xl px-2 sm:px-6 xl:max-w-5xl xl:px-0">
        <Link
          href='/'
          className='hover:text-dark_primary duration-300 dark:hover:text-white '
        >
          Ahmed Mannai
        </Link>
        <div className='flex flex-1 justify-end gap-4 sm:gap-7'>
          <Link
            href='/blog'
            className='flex gap-1 sm:gap-2 items-center hover:text-dark_primary duration-300 dark:hover:text-white'
          >
            <FeatherIcon className=' w-4 md:w-6 pt-[1px] ' />
            Blog
          </Link>

          <Link
            href='/projects'
            className='flex justify-between gap-1 sm:gap-2 items-center hover:text-dark_primary duration-300 dark:hover:text-white'
          >
            <CodeIcon className=' w-5 md:w-7 pt-[1px] ' />
            Projects
          </Link>
        </div>
        <span className=' pt-[1px] hover:text-dark_primary duration-300 dark:hover:text-white ml-6 '>
          {renderThemeChanger()}
        </span>
      </div>
    </div>
  );
};

export default Header;
