import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostTitle from "../../../components/PostTitle";
import { collectionGroup, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { firestore, postToJson } from '../../../lib/firebase';

export async function getStaticProps({ params }) {

    const { slug } = params;

    // const postRef = doc(firestore, 'projects', slug);
    const postRef = doc(firestore, 'projects', slug);

    const postData = await getDoc(postRef);
    const post = postToJson(postData);

    return {
        props: { post },
        revalidate: 1000,
    };

}

export async function getStaticPaths() {

    const snapshot = await getDocs(query(collectionGroup(firestore, 'projets')));
    const paths = snapshot.docs.map((doc) => {
        const { slug, title } = doc.data();
        console.log("---------" + slug + "------" + title);
        return {
            params: { title, slug },

        };
    })



    return {
        paths,
        fallback: 'blocking',
    };
}


export default function projectPost(props) {

    const { post } = props;

    const date = new Date(post.createdAt);

    return <article itemscope itemType="" className="flex flex-col  mt-10 mx-auto w-full max-w-7xl justify-center p-2 sm:p-6 relative prose">
        {
            post && (
                <>
                    <PostTitle title={post.title} publichedDate={!isNaN(date) ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ""} />
                    <div className="flex flex-col-reverse justify-evenly lg:flex-row lg:gap-6 lg:px-0 mb-8">
                        <div className="w-full max-w-none mb-4 border flex-1 border-gray-200 rounded-lg bg-gray-50 dark:bg-dark_secondary dark:border-gray-600 prose dark:prose-invert p-4 ">
                            <div className="lg:max-w-3xl lg:mx-auto overflow-auto">

                                <ReactMarkdown>{post.content}</ReactMarkdown>
                            </div>
                        </div>
                        <aside class="pt-10 top-14 lg:sticky lg:h-full w-full lg:w-80">
                            <div className="space-y-6">
                                <div className="prose dark:prose-dark max-w-none">
                                    <div className="mb-4 cursor-pointer select-none overflow-auto max-h-[50vh]">
                                        Hello There
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </>)

        }
    </article>


}

