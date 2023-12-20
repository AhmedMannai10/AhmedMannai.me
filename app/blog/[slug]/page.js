import React from "react";

import PostTitle from "../../../components/PostTitle";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { firestore, postToJson } from "../../../lib/firebase";
import {
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import SharePost from "../../../components/SharePost";
import { usePathname } from "next/navigation";

async function getData(slug) {
  const postRef = doc(firestore, "blog-posts", slug);
  const postData = await getDoc(postRef);

  if (!postData.exists()) {
    // Handle the case where the document doesn't exist
    return null;
  }

  const post = postToJson(postData);
  return post;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getData(slug);

  const publishedDate = new Date(post.createdAt);
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.description,
      locale: "en_US",
      type: "article",
      publishedTime: publishedDate,
      url: "./",
      images: [
        {
          width: 1200,
          height: 630,
          type: "image/png",
          url: post.img,
        },
      ],

      authors: "Ahmed Mannai",
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  const post = data;
  const locationURL = `https://www.ahmedmannai.me/blog/${slug}`;
  const publishedDate = new Date(post.createdAt);
  return (
    <>
      <main className='flex flex-col  mt-10 mx-auto w-full max-w-7xl justify-center p-2 sm:p-6 relative prose'>
        {
          <>
            <PostTitle
              title={post.title}
              publichedDate={publishedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />

            <div className='flex flex-col justify-evenly lg:flex-row lg:gap-6 lg:px-0 mb-8'>
              <article className='w-full max-w-none mb-4 border flex-1 border-gray-200 rounded-lg bg-gray-50 dark:bg-dark_secondary dark:border-gray-600 prose dark:prose-invert p-4 '>
                {post.youtubeVideo && (
                  <div className='aspect-video'>
                    <iframe
                      className=' h-full w-full rounded-lg'
                      //Todo: change dynamic youtube video => post.video
                      src='https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528'
                      width='100%'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen
                    ></iframe>
                  </div>
                )}

                <div className='lg:max-w-3xl lg:mx-auto overflow-auto'>
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </article>
              <aside className='pt-2 lg:pt-10 top-14  lg:sticky lg:h-full w-full lg:w-56'>
                <div className='hidden lg:block '>
                  <SharePost
                    url={locationURL}
                    title={post.title}
                    desc={post.desc}
                  />
                </div>
                <div className=' lg:hidden'>
                  <SharePost
                    url={locationURL}
                    title={post.title}
                    desc={post.desc}
                  />
                </div>
              </aside>
            </div>
          </>
        }
      </main>
    </>
  );
}