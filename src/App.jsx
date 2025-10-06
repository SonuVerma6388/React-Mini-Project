import { useState } from "react";
import NavBar from "./components/NavBar";
import Page from "./components/Page";
import { tempMovieData } from "./assets/movieData";

function App() {
  const [movies, setMovie] = useState(tempMovieData);
  return (
    <div className="bg-gray-800 h-screen w-full pt-5 px-5">
      <NavBar movies={movies} setMovie={setMovie} />
      <Page movies={movies} />
    </div>
  );
}

export default App;
