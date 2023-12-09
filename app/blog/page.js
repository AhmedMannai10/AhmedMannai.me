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
        <main >
           
              
 <div className='space-y-2 pb-8 pt-6 md:space-y-5 border-b-2 dark:border-b-gray-700
          border-b-gray-400 py-8'>
        <h1
          className='dark:text-dark_h_color text-h_color font-bold
                    sm:my-2 text-4xl 
            leading-9 tracking-tight sm:text-6xl sm:leading-10 md:text-6xl md:leading-14'
        >
          Blog 
        </h1>

        <h3 className='dark:text-gray-300 text-gray-600 text-xl'>
            My latest articles
        </h3>

        </div>             

            <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
                <div className="flex flex-col gap-10 md:grid md:grid-cols-2 ">
                    <Articles/>
               </div>
            </div>
        </main>
    );
}
