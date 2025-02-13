import React from "react";
import Image from "next/image";
import image from "@/assets/intro.png";

const CirclesDesign = () => {
  return (
    <div className="w-[50%] lg:flex items-center justify-center h-screen mr-16 relative hidden ">
      {/* sun circle */}
      <div className=" absolute bg-blue-900 dark:bg-darkBg w-32 h-32 rounded-full -right-16 top-0 -z-8 shadow-3xl sun-circle opacity-80"></div>
      {/* dark-blue */}
      <div
        className="absolute xl:-right-4 lg:right-0 bottom-16 blue-circle xl:h-24 xl:w-24 lg:h-16 lg:w-16 rounded-full opacity-30
      "
      ></div>

      <div className="relative bottom-2">
        <Image
          src={image}
          alt="My Image"
          className="lg:h-[300px] lg:w-[250px] xl:h-[350px] xl:w-[380px] pt-5 rounded-b-full opacity-100 absolute z-100 bottom-[1px]"
        />
        {/* large-cicle */}
        <div className="items-center  stage shadow flex justify-center large-circle dark:bg-orange-500/90 xl:h-80 xl:w-80  lg:w-72 lg:h-72 rounded-full z-100 pb-2 xl:pb-6 opacity-30"></div>
      </div>
      {/* small-circle */}
      <div className="w-16 h-16 rounded-full absolute -left-12 top-48 -z-8 shadow-sm small-circle opacity-30"></div>

      {/* lower blue */}
      <div className=" xl:h-32 xl:w-32 lg:w-24 lg:h-24  rounded-full absolute xl:-bottom-12 lg:-bottom-4 -left-4 shadow-lg -z-5 shadow-3xl lower-blue opacity-20"></div>
      <div className="bg-orange-300 xl:h-16 xl:w-16 lg:w-14 lg:h-14 rounded-full absolute xl:left-4 lg:-left-5 bottom-64 hidden"></div>
      <div className="bg-lightBtn dark:bg-darkText h-16 w-16 rounded-full absolute lg:left-40 xl:left-72 xl:bottom-8 lg:bottom-20 hidden"></div>
    </div>
  );
};

export default CirclesDesign;
