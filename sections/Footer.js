import Link from "next/link";
import NewsletterCard from "../components/NewsletterCard";

const Footer = () => {
    return (
        <section className="space-y-12 mt-10 max-w-7xl mx-auto pt-6 px-6 border-t-2 dark:border-t-gray-700 border-t-gray-400 py-8">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start w-full ">
                <div className="flex flex-row gap-20 w-full md:w-fit md:gap-32 justify-center md:justify-start dark:text-gray-400 text-gray-500 px-4">
                    <div className=" space-y-3">
                        <h3 className=" font-semibold  text-text_color dark:text-dark_text_color ">GENEARAL</h3>
                        <ul className=" space-y-2">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a>Projects</a>
                                </Link>

                            </li>
                            <li>
                                <Link href="/blog">
                                    <a>Blog</a>
                                </Link>

                            </li>
                            <li>

                                <Link href="/">
                                    <a>Contact</a>
                                </Link>

                            </li>
                        </ul>
                    </div>
                    <div className=" space-y-3">
                        <h3 className="font-semibold text-text_color dark:text-dark_text_color ">EXTRA</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://www.youtube.com/channel/UCxEV3lsbWdN2S6gR-eV7Iqg" target="_blank">YouTube</a>
                            </li>
                            <li>
                                <a href="https://github.com/AhmedMannai10" target="_blank">GitHub</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Ahmed_Mannai_10" target="_blank">Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ahmedmannai/" target="_blank">LinkedIn</a>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className=" flex justify-center items-center w-full md:w-fit mt-3 md:mt-0">

                    <NewsletterCard />
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-between mt-12">
                <p>&copy; 2023 Ahmed Mannai</p>
            </div>
        </section >
    );
};

export default Footer;
