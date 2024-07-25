import { motion } from 'framer-motion';



const ServiceCard = ({ id, service, description, icon: Icon }) => {
  return (
    <motion.div className='flex flex-col justify-center items-center gap-3 w-56 h-56 bg-slate-800 rounded-xl text-center hover:cursor-pointer'
      whileHover={{ filter: 'drop-shadow(0 0 1.4rem rgb(255, 219, 187, 0.50)', transition: { duration: 0.5 }, scale: 1.01 }}

    >
      <div className='bg-orange-300 p-1 rounded-full'>
        <div className='bg-white p-2 rounded-full'>
          <Icon className="h-8 w-8" />
        </div>
      </div>
      <div className='flex flex-col gap-3 text-white px-3'>
        <h1 className='font-semibold text-lg leading-5 '>
          {service}
        </h1>
        <p className='text-sm leading-4'>{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;