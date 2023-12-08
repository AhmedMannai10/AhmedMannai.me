'use client'
import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

import useSWR, { SWRConfig } from "swr";
import fetcher from "../../utils/fetcher";
import SkeletonLoadingCard from "../../components/SkeletonLoadingCard";

import MetaTags from "../../components/MetaTags";


function Projects() {
    const {data, error, isLoading} = useSWR("/api/projects", fetcher, { fallback: "Loading..." });
    const projects = data;

    return (
        <>
        
            {projects ? (
                projects.map((project) => (
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
        </>
    );
}


export default function Page({fallback}) {

    return (
        <main>
            <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
                <h1
                    className="dark:text-dark_h_color text-h_color font-bold
                 md:text-6xl text-4xl sm:my-2"
                >
                    Projects
                </h1>

     <div className="flex flex-col gap-10 md:grid md:grid-cols-2 ">
        <SWRConfig value={{ fallback }}>
        <Projects/>
</SWRConfig>
     </div>
               
            </div>
        </main>

    );
}