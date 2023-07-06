import React from "react";
import LazyLoad from "react-lazyload";

const OneMovie = ({
  name,
  language,
  description,
  duration,
  cast,
  location,
  picture,
}) => {
  return (
    <>
      <div className="mt-32 flex justify-normal ">
        <LazyLoad offset={100}>
          <img
            alt="/"
            className="w-full h-32 sm:h-48 object-cover rounded-lg"
            src={picture}
          />
        </LazyLoad>
        <div className=" mt-4 mx-8 ">
          <span className="font-bold uppercase">{name}</span>
          <p className="font-bold">Cast: {cast}</p>
          <p className="font-bold">Duration: {duration}</p>
          <p className="font-bold">Language: {language}</p>
        </div>
      </div>
      <p className="mt-18mx-6 my-6 text-lg"> {description}</p>
    </>
  );
};

export default OneMovie;
