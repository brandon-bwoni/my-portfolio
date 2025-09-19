"use client";
import Link from "next/link";
import Image from "next/image";
import { RiPagesLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../../animations/StaggerContainer";
import { fadeInUp, slideInFromLeft, slideInFromRight, gentleHover, buttonPress } from "../../animations/variants";

import { assets } from "../../constants/provider";

export const About = () => {
  return (
    <div className="h-full flex sm:flex-col lg:flex-row lg:mx-8 xl:mx-16 my-12 xl:my-24 gap-16">
      
      <StaggerContainer className="mx-auto mt-2 xl:mt-8 sm:text-center lg:text-start" delay={0.2}>
        <StaggerItem>
          <motion.span 
            className="font-semibold dark:text-darkText text-lightBtn text-3xl lg:text-4xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            About{" "}
            <b className="text-lightText dark:text-orange-500 font-semibold">
              {" "}
              Me
            </b>
          </motion.span>
        </StaggerItem>
        
        <StaggerItem>
          <div className="mt-3">
            <span className="dark:text-darkText text-lightText sm:text-md xl:text-base font-normal leading-5">
              <StaggerContainer delay={0.1}>
                <StaggerItem>
                  <p className="mb-1 text-base lg:text-lg">
                    Funny story, I stumbled into programming entirely by accident.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="leading-5 text-base lg:text-lg">
                    One lazy Sunday, I decided to whip up a personal website to share
                    my life&apos;s little adventures. That&apos;s when JavaScript
                    worked its magic, and I was completely hooked.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <br />
                  <p className="leading-5 text-base lg:text-lg">
                    Fast forward four years, and what started as a curious experiment
                    has become my life&apos;s passion: creating innovative software
                    solutions to tackle real-world challenges. My insatiable curiosity
                    and deep love for technology have driven me to master diverse
                    domains like:
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <br />
                  <motion.p 
                    className="text-xl font-semibold dark:text-orange-500 text-lightBtn"
                    variants={gentleHover}
                    whileHover="hover"
                  >
                    Web Development, Mobile Development, AI/ML, UI/UX Design, Devops,
                    Cybersecurity, etc
                  </motion.p>
                </StaggerItem>
              </StaggerContainer>
            </span>
            <StaggerItem>
              <div className="flex sm:justify-center lg:justify-start mt-6">
                <Link href="/resume">
                  <motion.button 
                    className="w-[150px] h-10 flex justify-center items-center bg-lightText text-lightBtn hover:bg-blue-800 hover:text-white/90 dark:text-darkText dark:hover:text-darkBg dark:bg-orange-500 font-normal rounded-xl shadow dark:hover:bg-orange-300 px-4 hover:shadow-md hover:transition-all"
                    variants={gentleHover}
                    whileHover="hover"
                    whileTap={buttonPress.tap}
                  >
                    <RiPagesLine className="h-7 w-7 pr-1" />
                    <p className="text-nowrap text-sm">View resume</p>
                  </motion.button>
                </Link>
              </div>
            </StaggerItem>
          </div>
        </StaggerItem>
      </StaggerContainer>
      
      <div className="flex justify-center sm:w-full lg:w-1/2">
        <motion.div
          className="flex justify-center items-center h-80 w-80 lg:h-[320px] lg:w-[320px] xl:h-[430px] xl:w-[430px] bg-lightText dark:bg-orange-500 rounded-full z-10"
          variants={slideInFromRight}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center items-center sm:w-72 sm:h-72 lg:h-[290px] lg:w-[290px] xl:h-[400px] xl:w-[400px] bg-lightBtn dark:bg-darkText rounded-full pt-[53px]">
            <Image
              src={assets.myImage}
              alt="My Image"
              width={388}
              height={400}
              className="sm:w-[268px] lg:w-[270px] -z-1 xl:w-[388px] rounded-b-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

