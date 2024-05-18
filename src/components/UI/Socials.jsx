import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Socials() {
  return (
    <div className="flex flex-col  mt-2 sm:pb-8">
      <p className="text-sm font-bold mt-2 ml-10 text-slate-700">Let's connect</p>
      <div className="flex flex-col">
        <div className="flex flex-row gap-8 sm:gap-3 items-center justify-start pb-2 mb-2 sm:mb-0 ">
          <div className="border-r-2 border-slate-700 h-10">
            <div className="flex md:w-12 md:h-12 items-center justify-center rounded-full  ">
              <p className="pb-2 pr-5 text-slate-700"><a href=""><FaLinkedin className="lg:w-8 lg:h-8 hover:text-orange-600 hover:-translate-y-1" /></a></p>
            </div>
          </div>

          <div className="border-r-2 border-slate-700 h-10">
            <div className="flex md:w-12 md:h-12 items-center justify-center rounded-full ">
              <p className="pb-2 pr-3 text-slate-700"><a href=""><FaGithub className="lg:w-8 lg:h-8 hover:text-orange-600 hover:-translate-y-1" /></a></p>
            </div>
          </div>

          <div>
            <div className="flex md:w-12 md:h-12 items-center justify-center rounded-full hover:text-orange-600">
              <p className="p-2 text-slate-700"><a href=""><FaSquareXTwitter className="lg:w-8 lg:h-8  hover:-translate-y-1" /></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
{/* <div className="flex md:w-12 md:h-12 items-center justify-center rounded-full  bg-green-600 hover:-translate-y-1">
      <p className="p-2"><a href="https://www.instagram.com/medcbd412?igsh=MXNvOGJ3cmxqaHp2NQ%3D%3D&utm_source=qr"><FaInstagram className="lg:w-10 lg:h-10 text-white" /></a></p>
    </div> */}