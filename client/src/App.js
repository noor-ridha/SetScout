import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SingleMovie from "./pages/SingleMovie";
import Allmovies from "./pages/Allmovies";
import AllTvShows from "./pages/AllTvShows";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Allmovies />} />
            <Route path="/tv" element={<AllTvShows />} />
            <Route path="/movies/:movieId" element={<SingleMovie />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
