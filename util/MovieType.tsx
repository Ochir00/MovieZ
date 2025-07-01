export type MovieType = {
  original_title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
  id: number;
  overview: string;
};

export type genreType = {
  id: number;
  name: string;
};
export type MovieTypes = {
  id: number;
  original_title: string;
  vote_average: number;
  poster_path: string | null;
  overview: string;
  release_date: string;
};