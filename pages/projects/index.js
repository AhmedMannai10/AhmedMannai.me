import React from "react";
import ProjectCard from "../../components/ProjectCard";
import img from "../../assests/imgs/mac.jpg";
import BlogCard from "../../components/BlogCard";

import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { useState } from "react";

export default function projects() {
    // const [ projectPosts, setProjectPosts] = useState([]);

    // using swr for fetching data
    const { data, error } = useSWR("api/posts", fetcher);
    // setProjectPosts(data);

    return (
        <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
            <h1
                className="dark:text-dark_h_color text-h_color font-bold
                 md:text-4xl text-3xl sm:my-2 uppercase
        "
            >
                Personal Projects
            </h1>
            {data ? <h1>{data[0][0].title}</h1> : <h1>nodata</h1>}

            {/* <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
                <ProjectCard
                    img={img}
                    title="first Porject"
                    desc={"this is my first project ever"}
                    tags="#ML"
                    link="/projects"
                /> 
            </div>*/}
        </div>
    );
}
