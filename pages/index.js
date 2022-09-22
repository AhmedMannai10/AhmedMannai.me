import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ProjectsSection from "../sections/ProjectsSection";
import BlogSection from "../sections/BlogSection";

export default function Home() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Head>
                <title>Ahmed Mannai</title>
                <meta
                    name="Ahmed Mannai's Personal blog protfolio website"
                    content="Software Projects, blogs , about Ahmed Mannai"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <About />
            <ProjectsSection />
            <BlogSection />
        </>
    );
}
