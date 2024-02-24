"use client";
import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const skills = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    alt: "C programming language",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    alt: "Java",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "typescript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "reactjs",
  },
  {
    img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    alt: "springboot",
  },
  {
    img: "https://nestjs.com/logo-small.ede75a6b.svg",
    alt: "nestjs",
  },

  {
    img: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    alt: "flutter",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "mongodb",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    alt: "postgressql",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    alt: "docker",
  },
];

export function SkillsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full sm:max-w-md max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {skills.map((skill, index) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 ">
                  <Image
                    src={skill.img}
                    alt={skill.alt}
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
