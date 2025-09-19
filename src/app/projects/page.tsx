"use client";

import {ProjectCard} from "../../components/UI/ProjectCard";
import { projects } from "@/constants/provider";
import { StaggerContainer, StaggerItem } from "../../animations/StaggerContainer";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/variants";

const Projects = () => {
  return (
    <div className="h-full flex flex-col gap-8 mx-2 pt-24 pb-16 px-2 lg:px-24">
      <motion.div 
        className="flex flex-col gap-1"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-center font-semibold text-3xl lg:text-4xl dark:text-darkText text-lightBtn">
          My
          <span className="dark:text-orange-500 text-lightText"> Projects</span>
        </h1>
        <p className="pt-2 mb-4 text-center text-lightText dark:text-darkText">
          Here is a least of projects I have recently been working on.
        </p>
      </motion.div>
      
      <StaggerContainer 
        className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-8"
        delay={0.3}
      >
        {projects.map((item, index) => {
          return (
            <StaggerItem key={index}>
              <ProjectCard
                id={item.id}
                image={item.image}
                description={item.description}
                name={item.name}
                github={item.github}
                demo={item.demo}
              />
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
};

export default Projects;
