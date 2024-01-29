"use client";
import { React, useState } from "react";
import BlogCard from "../../components/BlogCard.js";

import SkeletonLoadingCard from "../../components/SkeletonLoadingCard.js";

import fetcher from "../../utils/fetcher.js";
import useSWR from "swr";

export default function Articles({ posts }) {
  const { data, error, isLoading } = useSWR("/api/articles", fetcher, {
    fallback: "Loading...",
  });
  const articles = posts;

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
