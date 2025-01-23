import { Header } from "@/components/header";
import { Popular, Top_rated, Upcoming } from "../components/cartbody";
import { CarouselDemo } from "@/components/Carousel";

export default async function Home() {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <Header />
      <CarouselDemo />
      <Popular />
      <Upcoming />
      <Top_rated />
    </div>
  );
}
