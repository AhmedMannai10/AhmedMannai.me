import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import SkeletonLoadingCard from "../../components/SkeletonLoadingCard";
import useDocumentTitle from "../../utils/useDocumentTitle";

import { collection, query, orderBy, limit, where, getDocs } from "firebase/firestore";
import { firestore, postToJson } from "../../lib/firebase";
import MetaTags from "../../components/MetaTags";


// Max projects to query per page;
const MAX_PROJECTS = 4;
export async function getServerSideProps(context){
    const postQuery = query(collection(firestore, "projects"),
        orderBy("createdAt", "desc"),
        where("published", "==", true),
        limit(MAX_PROJECTS)
    );

    const projects = (await getDocs(postQuery)).docs.map(postToJson);
    return {
        props: {projects}
    }
                        
}


export default function projects(props) {

    const [projects, setProjects] = useState(props.projects);

    console.log(projects);

    useDocumentTitle('Projects | Ahmed Mannai')


    return (
        <main>
        <MetaTags title="Projects" description="My Latest Projects" />
        <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
            <h1
                className="dark:text-dark_h_color text-h_color font-bold
                 md:text-6xl text-4xl sm:my-2"
            >
                Projects
            </h1>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 ">
                {projects ? (
                    projects.map((project) => {
                        return (
                            <ProjectCard
                                img={project.img}
                                title={project.title}
                                desc={project.description}
                                key={project.slug}
                                link={project.slug}
                            />
                        );
                    })
                ) : (
                    <>
                    <SkeletonLoadingCard />
                    <SkeletonLoadingCard />
                    </>
                )}
            </div>
        </div>
        </main>
    );
}
