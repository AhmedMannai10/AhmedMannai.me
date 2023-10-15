import React from "react";

const PostTitle = ({ title, publichedDate }) => {
    return (
        <header>
            <title>{title}</title>
            <div className="pb-10 md:mb-5 space-y-6 text-center">
                <div className="w-full flex justify-center">
                    <h1 className="mb-0 w-fit leading-9 break-words text-4xl sm:leading-10 md:text-5xl md:leading-14 bg-clip-text bg-gradient-to-r font-extrabold from-pink-600 to-sky-600 dark:from-pink-400 dark:to-sky-400 h1 leading-tighter text-center text-transparent tracking-tighter selection:text-gray-800 dark:selection:text-gray-200">
                        {title}
                    </h1>
                </div>
                <div className=" space-y-2">
                    <dl>
                        <div>
                            <dt className=" sr-only">Published On</dt>
                            <dd className="text-lg font-medium leading-6 text-gray-700 dark:text-gray-300">
                                <time>{publichedDate}</time>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </header>
    );
};

export default PostTitle;
