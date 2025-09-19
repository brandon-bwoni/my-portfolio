"use client";

import Link from "next/link";
import Type from "../../animations/Type";

import { FaArrowDownLong } from "react-icons/fa6";
import { Socials } from "../UI/Socials";
import CirclesDesign from "../CirclesDesign";

export const Hero = () => {
  return (
    <div className="relative h-full flex flex-row gap-8 xl:gap-16 mb-6 pt-12 lg:pt-16">
      {/* Floating Bubbles Background */}
      
      
      <div className="relative z-10 w-1/2 h-full flex flex-col  font-medium justify-center lg:justify-start items-center mt-16 lg:mt-32 mx-auto lg:ml-8">
        <div className="text-center ">
          <h1 className="sm:text-2xl font-semibold lg:text-3xl mb-3 lg:mb-6 dark:text-lightBg text-lightBtn">
            Hello, I&apos;M
          </h1>
          <h1 className="text-wrap text-4xl xl:text-5xl text-lightText dark:text-orange-500 font-bold px-2 mb-3">
            BRANDON TAKURA BWONI
          </h1>
        </div>
        <div className="text-[14px] lg:text-xl text-lightBtn dark:text-lightBg font-medium mt-4 mb-3 lg:mb-6">
          <Type />
        </div>
        <div className="w-[240px] h-10 flex flex-row mt-4 mb-3 lg:mb-6  rounded-3xl gap-6">
          <Link href="/contact">
            <button className="w-[110px] h-10 flex justify-center items-center bg-lightText text-lightBtn hover:bg-blue-800 hover:text-white/90  font-medium  dark:text-lightBg dark:bg-orange-500 dark:hover:bg-orange-300 dark:hover:text-darkBg light:bg-textDark text-[14px] rounded-xl  hover:shadow-lg hover:transition-all ">
              Hire me!
            </button>
          </Link>
          <Link href="/projects">
            <button
              className="flex justify-center items-center px-4 h-10 border sm:text-nowrap border-lightBtn 
              hover:bg-lightBtn/20  dark:hover:border-transparent dark:border-darkText text-lightText font-medium light:border-white rounded-xl text-sm  dark:hover:bg-darkText/20  hover:text-bold dark:text-darkText dark:hover:shadow-darkText/10 hover:shadow-darkBg/50"
            >
              My Projects
            </button>
          </Link>
        </div>

        {/* Socials */}
        <div className="font-normal flex flex-col mt-4 gap-2 justify-start">
          <p className="font-semibold light:text-darkText dark:text-lightBg text-lightText text-center text-lg mb-3">
            Let&apos;s connect
          </p>
          <Socials />
          <div className="flex justify-center items-center pt-2 mt-6 lg:mt-16  rounded-ful w-14 h-14 ml-10">
            <FaArrowDownLong className="animate-bounce h-8 w-8 text-lightText dark:text-darkText" />
          </div>
        </div>
      </div>

      {/*Image  */}
      <div className="relative z-10">
        <CirclesDesign />
      </div>
    </div>
  );
}

