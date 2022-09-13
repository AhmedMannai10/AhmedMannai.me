import React from "react";
import Image from "next/image";
import TagCard from "../components/TagCard";

export default function ProjectCard({ img, title, desc, tags }) {
    const tagItems = String(tags).split(" ");
    return (
        <div
            className="flex flex-col bg-secondary
              dark:bg-dark_secondary w-full 
                max-w-[500px] 
                rounded-md shadow-lg hover:-translate-y-[4px] duration-300 ease-out"
        >
            <div
                className="
                relative 
            rounded-t-md "
            >
                <Image
                    loading="lazy"
                    src={img}
                    alt={title + "project image"}
                    layout="responsive"
                    className="rounded-t-md"
                />
            </div>
            <div className="p-4  ">
                <h4
                    className="dark:text-dark_h_color 
                    text-h_color font-semibold
                    text-xl my-2 uppercase"
                >
                    {title}
                </h4>
                <p className=" text-lg my-2">{desc}</p>
                <div className="flex mt-2 flex-wrap">
                    {tags &&
                        tagItems.map((item) => {
                            return <TagCard value={item} />;
                        })}
                </div>
            </div>
        </div>
    );
}
