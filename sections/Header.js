import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

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
                <i
                    onClick={() => setTheme("light")}
                    className="fa-solid fa-sun duration-300"
                ></i>
            );
        } else {
            return (
                <i
                    onClick={() => setTheme("dark")}
                    className="fa-solid fa-moon duration-300"
                ></i>
            );
        }
    };

    return (
        <div
            className="sticky top-0 z-50 bg-secondary
             dark:bg-dark_secondary 
            w-full  flex items-center
            justify-between
             font-bold font-inter text-lg 
             md:h-20 h-16 md:px-10 px-4 shadow
             "
        >
            <Link href="/" className="">
                <a className="hover:text-dark_primary duration-300 dark:hover:text-white ">
                    Ahmed Mannai
                </a>
            </Link>
            <div className="flex flex-1 justify-end gap-7">
                <Link href="/blog" className=" ">
                    <a className="flex gap-2 items-center hover:text-dark_primary duration-300 dark:hover:text-white">
                        <i className="fa-solid fa-feather pt-[1px]" />
                        Blog
                    </a>
                </Link>

                <Link href="/projects">
                    <a className="flex justify-between gap-2 items-center hover:text-dark_primary duration-300 dark:hover:text-white">
                        <i className="fa-solid fa-code pt-[1px]"></i>
                        Projects
                    </a>
                </Link>
            </div>
            <span className=" pt-[1px] hover:text-dark_primary duration-300 dark:hover:text-white ml-6 ">
                {renderThemeChanger()}
            </span>
        </div>
    );
};

export default Header;
