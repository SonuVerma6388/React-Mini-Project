import React, { useState, useEffect } from "react";
import { tempMovieData } from "../assets/movieData";

function NavBar({ movies, setMovie }) {
  const [querry, setQuerry] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (querry.length < 3) return;
      const filtered = tempMovieData.filter(
        (movie) => movie.Title.toLowerCase() == querry.toLowerCase()
      );
      if (filtered.length > 0) {
        setMovie(filtered);
      } else {
        setMovie(tempMovieData);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [querry, setMovie]);

  return (
    <nav className="flex items-center justify-between h-[10%]  p-5 bg-blue-700 rounded  ">
      <h1 className="font-bold text-lg ">Movie List</h1>

      <div className="border-2 rounded-lg flex items-center justify-center  outline-none">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-2xl outline-none p-2.5"
          value={querry}
          onChange={(e) => setQuerry(e.target.value)}
        />
        {/* <button
          onClick={handleClick}
          className="flex items-center justify-center h-full bg-amber-200 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button> */}
      </div>

      <h3>
        Found <strong>{movies.length}</strong> Movie
      </h3>
    </nav>
  );
}

export default NavBar;
