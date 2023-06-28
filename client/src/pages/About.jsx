import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="mt-28 flex justify-between">
        <div className="mt-6 mx-4">
          <h1 className="font-poppins text-4xl text-sky-700">
            If You Are A Fan Of Exploring Filmig Site{" "}
          </h1>
          {/* <br /> */}
          <p className="font-poppins text-xl text-slate-600">
            Then This Website Is For You
          </p>

          <p className="pt-8 text-xl text-slate-900 font-poppins">
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
