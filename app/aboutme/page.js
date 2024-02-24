"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import mypic from "@/assets/imgs/Ahmed_image_w.png";
import { SkillsCarousel } from "@/components/skills-carousel";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

function AboutMePage() {
  return (
    <main className="container relative">
      <div
        className="flex  gap-6 md:flex-row-reverse  flex-col-reverse 
        justify-center md:mt-10 sm:m-5 m-3 md:px-10  "
      >
        <div
          className="flex-1 flex flex-col gap-6 pt-6 justify-start
                md:gap-10 md:pt-0
            "
        >
          <div className="lg:flex  flex-1 gap-4">
            <div className="flex-1 flex md:justify-center mb-4 ">
              <div
                className=" border-white border-[6px] rounded-md w-full 
                max-w-[400px] h-fit "
              >
                <Image
                  src={mypic}
                  alt="Ahmed Mannai picture"
                  layout="responsive"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 ">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Hello I{"'"}m Ahmed Mannai
              </h1>
              <section>
                <p className="leading-7 [<p>:not(:first-child)]:mt-6">
                  A Software Engineer based in Tunisia, passionate about
                  leveraging technology to create impactful solutions.{" "}
                </p>
              </section>
              <Separator />
              <section className="">
                <p className="leading-7 [<p>:not(:first-child)]:mt-6">
                  My journey into the world of software engineering was ignited
                  by a genuine passion for crafting innovative solutions to
                  complex challenges. This passion has been the driving force
                  behind my academic achievements, hands-on project experiences,
                  and continuous pursuit of knowledge in this dynamic and
                  ever-evolving field. While I have developed a solid foundation
                  in Java, JavaScript, and C, my true strength lies in my
                  ability to rapidly learn, adapt, and apply new technologies to
                  deliver impactful solutions. This adaptability, coupled with
                  my problem-solving mindset and analytical capabilities,
                  enables me to navigate diverse projects, collaborate
                  effectively with multidisciplinary teams, and contribute
                  meaningfully to the success of various initiatives.
                </p>
              </section>

              <h4 className="scroll-m-20 text-xl my-4 tracking-tight">
                Languages and Tools
              </h4>

              <SkillsCarousel />
            </div>
          </div>
          <Separator className="my-3" />
          <section className="flex flex-col gap-2">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              🚀 Professional Background
            </h2>

            <p className="leading-7 [<p>:not(:first-child)]:mt-6">
              In my professional journey, I{"'"}ve specialized in crafting
              solutions with Java, JavaScript, and C. From developing front-end
              performance testing tools to building comprehensive Flutter
              applications, I thrive on turning innovative ideas into tangible,
              user-centric products.
            </p>

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              💡 Continuous Learning
            </h2>

            <p className="leading-7 [<p>:not(:first-child)]:mt-6">
              Beyond coding, I am an avid learner, always eager to explore
              emerging technologies and refine my skills. Whether it is staying
              up-to-date with the latest tech trends, contributing to personal
              projects, or engaging in collaborative endeavors, I believe in the
              power of continuous improvement.
            </p>

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              🌐 Let us Connect
            </h2>

            <p className="leading-7 [<p>:not(:first-child)]:mt-6">
              If you are a fellow enthusiast in the tech world or someone
              interested in collaboration, let us connect! I am open to new
              opportunities, creative discussions, and building something
              extraordinary together.
            </p>

            <p className="leading-7 [<p>:not(:first-child)]:mt-6">
              Feel free to reach out{" "}
              <Badge variant={"outline"}>
                <Link href="/contact" className="underline">
                  HERE
                </Link>
              </Badge>
              . Thanks for visiting!
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
export default AboutMePage;
