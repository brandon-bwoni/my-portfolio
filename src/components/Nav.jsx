import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import logo from '../assets/logo.png';
import { PrimaryButton } from "./UI";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const content = <>
    <div className="xl:hidden block absolute top-16 sm:w-full md:w-3/5 left-0 right-0 z-50 bg-black transition">
      <ul className="text-center text-md px-12 pb-16">
        <a to="/">
          <li onClick={closeMobileMenu} className="my-3 hover:bg-green-600 hover:bg-opacity-50 py-3 border-b border-green-100 hover:rounded active:text-green-600">Home</li>
        </a>
        <a
          to="/products">
          <li onClick={closeMobileMenu} className="my-3 hover:bg-green-600 hover:bg-opacity-50 py-3 border-b border-green-100 hover:rounded">Projects</li>
        </a>
        <a to="/about">
          <li onClick={closeMobileMenu} className="my-3 hover:bg-green-600 hover:bg-opacity-50 py-3 border-b border-green-100 hover:rounded">About</li>
        </a>
        <a to="/contacts">
          <li onClick={closeMobileMenu} className="my-3 hover:bg-green-600 hover:bg-opacity-50 py-3 border-b border-green-100 hover:rounded">Contact</li>
        </a>
      </ul>
    </div>
  </>;

  return (
    <nav className="bg-orange-500 pt-2">
      <div className="h-[64px] flex justify-between z-50 text-white lg:py-5 w-5/6 py-4 flex-1 bg-opacity-90 mx-auto">
        <div className="flex items-center flex-1 sm:ml-1 xl:ml-4 ">
          <a to='/'>
            <span className="hover:cursor-pointer">
              <img src={logo} alt="Logo" className='xl:w-[80px] sm:h-8 sm:w-16' />
            </span>
          </a>
        </div>
        <div className="xl:flex xl:flex-1 items-center justify-center font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-16 mr-16 text-sm">
              <a to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : ""}
              >
                <li className="hover:text-orange-600 transition border-bgGreen hover:border-orange-600 cursor-pointer">Home</li>
              </a>
              <a
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : ""}
              >
                <li className="hover:text-orange-600 transition border-bgGreen hover:border-orange-600 cursor-pointer">Projects</li>
              </a>
              <a
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : ""}
              >
                <li className="hover:text-orange-600 transition border-bgGreen hover:border-orange-600 cursor-pointer">About</li>
              </a>
              <a
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : ""}
              >
                <li className="hover:text-orange-600 transition border-bgGreen hover:border-orange-600 cursor-pointer">Contact</li>
              </a>
            </ul>
          </div>
          <div className="mr-8">
            <PrimaryButton name="Resume" />
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className="flex xl:hidden transition mt-2" onClick={handleClick}>
          {click ? <FaTimes className="w-6 h-6" /> : <CiMenuFries className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
}

export default Nav;