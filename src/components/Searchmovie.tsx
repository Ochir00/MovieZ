// SearchMovie.tsx

import { TOKEN } from "../../util/constants";
import { useEffect, useState } from "react";
import { MovieTypes } from "../../util/MovieType";

type Props = {
  searchValue: string;
};

export const SearchMovie = ({ searchValue }: Props) => {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchValue.trim()) {
      setMovies([]);
      setError(null);
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            searchValue
          )}&language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Алдаа гарлаа: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setMovies(data.results?.slice(0, 5) || []);
      } catch (err) {
        setError((err as Error).message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchValue]);

  return (
    <div className="bg-black text-white p-2 min-h-[100px]">
      {loading && <p>Уншиж байна...</p>}
      {error && <p className="text-red-500">Алдаа: {error}</p>}
      {!loading && !error && movies.length === 0 && <p>Үр дүн олдсонгүй</p>}
      {!loading &&
        !error &&
        movies.map((movie) => (
          <div key={movie.id} className="border-b py-1">
            {movie.original_title}
          </div>
        ))}
    </div>
  );
};
