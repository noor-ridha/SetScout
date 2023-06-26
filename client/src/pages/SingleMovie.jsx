// SingleMovie.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import OneMovie from "../components/OneMovie.jsx";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { googleKey } from "dotenv";
// config();
const containerStyle = {
  width: "75%",
  height: "300px",
};

const SingleMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/movies/${movieId}`
        );
        const allData = response.data;
        // console.log(allData);
        setMovie(allData);
        console.log(allData.location);
        const updatedLocations = [allData.location].map((positions) => ({
          lat: positions[0],
          lng: positions[1],
        }));

        setLocations(updatedLocations);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  const center =
    locations.length > 0
      ? locations[0]
      : { lat: 41.11895981243429, lng: 28.999364428716643 };

  return (
    <div>
      <OneMovie {...movie} />
      <LoadScript googleMapsApiKey="AIzaSyAZJGmm_7LJg1YGZPdtHeNKwUrz1FqKYmY">
        {" "}
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default SingleMovie;
