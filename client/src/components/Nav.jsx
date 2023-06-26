import React from "react";
import { Link } from "react-router-dom";
import set from "../imges/sett.png";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-orange-300  z-[100] flex justify-between">
      <img src={set} height={50} width={125} alt="pic"></img>
      <ul className="flex justify-end items-center w-full h-full px-2 text-lg">
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          {" "}
          <Link to="/movies">Movies</Link>
        </li>
        <li className="px-4">
          <Link to="/tv">Tv Shows</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
