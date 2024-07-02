import BlogCard from "@/components/BlogCard";
import { firestore, postToJson } from "@/lib/firebase";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { React } from "react";
import SkeletonLoadingCard from "@/components/SkeletonLoadingCard.js";

export const metadata = {
  title: "Blog | Software Engineering Insights and Tutorials",
  description:
    "Explore insightful articles and tutorials on software engineering, coding, and building interesting projects. Stay updated with the latest trends and best practices in the tech world.",
  openGraph: {
    title: "Blog | Software Engineering Insights and Tutorials",
    description:
      "Explore insightful articles and tutorials on software engineering, coding, and building interesting projects. Stay updated with the latest trends and best practices in the tech world.",
    url: "https://ahmedmannai.me/blog",
    siteName: "Coding Blog - Ahmed Mannai",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07",
        width: 1200,
        height: 630,
        alt: "Preview Image for Ahmed Mannai website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const LIMIT = 6;

async function getData() {
  try {
    const postQuery = query(
      collection(firestore, "blog-posts"),
      orderBy("createdAt", "desc"),
      where("published", "==", true),
      limit(LIMIT)
    );

    const postSnapshot = await getDocs(postQuery);

    if (postSnapshot.empty) {
      throw new Error("No blog posts found");
    }
    return postSnapshot.docs.map(postToJson);
  } catch (error) {
    console.error("Error fetching blog posts: ", error);
  }
}

export default async function Page() {
  const posts = await getData();
  const articles = posts;

  return (
    <main className="container relative">
      <div
        className="space-y-2 pb-8 pt-6 md:space-y-5 border-b-2 px-1
           py-8"
      >
        <h1
          className="dark:text-dark_h_color text-h_color font-bold
                    sm:my-2 text-4xl 
            leading-9 tracking-tight sm:text-6xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Blog
        </h1>

        <h3 className=" text-xl">My latest articles</h3>
      </div>

      <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
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
        </div>
      </div>
    </main>
  );
}
