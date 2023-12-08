import Head from "next/head";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ProjectsSection from "../sections/ProjectsSection";
import BlogSection from "../sections/BlogSection";
import MetaTags from "../components/MetaTags";
import Footer from "../sections/Footer";
export default function Home() {

    return (
        <>
            <Hero />
            <About />
            <ProjectsSection />
            <BlogSection />
        </>
    );
}
