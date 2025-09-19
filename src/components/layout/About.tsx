"use client";
import Link from "next/link";
import Image from "next/image";
import { RiPagesLine } from "react-icons/ri";
import { motion } from "framer-motion";

import myImage from "../../assets/my-image.png";

// Animation variants
const imageVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 10,
    transition: {
      duration: 0.6,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 1,
    },
  },
};

export const About = () => {
  return (
    <div className="h-full flex sm:flex-col lg:flex-row lg:mx-8 xl:mx-16 my-12 xl:my-24 gap-16">
      
      <div className="mx-auto mt-2 xl:mt-8 sm:text-center lg:text-start ">
        <span className="font-semibold dark:text-darkText text-lightBtn text-3xl lg:text-4xl">
          About{" "}
          <b className="text-lightText dark:text-orange-500 font-semibold">
            {" "}
            Me
          </b>
        </span>
        <div className="mt-3 ">
          <span className="dark:text-darkText text-lightText sm:text-md xl:text-base  font-normal leading-5 ">
            <p className="mb-1 text-base lg:text-lg">
              Funny story, I stumbled into programming entirely by accident.
            </p>
            <p className="leading-5 text-base lg:text-lg">
              One lazy Sunday, I decided to whip up a personal website to share
              my life&apos;s little adventures. That&apos;s when JavaScript
              worked its magic, and I was completely hooked.
            </p>
            <br />
            <p className="leading-5 text-base lg:text-lg">
              Fast forward four years, and what started as a curious experiment
              has become my life&apos;s passion: creating innovative software
              solutions to tackle real-world challenges. My insatiable curiosity
              and deep love for technology have driven me to master diverse
              domains like:
            </p>
            <br />
            <p className="text-xl font-semibold  dark:text-orange-500 text-lightBtn">
              Web Development, Mobile Development, AI/ML, UI/UX Design, Devops,
              Cybersecurity, etc
            </p>
          </span>
          <div className="flex sm:justify-center lg:justify-start mt-6 ">
            <Link href="/resume">
              <button className="w-[150px] h-10 flex justify-center items-center bg-lightText text-lightBtn hover:bg-blue-800 hover:text-white/90 dark:text-darkText dark:hover:text-darkBg dark:bg-orange-500 font-normal  rounded-xl shadow dark:hover:bg-orange-300 px-4  hover:shadow-md hover:transition-all ">
                <RiPagesLine className="h-7 w-7 pr-1" />
                <p className="text-nowrap text-sm">View resume</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:w-full lg:w-1/2 ">
        <motion.div
          className="flex justify-center items-center h-80 w-80 lg:h-[320px] lg:w-[320px] xl:h-[430px] xl:w-[430px] bg-lightText dark:bg-orange-500 rounded-full z-10"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-center items-center sm:w-72 sm:h-72 lg:h-[290px] lg:w-[290px] xl:h-[400px] xl:w-[400px] bg-lightBtn dark:bg-darkText rounded-full pt-[53px]">
            <Image
              src={myImage}
              alt="My Image"
              className="sm:w-[268px] lg:w-[270px] -z-1 xl:w-[388px] rounded-b-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

