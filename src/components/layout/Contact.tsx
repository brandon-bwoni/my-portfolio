import Image from "next/image";
import {ContactForm} from "../UI/ContactForm";

import { assets } from "../../constants/provider";

export const Contact = () => {
  return (
    <div className="mx-8 lg:mx-16 xl:mx-16 my-16 xl:my-32">
      <div className="flex justify-center pt-2">
        <span className="font-semibold dark:text-darkText text-lightBtn text-3xl lg:text-4xl mb-3">
          Contact{" "}
          <b className="text-lightText dark:text-orange-500 font-semibold">
            {" "}
            Me
          </b>
        </span>
      </div>
      <span className="text-center text-base dark:text-darkText lg:text-lg text-lightText">
        <p>
          If you want to <b>Hire Me</b>, want us to <b>Collaborate</b> on a
          project, or you just want to <b>Connect</b> with me. Feel free to get
          in touch.{" "}
        </p>
        <p>I will get back to you as soon as I can!</p>
      </span>
      <div className="flex xl:flex-row flex-col  w-full h-full ">
        <div className=" w-full lg:w-3/5 mt-4">
          <ContactForm />
        </div>
        <div className="hidden lg:flex w-2/5">
          <Image 
            src={assets.fullstack} 
            alt="fullstack engineer" 
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

