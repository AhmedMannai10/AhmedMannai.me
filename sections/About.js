import TagCard from "../components/TagCard";

const About = () => {
    return (
        <div
            className="flex flex-col gap-4 bg-secondary
             dark:bg-dark_secondary sm:mx-14 p-8
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
                Hello there, I am a software passionate, I love developing and
                building things I belive that I enjoy engineering in general.
                here is My Resume I was never the best at school or academily I
                am just a super curios guy with huge passion for software
                engineering curently I live here in Tunisia. in the last few
                years I have got into computer science and I fall in love with
                it and I gain good knowalge about software. I have great
                knowledge Flutter React
            </p>
            <div>
                <TagCard value="Next JS" /> <TagCard value="Firebase" />
            </div>
        </div>
    );
};

export default About;
