import Link from "next/link";
import Type from "@/animations/Type";

import { FaArrowDownLong } from "react-icons/fa6";
import Socials from "../UI/Socials";
import CirclesDesign from "../CirclesDesign";

function Hero() {
  return (
    <div className="h-full flex flex-row gap-8 2xl:gap-16 mb-6 pt-12">
      <div className="w-1/2 h-full flex flex-col  font-medium justify-center lg:justify-start items-center mt-16 lg:mt-32 mx-auto">
        <div className="text-center ">
          <h1 className="sm:text-2xl font-semibold lg:text-3xl dark:text-lightBg text-lightBtn">
            Hello, I'M
          </h1>
          <h1 className="text-wrap text-3xl xl:text-4xl text-lightText dark:text-orange-500 font-bold">
            BRANDON TAKURA BWONI
          </h1>
        </div>
        <div className="text-sm lg:text-xl text-lightBtn dark:text-lightBg font-medium mt-4 mb-2">
          <Type />
        </div>
        <div className="w-[240px] h-10 flex flex-row mt-4 mb-2  rounded-3xl gap-4">
          <Link href="/contact">
            <button className="w-[110px] h-10 flex justify-center items-center bg-lightText text-lightBtn hover:bg-blue-800 hover:text-white/90  font-medium  dark:text-lightBg dark:bg-orange-500 dark:hover:bg-orange-300 dark:hover:text-darkBg light:bg-textDark text-[14px] rounded-3xl  hover:shadow-xl hover:transition-all hover:font-semibold">
              Hire me!
            </button>
          </Link>
          <Link href="/projects">
            <button
              className="flex justify-center items-center px-4 h-10 border-2 sm:text-nowrap border-lightBtn 
              hover:bg-lightBtn/20   dark:border-darkText text-lightText font-medium light:border-white rounded-3xl text-sm hover:border-0 hover:font-semibold dark:hover:bg-darkText/20  hover:text-bold dark:text-darkText dark:hover:shadow-darkText/10 hover:shadow-darkBg/50"
            >
              My Projects
            </button>
          </Link>
        </div>

        {/* Socials */}
        <div className="font-normal flex flex-col mt-4 gap-2 justify-start">
          <p className="font-semibold light:text-darkText dark:text-lightBg text-lightText text-center ">
            Let's connect
          </p>
          <Socials />
          <div className="flex justify-center items-center pt-2 mt-6  rounded-ful w-14 h-14 ml-10">
            <FaArrowDownLong className="animate-bounce h-8 w-8 text-lightText dark:text-darkText" />
          </div>
        </div>
      </div>

      {/*Image  */}
      <CirclesDesign />
    </div>
  );
}

export default Hero;

{
  /* <div className="w-1/2 flex items-center justify-center h-full lg:flex sm:hidden">
        <div className="flex items-center justify-center h-[280px] w-[280px] xl:w-[360px] xl:h-[360px] 2xl:h-[400px] 2xl:w-[400px] rotate-45 hover:transition-all  rounded-3xl bg-lightBtn dark:bg-lightText mt-20 hover:shadow-lightShadow ">
          <motion.div
            className="xl:h-80 xl:w-80 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              alt="My Image"
              src={myImage}
              className="lg:w-[240px] xl:w-[380px] 2xl:w-[410px] sm:hidden lg:flex rounded-b-full -rotate-45 "
            />
          </motion.div>
        </div>
      </div> */
}
