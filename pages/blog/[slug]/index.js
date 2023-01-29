import React from 'react'

import PostTitle from '../../../components/PostTitle';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { firestore, postToJson } from '../../../lib/firebase';
import { collectionGroup, doc, getDoc, getDocs, query } from 'firebase/firestore';
import MetaTags from '../../../components/MetaTags';
import SharePost from '../../../components/SharePost';
import NewsletterCard from '../../../components/NewsletterCard';

export async function getStaticProps({ params }) {

  const { slug } = params;

  // const postRef = doc(firestore, 'projects', slug);
  const postRef = doc(firestore, 'blog-posts', slug);

  const postData = await getDoc(postRef);
  const post = postToJson(postData);

  return {
    props: { post },
    revalidate: 5000,
  };

}

export async function getStaticPaths() {

  const snapshot = await getDocs(query(collectionGroup(firestore, 'blog-posts')));
  const paths = snapshot.docs.map((doc) => {
    const { slug, title } = doc.data();
    return {
      params: { title, slug },

    };
  })



  return {
    paths,
    fallback: 'blocking',
  };
}




const blogPost = (props) => {

  const locationURL = `https://ahmedmannai.com${window.location.pathname}`;

  const { post } = props;


  const publishedDate = new Date(post.createdAt);
  return <main className="flex flex-col  mt-10 mx-auto w-full max-w-7xl justify-center p-2 sm:p-6 relative prose">
    <MetaTags title={post.title} description={post.description} image={post}></MetaTags>
    {
      (
        <>
          <PostTitle title={post.title} publichedDate={publishedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
          <div className="flex flex-col justify-evenly lg:flex-row lg:gap-6 lg:px-0 mb-8">
            <article className="w-full max-w-none mb-4 border flex-1 border-gray-200 rounded-lg bg-gray-50 dark:bg-dark_secondary dark:border-gray-600 prose dark:prose-invert p-4 ">
              <div className="lg:max-w-3xl lg:mx-auto overflow-auto">

                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </article>
            <aside class="pt-10 top-14 lg:sticky lg:h-full w-full lg:w-80">
              <div className="hidden lg:block">
                <SharePost url={locationURL} title={post.title} desc={post.desc} />

              </div>
            </aside>
            <div className=" lg:hidden">
              <SharePost url={locationURL} title={post.title} desc={post.desc} />

            </div>

          </div>

          <NewsletterCard/>

        </>)

    }
  </main>


}

export default blogPost;