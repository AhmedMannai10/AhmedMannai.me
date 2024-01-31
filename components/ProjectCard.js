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
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ img, title, desc, tags, link }) {
  const tagItems = String(tags).split(" ");
  const stringLink = String(link);
  return (
    <Card className="rounded-xl overflow-hidden min-h-[380px] hover:border-secondary-foreground hover:border  ">
      <a href={"https://github.com/ahmedmannai10"} target="_blank">
        <div className="relative h-48">
          <Image
            src={img}
            alt={`pic ${title}`}
            fill
            className=" h-48  lg:h-auto  flex-none object-cover
        rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          />
        </div>

        <div className=" ">
          <CardHeader>
            <CardTitle>
              <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                {title}
              </h4>
            </CardTitle>

            <p class=" leading-7 [&:not(:first-child)]:mt-6">{desc}</p>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">React JS</Badge>
          </CardContent>
        </div>
      </a>
    </Card>
  );
}
