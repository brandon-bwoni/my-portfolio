"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdScreenshotMonitor } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { projects } from "@/constants/provider";
import { motion } from "framer-motion";
import Image from "next/image";

interface Params {
  id: string;
}

const page = ({ params }: { params: Params }) => {
  const { id } = params;
  const project = projects.find((project) => project.id === id);

  const buttonVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <div className="h-full px-16">
      {/* header part */}
      <div className="h-[40%] flex flex-col justify-center items-center  gap-5 pt-20 lg:pt-16 ">
        <div className="w-[90%] wrap bg-black/">
          <Image
            src={project?.banner || "/default-banner.jpg"}
            alt={project?.name || "Project banner"}
            className="w-full h-full lg:h-[360px] rounded-2xl"
          />
          <div className="wrap top-4">
            <Link href="/projects">
              <button className="absolute flex justify-center items-center left-6 lg:left-40 top-24 w-8 h-8 bg-lightBg dark:bg-darkBg/30 rounded-full">
                <p className="">
                  <FaArrowLeft className="h-5 w-5 dark:text-orange-500 text-lightText" />
                </p>
              </button>
            </Link>
            <div className="flex flex-col justify-center mx-auto text-center">
              {/* <h1 className=" text-xl lg:text-3xl font-bold dark:text-orange-500 text-lightText ">
                {project?.name}
              </h1> */}
              {/* <p className="text-normal text-lightBtn/90 dark:text-darkText">
                {project?.category}
              </p> */}

              <motion.div
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                className="flex p-6 bg-lightBg dark:bg-darkBg/80 shadow-md justify-center gap-6 rounded-xl"
              >
                <a
                  href={project?.github || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex justify-center items-center w-[100px] h-10 border  sm:text-nowrap border-lightText hover:bg-lightText/20 hover:text-lightText dark:border-darkText font-medium rounded-xl text-sm text-lightText  dark:hover:bg-darkText/20 dark:hover:text-darkText dark:hover:border-transparent hover:border-transparent dark:text-darkText gap-1  hover:shadow-darkBg/30">
                    <FaGithub className="h-5 w-5 " />
                    <span>Github</span>
                  </button>
                </a>
                <Link href="/demo">
                  <button className="w-[100px] h-10 sm:text-nowrap font-medium rounded-xl text-sm bg-lightText text-lightBtn hover:text-white dark:text-darkText dark:bg-darkBg dark:hover:bg-lightText dark:hover:text-white hover:shadow-md hover:transition-all ">
                    <div className="flex justify-center gap-2">
                      <MdScreenshotMonitor className="h-5 w-5 " />
                      <p>Demo</p>
                    </div>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Buttons */}
          </div>
        </div>
      </div>
      {/* Info part */}
      <div className="flex flex-col gap-2 justify-center mt-6 px-6 xl:px-24">
        <h1 className="text-2xl font-bold text-center">About Project </h1>
        <p className="text-sm text-center lg:text-lg leading-5">
          {project?.fullDescription}
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center mt-6 px-6 xl:px-24">
        <h1 className="text-2xl font-bold text-center">Features</h1>
        <div className="flex flex-col justify-center mx-auto text-sm lg:text-lg leading-5">
          {project?.features?.map((feature, index) => {
            return <li key={index}>{feature}</li>;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center mt-6 px-6 xl:px-24">
        <h1 className="text-2xl font-bold text-center">Technologies</h1>
        <div className="flex flex-col justify-center mx-auto text-sm lg:text-lg leading-5">
          {project?.technologies &&
            Object.entries(project.technologies).map(([key, value]) => (
              <li key={key}>
                <strong>{key}</strong>: {value}
              </li>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center mt-6 px-24">
        {/* <h1 className="text-xl font-bold text-center">Screenshots</h1> */}
        <span className="lg:text-lg leading-5"></span>
      </div>
    </div>
  );
};

export default page;
