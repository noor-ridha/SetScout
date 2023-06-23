import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SingleMovie from "./pages/SingleMovie";
import Allmovies from "./pages/Allmovies";
import AllTvShows from "./pages/AllTvShows";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Allmovies />} />
            <Route path="/Tv" element={<AllTvShows />} />
            <Route path="/movies/:movieId" element={<SingleMovie />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
