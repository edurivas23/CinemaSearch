import { Navigate, useLocation } from "react-router";
import type { Movie, Genre } from "../interfaces";

export const AboutMovie = () => {
  const { state } = useLocation();
  const movie = state?.movie as Movie;
  const movieGenres = state?.movieGenres as Genre[];

  if (!movie) return <Navigate to="/404" replace />;

  return (
    <main className="flex flex-col max-w-7xl mx-auto px-5 gap-10">
      <h1 className="text-6xl font-bold text-center text-white">
        {movie.title}
      </h1>
      <div className="flex gap-10 ">
        <aside className=" flex flex-col w-60 gap-4 items-center justify-center">
          <div>
            <img
              className="rounded-md ring-2 ring-white object-fit"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {movieGenres?.map((genre) => (
              <span
                className="bg-gray-700 p-2 shadow-lg cursor-default text-white gap-2 font-bold rounded-sm text-xs text-center hover:brightness-120 transition-all "
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </aside>
        <article className=" flex flex-col gap-4 flex-1 justify-evenly">
          <p className="text-white/90 text-2xl text-wrap">{movie.overview}</p>
          <div className="flex flex-col gap-4 self-end w-fit text-white/90 bg-black/50 p-4 rounded-md shadow-lg shadow-purple-950/50">
            <p className="">{movie.vote_average.toFixed(1)} ★</p>
            <p>{movie.vote_count} votes</p>
            <p className="">{movie.release_date} </p>
          </div>
        </article>
      </div>
    </main>
  );
};
