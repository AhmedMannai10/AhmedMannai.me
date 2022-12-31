import React from "react";
import ProjectCard from "../../components/ProjectCard";
import img from "../../assests/imgs/mac.jpg";

import useSWR from "swr";
import fetcher from "../../utils/fetcher";

export default function projects() {
    // const [ projectPosts, setProjectPosts] = useState([]);

    // using swr for fetching data
    const { data, error } = useSWR("api/projects", fetcher);
    // setProjectPosts(data);
    const projects = data;

    return (
        <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
            <h1
                className="dark:text-dark_h_color text-h_color font-bold
                 md:text-6xl text-4xl sm:my-2 
        "
            >
                Personal Projects
            </h1>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
                {projects ? (
                    projects.map((project) => {
                        return (
                            <ProjectCard
                                img={img}
                                title={project.title}
                                desc={project.description}
                                key={project.slug}
                                link={project.slug}
                            />
                        );
                    })
                ) : (
                    <h1>Loading Scelections</h1>
                )}
            </div>
        </div>
    );
}
