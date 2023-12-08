'use client'
import { React, useState } from "react";
import BlogCard from "../../components/BlogCard.js";

import SkeletonLoadingCard from "../../components/SkeletonLoadingCard.js";

import fetcher from "../../utils/fetcher.js";
import useSWR, { SWRConfig } from "swr";


export const medtadata = {
    title: "Projects",
}
function Articles() {
    // `data` will always be available as it's in `fallback`.

    const {data, error, isLoading} = useSWR("/api/articles", fetcher, { fallback: "Loading..." });
    const articles = data;

    return (
        <>
            {articles ? (
                articles.map((article) => (
                    <BlogCard
                        img={article.img}
                        title={article.title}
                        desc={article.description}
                        key={article.slug}
                        link={article.slug}
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
                    className="dark:text-dark_h_color text-h_color 
            font-bold md:text-6xl text-4xl sm:my-2"
                >
                    All Blog Posts
                </h1>

                <div className="flex flex-col gap-10 md:grid md:grid-cols-2 ">
                    <SWRConfig value={{ fallback }}>
                    <Articles/>
                    </SWRConfig>
               </div>
            </div>
        </main>
    );
}
