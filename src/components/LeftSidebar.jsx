import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const LeftSidebar = () => {
  return (
    <div className="h-full sticky flex justify-center bg-orange-100 w-12 pr-8 items-end pb-24">
      <div className="flex flex-col gap-4  ">
        <p className=" text-slate-700"><a href=""><FaLinkedin className="w-4 h-4 hover:text-orange-600 hover:-translate-y-1" /></a></p>
        <p className=" text-slate-700"><a href=""><FaGithub className="w-4 h-4 hover:text-orange-600 " /></a></p>
        <p className=" text-slate-700"><a href=""><FaSquareXTwitter className="w-4 h-4 " /></a></p>
      </div>
    </div>
  );
};

export default LeftSidebar;