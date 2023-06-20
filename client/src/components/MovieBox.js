import React from "react";

const movieBox = ({ name, cast, picture }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{cast}</h1>
      <img src={picture}></img>
    </div>
  );
};

export default movieBox;
