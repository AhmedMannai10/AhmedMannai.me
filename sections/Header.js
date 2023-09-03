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
                <div
                    onClick={() => setTheme("light")}
                >
                <SunIcon
                    className="sm:w-6 w-4 duration-300"
                />
                </div>
            );
        } else {
            return (
                <div

                    onClick={() => setTheme("dark")}
                >
                <MoonIcon
                    className="sm:w-5 w-3 duration-300"
                />
</div>
            );       
        }
    };
                

    return (
        <div
            className="sticky top-0 z-50 bg-secondary
             dark:bg-dark_secondary 
            w-full  flex items-center
            justify-between
             font-bold font-inter text-lg md:text-2xl 
             md:h-20 h-16 md:px-14 px-4 shadow
             "
        >
            <Link href="/" className="">
                <a className="hover:text-dark_primary duration-300 dark:hover:text-white ">
                    Ahmed Mannai
                </a>
            </Link>
            <div className="flex flex-1 justify-end gap-7">
                <Link href="/blog" >
                    <a className="flex gap-2 items-center hover:text-dark_primary duration-300 dark:hover:text-white">
                        <FeatherIcon className=" w-4 md:w-6 pt-[1px] "/>
                        Blog
                    </a>
                </Link>

                <Link href="/projects">
                    <a className="flex justify-between gap-2 items-center hover:text-dark_primary duration-300 dark:hover:text-white">
                        <CodeIcon className=" w-5 md:w-7 pt-[1px] "/>
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
