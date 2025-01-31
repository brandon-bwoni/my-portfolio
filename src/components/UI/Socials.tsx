"use client";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";

function Socials() {
  return (
    <div className="flex flex-row gap-6">
      <div className=" text-white ">
        <a
          href="https://github.com/brandon-bwoni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="dark:bg-orange-500 light:bg-slate-800 bg-lightText text-lightBtn dark:text-lightBg  hover:text-white dark:hover:bg-orange-300 dark:hover:text-darkBg flex rounded-full w-7 h-7 justify-center items-center hover:shadow-xl hover:transition-all dark:hover:shadow-lightBg/10 hover:shadow-darkBg/30">
            <LuGithub className="w-4 h-4 rounded-full" />
          </div>
        </a>
      </div>
      <div className=" text-white">
        <a
          href="https://www.linkedin.com/in/brandon-takura-bwoni-249a341b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="dark:bg-orange-500 light:bg-slate-800 bg-lightText text-lightBtn dark:text-lightBg hover:text-white dark:hover:bg-orange-300 dark:hover:text-darkBg flex rounded-full w-7 h-7 justify-center items-center hover:shadow-xl hover:transition-all dark:hover:shadow-lightBg/10 hover:shadow-darkBg/30">
            <TiSocialLinkedin className="w-5 h-5 rounded-full " />
          </div>
        </a>
      </div>
      <div className=" text-white">
        <a
          href="https://x.com/takura_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="dark:bg-orange-500 light:bg-slate-800 bg-lightText text-lightBtn dark:text-lightBg  hover:text-white dark:hover:bg-orange-400 dark:hover:text-darkBg flex rounded-full w-7 h-7 justify-center items-center hover:shadow-xl hover:transition-all dark:hover:shadow-lightBg/10 hover:shadow-darkBg/30">
            <FaXTwitter className="w-4 h-4 rounded-full" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Socials;
