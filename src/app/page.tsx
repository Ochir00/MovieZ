import { Popular, Top_rated, Upcoming } from "../components/cartbody";
import { CarouselDemo } from "@/components/Carousel";

export default async function Home() {
  return (
    <div className="w-[100vw] ">

      <CarouselDemo />
      <Popular />
      <Upcoming />
      <Top_rated />
    </div>
  );
}
