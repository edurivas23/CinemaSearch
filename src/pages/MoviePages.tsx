import { useParams } from "react-router";
import { CardMovie } from "../components/CardMovie";
import { useMovies } from "../hooks/useMovies";
import { useGenres } from "../hooks/useGenres";
import { LoaderCircle } from "lucide-react";
import { Navigate } from "react-router";

export const MoviePages = () => {
  const { category } = useParams();

  const { movies, pages, page, loading, setPage } = useMovies({ category });
  const { genres } = useGenres();
  const allCategories = ["upcoming", "popular", "top_rated"];

  const titles: Record<string, string> = {
    upcoming: "Proximos Lanzamientos",
    popular: "Populares",
    top_rated: "Mejores Valoradas",
  };

  const title = titles[category ?? ""];

  if (!category || !allCategories.includes(category ?? "")) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="h-full max-w-7xl mx-auto px-5">
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <LoaderCircle size={40} className="animate-spin text-white" />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-semibold text-white mb-5">{title}</h1>
          <div className="  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  ">
            {movies.map((movie) => (
              <CardMovie key={movie.id} movie={movie} genres={genres} />
            ))}
          </div>
          <section className="flex justify-center mt-10 items-center p-5 rounded-lg">
            <button
              className="px-4 py-2 bg-purple-950/40 shadow-lg/30 text-white cursor-pointer  rounded-md hover:bg-purple-600  transition-colors duration-200 disabled:bg-zinc-600"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Anterior
            </button>
            <span className=" mx-4 text-white/70 ">
              Página {page} de {pages?.toLocaleString()}
            </span>
            <button
              className="px-4 py-2 bg-purple-950/40 shadow-lg/30 text-white cursor-pointer  rounded-md hover:bg-purple-600 transition-colors duration-200 disabled:bg-zinc-600"
              onClick={() => setPage(page + 1)}
              disabled={page === pages}
            >
              Siguiente
            </button>
          </section>
        </>
      )}
    </main>
  );
};
