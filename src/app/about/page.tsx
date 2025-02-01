import Image from "next/image.js";
import { GiBulletBill } from "react-icons/gi";

import { logos } from "@/assets/provider.js";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full lg:px-24 pt-20  pb-16">
      <h1 className="text-center sm:text-2xl lg:text-3xl font-semibold dark:text-darkText text-lightBtn">
        About <span className="dark:text-orange-500 text-lightText">Me</span>
      </h1>
      <div className="w-full my-4">
        <div className="mx-auto px-8">
          <p className="text-center lg:text-lg leading-5 font-normal dark:text-darkText text-lightText">
            Hi there! My name is Brandon Takura Bwoni. From Harare, Zimbabwe.
            I&apos;m a fullstack software developer. I hold a Bachelor&apos;s
            degree in Computer Application from Jain University, India.{" "}
          </p>
        </div>
        <div className="mx-auto ">
          <p className="flex justify-center text-center pt-4 font-semibold sm:text-md lg:text-xl sm:text-wrap dark:text-darkText text-lightText">
            When I&apos;m not on my laptop working I enjoy:{" "}
          </p>
          <div className="flex justify-center">
            <ul className="flex flex-col px-16 lg:ml-8">
              <li className="flex items-center gap-1">
                <span className="dark:text-orange-500 text-lightBtn">
                  <GiBulletBill />
                </span>
                <p className="sm:text-md lg:text-lg dark:text-darkText text-lightText">
                  Spending time with my family and friends.
                </p>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-dark:text-orange-500 text-lightBtn dark:text-orange-500">
                  <GiBulletBill />
                </span>
                <p className="sm:text-md lg:text-lg dark:text-darkText text-lightText">
                  Traveling and sight viewing.
                </p>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-dark:text-orange-500 text-lightBtn dark:text-orange-500">
                  <GiBulletBill />
                </span>
                <p className="sm:text-md lg:text-lg text-nowrap dark:text-darkText text-lightText">
                  Reading books
                </p>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-dark:text-orange-500 text-lightBtn dark:text-orange-500 ">
                  <GiBulletBill />
                </span>
                <p className="sm:text-md lg:text-lg text-nowrap dark:text-darkText text-lightText">
                  Watching sports
                </p>
              </li>
            </ul>
          </div>
          <div className="w-80 flex flex-col mt-4 mx-auto dark:text-darkText text-lightText">
            <q className="text-center">
              <b className="italic text-lightText dark:text-orange-500">
                Learn
              </b>{" "}
              to take <b className="italic dark:text-orange-500">Action</b>{" "}
              inorder to <b className="italic dark:text-orange-500">Succeed</b>
            </q>
            <cite className="text-end dark:text-orange-500 text-darkBg font-semibold">
              &mdash; Brandon
            </cite>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 ">
        <h1 className="text-center sm:text-2xl lg:text-3xl font-semibold dark:text-darkText text-lightBtn">
          Professional
          <span className="dark:text-orange-500 text-lightText"> Skillset</span>
        </h1>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-2 lg:gap-4 place-items-center my-8 mb-8 ">
          {logos.map((logo, index) => {
            return (
              <div
                key={index}
                className="sm:h-24 sm:w-24 lg:w-32 lg:h-32 flex justify-center items-center border-2 rounded-full dark:border-darkText border-lightBtn"
              >
                <Image
                  src={logo.logo}
                  alt="service"
                  className="sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
