import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useRouter } from "next/router";
import { kebabCase } from "lodash";
import PostTitle from "../../../components/PostTitle";
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../lib/firebase';
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { async } from "@firebase/util";

const projectPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState([]);

    useEffect(() => {
        ; (async () => {
            const postRef = doc(firestore, 'projects', slug)

            const postData = await getDoc(postRef);
            setPost(postData.data());
            console.log(post)
        })()

    }, [])

    // const postRef = doc(firestore, "projects", slug);

    // const [post] = useDocumentDataOnce(postRef);

    return <main className="flex flex-col mt-10 mx-auto w-full max-w-5xl justify-center px-6 relative prose">
        {
            post && (
                <>
                    <PostTitle title={post.title} publichedDate={post.publichedDate} />
                    <div className="w-full max-w-none mb-4 border flex-1 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 prose dark:prose-invert p-4 ">

                    <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </>)

        }
    </main>

}


export default projectPost;