import Image from "next/image";
import Link from "next/link";
import mypic from "../assests/imgs/Ahmed_image_w.png";
import CtaButton from "../components/CtaButton";

const Hero = () => {
  return (
    <div
      className="flex flex-col gap-6 md:flex-row  
        justify-center md:mt-10 sm:m-5 m-3 md:px-10  "
    >
      <div
        className="flex-1 flex flex-col gap-6 pt-6 justify-center
                md:gap-10 md:pt-0
            "
      >
        <h1
          className="
                    font-extrabold  text-4xl lg:text-5xl xl:text-6xl
                     text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-600 to-pink-400 "
        >
          Ahmed Mannai
        </h1>
        <p className="text-xl  md:text-2xl">
          Passionate software developer dedicated to engineering excellence and
          driven by the joy of creating innovative solutions.
        </p>
        <div className="flex gap-4 w-full">
          <Link
            href="/hireme"
            className="cursor-pointe flex 
                                            border-bg-bg_btn  dark:text-dark_primary 
                hover:bg-opacity-90 dark:bg-[#ededed] border-2  border-dark_primary 
            dark:border-primary text-white bg-dark_secondary 
                                              text-2xl rounded-xl w-fit 
                                          h-14 justify-center items-center duration-300 
                                            px-5 cursor-pointer"
          >
            Let's Connect
          </Link>
        </div>
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
