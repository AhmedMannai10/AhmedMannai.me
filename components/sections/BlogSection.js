"use client";
import React from "react";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import BlogCard from "@/components/BlogCard";
import useSWR, { SWRConfig } from "swr";
import fetcher from "@/utils/fetcher";
import SkeletonLoadingCard from "@/components/SkeletonLoadingCard";

export default function BlogSection() {
  const { data, error, isLoading } = useSWR("/api/articles", fetcher, {
    fallback: "Loading...",
  });
  const articles = data;
  return (
    <div
      className="flex flex-col
            items-center gap-6 justify-center"
    >
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Featured Blog Posts
      </h2>
      <div
        className="grid gap-10
                 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
      >
        {articles ? (
          articles.slice(0, 3).map((article) => {
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
    </div>
  );
}
