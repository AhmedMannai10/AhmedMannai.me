import React from "react";
import ProjectCard from "../../components/ProjectCard";
import img from "../../assests/imgs/mac.jpg";

export default function projects() {
    return (
        <div className="flex flex-col gap-10 items-center">
            <h1
                className="dark:text-dark_h_color text-h_color 
            font-bold text-4xl my-2 uppercase
        "
            >
                Personal Projects
            </h1>
            <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
                <ProjectCard
                    img={img}
                    title="first Porject"
                    desc={"this is my first project ever"}
                    tags="#ML"
                    link="/projects"
                />
                <ProjectCard
                    img={img}
                    title="Machine Learning"
                    desc={"Raed 3amel jaw"}
                    tags="#ML #Python #JavaScript #DataScience #Learning"
                />
                <ProjectCard
                    img={img}
                    title="first Porject"
                    desc={"this is my first project ever"}
                    tags="#ML"
                    link="/projects"
                />
                <ProjectCard
                    img={img}
                    title="Machine Learning"
                    desc={"Raed 3amel jaw"}
                    tags="#ML #Python #JavaScript #DataScience #Learning"
                />
                <ProjectCard
                    img={img}
                    title="first Porject"
                    desc={"this is my first project ever"}
                    tags="#ML"
                    link="/projects"
                />
                <ProjectCard
                    img={img}
                    title="Machine Learning"
                    desc={"Raed 3amel jaw"}
                    tags="#ML #Python #JavaScript #DataScience #Learning"
                />
            </div>
        </div>
    );
}
