import Hero from "../components/sections/Hero";
import ProjectsSection from "../components/sections/ProjectsSection";
import BlogSection from "../components/sections/BlogSection";
export default function Home() {
  return (
    <div className=" container relative">
      <div className=" flex flex-col gap-10">
        <Hero />
        <ProjectsSection />
        <BlogSection />
      </div>
    </div>
  );
}
