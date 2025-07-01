// src/app/category/[movietypes]/page.tsx

import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TOKEN } from "../../../../util/constants";
import Link from "next/link";
import Image from "next/image";
import { MovieType } from "../../../../util/MovieType";

type Props = {
  params: {
    movietypes: string;
  };
};

export default async function Page({ params }: Props) {
  const { movietypes } = params;

    const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movietypes}?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return (
    <Card className="w-[100vw] flex justify-center items-center">
      <div className="w-[1280px]">
        <h2 className="font-semibold text-[24px] mt-[50px] capitalize">
          {movietypes}
        </h2>
        <div className="flex flex-wrap justify-between w-[79.813rem] mt-[20px]">
          {data.results.slice(0, 20).map((movie: MovieType, index: number) => (
            <Card
              key={index}
              className="w-[14.375rem] h-[26.200rem] overflow-hidden rounded-[8px] mb-6"
            >
              <Link href={`/product-detail/${movie?.id}`}>
                <div>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt="loading..."
                    className="w-[14.358rem] h-[21.25rem]"
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
          ))}
        </div>

        <Pagination className="mb-[50px]">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Card>
  );
}
