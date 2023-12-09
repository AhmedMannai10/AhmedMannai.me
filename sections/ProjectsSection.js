'use client'
import React from "react";
import ProjectCard from "../components/ProjectCard";
import CtaButton from "../components/CtaButton";
import Link from "next/link";
import fetcher from "../utils/fetcher";
import SkeletonLoadingCard from "../components/SkeletonLoadingCard";
import useSWR, { SWRConfig } from "swr";

export default function ProjectsSection({params}) {

    const {data, error, isLoading} = useSWR("/api/projects", fetcher, { fallback: "Loading..." });

    if(error){
        return <div>failed to load</div>
    }
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
                {projects? (
                    
                (projects.slice(0,2)).map((project) => (
                    <ProjectCard
                        img={project.img}
                        title={project.title}
                        desc={project.description}
                        key={project.slug}
                        link={project.slug}
                    />

                ))

                
            ) : (
                <>
                    <SkeletonLoadingCard />
                    <SkeletonLoadingCard />
                    
                </>
            )}

            </div>
            <Link href="/projects">
                <CtaButton name="See More" />
            </Link>
        </div>
    );
}
