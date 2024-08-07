import { motion } from "framer-motion";

const downVariants = {
  hidden: { y: 0 },
  visible: {
    y: [0, 30, 20, 30, 0],
    transition: {
      delay: 1,
      duration: 1.5,
      repeat: Infinity
    }
  }
};

const ScrollDown = () => {
  return (
    <div className='flex flex-col w-10 h-16 border-slate-800 border-4 rounded-full '>
      <motion.div
        className='bg-slate-800 h-4 w-4 p-3 rounded-full ml-[4px] my-[2px]'
        variants={downVariants}
        initial='hidden'
        animate='visible'
      >
      </motion.div>
    </div>
  );
};

export default ScrollDown;