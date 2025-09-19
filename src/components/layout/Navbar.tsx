"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Icons
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import {
  MdOutlineContactMail,
  MdOutlineWorkOutline,
  MdPersonOutline,
} from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

import logo from "../../../public/logo.svg";
import ThemeSwitch from "../theme/ThemeSwitch";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const pathname = usePathname();

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  // const active =  className={({ isActive }) =>
  //   isActive ? "text-slate-800 font-semibold hover:border-b-2 hover:border-orange-500 text-lightText dark:text-darkText dark:hover:text-orange-500 font-semibold hover:text-lightBtn border-b-2 border-slate-800" : ""}

  const active =
    "group dark:text-orange-500 text-lightBtn transition-all duration-300 ease-in-out active:text-lightBtn dark:active:text-orange-500";

  const content = (
    <>
      {/* Mobile menu */}
      <div className="flex xl:hidden fixed origin-top top-16 w-full  -right-2 z-50 dark:bg-navBg bg-footerBg transition ">
        <ul className="w-full text-center text-md px-12 pb-4 dark:text-darkText">
          <Link href="/">
            <div onClick={closeMobileMenu}>
              <li className="my-3 hover:bg-opacity-50 py-3 border-b border-lightText dark:border-darkText  hover:rounded text-lightText dark:text-darkText">
                <span
                  className={`flex flex-row items-center justify-center gap-2 ${
                    pathname === "/" ? "dark:text-orange-500 text-lightBtn" : ""
                  }`}
                >
                  <IoHomeOutline className="w-4 h-4" />
                  <p className="text-lg">Home</p>
                </span>
              </li>
            </div>
          </Link>
          <Link href="/projects">
            <li
              onClick={closeMobileMenu}
              className="my-3 hover:bg-opacity-50 py-3 border-b border-lightText dark:border-darkText  hover:rounded "
            >
              <span
                className={`flex flex-row items-center justify-center gap-2 ml-4 text-lightText dark:text-darkText ${
                  pathname === "/projects"
                    ? "dark:text-orange-500 text-lightBtn"
                    : ""
                }`}
              >
                <MdOutlineWorkOutline className="w-4 h-4" />
                <p className="text-lg">Projects</p>
              </span>
            </li>
          </Link>
          <Link href="/about">
            <li
              onClick={closeMobileMenu}
              className="my-3 hover:bg-opacity-50 py-3 border-b border-lightText dark:border-darkText  hover:rounded"
            >
              <span
                className={`flex flex-row items-center justify-center gap-2 text-lightText dark:text-darkText ${
                  pathname === "/about"
                    ? "dark:text-orange-500 text-lightBtn"
                    : ""
                }`}
              >
                <MdPersonOutline className="w-5 h-5" />
                <p className="text-lg">About</p>
              </span>
            </li>
          </Link>
          <Link href="/contact">
            <li
              onClick={closeMobileMenu}
              className="my-3 hover:bg-opacity-50 py-3 border-b border-lightText dark:border-darkText hover:rounded"
            >
              <span
                className={`flex flex-row items-center justify-center gap-2 text-lightText dark:text-darkText ml-2 ${
                  pathname === "/contact"
                    ? "dark:text-orange-500 text-lightBtn"
                    : ""
                }`}
              >
                <MdOutlineContactMail className="w-4 h-4" />
                <p className="text-lg">Contact</p>
              </span>
            </li>
          </Link>
          <Link href="/resume">
            <li
              onClick={closeMobileMenu}
              className="my-3 hover:bg-opacity-50 py-3 border-b border-lightText dark:border-darkText hover:rounded"
            >
              <span
                className={`flex flex-row items-center justify-center gap-2 text-lightText dark:text-darkText 
                  ${
                    pathname === "/resume"
                      ? "dark:text-orange-500 text-lightBtn"
                      : ""
                  }`}
              >
                <RiPagesLine className="w-5 h-5" />
                <p className="text-lg">Resume</p>
              </span>
            </li>
          </Link>
          <Link href="/blog">
            <li
              onClick={closeMobileMenu}
              className="my-3 hover:bg-opacity-50 py-3 border-b border-lightText dark:border-darkText hover:rounded"
            >
              <span
                className={`flex flex-row items-center justify-center gap-2 text-lightText dark:text-darkText ${
                  pathname === "/blog"
                    ? "dark:text-orange-500 text-lightBtn"
                    : ""
                }`}
              >
                <TfiWrite className="w-5 h-5" />
                <p className="text-lg">My Blog</p>
              </span>
            </li>
          </Link>
          <li
            onClick={closeMobileMenu}
            className="my-3 hover:bg-opacity-50 py-3 "
          >
            <span className="flex flex-row items-center justify-center gap-2 text-lightText dark:text-darkText">
              <ThemeSwitch />
            </span>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    // Main Navigation
    <nav className="w-full bg-footerBg bg-opacity-20 dark:bg-navBg dark:bg-opacity-20 backdrop-blur-md fixed top-0 start-0 z-50 mr-2">
      <div className="h-[68px] flex  dark:text-darkText w-full sm:px-2 md:px-6 xl:px-12 flex-1 mx-auto">
        <div className="flex items-center flex-1 ">
          <Link href="/">
            <span className="hover:cursor-pointer">
              <Image
                src={logo}
                alt="Logo"
                className="xl:w-[40px] sm:h-8 sm:w-16 opacity-80"
              />
            </span>
          </Link>
        </div>
        <div className="xl:flex xl:flex-1 items-center justify-center font-normal hidden">
          <div className="flex-10">
            <ul className=" flex gap-10 text-sm font-medium ">
              <Link href="/" className="group">
                <li
                  className={`hover:border-orange-500 text-lightText dark:text-darkText dark:hover:text-orange-500 font-medium hover:text-lightBtn relative after:bg-lightBtn after:dark:bg-orange-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    pathname === "/"
                      ? "dark:text-orange-500 text-lightBtn "
                      : ""
                  }`}
                >
                  <span className="flex flex-row justify-center items-center gap-1 pb-1">
                    <IoHomeOutline className="w-4 h-4" />
                    Home
                  </span>
                </li>
              </Link>
              <Link href="/projects" className="group">
                <li
                  className={`hover:border-orange-500 text-lightText dark:text-darkText dark:hover:text-orange-500 font-medium hover:text-lightBtn relative after:bg-lightBtn after:dark:bg-orange-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    pathname === "/projects"
                      ? "dark:text-orange-500 text-lightBtn"
                      : ""
                  }`}
                >
                  <span className="flex flex-row justify-center items-center gap-1 pb-1">
                    <MdOutlineWorkOutline className="w-5 h-5" />
                    Projects
                  </span>
                </li>
              </Link>
              <Link href="/about" className="group">
                <li
                  className={` hover:border-orange-500 text-lightText dark:text-darkText dark:hover:text-orange-500 font-medium hover:text-lightBtn relative after:bg-lightBtn after:dark:bg-orange-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    pathname === "/about"
                      ? "dark:text-orange-500 text-lightBtn "
                      : ""
                  }`}
                >
                  <span className="flex flex-row justify-center items-center gap-1 pb-1">
                    <MdPersonOutline className="w-5 h-5" />
                    About
                  </span>
                </li>
              </Link>
              <Link href="/contact" className="group">
                <li
                  className={`hover:border-orange-500 text-lightText dark:text-darkText dark:hover:text-orange-500 font-medium hover:text-lightBtn relative after:bg-lightBtn after:dark:bg-orange-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    pathname === "/contact"
                      ? "dark:text-orange-500 text-lightBtn "
                      : ""
                  }`}
                >
                  <span className="flex flex-row justify-center items-center gap-1 pb-1">
                    <MdOutlineContactMail className="w-4 h-4" />
                    Contact
                  </span>
                </li>
              </Link>
              <Link href="/resume" className="group">
                <li
                  className={` hover:border-orange-500 text-lightText dark:text-darkText dark:hover:text-orange-500 font-medium hover:text-lightBtn relative after:bg-lightBtn after:dark:bg-orange-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    pathname === "/resume"
                      ? "dark:text-orange-500 text-lightBtn"
                      : ""
                  }`}
                >
                  <span className="flex flex-row justify-center items-center gap-1 pb-1">
                    <RiPagesLine className="w-4 h-4" />
                    Resume
                  </span>
                </li>
              </Link>
              <Link href="/blog" className="group">
                <li
                  className={`hover:border-orange-500 text-lightText dark:text-darkText dark:hover:text-orange-500 font-medium hover:text-lightBtn relative after:bg-lightBtn after:text-lightBtn after:dark:bg-orange-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    pathname === "/blog"
                      ? "dark:text-orange-500 text-lightBtn "
                      : ""
                  }`}
                >
                  <span className="flex flex-row justify-center items-center gap-1 pb-1">
                    <TfiWrite className="w-4 h-4" />
                    Blog
                  </span>
                </li>
              </Link>
              <li className="hover:cursor-pointer">
                <ThemeSwitch />
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full ">{click && content}</div>
        <button
          className="flex xl:hidden transition mt-6"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
}

