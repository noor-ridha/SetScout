import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import OneMovie from "../components/OneMovie.jsx";

const SingleMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/movies/${movieId}`
        );
        // console.log(response);
        const fetchedMovie = response.data;
        // console.log(fetchedMovie);

        setMovie(fetchedMovie);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <OneMovie {...movie} />
    </div>
  );
};

export default SingleMovie;
