import React from "react";
import set from "../imges/sett.png";

const Nav = () => {
  return (
    <div className="fixed bg-orange-300 w-full h-20 shadow-xl z-[100] flex justify-between">
      <img src={set} height={50} width={125}></img>
      <ul className="flex justify-end items-center w-full h-full px-2 text-lg">
        <li className="px-4">Home</li>
        <li className="px-4">Movies</li>
        <li className="px-4">Tv Shows</li>
        <li className="px-4">About Us</li>
      </ul>
    </div>
  );
};

export default Nav;
