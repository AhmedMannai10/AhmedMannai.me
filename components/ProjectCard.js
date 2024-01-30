import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../components/TagCard";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ img, title, desc, tags, link }) {
  const tagItems = String(tags).split(" ");
  const stringLink = String(link);
  return (
    <Card className=" w-full lg:flex border-2 rounded-xl overflow-hidden h-full">
      <Image
        src={img}
        alt={`pic ${title}`}
        width={700}
        height={600}
        className=" h-48 lg:h-auto lg:w-60 flex-none object-cover
        rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      />
      <CardHeader>
        <CardTitle>
          <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
            {title}
          </h4>
        </CardTitle>

        <p class=" leading-7 [&:not(:first-child)]:mt-6">{desc}</p>
      </CardHeader>
    </Card>
  );
}
