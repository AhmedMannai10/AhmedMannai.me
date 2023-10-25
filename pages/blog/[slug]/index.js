import React from 'react'

import PostTitle from '../../../components/PostTitle';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { firestore, postToJson } from '../../../lib/firebase';
import { collectionGroup, doc, getDoc, getDocs, query } from 'firebase/firestore';
import MetaTags from '../../../components/MetaTags';
import SharePost from '../../../components/SharePost';
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";


export async function getStaticProps({ params }) {

    const { slug } = params;

    // const postRef = doc(firestore, 'projects', slug);
    const postRef = doc(firestore, 'blog-posts', slug);

    const postData = await getDoc(postRef);
    const post = postToJson(postData);

    return {
        props: { post },
        revalidate: 100,
    };

}

export async function getStaticPaths() {

    const snapshot = await getDocs(query(collectionGroup(firestore, 'projects')));
    const paths = snapshot.docs.map((doc) => {
        const { slug } = doc.data();
        return {
            params: { slug },

        };
    })

    return {
        paths,
        fallback: 'blocking',
    };
}




const blogPost = (props) => {

    const { data, error } = useSWR("api/blog-posts", fetcher);
    // using swr
    const listArticles = data;

    const article = listArticles.filter((slug) => {
        return listArticles.slug === slug;
    });
    
    console.log(article);




  const locationURL = `https://www.ahmedmannai.me${window.location.pathname}`;

  const { post } = props;


  const publishedDate = new Date(post.createdAt);
  return <>
        <MetaTags title={post.title} description={post.desc} image={post.img}/>


        <main className="flex flex-col  mt-10 mx-auto w-full max-w-7xl justify-center p-2 sm:p-6 relative prose">
        {
            (
                <>
                <PostTitle title={post.title} publichedDate={publishedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />

                <div className="flex flex-col justify-evenly lg:flex-row lg:gap-6 lg:px-0 mb-8">


                <article className="w-full max-w-none mb-4 border flex-1 border-gray-200 rounded-lg bg-gray-50 dark:bg-dark_secondary dark:border-gray-600 prose dark:prose-invert p-4 ">
                {
                    post.youtubeVideo &&

                    <div className=' aspect-video ' >
                    <iframe 
                    className=' h-full w-full rounded-lg'
                    //Todo: change dynamic youtube video => post.video
                    src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528" 
                    width="100%" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                    </iframe>
                    </div> 

                }

                <div className="lg:max-w-3xl lg:mx-auto overflow-auto">

                <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
                </article>
                <aside className="pt-2 lg:pt-10 top-14  lg:sticky lg:h-full w-full lg:w-80">
                <div className="hidden lg:block ">
                <SharePost url={locationURL} title={post.title} desc={post.desc} />

                </div>
                <div className=" lg:hidden">
                <SharePost url={locationURL} title={post.title} desc={post.desc} />

                </div>
                </aside>

                </div>
                </>)

        }
        </main>
        </>

}

export default blogPost;
