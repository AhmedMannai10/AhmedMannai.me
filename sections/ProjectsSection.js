import React from "react";
import ProjectCard from "../components/ProjectCard";
import img from "../assests/imgs/mac.jpg";
import CtaButton from "../components/CtaButton";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import slugify from "../utils/slugify";

export default function ProjectsSection() {

    const { data, error } = useSWR("api/projects", fetcher);
    // setProjectPosts(data);
    const projects = data;



    return (
        <div
            className="flex flex-col gap-10
            items-center "
        >
            <h2
                className="dark:text-dark_h_color 
                    text-h_color font-semibold
                    text-3xl my-2 uppercase"
            >
                Featured Projects
            </h2>
            <div
                className=" flex flex-col gap-10
                md:grid md:grid-cols-2 
            "
            >   

                {projects ? (
                    (projects.slice(0, 2)).map((project) => {
                        console.log(project);
                        return (
                            <ProjectCard
                                img={img}
                                title={project.title}
                                desc={project.description}
                                key={project.id}
                                link={slugify(project.title)}
                            />
                        );
                    })
                ) : (
                    <h1>Loading Scelections</h1>
                )}
                
            </div>
            <Link href="/projects">
                <a>
                    <CtaButton name="See More" />
                </a>
            </Link>
        </div>
    );
}
