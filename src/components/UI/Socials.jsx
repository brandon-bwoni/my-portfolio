import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Socials() {
  return (
    <div className="flex flex-col text-slate-700 mt-2 sm:pb-8">
      <p className="text-sm font-bold mt-2 ml-10">Let's connect</p>
      <div className="flex flex-col">
        <div className="flex flex-row gap-8 sm:gap-3 items-center justify-start pb-2 mb-2 sm:mb-0 text-slate-700">

          <div className="border-r-2 border-slate-700 h-10">
            <div className="flex md:w-12 md:h-12 items-center justify-center rounded-full hover:-translate-y-1">
              <p className="pb-2 pr-5"><a href="+1-412-586-5955"><FaLinkedin className="lg:w-8 lg:h-8" /></a></p>
            </div>
          </div>

          <div className="border-r-2 border-slate-700 h-10">
            <div className="flex md:w-12 md:h-12 items-center justify-center rounded-full hover:-translate-y-1">
              <p className="pb-2 pr-3"><a href="medcbd412@gmail.com"><FaGithub className="lg:w-8 lg:h-8" /></a></p>
            </div>
          </div>

          <div>
            <div className="flex md:w-12 md:h-12 items-center justify-center rounded-full hover:-translate-y-1">
              <p className="p-2"><a href="https://www.facebook.com/profile.php?id=61556546594149"><FaSquareXTwitter className="lg:w-8 lg:h-8" /></a></p>
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