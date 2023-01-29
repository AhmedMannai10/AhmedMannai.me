import React from "react";
import Link from "next/link";
import CtaButton from "../components/CtaButton";
import BlogCard from "../components/BlogCard";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function BlogSection() {



    const { data, error } = useSWR('api/blog-posts', fetcher);

    const blogPosts = data;

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
                className="flex flex-col gap-10
                md:grid md:grid-cols-2"
            >

                {blogPosts ? (
                    (blogPosts.slice(0, 2)).map((post) => {
                        return (
                            <BlogCard
                                img={post.img}
                                title={post.title}
                                desc={post.description}
                                key={post.slug}
                                link={post.slug}
                            />
                        );
                    }
                    )

                ) : (
                    <h1>Loading log posts</h1>
                )}


            </div>
            <Link href="/blog" className="">
                <a>
                    <CtaButton name="See More" />
                </a>
            </Link>
        </div>
    );
}
