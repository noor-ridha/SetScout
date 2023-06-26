import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SingleMovie from "./pages/SingleMovie";
import Allmovies from "./pages/Allmovies";
import AllTvShows from "./pages/AllTvShows";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Allmovies />} />
            <Route path="/tv" element={<AllTvShows />} />
            <Route path="/movies/:movieId" element={<SingleMovie />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
