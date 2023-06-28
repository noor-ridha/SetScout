import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieBox from "../components/MovieBox.js";

const AllTvShows = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://setback.onrender.com/movies");
        const moviesData = response.data;
        const filteredMovies = moviesData.filter(
          (movie) => movie.type !== "film"
        );
        setMovies(filteredMovies);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <>
      <div className=" mb-24 grid gap-x-3 ms:grid-cols-1 gap-y-0 justify-center md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <p className="mt-44 items-center text-5xl font-semibold text-cyan-950">
            Loading...
          </p>
        ) : (
          movies.map((movie) => (
            <Link to={`/movies/${movie._id}`} key={movie._id}>
              <MovieBox key={movie._id} {...movie} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default AllTvShows;
