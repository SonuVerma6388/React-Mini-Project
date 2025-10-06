import React, { useState } from "react";
import WatchMovieList from "./WatchMovieList";

function WactchBox({ selectedMovie }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-gray-600 w-1/2 h-full relative rounded-l overflow-y-auto scrollbar-hide ">
      <button
        className="flex justify-center items-center top-1 right-1 z-999 font-bold text-white  absolute cursor-pointer"
        onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && <WatchMovieList selectedMovie={selectedMovie} />}
    </div>
  );
}

export default WactchBox;
