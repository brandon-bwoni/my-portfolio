import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';
import { MdScreenshotMonitor } from "react-icons/md";

const Card = ({
  name,
  image,
  description,
  github,
  demo,
}) => {
  return (
    <div
      className='h-[350px] w-[270px] rounded-lg bg-orange-300'
    >
      <img src={image} alt={`${name}`} className='h-[180px] rounded-t-lg' />
      <div className='text-center px-2 pt-1'>
        <h1 className='text-white font-semibold text-2xl pb-1'>{name}</h1>
        <p className='text-sm font-medium text-white pb-1'>{description}</p>
      </div>
      <div className='flex flex-row justify-center gap-4 pt-2'>
        <Link to={github}>
          <motion.button
            className="flex justify-center items-center w-[100px] h-10 border  sm:text-nowrap border-white font-medium rounded-3xl text-sm hover:bg-white hover:text-slate-800 hover:border-0 text-white gap-2"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className='h-5 w-5 ' />
            <span>Github</span>
          </motion.button>
        </Link>
        <Link to={demo}>
          <motion.button
            className="w-[100px] h-10 sm:text-nowrap font-medium rounded-3xl text-sm bg-slate-800 text-white hover:bg-slate-600 hover:text-white"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div className='flex justify-center gap-2'>
              <MdScreenshotMonitor className='h-5 w-5 ' />
              <p>Demo</p>
            </div>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
