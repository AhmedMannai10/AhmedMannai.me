import Image from "next/image";
import mypic from "../assests/imgs/ahmedImage.jpeg";
import CtaButton from "./CtaButton";

const Hero = () => {
    return (
        <div className="flex flex-col h-screen ">
            <div className="flex-1 flex flex-col gap-6 m-5 p-6">
                <h1
                    className="dark:text-dark_h_color 
                    text-h_color 
                    font-bold 
                    text-4xl  "
                >
                    AHMED MANNAI
                </h1>
                <p className="text-2xl font-medium">
                    Software Engineer, I am passionate with developing software,
                    and I love engineering in general. I obsessed with creating
                    things
                </p>
                <CtaButton name="Contact Me" />
            </div>
            <div className="flex-1 px-10 ">
                <div >
                    <Image
                        src={mypic}
                        alt="Picture of the author"
                        layout="responsive"
                        
                        className="rounded border-2  border-white"
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
