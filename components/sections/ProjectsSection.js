"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";
import fetcher from "@/utils/fetcher";
import SkeletonLoadingCard from "@/components/SkeletonLoadingCard";
import useSWR, { SWRConfig } from "swr";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ProjectsSection({ params }) {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher, {
    fallback: "Loading...",
  });

  if (error) {
    return <div>failed to load</div>;
  }
  const projects = data;

  return (
    <section
      className="flex flex-col 
    lg:mx-auto  max-w-[980px]  items-center gap-6 pt-8 mx-8 mb-10 "
    >
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Projects
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full lg:max-w-4xl "
      >
        <CarouselContent className="">
          {projects ? (
            projects.slice(0, 10).map((project) => (
              <CarouselItem key={project.slug} className="md:basis-1/2">
                <ProjectCard
                  img={project.img}
                  title={project.title}
                  desc={project.description}
                  tags={project.tags}
                  key={project.slug}
                  link={project.link}
                />
              </CarouselItem>
            ))
          ) : (
            <>
              <CarouselItem className=" md:basis-1/2">
                <SkeletonLoadingCard />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/2">
                <SkeletonLoadingCard />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/2">
                <SkeletonLoadingCard />
              </CarouselItem>
            </>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
