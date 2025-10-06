function MovieList({ movies, setSelectedMovie }) {
  return (
    <ul className="px-0.5 py-0.5 ">
      {movies.map((movie) => (
        <li
          onClick={() => setSelectedMovie([movie])}
          key={movie.imdbID}
          className="cursor-pointer relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-10 items-center px-8 py-6 border-b  ">
          <img src={movie.Poster} alt={`${movie.Title}`} class="h-24 w-full " />
          <div>
            <h2 className="font-semibold">{movie.Title}</h2>

            <div className="flex">
              <span className="text-gray-600">📆</span>
              <span className="text-black font-medium ">{movie.Year}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
