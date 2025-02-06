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
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  const responses = await fetch(
    `https://api.themoviedb.org/3/movie/${data.results[0].id}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const datas = await responses.json();
  console.log("datas", datas);
  return (
    <Carousel className="relative w-[100vw] h-[600px] m-auto ">
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
                  <h2 className="font-extrabold text-[36px] ">
                    {data?.original_title}
                  </h2>
                  <p>⭐{data?.vote_average}/10</p>
                  <p className="w-[250px] h-[130px] overflow-hidden text-white text-[14px] font-semibold">
                    {data?.overview}
                  </p>
                  {/* <Button>watch trailer</Button> */}
                  <Dialog>
                    <DialogTrigger><Button>watch trailer</Button></DialogTrigger>
                    <DialogContent className="min-w-[600px] h-[400px] p-0 gap-0 overflow-hidden ">
                      <DialogTitle></DialogTitle>
                      <iframe
                        width="auto"
                        height="auto"
                        src={`https://www.youtube.com/embed/${datas.results[1]?.key}`}
                        className="w-[600px] h-[400px]"
                      ></iframe>
                    </DialogContent>
                  </Dialog>
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
