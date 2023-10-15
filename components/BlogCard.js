import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ img, title, desc, link }) {
    return (
        <Link href={`/blog/${link} `}>
                <div
                    className="flex flex-col bg-secondary
              dark:bg-dark_secondary  max-w-sm md:min-w-[300px]
                rounded-md shadow-lg 
                hover:-translate-y-[4px] duration-300 ease-out"
                >
                    <div className="p-2">
                        <div
                            className="rounded-t-md relative min-h-[250px]"
                        >
                            <Image
                                loading="lazy"
                                src={img}
                                alt={`${title} project image`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    </div>
                    <div className="p-4 ">
                        <h4
                            className="dark:text-dark_h_color 
                    text-h_color font-semibold
                    text-xl  mb-2 uppercase"
                        >
                            {title}
                        </h4>
                        <p className=" text-lg my-2">{desc}</p>
                    </div>
                </div>
        </Link>
    );
}
