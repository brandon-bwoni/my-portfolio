import { MdDeveloperBoard, MdOutlineDeveloperMode } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { SiMaterialdesignicons } from "react-icons/si";
import { LiaInfinitySolid } from "react-icons/lia";
import { SiAwsorganizations } from "react-icons/si";
import { TbPresentationAnalytics } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

function Services() {
  return (
    <div className="h-full ml-2 mb-8 xl:px-16 ">
      <div className="flex justify-center pt-2">
        <span className="font-semibold dark:text-darkText text-lightBtn  text-2xl">
          My{" "}
          <b className="text-lightText dark:text-orange-500 font-semibold">
            {" "}
            Services
          </b>
        </span>
      </div>
      <div className="h-full sm:overflow-x-auto sm:grid sm:grid-flow-col lg:overflow-x-hidden lg:flex no-scrollbar flex-wrap gap-4 lg:gap-8 mb-8 px-2 lg:pl-0 overflow-y-hidden lg:justify-center mt-6">
        {/* Services */}
        <div className="flex flex-col justify-center items-center gap-3 w-56 h-56 bg-light_btn bg-lightText dark:bg-orange-500 rounded-xl text-center hover:transition-all hover:shadow-xl  ">
          {/* First service */}
          <div className="dark:bg-darkBg bg-lightBtn p-1 rounded-full  ">
            <div className="dark:bg-darkText bg-lightText p-2 rounded-full">
              <MdDeveloperBoard className="w-8 h-8 text-lightBtn dark:text-darkBg" />
            </div>
          </div>
          <div className="flex flex-col gap-2  px-2">
            <h1 className="font-bold text-lg  dark:text-darkBg text-darkText leading-5 text-wrap">
              Frontend Development
            </h1>
            <p className="text-sm font-medium leading-4 dark:text-darkText text-lightBtn">
              Expert frontend development for responsive, interactive, and
              visually captivating designs.
            </p>
          </div>
        </div>
        {/* Second service */}
        <div className="flex flex-col justify-center items-center gap-3 w-56 h-56 bg-light_btn bg-lightText dark:bg-orange-500 rounded-xl text-center hover:cursor-pointer hover:transition-all hover:shadow-xl  ">
          <div className="dark:bg-darkBg bg-lightBtn p-1 rounded-full">
            <div className="dark:bg-darkText bg-lightText p-2 rounded-full">
              <VscServerProcess className="w-8 h-8 text-lightBtn dark:text-darkBg" />
            </div>
          </div>
          <div className="flex flex-col gap-2  px-2">
            <h1 className="font-bold text-lg  dark:text-darkBg text-darkText leading-5 text-wrap">
              Backend Development
            </h1>
            <p className="text-sm font-medium leading-4 dark:text-darkText text-lightBtn">
              Building secure, scalable, efficient systems that ensure smooth
              operation and enhance user experience.
            </p>
          </div>
        </div>
        {/* Third service */}
        <div className="flex flex-col justify-center items-center gap-3 w-56 h-56 bg-light_btn bg-lightText dark:bg-orange-500 rounded-xl text-center hover:cursor-pointer hover:transition-all hover:shadow-xl  ">
          <div className="dark:bg-darkBg bg-lightBtn p-1 rounded-full">
            <div className="dark:bg-darkText bg-lightText p-2 rounded-full">
              <MdOutlineDeveloperMode className="w-8 h-8 text-lightBtn dark:text-darkBg" />
            </div>
          </div>
          <div className="flex flex-col gap-2  px-2">
            <h1 className="font-bold text-lg  dark:text-darkBg text-darkText leading-5 text-wrap">
              Mobile Development
            </h1>
            <p className="text-sm font-medium leading-4 dark:text-darkText text-lightBtn">
              Creating intuitive, user-friendly, high-performing apps that
              engage users and drive your business forward.
            </p>
          </div>
        </div>
        {/* Fourth service */}
        <div className="flex flex-col justify-center items-center gap-3 w-56 h-56 bg-light_btn bg-lightText dark:bg-orange-500 rounded-xl text-center hover:cursor-pointer hover:transition-all hover:shadow-xl  ">
          <div className="dark:bg-darkBg bg-lightBtn p-1 rounded-full">
            <div className="dark:bg-darkText bg-lightText p-2 rounded-full">
              <SiMaterialdesignicons className="w-8 h-8 text-lightBtn dark:text-darkBg" />
            </div>
          </div>
          <div className="flex flex-col gap-2  px-2">
            <h1 className="font-bold text-lg  dark:text-darkBg text-darkText leading-5 text-wrap">
              UI/UX Design
            </h1>
            <p className="text-sm font-medium leading-4 dark:text-darkText text-lightBtn">
              Crafting intuitive, user-oriented, visually appealing interfaces
              that ensure a seamless and enjoyable user journey.
            </p>
          </div>
        </div>

        {/* Fifth service */}
        <div className="flex flex-col justify-center items-center gap-3 w-56 h-56 bg-light_btn bg-lightText dark:bg-orange-500 rounded-xl text-center hover:cursor-pointer hover:transition-all hover:shadow-xl  ">
          <div className="dark:bg-darkBg bg-lightBtn p-1 rounded-full">
            <div className="dark:bg-darkText bg-lightText p-2 rounded-full">
              <GiArtificialIntelligence className="w-8 h-8 text-lightBtn dark:text-darkBg" />
            </div>
          </div>
          <div className="flex flex-col gap-2  px-2">
            <h1 className="font-bold text-lg  dark:text-darkBg text-darkText leading-5 text-wrap">
              Artificial Intelligence
            </h1>
            <p className="text-sm font-medium leading-4 dark:text-darkText text-lightBtn">
              Skilled in leveraging LLMs and AI APIs to build intelligent
              solutions for diverse applications.
            </p>
          </div>
        </div>

        {/* Seven service */}
        {/* <div className="flex flex-col justify-center items-center gap-3 w-56 h-56 bg-light_btn bg-lightText dark:bg-orange-500 rounded-xl text-center hover:cursor-pointer hover:transition-all hover:shadow-xl  ">
          <div className="dark:bg-darkBg bg-lightBtn p-1 rounded-full">
            <div className="dark:bg-darkText bg-lightText p-2 rounded-full">
              <TbPresentationAnalytics className="w-8 h-8 text-lightBtn dark:text-darkBg" />
            </div>
          </div>
          <div className="flex flex-col gap-2  px-2">
            <h1 className="font-bold text-lg  dark:text-darkBg text-darkText leading-5 text-wrap">
              Data Analytics
            </h1>
            <p className="text-sm font-medium leading-4 dark:text-darkText text-lightBtn">
              Proficient in data analytics tools and processes, ensuring clean
              data preparation and driving impactful, data-driven decisions with
              precision.
            </p>
          </div>
        </div> */}

        {/* Sixth service */}
        <div className="flex flex-col justify-center items-center gap-3 w-56 h-56 bg-light_btn bg-lightText dark:bg-orange-500 rounded-xl text-center hover:cursor-pointer hover:transition-all hover:shadow-xl  ">
          <div className="dark:bg-darkBg bg-lightBtn p-1 rounded-full">
            <div className="dark:bg-darkText bg-lightText p-2 rounded-full">
              <LiaInfinitySolid className="w-8 h-8 text-lightBtn dark:text-darkBg" />
            </div>
          </div>
          <div className="flex flex-col gap-2  px-2">
            <h1 className="font-bold text-lg  dark:text-darkBg text-darkText leading-5 text-wrap">
              DevOps
            </h1>
            <p className="text-sm font-medium leading-4 dark:text-darkText text-lightBtn">
              Experienced in streamlining software delivery using cloud
              platforms, automation, and modern tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
