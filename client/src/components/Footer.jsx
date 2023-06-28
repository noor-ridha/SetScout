import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-200 font-poppins w-full h-36">
      <div className="container mx-auto h-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 text-center md:text-start mb-5 md:mb-0 pl-0 md:pl-10">
          <h1 className="text-xl font-semibold">Contact</h1>
          <p className="text-black text-sm opacity-50 font-medium mb-1">
            Email: noorridha028@gmail.com
          </p>
          <a
            href="https://main--rad-gaufre-c1e595.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-black text-sm opacity-50 font-medium mb-1">
              Website: https://main--rad-gaufre-c1e595.netlify.app/
            </p>
          </a>
        </div>

        <div className="w-full md:w-1/2 flex items-end justify-center">
          <a
            href="https://www.linkedin.com/in/noor-a-8b646824b/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-8">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://github.com/noor-ridha"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4">
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
