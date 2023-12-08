import TagCard from "../components/TagCard";

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

                Hello there, I, Ahmed Mannai, am a recent computer science graduate with a passion for software engineering.<br />
                My studies and experience have honed my skills in programming languages, software design, and development methodologies.<br />
                I focus on delivering high-quality solutions that meet both technical and business requirements, earning a reputation for my problem-solving skills, attention to detail.<br />
                I was never the best at school or academily I am just a super curios guy with huge passion for software development.<br /><br />
                As a proactive learner, I always seek new challenges to expand my knowledge and improve my skills.<br />
                With a strong desire to make a positive impact in the industry, I am dedicated to staying up-to-date with the latest advancements and trends in software engineering.<br />
                I bring expertise and enthusiasm to new projects and opportunities, eager to contribute to the development of innovative and impactful software solutions.


            </p>

        </div>
    );
};

export default About;
