import React from "react";
import ProjectCard from "../components/ProjectCard";
import img from "../assests/imgs/mac.jpg";
import CtaButton from "../components/CtaButton";

export default function ProjectsSection() {
    return (
        <div
            className="flex flex-col gap-4 
             mx-8
            items-center 
     "
        >
            <h2
                className="dark:text-dark_h_color 
                    text-h_color font-semibold
                    text-3xl my-2"
            >
                Featured Projects
            </h2>
            <ProjectCard
                img={img}
                title="first Porject"
                desc={"this is my first project ever"}
            />
      <ProjectCard
                img={img}
                title="Machine Learning"
                desc={"Raed 3amel jaw"}
                tags="#ML #Python #JavaScript #DataScience #Learning"
            />
            <CtaButton name="See More"/>

        </div>
    );
}
