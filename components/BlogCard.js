import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ img, title, desc, link }) {
    return (
        <Link href={`/blog/${link} `}>
                          
            
        <div className="max-w-sm   bg-secondary
              dark:bg-dark_secondary rounded-lg shadow 
                rounded-md shadow-lg hover:-translate-y-[4px] duration-300 ease-out overflow-hidden
        ">

        <div
                        className="relative min-h-[250px] "
                    >
        <Image
        loading="lazy"
        src={img}
        alt={`${title}  project image`}
        layout='fill'
        objectFit="cover"
        />
        </div>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </div>
        </div>
 
        </div>
                        </Link>
    );
}
