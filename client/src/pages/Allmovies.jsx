import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieBox from "../components/MovieBox.js";

const Allmovies = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://setback.onrender.com/movies");
        const moviesData = response.data;
        console.log(moviesData);
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
      <div className="mb-24 grid gap-x-3 ms:grid-cols-1 gap-y-0 justify-center md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <Link to={`/movies/${movie._id}`} key={movie._id}>
            <MovieBox key={movie._id} {...movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Allmovies;
