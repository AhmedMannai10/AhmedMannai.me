import Image from "next/image";
import Link from "next/link";
import mypic from "@/assets/imgs/Ahmed_image_w.png";
import ahmedpic2 from "@/assets/imgs/ahmedpic2.png";
import ahmedpic3 from "@/assets/imgs/ahmedpic3.png";
import ahmedpic4 from "@/assets/imgs/ahmedpic4.png";
import ahmedpic5 from "@/assets/imgs/presentation_ahmed.png";
import desksetupPic from "@/assets/imgs/desksetup.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 pt-8   ">
      <div
        className="flex-1 flex flex-col pt-6 justify-center
        md:pt-0 items-center
        "
      >
        <h1
          className="
          text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]
          "
        >
          Hello I'm{" "}
          <span
            className=" text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-600 to-pink-400"
          >
            Ahmed Mannai
          </span>
        </h1>
        <span
          className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl "
          data-br=":r21g:"
          data-brr="1"
        >
          A dedicated software engineer with a passion for turning ideas into
          elegant code. Let's build something extraordinary together. 🚀
        </span>
        <div className=" mt-4 flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Link
            href="/contact"
            className=" cursor-pointe flex 
            hover:bg-opacity-80  border-2  border-dark_primary 
            rounded-lg w-fit 

            h-10 justify-center items-center duration-300 
            px-3 cursor-pointer"
          >
            Connect
          </Link>
          <Link href="/contact">
            <Button>Resume</Button>
          </Link>
        </div>
      </div>
      <div class="columns-2 sm:columns-3 gap-4 my-8">
        <Image
          className=" rounded-lg object-cover mb-4 h-80"
          src={ahmedpic5}
          alt="Ahmed Mannai picture"
          layout="cover"
        />

        <Image
          className=" rounded-lg object-cover mb-4 "
          src={desksetupPic}
          alt="Ahmed Mannai picture"
        />
        <Image
          className=" rounded-lg object-cover mb-4  "
          src={mypic}
          alt="Ahmed Mannai picture"
          layout="cover"
          loading="lazy"
        />

        <Image
          className=" rounded-lg object-cover mb-4 h-72 "
          src={ahmedpic2}
          alt="Ahmed Mannai picture"
          layout="cover"
        />

        <Image
          className=" rounded-lg object-cover mb-4 h-80"
          src={ahmedpic3}
          alt="Ahmed Mannai picture"
          layout="cover"
        />
        <div className="k" />
      </div>
      {/*
      <Card>
        <div
          className=" border-white border-[6px] rounded-md w-full 
                max-w-[200px] h-fit "
        >
                  </div>
      </Card>*/}
    </section>
  );
};

export default Hero;
