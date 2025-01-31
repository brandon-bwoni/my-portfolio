import React from "react";
import Image from "next/image";
import image from "@/assets/intro.png";

const CirclesDesign = () => {
  return (
    <div className="w-[50%] lg:flex items-center justify-center h-screen mr-16 relative hidden ">
      <div className="absolute xl:-right-4 lg:right-0 xl:top-16 lg:top-24 bg-lightBtn dark:bg-orange-400 xl:h-24 xl:w-24 lg:h-16 lg:w-16 rounded-full"></div>
      <div className="absolute xl:right-48 lg:right-32 xl:top-1 lg:top-14 bg-lightText dark:bg-lightBtn xl:h-20 xl:w-20 lg:h-14 lg:w-14 rounded-full"></div>
      <div className="flex justify-center items-center bg-lightText dark:bg-orange-500/90 xl:h-96 xl:w-96  lg:w-72 lg:h-72 rounded-full relative z-100 pb-2 xl:pb-6">
        <Image
          src={image}
          alt="My Image"
          className="lg:h-[300px] lg:w-[250px] xl:h-[410px] xl:w-[380px] pt-5 rounded-b-full"
        />
        <div className="bg-darkText dark:bg-orange-500 xl:h-40 xl:w-40 lg:w-32 lg:h-32 rounded-full absolute -left-14 -top-12 -z-8 shadow-sm"></div>
        <div className=" absolute bg-blue-900 dark:bg-darkBg xl:h-56 xl:w-56 lg:w-48 lg:h-48 rounded-full -right-32 xl:-bottom-20 lg:-bottom-16 -z-8 shadow-3xl"></div>
        <div className="bg-orange-400 dark:bg-lightText xl:h-32 xl:w-32 lg:w-24 lg:h-24  rounded-full absolute xl:-bottom-12 lg:-bottom-4 -left-4 shadow-lg -z-5 shadow-3xl"></div>
      </div>
      <div className="bg-orange-300 xl:h-16 xl:w-16 lg:w-14 lg:h-14 rounded-full absolute xl:left-4 lg:-left-5 bottom-64"></div>
      <div className="bg-lightBtn dark:bg-darkText h-16 w-16 rounded-full absolute lg:left-40 xl:left-72 xl:bottom-8 lg:bottom-20"></div>
    </div>
  );
};

export default CirclesDesign;
