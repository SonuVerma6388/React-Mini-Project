function WatchMovieList({ selectedMovie }) {
  return (
    <div>
      <ul className="px-0.5 py-0.5">
        {selectedMovie.map((movie) => (
          <div>
            <li
              key={movie.imdbID}
              className="relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-10 items-center px-8 py-6 border-b  ">
              <img
                src={movie.Poster}
                alt={`${movie.Title}`}
                class="h-24 w-full "
              />
              <div>
                <h2 className="font-semibold">{movie.Title}</h2>

                <div className="flex gap-5">
                  <p className="flex gap-2">
                    <span>Imdb Rating⭐️:</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p className="flex gap-2">
                    <span>User Rating🌟:</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p className="flex gap-2">
                    <span>Avg-Runtime⏳:</span>
                    <span>{movie.Runtime}</span>
                  </p>
                </div>
              </div>
            </li>

            <div className="px-8 py-6 ">
              <h3 className="font-bold">Actor: {movie.Actors}</h3>
              <h3 className="font-bold">Year: {movie.Year}</h3>
              <h3 className="font-bold">
                Summary: <p className="font-normal">{movie.Summary}</p>
              </h3>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default WatchMovieList;
