import Head from "next/head";
import { useTheme } from "next-themes";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ProjectsSection from "../sections/ProjectsSection";
import BlogSection from "../sections/BlogSection";
import NewsletterCard from "../components/NewsletterCard";



export default function Home() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Head>
                <title>Home | Ahmed Mannai</title>

               <link rel="icon" href="/ahmedIcon.png" />
            </Head>
            <Hero />
            <About />
            <ProjectsSection />
            <BlogSection />
        </>
    );
}
