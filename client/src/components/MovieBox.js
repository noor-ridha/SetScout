import React from "react";
import LazyLoad from "react-lazyload";

const movieBox = ({ name, cast, picture, duration, language }) => {
  return (
    <div className="mt-28">
      <div className="bg-slate-400 rounded-lg">
        <LazyLoad offset={100}>
          <img
            alt="/"
            className="w-full h-32 sm:h-48 object-cover rounded-lg"
            src={picture}
          />
        </LazyLoad>
        <span className="font-bold">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </span>

        <p>Cast : {cast}</p>
        <p>{duration}</p>
        <p>{language.charAt(0).toUpperCase() + language.slice(1)}</p>
      </div>
    </div>
  );
};

export default movieBox;
