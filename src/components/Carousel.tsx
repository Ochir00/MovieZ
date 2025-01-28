import * as React from "react";
import { TOKEN } from "../../util/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "../../util/MovieType";
import { Button } from "./ui/button";

export async function CarouselDemo() {
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
  console.log(data);
  return (
    <Carousel className="relative w-[100%] h-[600px] m-auto ">
      <CarouselContent className="w-[100%] h-[600px]  ">
        {data.results.map((data: MovieType, index: number) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="relative">
                <CardContent
                  className=" w-[100%] h-[600px] !bg-center !bg-cover bg-no-repeat aspect-square z-10"
                  style={{
                    background: `url( https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
                  }}
                >
                  {/* <img alt="..loading" className="w-[100%] h-[600px]" /> */}
                </CardContent>
                <div className="absolute top-32 left-40 ">
                    <p>Now Playing:</p>
                    <h2 className="font-extrabold">{data?.original_title}</h2>
                    <p>⭐{data?.vote_average}/10</p>
                    <p className="w-[250px] text-white">{data?.overview}</p>
                    <Button>watch trailer</Button>
                 </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[20px]" />
      <CarouselNext className="absolute right-[20px]" />
    </Carousel>
  );
}
