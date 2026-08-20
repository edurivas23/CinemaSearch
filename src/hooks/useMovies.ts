
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router";

import type { Movie, useMoviesProps, Genre } from "../interfaces"



 const API_KEY = import.meta.env.VITE_API_KEY;

export const useMovies = ({ category }: useMoviesProps) => {
   
    const [searchParams, setSearchParams] = useSearchParams()
    const [movies, setMovies] = useState<Movie[]>([]);

    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState<number | undefined>(undefined);



    const page = Number(searchParams.get("page") ?? "1")

    const setPage = (newPage: number) => {
        setSearchParams({ page: String(newPage) })
    }

    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar: ${response.status}`);
                }
                return response.json()
            })
            .then(data => setGenres(data.genres))
            .catch(err => console.error(err))
    }
        , [])
    useEffect(() => {

        setLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${category}?page=${page}&api_key=${API_KEY}`)

            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar las peliculas: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setMovies(data.results)
                setPages(data.total_pages)

            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))

    }

        , [category, page]);

    return { movies, loading, pages, page, setPage, genres };

}



