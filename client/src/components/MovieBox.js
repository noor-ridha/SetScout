import React from "react";

const movieBox = ({ name, cast, picture, duration, language }) => {
  return (
    <div className="mt-28">
      <div className="bg-slate-400 rounded-lg">
        <img
          className="w-full h-32 sm:h-48 object-cover rounded-lg"
          src={picture}
        ></img>
        <span className="font-bold">{name}</span>
        <p>Cast : {cast}</p>
        <p>{duration}</p>
        <p>{language}</p>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
};

export default movieBox;
