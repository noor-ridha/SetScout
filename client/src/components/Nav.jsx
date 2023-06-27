import React, { useState } from "react";
import { Link } from "react-router-dom";
import Set from "../imges/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-orange-300  z-[100] flex justify-between">
      <div className="flex items-center">
        <img
          src={Set}
          style={{ height: "180px", width: "180px" }}
          alt="pic"
        ></img>
      </div>
      <ul className="w-full h-full px-2 text-lg hidden md:flex justify-end items-center ">
        <li className="px-4 text-cyan-800 font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 text-cyan-800 font-semibold">
          {" "}
          <Link to="/movies">Movies</Link>
        </li>
        <li className="px-4 text-cyan-800 font-semibold">
          <Link to="/tv">Tv Shows</Link>
        </li>
        <li className="px-4 text-cyan-800 font-semibold">
          <Link to="/about">About</Link>
        </li>
      </ul>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="md:hidden">
        <AiOutlineMenu size={25} />
      </div>

      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-orange-100 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between ">
            <Link href="/">
              <img
                src={Set}
                width="160"
                height="160"
                alt="/"
                className="mt-10 "
              ></img>
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4"></div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase">
            <li className="px-4  text-cyan-800 font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 pt-6 text-cyan-800 font-semibold">
              {" "}
              <Link to="/movies">Movies</Link>
            </li>
            <li className="px-4 pt-6 text-cyan-800 font-semibold">
              <Link to="/tv">Tv Shows</Link>
            </li>
            <li className="px-4 pt-6 text-cyan-800 font-semibold">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
