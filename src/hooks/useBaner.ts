import { useMovies } from "./useMovies"
import { useEffect, useState } from "react";
import type { Movie, useMoviesProps } from "../interfaces"

export const useBaner = ({ category }: useMoviesProps) => {

    const { movies } = useMovies({ category });


    const [randomMovies, setRandomMovies] = useState<Movie[]>([])
    const [currentMovie, setCurrentMovie] = useState(0);




    useEffect(() => {

        if (movies.length > 0) {
            const fewmovies = [...movies].sort(() => Math.random() - 0.5)
                .slice(0, 5)
            setRandomMovies(fewmovies)
        }



    }, [movies])


    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentMovie(prev => prev === randomMovies.length - 1 ? 0 : prev + 1);
        }, 10000)
        return () => clearInterval(interval)
    },
        [randomMovies]);


    return { randomMovies, currentMovie, category }
}
