import { React } from "react";
import BlogCard from "../../components/BlogCard";

import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import SkeletonLoadingCard from "../../components/SkeletonLoadingCard";

export default function blog() {
    const { data, error } = useSWR("api/blog-posts", fetcher);
    // using swr
    const posts = data;

    return (
        <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
            <h1
                className="dark:text-dark_h_color text-h_color 
            font-bold md:text-6xl text-4xl sm:my-2"
            >
                All Blog Posts
            </h1>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 ">
                {posts ? (
                    posts.map((post) => {
                        return (
                            <BlogCard
                                img={post.img}
                                title={post.title}
                                desc={post.description}
                                key={post.slug}
                                link={post.slug}
                            />
                        );
                    })
                ) : (

                    <SkeletonLoadingCard />
                )}
            </div>
        </div>
    );
}
