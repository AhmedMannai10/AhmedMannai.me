import { React } from "react";
import BlogCard from "../../components/BlogCard";
import img from "../../assests/imgs/mac.jpg";

import useSWR from "swr";
import fetcher from "../../utils/fetcher";

// import useSWR from 'swr';

export default function blog() {
    // const [blogPosts, setBlogPosts] = useState([]);
    // const postsCollectionRef = collection(db, "blogPosts");

    // useEffect(() => {
    //     getBlogPosts();
    // }, []);

    // const getBlogPosts = async () => {
    //     const posts = await getDocs(postsCollectionRef);
    //     setBlogPosts(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    const { data, error } = useSWR("api/posts", fetcher);
    // using swr
    // const { posts, error } = useSWR("api/posts", fetcher);
    const posts = data;
    console.log(posts);

    return (
        <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
            <h1
                className="dark:text-dark_h_color text-h_color 
            font-bold md:text-4xl text-3xl sm:my-2  uppercase
        "
            >
                Blog Posts
            </h1>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
                {posts ? (
                    posts.map((post) => {
                        console.log(post);
                        return (
                            <BlogCard
                                img={img}
                                title={post.title}
                                desc={post.description} 
                                key={post.id}
                            />
                        );
                    })
                ) : (
                    <h1>Loading Scelections</h1>
                )}
            </div>
        </div>
    );
}
