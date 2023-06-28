import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieBox from "../components/MovieBox.js";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const data1 = useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios
          .get("https://setback.onrender.com/movies")
          .then((res) => {
            console.log(res.data);
            const respo = res.data;
            setMovies(respo);
            // console.log(respo);
            setIsLoading(false);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, []);
  return (
    <>
      <div className="mb-24 grid gap-x-3 ms:grid-cols-1 gap-y-0 justify-center md:grid-cols-2 lg:grid-cols-3 ">
        {isLoading ? (
          <p className="mt-44 items-center text-3xl font-semibold text-cyan-950">
            loading...
          </p>
        ) : (
          movies.map((movie) => (
            <Link to={`/movies/${movie._id}`} key={movie._id}>
              <MovieBox {...movie} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
