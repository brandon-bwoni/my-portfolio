import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineContactMail, MdOutlineWorkOutline, MdPersonOutline } from "react-icons/md";


import logo from '../assets/logo.png';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const content = <>
    <div className="xl:hidden block absolute top-16 w-full pl-8 -right-10 z-50 bg-orange-300 transition">
      <ul className="text-center text-md px-12 pb-16 text-white">
        <NavLink to="/">
          <motion.div onClick={closeMobileMenu} className="bg-red-200"

          >
            <li className="my-3 hover:bg-opacity-50 py-3 border-b border-orange-100 hover:rounded active:text-slate-800">
              <div className="flex flex-row items-center ml-4 gap-8 ">
                <IoHomeOutline className="w-4 h-4" />
                <p >Home</p>
              </div>
            </li>
          </motion.div>
        </NavLink>
        <NavLink
          to="/projects">
          <li onClick={closeMobileMenu} className="my-3 hover:bg-opacity-50 py-3 border-b border-orange-100 hover:rounded">
            <div className="flex flex-row items-center ml-4 gap-8">
              <MdOutlineWorkOutline className="w-4 h-4" />
              <p >Projects</p>
            </div>
          </li>
        </NavLink>
        <NavLink to="/about">
          <li onClick={closeMobileMenu} className="my-3 hover:bg-opacity-50 py-3 border-b border-orange-100 hover:rounded">
            <div className="flex flex-row items-center ml-4 gap-8">
              <MdPersonOutline className="w-4 h-4" />
              <p >About</p>
            </div>
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li onClick={closeMobileMenu} className="my-3 hover:bg-opacity-50 py-3 border-b border-orange-100 hover:rounded">
            <div className="flex flex-row items-center ml-4 gap-8">
              <MdOutlineContactMail className="w-4 h-4" />
              <p >Contact</p>
            </div>
          </li>
        </NavLink>
        <NavLink to="/resume">
          <li onClick={closeMobileMenu} className="my-3 hover:bg-opacity-50 py-3 border-b border-orange-100 hover:rounded">
            <div className="flex flex-row items-center ml-4 gap-8">
              <RiPagesLine className="w-4 h-4" />
              <p >Resume</p>
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  </>;

  return (
    <nav className="w-full bg-orange-300 bg-opacity-20 backdrop-blur-md fixed top-0 start-0 z-50">
      <div className="h-[68px] flex  text-white w-full sm:px-8 lg:px-20 flex-1 mx-auto">
        <div className="flex items-center flex-1 ">
          <NavLink to='/'>
            <span className="hover:cursor-pointer">
              <img src={logo} alt="Logo" className='xl:w-[80px] sm:h-8 sm:w-16' />
            </span>
          </NavLink>
        </div>
        <div className="xl:flex xl:flex-1 items-center justify-center font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-sm font-medium ">
              <NavLink to="/"
                className={({ isActive }) =>
                  isActive ? "text-slate-800 font-semibold hover:border-b-2 hover:border-slate-800 border-b-2 border-slate-800" : ""}
              >
                <li className=" transition hover:border-slate-800 cursor-pointer">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <IoHomeOutline className="w-4 h-4" />
                    <p>Home</p>
                  </div>
                </li>
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-slate-800 font-semibold hover:border-b-2 hover:border-slate-800 border-b-2 border-slate-800" : ""}
              >
                <li className="hover:text-slate-800 transition hover:border-slate-800 cursor-pointer">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <MdOutlineWorkOutline className="w-4 h-4" />
                    <p>Projects</p>
                  </div>
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-slate-800 font-semibold hover:border-b-2 hover:border-slate-800 border-b-2 border-slate-800" : ""}
              >
                <li className="hover:text-slate-800 transition hover:border-slate-800 cursor-pointer">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <MdPersonOutline className="w-4 h-4" />
                    <p>About</p>
                  </div>
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-slate-800 font-semibold hover:border-b-2 hover:border-slate-800 border-b-2 border-slate-800" : ""}
              >
                <li className="hover:text-slate-800 transition hover:border-slate-800 cursor-pointer">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <MdOutlineContactMail className="w-4 h-4" />
                    <p>Contact</p>
                  </div>
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-slate-800 font-semibold hover:border-b-2 hover:border-slate-800 border-b-2 border-slate-800" : ""}
              >
                <li className="hover:text-slate-800 transition hover:border-slate-800 cursor-pointer">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <RiPagesLine className="w-4 h-4" />
                    <p>Resume</p>
                  </div>
                </li>
              </NavLink>
            </ul>
          </div>

        </div>
        <div>
          {click && content}
        </div>
        <button className="flex xl:hidden transition mt-6" onClick={handleClick}>
          {click ? <FaTimes className="w-4 h-4" /> : <CiMenuFries className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );
}

export default Nav;