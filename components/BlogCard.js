import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function BlogCard({ img, title, desc, link }) {
  return (
    <Link href={`/blog/${link} `} className="max-w-[300px] ">
      <div
        class="relative  flex-col min-w-0 break-words  rounded-2xl bg-clip-border  hover:shadow-xl hover:shadow-soft-xl p-2 border 
hover:-translate-y-[4px] duration-300 ease-out  pb-4
hover:border-secondary-foreground hover:border
        "
      >
        <div className=" relative h-48 ">
          <Image
            src={img}
            alt={`pic ${title}`}
            fill
            className=" h-48  flex-none object-cover
         text-center overflow-hidden
        shadow-xl shdow-soft-xl rounded-2xl
              "
          />
        </div>

        <div class="flex-auto px-1 pt-6">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {title}
          </h4>
          <p class="mb-6 leading-normal text-sm">{desc}</p>
          <div class="flex items-center justify-between">
            <Button type="button">
              Read More
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
