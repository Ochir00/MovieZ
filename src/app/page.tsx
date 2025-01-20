"use client"
import { useEffect, useState } from "react";
import { Cart } from "../components/cart";


type MovieType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Home() {
  const [movie, setMovie] = useState<MovieType | undefined>();

  // Fetch movie
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzdkZTYzNTFlOGYxMzhiOWExMTU1MjRhYWMxMzk2MyIsIm5iZiI6MTczNzM0MTg2Mi45ODEsInN1YiI6IjY3OGRiYmE2OWQ1ZTM2M2QxOTY0ZTQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EZ1GfaEKlftC3VV-FGulG5CPUtbv1LjooNL2XNpEbLM";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.results) {
      setMovie(data.results[0]);
    }
    console.log({response});
  };

  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);

  console.log({ movie });
  return <div className="h-[100vh] w-[100vw]">
    <h2>{movie?.original_title}</h2>
    <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="" />
    <Cart />
    </div>;
}