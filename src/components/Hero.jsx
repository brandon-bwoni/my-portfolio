import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


import { ScrollDown, Type } from "../animations/index";
import myImage from '../assets/my-image.png';
import Socials from "./UI/Socials";


function Hero() {
  return (
    <div className="sm:h-full lg:h-screen flex flex-row gap-12 sm:mb-12 " >
      <div className='w-1/2 flex flex-col  font-medium justify-center items-center sm:mt-16 lg:mt-32 mx-auto'>
        <div className="sm:text-center lg:text-start">
          <h1 className='sm:text-xl lg:text-3xl text-white'>Hello, I'M</h1>
          <h1 className='sm:text-2xl lg:text-4xl text-slate-800 font-bold text-nowrap'>
            BRANDON BWONI</h1>
        </div>
        <div className="sm:text-md lg:text-xl text-white font-semibold mt-4">
          <Type />
        </div>
        <div className="w-[240px] h-10 flex flex-row mt-8  rounded-3xl gap-4">
          <NavLink to='/contact'>
            <motion.button
              className="w-[110px] h-10 flex justify-center items-center text-white bg-slate-800 l text-[14px] rounded-3xl shadow hover:bg-slate-800 hover:text-white hover:font-semibold"
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              Let's talk!
            </motion.button>
          </NavLink>
          <NavLink to='/resume'
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : ""}
          >
            <motion.button
              className="flex justify-center items-center w-[100px] h-10 border sm:text-nowrap border-white font-normal rounded-3xl text-sm hover:border-0 hover:bg-slate-800 hover:text-bold text-white"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              My Work
            </motion.button>
          </NavLink>
        </div>

        {/* Socials */}
        <div className="font-normal flex flex-col mt-8 gap-2 justify-start">
          <p className="text-white ml-5">Let's connect</p>
          <Socials />
          <div className="ml-11 sm:mt-8 lg:mt-12">
            <ScrollDown />
          </div>
        </div>
      </div>

      {/*Image  */}
      <div className="sm:hidden lg:flex w-1/2 lg:ml-32 bg-orange-300 bg-opacity-60 " >
      </div>
      <img src={myImage} className="absolute w-[500px] right-40 pt-[60px] sm:hidden lg:flex" />

    </div>
  );
}
// <p className="mt-2 italic text-sm text-white">Scroll Down</p> 

export default Hero;

{/* <div className='flex gap-4 mt-4'>
          <SecondaryButton name='Hire Me' />
          <PrimaryButton name='My Work' />
        </div>
        <Socials /> */}

