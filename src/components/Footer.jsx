import { motion } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Socials } from "./UI";

const Footer = () => {
  return (
    <div className='flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between bg-orange-300 bg-opacity-20 px-16 sm:h-32 lg:h-12 items-center sm:pb-6 sm:pt-4 lg:pb-2 gap-4'>
      <div>
        <p className='text-sm font-medium text-white text-center'>Designed and developed by Brandon Bwoni</p>
      </div>

      <div>
        <p className='text-sm font-medium text-white'>Copyright <span>&copy;</span>2024</p>
      </div>

      {/*Socials*/}
      <div className="flex flex-row justify-center gap-8">
        <Socials />
      </div>


    </div>
  );
};

export default Footer;