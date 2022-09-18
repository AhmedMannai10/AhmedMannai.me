import React from "react";
import ProjectCard from "../components/ProjectCard";
import img from "../assests/imgs/mac.jpg";
import Link from "next/link";
import CtaButton from "../components/CtaButton";
import BlogCard from "../components/BlogCard";

export default function BlogSection() {
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
                Featured Blog Posts
            </h2>
            <div
                className="flex flex-col  gap-10
                md:grid md:grid-cols-2 
            "
            >

                <BlogCard
                    img={img}
                    title="Machine Learning"
                    desc={"Raed 3amel jaw"}
                    link={"/test"}
                />
                <BlogCard
                    img={img}
                    title="MacBook"
                    desc="I finaly bought a mack book"
                />
            </div>
            <Link href="/projects" className="">
                <a>
                    <CtaButton name="See More" />
                </a>
            </Link>
        </div>
    );
}
