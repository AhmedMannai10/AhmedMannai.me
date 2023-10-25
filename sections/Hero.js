import Image from "next/image";
import Link from "next/link";
import mypic from "../assests/imgs/Ahmed_image_w.png";
import CtaButton from "../components/CtaButton";

const Hero = () => {
    return (
        <div className="flex flex-col gap-6 md:flex-row  
        justify-center md:mt-10 sm:m-5 m-3 md:px-10  ">
            <div
                className="flex-1 flex flex-col gap-6 pt-6 justify-center
                md:gap-10 md:pt-0
            "
            >
                <h1
                    className="
                    font-bold 
                    text-4xl md:text-5xl text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-600 to-pink-400 "
                >
                    AHMED MANNAI
                </h1>
                <p className="text-2xl font-medium md:text-3xl">
                    Software Engineer, I am passionate with developing softwares,
                    and I love engineering in general. obsessed with creating
                    things
                </p>
                <Link href="/subscribe" className="cursor-pointer">
                    <span>
                        <CtaButton name="Subscribe" />
                    </span>
                </Link>
            </div>
            <div className="flex-1 flex md:justify-center  ">
                <div
                    className=" border-white border-[6px] rounded-md w-full 
                max-w-[500px] h-fit "
                >
                    <Image
                        src={mypic}
                        alt="Ahmed Mannai picture"
                        layout="responsive"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
