import { TOKEN } from "../../../../util/constants";


export default async function trailer() {
      // Fetch movie
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/${movieId}?language=en-US",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
    return (
        <div>
            <p>{data?.id}</p>
        </div>
    )
}