import { motion } from "framer-motion";
import { FaXTwitter, } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";



function Socials() {
  return (
    <div className="flex flex-row gap-6">
      <motion.div className=" text-white"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="">
          <div className="bg-slate-800 flex rounded-full w-7 h-7 justify-center items-center">
            <LuGithub className="w-4 h-4 rounded-full" />
          </div>
        </a>
      </motion.div>
      <motion.div className=" text-white"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="">
          <div className="bg-slate-800 flex rounded-full w-7 h-7 justify-center items-center">
            <TiSocialLinkedin className="w-5 h-5 rounded-full " />
          </div>
        </a>
      </motion.div>
      <motion.div className=" text-white"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="">
          <div className="bg-slate-800 flex rounded-full w-7 h-7 justify-center items-center">
            <FaXTwitter className="w-4 h-4 rounded-full" />
          </div>
        </a>
      </motion.div>
    </div>

  );
}

export default Socials;
{/* <div className="flex md:w-12 md:h-12 items-center justify-center rounded-full  bg-green-600 hover:-translate-y-1">
      <p className="p-2"><a href="https://www.instagram.com/medcbd412?igsh=MXNvOGJ3cmxqaHp2NQ%3D%3D&utm_source=qr"><FaInstagram className="lg:w-10 lg:h-10 text-white" /></a></p>
    </div> */}