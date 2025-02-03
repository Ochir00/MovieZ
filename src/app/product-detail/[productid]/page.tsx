import React from "react";
import { TOKEN } from "../../../../util/constants";
import { WebCard } from "@/components/cartbody";

type zgrlutag = {
  name: string;
  params: string;
};
type juji = {
  job: string;
  name: string;
};
const ProductPage = async ({
  params: { productid },
}: {
  params: { productid: string };
}) => {
  // Fetch movie
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${productid}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const jujegchids = await fetch(
    `https://api.themoviedb.org/3/movie/${productid}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const jujechid = await jujegchids.json();
  const data = await response.json();
  const runtimehour = data?.runtime / 60;
  const runtimeminut = data?.runtime % 60;

  const directors = jujechid?.crew.filter((jujig: juji) => {
    return jujig.job === "Director";
  });

  const write = jujechid?.crew.filter((jujig: juji) => {
    return jujig.job === "Writer";
  });
  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-[1080px] ">
        <div className="w-[100%]">
          <div>
            <h2 className="text-[36px] font-black">{data?.original_title}</h2>
            <p className="font-bold">
              {data?.release_date} -PG- {Math.floor(runtimehour)}h{" "}
              {runtimeminut}m
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div
            style={{
              background: `url( https://image.tmdb.org/t/p/original/${data?.poster_path} )`,
            }}
            className="w-[290px] h-[600px] !bg-center !bg-cover bg-no-repeat aspect-square"
          ></div>
          <div
            style={{
              background: `url( https://image.tmdb.org/t/p/original/${data?.backdrop_path} )`,
            }}
            className="w-[760px] h-[600px] !bg-center !bg-cover bg-no-repeat aspect-square"
          ></div>
        </div>
        <div className="mt-[30px]">
          <div className="flex gap-1">
            {data?.genres.map((datas: zgrlutag, index: number) => {
              return (
                <p
                  key={index}
                  className="px-1 rounded-[9px] font-black border text-[13px]"
                >
                  {datas.name}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mt-[20px]">
          <p className="font-semibold">{data?.overview}</p>
        </div>

        <div>
          <div className="flex mt-[20px] border-b-[1px] pb-[15px]">
            <p className="w-[64px] mr-[53px] font-semibold">Director</p>
            <p className="font-semibold">{directors[0]?.name}</p>
          </div>
          <div className="flex mt-[20px] border-b-[1px] pb-[15px]">
            <p className="w-[64px] mr-[53px] font-semibold">Writers</p>
            <p className="font-semibold">{write[0]?.name}</p>
          </div>
          <div className="flex mt-[20px] border-b-[1px] pb-[15px]">
            <p className="w-[64px] mr-[53px] font-semibold">Stars</p>
            {jujechid?.cast.slice(0, 5).map((index: juji) => {
              return <p className="font-semibold">{index.name}</p>;
            })}
          </div>
        </div>
        <WebCard id={productid} />
      </div>
    </div>
  );
};
export default ProductPage;
