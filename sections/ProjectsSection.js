import React from "react";
import ProjectCard from "../components/ProjectCard";
import img from "../assests/imgs/mac.jpg";
import CtaButton from "../components/CtaButton";
import Link from "next/link";

export default function ProjectsSection() {
    return (
        <div
            className="flex flex-col gap-10
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
            <div
                className=" flex flex-col gap-10
                md:grid md:grid-cols-2 
            "
            >
                <ProjectCard
                    img={img}
                    title="first Porject"
                    desc={"this is my first project ever"}
                    tags="#ML"
                />
                <ProjectCard
                    img={img}
                    title="Machine Learning"
                    desc={"Raed 3amel jaw"}
                    tags="#ML #Python #JavaScript #DataScience #Learning"
                />
            </div>
            <Link href="/projects">
                <a className="flex justify-between gap-2 items-center hover:text-dark_primary duration-300 dark:hover:text-white">
                    <CtaButton name="See More" />
                </a>
            </Link>
        </div>
    );
}
