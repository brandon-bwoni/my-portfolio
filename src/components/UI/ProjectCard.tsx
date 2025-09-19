import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { MdScreenshotMonitor } from "react-icons/md";

type CardProps = {
  id: string;
  name: string;
  image: StaticImageData;
  description: string;
  github: string;
  demo: string;
};

export const ProjectCard = ({
  id,
  name,
  image,
  description,
  github,
  demo,
}: CardProps) => {
  return (
      <Link href={`/project/${id}`}>
        <div className="h-[420px] w-[300px] rounded-lg bg-lightBtn dark:bg-orange-500 hover:transition-all hover:shadow-md hover:shadow-darkBg/30 dark:hover:shadow-darkText/25">
            <Image
              src={image}
              width={100}
              height={100}
              alt={name}
              className="h-[50%] w-full  rounded-t-lg"
            />
          <div className="text-center p-4 rounded-t-md">
            <h1 className="dark:text-darkBg text-lightText font-bold text-xl leading-5 ">
              {name}
            </h1>
            <p className="text-sm font-medium leading-5 text-lightText dark:text-darkText pt-1">
              {description}
            </p>
          </div>
          <div className="flex flex-row justify-center gap-6 ">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="flex justify-center items-center w-[100px] h-10 border  sm:text-nowrap border-lightText hover:bg-lightText/20 hover:text-lightText dark:border-darkText font-medium rounded-xl text-sm text-lightText  dark:hover:bg-darkText/20 dark:hover:text-darkBg   hover:border-transparent dark:text-darkText gap-1  hover:shadow-darkBg/30">
                <FaGithub className="h-5 w-5 " />
                <span>Github</span>
              </button>
            </a>
            <Link href="/demo">
              <button className="w-[100px] h-10 sm:text-nowrap font-medium rounded-xl text-sm bg-lightText text-lightBtn hover:bg-blue-800 hover:text-white/90 hover:text-white dark:text-darkText dark:bg-darkBg dark:hover:bg-lightText dark:hover:text-white hover:shadow-md hover:transition-all ">
                <div className="flex justify-center gap-2">
                  <MdScreenshotMonitor className="h-5 w-5 " />
                  <p>Demo</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </Link>
  );
};
