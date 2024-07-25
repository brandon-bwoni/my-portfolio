import { motion } from 'framer-motion';

import { FaArrowRight } from 'react-icons/fa';

import { services } from '../assets/provider';
import ServiceCard from './UI/ServiceCard';

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

function Services() {
  return (
    <div className=' mb-16 ml-2 lg:mx-24 '>
      <div className='flex justify-center pt-2'>
        <h1 className='font-semibold text-white text-2xl'>Services</h1>
      </div>
      <div className='flex pt-6 sm:justify-center xl:mr-5 lg:hidden'>
        <motion.button className='flex px-3 py-2 rounded-3xl text-white items-center gap-2 font-medium mb-2 border hover:border-0 hover:text-white border-white'
          whileHover={
            {
              scale: 1.1,
            }
          }
        >
          View All Services
          <motion.span
            variants={arrowVariants}
            initial='hidden'
            animate='visible'
          >
            <FaArrowRight className='w-6 h-6' />
          </motion.span>
        </motion.button>
      </div>
      <div className='max-h-56 w-full grid grid-flow-col dgap-4 mt-6 place-items-center mx-2 overflow-y-hidden no-scrollbar'>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            {...service}
          />
        ))}
      </div>
    </div >
  );
}

export default Services;