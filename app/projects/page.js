import React from "react";

import Projects from "./Projects";

export const metadata = {
  title: "Projects",
};

export default function Page({ fallback }) {
  return (
    <main className="container relative">
      <div
        className="space-y-2 pb-8 pt-6 md:space-y-5 border-b-2 
           py-8 "
      >
        <h1
          className="dark:text-dark_h_color text-h_color font-bold
                    sm:my-2 text-4xl 
            leading-9 tracking-tight sm:text-6xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Projects
        </h1>

        <h3 className=" text-xl">
          Some of the non-commercial and open source projects I have created
        </h3>
      </div>
      <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
        <div className="flex flex-col gap-10  ">
          <Projects />
        </div>
      </div>
    </main>
  );
}
