import Image from "next/image";
import Link from "next/link";
import mypic from "../assests/imgs/Ahmed_image_w.png";
import CtaButton from "./CtaButton";

const Hero = () => {
    return (
        <div className="flex flex-col min-h-screen gap-6">
            <div className="flex-1 flex flex-col gap-6 m-5 pt-6  ">
                <h1
                    className="
                    font-bold 
                    text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 "
                >
                    AHMED MANNAI
                </h1>
                <p className="text-2xl font-medium">
                    Software Engineer, I am passionate with developing software,
                    and I love engineering in general. I obsessed with creating
                    things
                </p>
                <Link href="/contact">
                    <a>
                        <CtaButton name="Contact Me" />
                    </a>
                </Link>
            </div>
            <div className="flex-1 px-5  ">
                <div className="border-white border-[6px] rounded-md">
                    <Image
                        src={mypic}
                        alt="Ahmed Mannai picture"
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
