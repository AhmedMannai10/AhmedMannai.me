import ProjectCard from "@/components/ProjectCard";

const About = () => {
  return (
    <div
      className="flex flex-col gap-4 bg-secondary 
             dark:bg-dark_secondary md:mx-10 sm:mx-5 mx-2 sm:p-8 p-2 
        rounded-md shadow-lg 
     "
    >
      <h2
        className="dark:text-dark_h_color 
                    text-h_color font-semibold
                    text-3xl my-2 "
      >
        About Me
      </h2>

      <p className="text-xl ">
        Greetings! I'm Ahmed Mannai, a Software Engineer fueled by an unwavering
        passion for software engineering. My journey through academia and
        hands-on experience has finely tuned my prowess in programming
        languages, software design, and development methodologies. I'm dedicated
        to crafting high-quality solutions that seamlessly align with both
        technical intricacies and business objectives, earning acclaim for my
        problem-solving finesse and meticulous attention to detail. Contrary to
        being a standout academic, I pride myself on being an endlessly curious
        individual with an insatiable appetite for software development. I've
        discovered that my true strength lies in my ability to navigate and
        conquer challenges with an open mind. A perpetual learner at heart, I
        actively seek fresh challenges to continually expand my knowledge and
        elevate my skill set. Motivated by a desire to leave a positive imprint
        on the industry, I'm committed to keeping abreast of the latest
        advancements and trends in software engineering. Approaching each
        endeavor with a blend of expertise and infectious enthusiasm, I am
        poised to contribute meaningfully to new projects and opportunities.
        Eager to play a pivotal role in shaping innovative and impactful
        software solutions, I bring a unique blend of expertise and genuine
        passion to the table. Let's embark on a journey of innovation and
        excellence together.
      </p>
      <ProjectCard
        img=""
        title="hello"
        desc="there"
        link="https://www.ahmedmannai.me"
      />
    </div>
  );
};

export default About;
