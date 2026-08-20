import { useEffect, useState } from "react";
import type { Movie } from "../interfaces";
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY)
export const useAllMovies = (movieName: string) => {

  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setAllMovies([]);
    setPage(1);
    setLoading(true);
  }, [movieName]);

  useEffect(() => {
    if (page === 0) return;
    const url = movieName
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fallo en la conexion:${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAllMovies((prev) => [...prev, ...data.results]);
      })
      .finally(() => setLoading(false));
  }, [page, movieName]);

  return { allMovies, setPage, page, loading };
};
