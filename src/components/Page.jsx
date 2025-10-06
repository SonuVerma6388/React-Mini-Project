import { useState } from "react";
import ListBox from "./ListBox";
import WactchBox from "./WactchBox";

export default function Page({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState([]);
  return (
    <div className="flex mt-7 gap-5 h-[85%]">
      <ListBox movies={movies} setSelectedMovie={setSelectedMovie} />
      <WactchBox selectedMovie={selectedMovie} />
    </div>
  );
}
