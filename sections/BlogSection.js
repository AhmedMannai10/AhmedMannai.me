"use client";
import React from "react";
import Link from "next/link";
import CtaButton from "../components/CtaButton";
import BlogCard from "../components/BlogCard";
import useSWR, { SWRConfig } from "swr";
import fetcher from "../utils/fetcher";
import SkeletonLoadingCard from "../components/SkeletonLoadingCard";

export default function BlogSection() {
  const { data, error, isLoading } = useSWR("/api/articles", fetcher, {
    fallback: "Loading...",
  });
  const articles = data;
  return (
    <div
      className='flex flex-col gap-10
            items-center '
    >
      <h2
        className='dark:text-dark_h_color 
                    text-h_color font-semibold
                    text-3xl my-2 uppercase'
      >
        Featured Blog Posts
      </h2>
      <div
        className='flex flex-col gap-10
                md:grid md:grid-cols-2'
      >
        {articles ? (
          articles.slice(0, 2).map((article) => {
            return (
              <BlogCard
                img={article.img}
                title={article.title}
                desc={article.description}
                key={article.slug}
                link={article.slug}
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
      <Link
        href='/blog'
        className=''
      >
        <CtaButton name='See More' />
      </Link>
    </div>
  );
}
