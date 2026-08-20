import { Navigate, useLocation } from "react-router"
import type { Movie, Genre } from "../interfaces"


export const AboutMovie = () => {

  const { state } = useLocation()
  const movie = state?.movie as Movie
  const movieGenres = state?.movieGenres as Genre[]





  if (!movie) return <Navigate to="/404" replace />

  return (
    <main className=" relative z-10  max-w-7xl mx-auto px-5" >

      <aside className="h-full flex flex-col w-60 gap-4">
        <div >
          <img className="rounded-md ring-2 ring-white" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} width={240} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {movieGenres?.map(genre => (
            <span className="bg-gray-700 py-2 shadow-lg cursor-default text-white gap-2 font-bold rounded-sm text-xs text-center hover:brightness-120 transition-all " key={genre.id}>{genre.name}</span>
          ))}
        </div>
      </aside>






    </main>
  )
}
