import { TOKEN } from "../../util/constants";

export const SearchMovie = async (searchValue: string) => {
  // Fetch movie
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data)
  return (
    <div className="bg-black">
        {
            // data.result.splice(0,5).map(a) {
            //     return (
            //         <div>{a}</div>
            //     )
            // }
        }
    </div>
  )
}