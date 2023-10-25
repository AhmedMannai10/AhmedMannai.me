import { React, useState } from "react";
import BlogCard from "../../components/BlogCard";

import SkeletonLoadingCard from "../../components/SkeletonLoadingCard";
import useDocumentTitle from "../../utils/useDocumentTitle";

import { collection, query, orderBy, limit, where, getDocs } from "firebase/firestore";
import { firestore, postToJson } from "../../lib/firebase";
import MetaTags from "../../components/MetaTags";



const MAX_ARTICLES = 6;
export async function getServerSideProps(context){

    const postsQuery = query(
        collection(firestore, "blog-posts"),
        orderBy("createdAt", "desc"),
        where("published", "==", true),
        limit(MAX_ARTICLES),
    );

    const posts = (await getDocs(postsQuery)).docs.map(postToJson);
    

    return {
        props: {posts},
    }

}

export default function blog(props) {
    
    const [articles, setArticles] = useState(props.posts);


    return (
        <main>
        <MetaTags title="Blog" description="Get the latest article on my websites"/>
        <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
            <h1
                className="dark:text-dark_h_color text-h_color 
            font-bold md:text-6xl text-4xl sm:my-2"
            >
                All Blog Posts
            </h1>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 ">
                {articles ? (
                    articles.map((post) => {

                        return (
                            <BlogCard
                                img={post.img}
                                title={post.title}
                                desc={post.description}
                                key={post.slug}
                                link={post.slug}
                            />
                        );
                    })
                ) : (

                    <SkeletonLoadingCard />
                )}
            </div>
        </div>
        </main>
    );
}
