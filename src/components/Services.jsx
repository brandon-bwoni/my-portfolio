import { motion } from 'framer-motion';

import service from '../assets/service.png';

function Services() {
  return (
    <div className='h-screen '>
      <div className='flex justify-center pt-2'>
        <h1 className='font-bold text-slate-700 text-xl border-b-4 border-orange-600'>Services</h1>
      </div>
      <div className='w-5/6 mx-auto flex flex-wrap bg-red-400'>

        <motion.div className='flex flex-col justify-center items-center gap-2 w-48 h-48 m-2 p-4 bg-orange-600 rounded-xl text-center'>
          <div className='bg-black p-1 rounded-full'>
            <div className='bg-red-200 p-2 rounded-full'>
              <img src={service} alt='service' className='h-10 w-10' />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-lg leading-4 '>
              Frontend Development
            </h1>
            <p className='text-sm font-medium leading-4'>This is a brief description about the service. Should there be any need to add more</p>
          </div>
        </motion.div>


      </div>
    </div>
  );
}

export default Services;