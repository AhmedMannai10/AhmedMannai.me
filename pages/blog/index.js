import { React, useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import img from "../../assests/imgs/mac.jpg";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";


export default function blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const postsCollectionRef = collection(db, "blogPosts");

    useEffect(() => {
        getBlogPosts();
    }, []);
    

    const getBlogPosts = async () => {
        const posts = await getDocs(postsCollectionRef);
        setBlogPosts(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <div className="flex flex-col gap-10 items-center">
            <h1
                className="dark:text-dark_h_color text-h_color 
            font-bold text-4xl my-2 uppercase
        "
            >
                Blog Posts
            </h1>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
                {blogPosts.map((post) => {
                    return (
                        <BlogCard
                            img={img}
                            title={post.title}
                            desc={post.description}
                            key={post.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

