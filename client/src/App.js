import "./App.css";
import axios from "axios";
import Nav from "./components/pages/Nav";
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function App() {
  const [locations, setLocations] = useState([]);
  const data1 = useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios
          .get("http://localhost:3000/movies")
          .then((res) => {
            // console.log(res.data);
            const respo = res.data;
            console.log(respo);
            console.log(respo[0].location);
            const updatedLocations = respo.map((movie) => ({
              lat: movie.location[0],
              lng: movie.location[1],
            }));

            setLocations(updatedLocations);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, []);
  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  const center = {
    lat: 41.11895981243429,
    lng: 28.999364428716643,
  };

  return (
    <>
      <Nav />
      <h1>client</h1>
      <LoadScript googleMapsApiKey="AIzaSyAZJGmm_7LJg1YGZPdtHeNKwUrz1FqKYmY">
        {" "}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8} // Adjust the zoom level as per your preference
        >
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default App;
