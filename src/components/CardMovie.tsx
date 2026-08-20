
import type { Movie, Genre } from "../interfaces"
import { Link } from "react-router"

interface CardMovieProps {
  movie: Movie;
  genres?: Genre[];


}


export const CardMovie = ({ movie, genres }: CardMovieProps) => {

  const { title, release_date, vote_average, poster_path, genre_ids, id } = movie

  const movieGenres = genres?.filter(genre => genre_ids?.includes(genre.id)) ?? []
  

  return (
    <Link to={`/movie/${id}`} state={{ movie, movieGenres }} className="bg-purple-950/20 rounded-lg shadow-xl/20  hover:ring-2 hover:ring-white transition-all duration-100 ease-out ">
      <article className=" h-full flex flex-col  text-white animate-fade-in delay-75  ">
        <div className="flex h-80 w-full">
          <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className="object-fit w-full rounded-t-lg" />
        </div>

        <div className=" h-full flex flex-col justify-between gap-4 p-4 flex-1 text-balance ">

          <h3 className="text-sm font-bold mb-1 ">{title}</h3>

          <div className="flex w-full justify-between  text-xs">
            <span className="text-white/50">{release_date}</span>
            <div className="flex items-center gap-1  text-yellow-300">
              <span className="">{vote_average.toFixed(1)}</span>
              <span className="">★</span>

            </div>
          </div>
        </div>

      </article>
    </Link>
  )
}
