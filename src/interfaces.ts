export interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export interface useMoviesProps {
  category?: string;
  title?: string;
}

export interface Genre {
  id: number;
  name: string;
}