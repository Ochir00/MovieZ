import React from "react"
import { TOKEN } from "../../../../util/constants";



const ProductPage = async ({ params: { productid },}:{params :{ productid : string};})=>{
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


    const data = await response.json();
    const runtimehour = data?.runtime/60;
    const runtimeminut = data?.runtime%60;
    console.log(data)






  return ( 
  <div className="w-[100vw] flex justify-center">
    <div className="w-[1080px] "> 
      <div className="w-[100%]"> 
        <div>
          <h2>{data?.original_title}</h2>
          <p>{data?.release_date} -PG- {Math.floor(runtimehour)}h {runtimeminut}m</p> 
        </div>
      </div>
      <div className="flex justify-between">
      <div style={{ background: `url( https://image.tmdb.org/t/p/original/${data?.poster_path} )`}} className="w-[290px] h-[600px] !bg-center !bg-cover bg-no-repeat aspect-square">
        <p>{productid} </p>
      </div>
      <div style={{ background: `url( https://image.tmdb.org/t/p/original/${data?.backdrop_path} )`}} className="w-[760px] h-[600px] !bg-center !bg-cover bg-no-repeat aspect-square">
        <p>{productid} </p>
      </div>
      </div>
    </div>
  </div>
  )
}
export default ProductPage;