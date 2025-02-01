import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { MdScreenshotMonitor } from "react-icons/md";

type CardProps = {
  id: string;
  name: string;
  image?: StaticImageData;
  description: string;
  github: string;
  demo: string;
};

const ProjectCard = ({
  id,
  name,
  image,
  description,
  github,
  demo,
}: CardProps) => {
  return (
    <>
      <Link href={`/project/${id}`}>
        <div className="h-[400px] w-[300px] rounded-lg bg-lightBtn dark:bg-orange-500 hover:transition-all hover:shadow-xl hover:shadow-darkBg/30 dark:hover:shadow-darkText/25">
          {image && (
            <Image
              src={image}
              width={100}
              height={100}
              alt={name}
              className="h-[180px] w-full object-cover rounded-t-lg"
              layout="responsive"
            />
          )}
          <div className="text-center px-2 py-2">
            <h1 className="dark:text-darkBg text-lightText font-bold text-xl leading-5 pb-1 ">
              {name}
            </h1>
            <p className="text-sm font-medium leading-4 text-lightText dark:text-darkText ">
              {description}
            </p>
          </div>
          <div className="flex flex-row justify-center gap-4 pt-2">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="flex justify-center items-center w-[100px] h-10 border  sm:text-nowrap border-lightText hover:bg-lightText/20 hover:text-lightText dark:border-darkText font-medium rounded-xl text-sm text-lightText  dark:hover:bg-darkText/20 dark:hover:text-darkBg  hover:font-semibold hover:border-0 dark:text-darkText gap-1  hover:shadow-darkBg/30">
                <FaGithub className="h-5 w-5 " />
                <span>Github</span>
              </button>
            </a>
            <Link href="/demo">
              <button className="w-[100px] h-10 sm:text-nowrap font-medium rounded-xl text-sm bg-lightText text-lightBtn hover:bg-blue-800 hover:text-white/90 hover:text-white dark:text-darkText dark:bg-darkBg dark:hover:bg-lightText dark:hover:text-white hover:shadow-xl hover:transition-all ">
                <div className="flex justify-center gap-2">
                  <MdScreenshotMonitor className="h-5 w-5 " />
                  <p>Demo</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
