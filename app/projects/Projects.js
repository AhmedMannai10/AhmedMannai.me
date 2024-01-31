"use client";
import react from "react";
import useSWR from "swr";
import SkeletonLoadingCard from "../../components/SkeletonLoadingCard";
import ProjectCard from "../../components/ProjectCard";
import fetcher from "../../utils/fetcher";

export default function Projects() {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  const projects = data;

  return (
    <>
      {projects ? (
        projects.map((project) => (
          <ProjectCard
            img={project.img}
            title={project.title}
            desc={project.description}
            key={project.slug}
            link={project.slug}
          />
        ))
      ) : (
        <>
          <SkeletonLoadingCard />
          <SkeletonLoadingCard />
        </>
      )}
    </>
  );
}
