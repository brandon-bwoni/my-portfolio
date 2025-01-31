import Image from "next/image";
import Link from "next/link";

import work from "@/assets/work.png";

const page = () => {
  return (
    <div className="h-full pt-16 w-[80%] mx-auto pb-8">
      <div
        className="
    flex flex-col items-center text-center gap-2"
      >
        <h1 className="text:3xl lg:text-4xl font-semibold dark:text-orange-500 text-lightText">
          Oopsy! Pardon my dust
        </h1>
        <span>
          <p className="text-lg lg:text-xl dark:text-darkText text-lightBtn">
            This project is still being developed
          </p>
          <p className="text-xs lg:text-base  dark:text-darkText/80 text-gray-400">
            Please, come back for the full app after a few days. Thank you!
          </p>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <Image src={work} alt="Work in progess" className="opacity-80" />
        <button className="hover:underline px-3 py-2 rounded-xl dark:text-darkText text-lightBtn ">
          <Link href="/projects">Go back to projects</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
