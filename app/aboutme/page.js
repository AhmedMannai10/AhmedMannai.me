"use client";
import React from "react";
import Image from "next/image";

import mypic from "@/assets/imgs/Ahmed_image_w.png";
import { SkillsCarousel } from "@/components/skills-carousel";
import { Separator } from "@/components/ui/separator";

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
            <div className="flex-1 ">
              <section>
                <p>
                  In 2016, I ventured into the world of coding with Java,
                  exploring Minecraft mods. The challenge and creative freedom
                  hooked me, sparking a passion that eventually led me to pursue
                  computer science after graduating high school in 2020.
                </p>
              </section>
              <Separator className="my-3" />
              <section>
                <p>
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

              <h4 className="scroll-m-20 text-xl mb-4 font-semibold tracking-tight">
                Languages and Tools
              </h4>

              <SkillsCarousel />
            </div>
          </div>
          <Separator className="my-3" />
          <section>
            <p>
              During my second year, I honed my Java skills through university
              competitions. An internship at Accent.tn introduced me to
              real-world application development using Flutter. Creating a
              desktop app to automate tasks for electrical engineers was a
              pivotal moment, showcasing the power of building solutions that
              are both creative and useful.
            </p>
            <p>
              In my final year as a CS student, I had an enriching internship at
              Altersis Performance. As a software engineer for five months, I
              engineered a Front-End Performance Testing Tool for CI/CD
              integration using Java Selenium. This tool empowered teams with
              real-time monitoring, data-driven insights, and the ability to
              proactively identify and address UI-related performance issues.
            </p>
            <p>
              InfluxDB integration facilitated early issue detection,
              contributing to enhanced front-end reliability. The impact of this
              tool wasn't just in lines of code but in enabling a culture of
              continuous improvement, where performance issues were identified
              and resolved seamlessly during the development cycle.
            </p>
          </section>
          <section>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Looking Forward
            </h2>
            <p>
              I'm excited about the intersection of creativity, problem-solving,
              and technology. Eager to contribute my skills and enthusiasm to
              future projects and challenges.
            </p>
          </section>{" "}
          <section>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Professional Experiences
            </h2>

            <article>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Software Engineer Intern
              </h3>
              <p>
                <a
                  href="https://accent.tn/#/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong classname="text-lg font-semibold">Accent</strong>
                </a>
              </p>
              <p>Jun 2022 – Sep 2022 (4 mos)</p>
              <ul>
                <li>
                  Engineered a fully functional Flutter Desktop App, enabling
                  seamless communication with circuit boards through a serial
                  port for efficient data exchange.
                </li>
                <li>
                  Automated calibration processes within the app, ensuring
                  optimal connectivity and synchronization with the circuit
                  board's COMS for enhanced performance and reliability.
                </li>
                <li>
                  Designed a user-centric interface utilizing Flutter's
                  capabilities, facilitating intuitive interactions and
                  streamlined communication with connected circuit boards.
                </li>
              </ul>
              <p>...</p>
            </article>

            <article>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Software Engineer Intern
              </h3>
              <p>
                <a
                  href="https://www.altersis-performance.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong classname="text-lg font-semibold">
                    Altersis Performance by Qim info
                  </strong>
                </a>
              </p>
              <p>Feb 2023 – Jun 2023 (5 mos)</p>
              <ul>
                <li>
                  Developed a specialized Java-based tool focused on front-end
                  performance testing, seamlessly integrable into CI/CD
                  pipelines for continuous evaluation.
                </li>
                <li>
                  Enabled real-time monitoring of front-end performance metrics
                  on every commit, leveraging Selenium to meticulously capture
                  and analyze user interface responsiveness and efficiency.
                </li>
                <li>
                  Implemented InfluxDB integration to store and analyze
                  front-end performance data, facilitating the early detection
                  of UI-related bottlenecks or responsiveness issues.
                </li>
              </ul>
              <p>...</p>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
export default AboutMePage;
