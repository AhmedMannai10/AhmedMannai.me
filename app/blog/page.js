import { React } from "react";
import Articles from "./Articles";

export const metadata = {
  title: "Blog",
  description: "My latest articles, talking about what I am working on, and documenting my journey",
}
export default function Page() {


  return (
    <main >


      <div className='space-y-2 pb-8 pt-6 md:space-y-5 border-b-2 dark:border-b-gray-700
          border-b-gray-400 py-8'>
        <h1
          className='dark:text-dark_h_color text-h_color font-bold
                    sm:my-2 text-4xl 
            leading-9 tracking-tight sm:text-6xl sm:leading-10 md:text-6xl md:leading-14'
        >
          Blog
        </h1>

        <h3 className='dark:text-gray-300 text-gray-600 text-xl'>
          My latest articles
        </h3>

      </div>

      <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 ">
          <Articles />
        </div>
      </div>
    </main>
  );
}
