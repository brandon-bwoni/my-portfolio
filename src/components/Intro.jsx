import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiPagesLine } from "react-icons/ri";

import myImage from '../assets/my-image.png';

function About() {
  return (
    <div className='h-full flex sm:flex-col lg:flex-row lg:mx-24 sm:mb-8 lg:mb-16 '>
      <div className='flex justify-center sm:w-full lg:w-1/2 lg:mt-20 lg:mr-12'>
        <div className='flex justify-center items-center lg:h-[450px] lg:w-[450px] bg-orange-300 rounded-full'>
          <div className='flex justify-center items-center lg:h-[400px] lg:w-[400px] bg-white rounded-full pt-[41px]'>
            <img src={myImage} alt='My Image' className='sm:h-48 lg:h-[360px] rounded-b-full' />
          </div>
        </div>
      </div>
      <div className='mx-auto sm:mt-8 lg:mt-32 sm:text-center lg:text-start px-4'>
        <h1 className='font-semibold text-white text-2xl'>About Me</h1>
        <p className='text-white sm:text-md lg:text-xl mt-2 font-normal'>
          I’m keen about developing robust and scalable applications that are purposeful. I have worked with JavaScript for a while building software and exploring. I’m familiar with most of industry standard tools and concepts. I’m keen about developing robust and scalable applications that are purposeful. I have worked with JavaScript for a while building software and exploring.
        </p>
        <div className='flex sm:justify-center lg:justify-start mt-8 '>
          <NavLink to='/contact'>
            <motion.button
              className="w-[120px] h-10 flex justify-center items-center text-white bg-slate-800 font-normal text-[14px] rounded-3xl shadow hover:bg-slate-800 hover:text-white hover:font-semibold text-sm px-2"
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <span><RiPagesLine /></span>Download CV
            </motion.button>
          </NavLink>
        </div>
      </div>

    </div>
  );
}

export default About;
{/* <NavLink to='/resume'
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : ""}
            >
              <motion.button
                className="flex justify-center items-center w-[100px] h-10 border sm:text-nowrap border-white font-medium rounded-3xl text-sm hover:border-0 hover:bg-slate-800 hover:text-bold text-white mt-8"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <span><RiPagesLine className="h-6 w-4 mr41" /></span>Resume
              </motion.button>
            </NavLink> */}