import { Header } from "@/components/header";
import { Popular, Top_rated, Upcoming } from "../components/cart";

export default async function Home() {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <Header />
      <Popular />
      <Upcoming />
      <Top_rated />
    </div>
  );
}
