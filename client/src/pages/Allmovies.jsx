import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieBox from "../components/MovieBox.js";

const Allmovies = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies");
        const moviesData = response.data;
        const filteredMovies = moviesData.filter(
          (movie) => movie.type === "film"
        );
        setMovies(filteredMovies);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <>
      <div className="grid gap-x-3 grid-cols-3 gap-y-0 justify-center">
        {movies.map((movie) => (
          <MovieBox key={movie._id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Allmovies;
