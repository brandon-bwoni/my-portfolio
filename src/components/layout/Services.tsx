"use client";

import { MdDeveloperBoard, MdOutlineDeveloperMode } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { SiMaterialdesignicons } from "react-icons/si";
import { LiaInfinitySolid } from "react-icons/lia";
import { GiArtificialIntelligence } from "react-icons/gi";
import { StaggerContainer, StaggerItem } from "../../animations/StaggerContainer";
import { motion } from "framer-motion";
import { serviceHover } from "../../animations/variants";

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: MdDeveloperBoard,
      title: "Frontend Development",
      description: "Expert frontend development for responsive, interactive, and visually captivating designs."
    },
    {
      id: 2,
      icon: VscServerProcess,
      title: "Backend Development", 
      description: "Building secure, scalable, efficient systems that ensure smooth operation and enhance user experience."
    },
    {
      id: 3,
      icon: MdOutlineDeveloperMode,
      title: "Mobile Development",
      description: "Creating intuitive, user-friendly, high-performing apps that engage users and drive your business forward."
    },
    {
      id: 4,
      icon: SiMaterialdesignicons,
      title: "UI/UX Design",
      description: "Crafting intuitive, user-oriented, visually appealing interfaces that ensure a seamless and enjoyable user journey."
    },
    {
      id: 5,
      icon: GiArtificialIntelligence,
      title: "Artificial Intelligence",
      description: "Skilled in leveraging LLMs and AI APIs to build intelligent solutions for diverse applications."
    },
    {
      id: 6,
      icon: LiaInfinitySolid,
      title: "DevOps",
      description: "Experienced in streamlining software delivery using cloud platforms, automation, and modern tools."
    }
  ];

  return (
    <div className="h-full sm:px-2 lg:px-24 my-16 xl:my-32">
      <motion.div 
        className="flex justify-center pt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="font-semibold dark:text-darkText text-lightBtn text-3xl lg:text-4xl mb-6">
          My{" "}
          <b className="text-lightText dark:text-orange-500 font-semibold">
            {" "}
            Services
          </b>
        </span>
      </motion.div>
      
      <StaggerContainer 
        className="h-full sm:overflow-x-auto sm:grid sm:grid-flow-col lg:overflow-x-hidden lg:flex no-scrollbar flex-wrap gap-4 lg:gap-8 mb-8  lg:pl-0 overflow-y-hidden lg:justify-center mt-6"
        delay={0.2}
      >
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <StaggerItem key={service.id}>
              <motion.div 
                className="flex flex-col justify-center items-center gap-3 w-56 h-56 bg-light_btn bg-lightText dark:bg-orange-500 rounded-xl text-center hover:cursor-pointer"
                variants={serviceHover}
                whileHover="hover"
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="dark:bg-darkBg bg-lightBtn p-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="dark:bg-darkText bg-lightText p-2 rounded-full">
                    <IconComponent className="w-8 h-8 text-lightBtn dark:text-darkBg" />
                  </div>
                </motion.div>
                <div className="flex flex-col gap-2 px-2">
                  <h1 className="font-bold text-lg dark:text-darkBg text-darkText leading-5 text-wrap">
                    {service.title}
                  </h1>
                  <p className="text-sm font-medium leading-4 dark:text-darkText text-lightBtn">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}

