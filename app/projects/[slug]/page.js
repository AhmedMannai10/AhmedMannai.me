import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import MetaTags from "../../../components/MetaTags";
import SharePost from "../../../components/SharePost";
import NewsletterCard from "../../../components/NewsletterCard";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import { doc, getDoc } from "firebase/firestore";
import { firestore, postToJson } from "../../../lib/firebase";
import PostTitle from "../../../components/PostTitle";

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

async function getData(slug) {
  const postRef = doc(firestore, "projects", slug);
  const postData = await getDoc(postRef);

  if (!postData.exists()) {
    return null;
  }
  const project = postToJson(postData);
  return project;
}

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  const post = data;
  const date = new Date(post.createdAt);

  const locationURL = `https://www.ahmedmannai.me/projects/${slug}`;
  return (
    <main
      itemScope
      itemType=''
      className='flex flex-col  mt-10 mx-auto w-full max-w-7xl justify-center p-2 sm:p-6 relative prose'
    >
      {
        <>
          <PostTitle
            title={post.slug}
            publichedDate={date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
          <div className='flex flex-col justify-evenly lg:flex-row lg:gap-6 lg:px-0 mb-8'>
            <article className='w-full max-w-none mb-4 border flex-1 border-gray-200 rounded-lg bg-gray-50 dark:bg-dark_secondary dark:border-gray-600 prose dark:prose-invert p-4 '>
              <div className='lg:max-w-3xl lg:mx-auto overflow-auto'>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </article>
            <aside className=' pt-2 lg:pt-10 top-14 lg:sticky lg:h-full w-full lg:w-80'>
              <div className='hidden lg:block'>
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
  );
}
