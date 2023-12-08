import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import MetaTags from "../../../components/MetaTags";
import SharePost from "../../../components/SharePost";
import NewsletterCard from "../../../components/NewsletterCard";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

export default function ProjectPage() {


const locationURL = `https://ahmedmannai.me${window.location.pathname}`;

        
    const { project } = props;

    const date = new Date(project.createdAt);
        return <main itemScope itemType="" className="flex flex-col  mt-10 mx-auto w-full max-w-7xl justify-center p-2 sm:p-6 relative prose">
        {
            (
                <>
                    <MetaTags title={project.title} description={post.description} image={post.img}/>
                    <projectTitle title={post.title} publichedDate={date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
                    <div className="flex flex-col justify-evenly lg:flex-row lg:gap-6 lg:px-0 mb-8">
                        <article className="w-full max-w-none mb-4 border flex-1 border-gray-200 rounded-lg bg-gray-50 dark:bg-dark_secondary dark:border-gray-600 prose dark:prose-invert p-4 ">
                            <div className="lg:max-w-3xl lg:mx-auto overflow-auto">

                                <ReactMarkdown>{project.content}</ReactMarkdown>
                            </div>
                        </article>
                        <aside className=" pt-2 lg:pt-10 top-14 lg:sticky lg:h-full w-full lg:w-80">
                            <div className="hidden lg:block">
                                <Shareproject url={locationURL} title={post.title} desc={post.desc} />

                            </div>
                            <div className=" lg:hidden">
                                <Shareproject url={locationURL} title={post.title} desc={post.desc} />

                            </div>
                        </aside>


                    </div>
                </>)

        }
    </main >


}

