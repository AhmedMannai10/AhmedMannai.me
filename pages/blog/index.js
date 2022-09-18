import React from "react";
import BlogCard from "../../components/BlogCard";
import img from "../../assests/imgs/mac.jpg";

export default function blog() {
    return (
        <div className="flex flex-col gap-10 items-center">
            <h1
                className="dark:text-dark_h_color text-h_color 
            font-bold text-4xl my-2 uppercase
        "
            >
                Blog Posts
            </h1>
            <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
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
        </div>
    );
}
