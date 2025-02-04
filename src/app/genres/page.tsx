import { MovieType } from "../../../util/MovieType";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { TOKEN } from "../../../util/constants";
import Link from "next/link";
import Image from "next/image";
import { MyToggle } from "@/components/MyToggleGroup";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { genresId } = await searchParams;
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const moviedata = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genresId}&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const moviegenres = await moviedata.json();
  const data = await response.json();
  return (
    <Card className="w-[100vw] flex justify-center items-center">
      <div className="w-[1280px] ">
        <div className="py-10 mt-5">
          <p className="font-black text-[30px]">Search Filter</p>
        </div>
        <div className="flex">
          <div className="w-[30%] border-r-[1px]">
            <div>
              <p className="font-semibold text-[24px]">Genres</p>
              <p className="text-[16px] font-semibold ">
                See lists of movies by genre
              </p>
              <MyToggle genres={data.genres} />
            </div>
          </div>

          <div className="w-[806px] flex flex-wrap gap-5 ml-3">
            {moviegenres.results.map((movie: MovieType, index: number) => {
              return (
                <Card
                  key={index}
                  className="w-[165px] h-[331px] overflow-hidden rounded-[8px] mb-6"
                >
                  <Link href={`/product-detail/${movie?.id}`}>
                    <div>
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                        alt="..loading"
                        className="w-[165px] h-[244px]"
                        width={1000}
                        height={1000}
                      />
                      <div className="w-[14.358rem] h-[4.938rem] p-2">
                        <p>⭐{movie?.vote_average}/10</p>
                        <p className="font-semibold">{movie?.original_title}</p>
                      </div>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Home;
