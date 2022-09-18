import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col items-center mt-10 px-20 md:px-4">
            <div class="flex flex-col justify-center  max-w-2xl mx-auto w-full my-8 pt-4 border-t border-t-dark_primary dark:border-t-primary">
                <div className="w-full max-w-2xl grid grid-cols-2 gap-4 pb-16 sm:grid-cols-2 text-text_color dark:text-dark_text_color">
                    <div className="flex flex-col space-y-4 sm:pl-10">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                        <Link href="/">
                            <a>Contact</a>
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4 sm:pl-10 pl-none">
                        <a href="https://www.youtube.com/channel/UCxEV3lsbWdN2S6gR-eV7Iqg" target="_blank">YouTube</a>
                        <a href="https://github.com/AhmedMannai10" target="_blank">GitHub</a>
                        <a href="https://twitter.com/Ahmed_Mannai_10" target="_blank">Twitter</a>
                        <a href="https://www.linkedin.com/in/ahmedmannai/" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
