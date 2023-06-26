import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="mt-28 flex justify-between">
        <div className="mt-6 mx-4">
          <h1 className="font-sans text-4xl text-sky-700">
            If You Are A Fan Of Exploring Filmig Site <br />
            Then This Website Is For You
          </h1>
          <p className="pt-8 text-xl text-amber-600 font-mono">
            Hey I'm Noor A.Ridha and I built SetScout to helps tourists to
            dicover
            <br />
            thier favorite Turkish Movies and Tv shows filming sites in Turkey
          </p>
          {/* <span> </span>{" "}
          <p>
            and I built this app to enable  discover Turkey through
            their tv shows
          </p> */}

          <div className="flex items-start justify-center  max-w-[330px] mt-44 ">
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

        <div className="mx-4">
          <img
            className="rounded-lg"
            src="https://www.digitalphotomentor.com/photography/2020/02/tripod-landscape-photography-01-600x450.jpg"
            alt="pic"
          ></img>
        </div>
      </div>
    </>
  );
}
