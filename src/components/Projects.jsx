import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaArrowRight } from 'react-icons/fa';

import { Card } from "./UI";
import { projects } from "../assets/provider";

const arrowVariants = {
  hidden: { x: 0 },
  visible: {
    x: [0, 5, -5, 5, 0],
    transition: {
      delay: 1,
      duration: 1,
      repeat: Infinity
    }
  }
};

const Projects = () => {
  return (
    <div className="lg:px-24 xl:px-32 mb-16">
      <div className='flex justify-center pt-2'>
        <h1 className='font-semibold text-white text-2xl mb-8'>Projects</h1>
      </div>
      <div className="h-full lg:grid grid-cols-3 gap-8 sm:flex sm:flex-col justify-center items-center place-items-center">
        {projects.slice(0, 3).map((project) => {
          return (<Card
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            github={project.github}
            demo={project.demo}
          />);
        })}
      </div>
      <div className='flex pt-6 sm:justify-center xl:mr-5 '>
        <Link to='/projects'>
          <motion.button className='flex px-3 py-2 rounded-3xl text-white items-center gap-2 font-medium mb-2 border  border-white hover:bg-white hover:text-slate-800'
            whileHover={
              {
                scale: 1.01,
              }
            }
          >
            View All Projects
            <motion.span
              variants={arrowVariants}
              initial='hidden'
              animate='visible'
            >
              <FaArrowRight className='w-6 h-6' />
            </motion.span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;