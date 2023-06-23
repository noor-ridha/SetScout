import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieBox from "../components/MovieBox.js";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Home = () => {
  // const [locations, setLocations] = useState([]);
  const [movies, setMovies] = useState([]);
  const data1 = useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios
          .get("http://localhost:3000/movies")
          .then((res) => {
            // console.log(res.data);
            const respo = res.data;
            setMovies(respo);
            // console.log(respo);
            // console.log(respo[0].location);
            // const updatedLocations = respo.map((movie) => ({
            //   lat: movie.location[0],
            //   lng: movie.location[1],
            // }));

            // setLocations(updatedLocations);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, []);
  return (
    <>
      <div className="grid gap-x-3 grid-cols-3 gap-y-0 justify-center">
        {movies.map((movie) => (
          <Link to={`/movies/${movie._id}`} key={movie._id}>
            <MovieBox {...movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
