import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function BlogCard({ img, title, desc, link }) {
  return (
    <Link href={`/blog/${link} `}>
      <Card className=" relative flex flex-col min-w-0 break-words border-0 shadow-soft-xl rounded-2xl bg-clip-border">
        <CardHeader className=" relative  m-3 min-h-[230px] ">
          <Image
            src={img}
            alt={`pic ${title}`}
            className=" rounded-xl  shadow-soft-2xl  "
            objectFit="cover"
            layout="fill"
          />
        </CardHeader>
        <CardContent>
          <CardTitle>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {title}
            </h4>
          </CardTitle>
          <CardDescription>
            <p class="mb-6 leading-normal text-sm">{desc}</p>
          </CardDescription>
          <div class="flex items-center justify-between">
            <button
              type="button"
              class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs"
            >
              View Project
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
