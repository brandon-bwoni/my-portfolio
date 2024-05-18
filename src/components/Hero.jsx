import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


import { ScrollDown, Type } from "../animations/index";


function Hero() {
  return (
    <div className="h-full flex flex-col  gap-32 lg:pt-40">
      <div className='flex flex-col justify-center text-xl font-medium mx-auto text-center'>
        <h1 className='text-4xl'>HI,</h1>
        <h1 className='text-5xl '>I'M <b className="text-orange-600">
          BRANDON BWONI</b></h1>
        <h3>I'm a proud: </h3>
        <div className="text-2xl font-medium mt-2 mx-16">
          <Type />
        </div>

        {/* Socials */}
        <div className="flex flex-row justify-center gap-8 pt-8">
          <p className=" text-slate-700"><a href=""><FaLinkedin className="w-6 h-6 hover:text-orange-600 hover:-translate-y-1" /></a></p>
          <p className=" text-slate-700"><a href=""><FaGithub className="w-6 h-6 hover:text-orange-600 " /></a></p>
          <p className=" text-slate-700"><a href=""><FaSquareXTwitter className="w-6 h-6" /></a></p>
        </div>

        <ScrollDown />
        <p className="mt-2 italic text-sm">Scroll Down</p>
      </div>
    </div>
  );
}

export default Hero;

{/* <div className='flex gap-4 mt-4'>
          <SecondaryButton name='Hire Me' />
          <PrimaryButton name='My Work' />
        </div>
        <Socials /> */}

