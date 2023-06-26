import React from "react";
import { Link } from "react-router-dom";
import Set from "../imges/Logo.png";
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-orange-300  z-[100] flex justify-between">
      <div className="flex items-center">
        <img
          src={Set}
          style={{ height: "180px", width: "180px" }}
          alt="pic"
        ></img>
      </div>
      <ul className="flex justify-end items-center w-full h-full px-2 text-lg">
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
    </div>
  );
};

export default Nav;
