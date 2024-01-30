import Head from "next/head";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import ProjectsSection from "../components/sections/ProjectsSection";
import BlogSection from "../components/sections/BlogSection";
import MetaTags from "../components/MetaTags";
import Footer from "../components/sections/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <BlogSection />
    </>
  );
}
