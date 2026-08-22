import { useAllMovies } from "../hooks/useAllMovies";
import { CardMovie } from "../components/CardMovie";
import { useState, useRef } from "react";
import { LoaderCircle } from "lucide-react";
import { useGenres } from "../hooks/useGenres";

export const Search = () => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { allMovies, page, setPage, loading } = useAllMovies(search);
  const { genres } = useGenres();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      setSearch(text);
    }, 500);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex-1 p-10">
      <section className="w-full h-full mb-20">
        <form
          onSubmit={handleSubmit}
          className="w-full py-4  bg-black/60 ring-2 ring-purple-950/20 text-white rounded-lg shadow-xl/20 px-4 focus-within:ring-white"
        >
          <input
            autoFocus
            ref={inputRef}
            onChange={handleChange}
            className="w-full text-xl font-bold italic focus:outline-none"
            placeholder="Escribe la pelicula que desees saber mas...."
          />
        </form>
      </section>
      <div>
        <div className="h-full max-w-7xl mx-auto px-5">
          {loading ? (
            <div className="flex justify-center items-center">
              <LoaderCircle size={40} className="animate-spin text-white" />
            </div>
          ) : allMovies.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-6xl text-white text-center gap-20">
              <span>NO SE ENCONTRARON RESULTADOS</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2171/2171949.png"
                alt="Dibujo de un perro llorando"
                className="w-50"
              />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {allMovies.map((movie) => (
                  <CardMovie key={movie.id} movie={movie} genres={genres} />
                ))}
              </div>
              <section className="flex justify-center mt-10 items-center p-5 rounded-lg">
                <button
                  className="px-4 py-2 bg-purple-950/40 text-white cursor-pointer rounded-md hover:bg-purple-600 transition-colors duration-200"
                  onClick={() => setPage(page + 1)}
                >
                  Cargar Más
                </button>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  );
};
