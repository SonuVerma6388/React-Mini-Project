import { useState } from "react";
import MovieList from "./MovieList";

function ListBox({ movies, setSelectedMovie }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-gray-600 w-1/2 h-full relative rounded-lg overflow-y-auto scrollbar-hide ">
      <button
        className="flex justify-center items-center top-1 right-1 z-999 font-bold text-white  absolute cursor-pointer"
        onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      )}
    </div>
  );
}

export default ListBox;
