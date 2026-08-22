import { useEffect, useState } from "react";
import type { Genre } from "../interfaces";
import { API_KEY } from "../constants";

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al cargar: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error(err));
  }, []);

  return {genres}
};
