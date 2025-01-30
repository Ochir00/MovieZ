import React from "react";
import { TOKEN } from "../../../../util/constants";

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
    return jujig.job === "Director";
  });
  console.log("ddddd", directors);
  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-[1080px] ">
        <div className="w-[100%]">
          <div>
            <h2>{data?.original_title}</h2>
            <p>
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
          >
            <p>{productid} </p>
          </div>
          <div
            style={{
              background: `url( https://image.tmdb.org/t/p/original/${data?.backdrop_path} )`,
            }}
            className="w-[760px] h-[600px] !bg-center !bg-cover bg-no-repeat aspect-square"
          >
            <p>{productid} </p>
          </div>
        </div>
        <div className="mt-[30px]">
          <div className="flex gap-1">
            {data?.genres.map((datas: zgrlutag, index: number) => {
              console.log(jujechid);
              return (
                <p
                  key={index}
                  className="px-1 bg-gray-500 rounded-[9px] font-black "
                >
                  {datas.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="">
          <p>{data?.overview}</p>
        </div>
        <div>
          <div className="flex">
            <p>Director</p>
            <p>{directors[0].name}</p>
          </div>
          <div className="flex">
            <p>Writers</p>
            <p> </p>
          </div>
          <div className="flex">
            <p>Stars</p>
            {jujechid.cast.map((index)=>{
              return <p>{index.name}</p>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
