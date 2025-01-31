import Socials from "@/components/UI/Socials";

const Footer = () => {
  return (
    <div className="dark:bg-darkBg bg-darkText">
      <div className="w-[90%] border-lightBtn border dark:border-darkText  mx-auto" />
      <div className="flex  backdrop-blur-md sm:flex-col lg:flex-row sm:justify-center lg:justify-between px-16 mt-3 lg:mt-0 sm:h-32 lg:h-12 items-center sm:pb-10 sm:pt-4 lg:pb-2 gap-4">
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

export default Footer;
