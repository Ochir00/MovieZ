import { TOKEN } from "../../util/constants";
import { MovieType } from "../../util/MovieType";

export const Popular = async () => {
  // Fetch movie
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return (
    <div className="w-[100vw] flex justify-center  " >
    <div className="flex flex-wrap justify-between w-[79.813rem]">

      {data.results.slice(0, 10).map((movie: MovieType) => {
        return (
          <div className="w-[14.375rem] h-[27.438rem] overflow-hidden rounded-[8px] ">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt="..loading"
              className="w-[14.358rem] h-[21.25rem]"
            />
            <div className="bg- bg-yellow-500 w-[14.358rem] h-[4.938rem] p-2">
                <p>⭐{movie?.vote_average}/10</p>
                <p>{movie?.original_title}</p>
            </div>
          </div>
        );
      })}
    </div>    
    </div>
  );
};
