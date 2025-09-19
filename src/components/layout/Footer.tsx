import { Socials } from "../UI/Socials";

export const Footer = () => {
  return (
    <div className="bg-footerBg bg-opacity-20 dark:bg-navBg dark:bg-opacity-20 backdrop-blur-md pb-2">
      <div className="w-[90%] border-lightBtn border dark:border-darkText  mx-auto " />
      <div className="flex  backdrop-blur-md sm:flex-col lg:flex-row sm:justify-center lg:justify-between  px-4 lg:px-24 mt-3 lg:mt-0 sm:h-32 lg:h-12 items-center sm:pb-10 sm:pt-4 lg:pb-2 gap-4">
        <div>
          <p className="text-sm font-medium text-lightText dark:text-darkText text-center">
            Designed and developed by Brandon Bwoni
          </p>
        </div>

        <div>
          <p className="text-sm text-ligtText font-medium text-lightText dark:text-darkText">
            Copyright <span>&copy;</span>2025
          </p>
        </div>

        {/*Socials*/}
        <div className="flex flex-row justify-center gap-8">
          <Socials />
        </div>
      </div>
    </div>
  );
};

