import Image from "next/image";
import React from "react";
import { MovieType } from "../../../util/MovieType";
import { Card } from "@/components/ui/card";
import Link from "next/link";
type zgrlutag = {
  data: object[];
};

const ProductPage = async () => {
  const responses = await fetch(`http://localhost:3000/popular`);
  const data = await responses.json();
  const movie = data.data.result;
  console.log(data);

  return (
    <div className="w-full flex flex-wrap gap-3">
      {movie?.map((movie: MovieType, index: number) => {
        return (
          <Card
            key={index}
            className="w-[190px] h-[372px] overflow-hidden rounded-[8px] mb-6"
          >
            <Link href={`/product-detail/${movie?.id}`}>
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt="..loading"
                  className="w-[100%] h-[281px]"
                  width={1000}
                  height={1000}
                />
                <div className="w-[14.358rem] h-[4.938rem] p-2">
                  <p>⭐{movie?.vote_average}/10</p>
                  <h3>{movie?.original_title}</h3>
                </div>
              </div>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductPage;
