import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TOKEN } from "../../util/constants";
import { Card } from "./ui/card";
import { ChevronDown } from "lucide-react";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
type zgrlutga = {
  props: object[];
  name: string;
  id: string;
};

export async function Genrebutton() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return (
    <Card className="w-[97px] h-[36px] flex justify-center items-center rounded-[6px]">
      <Popover>
        <PopoverTrigger className="flex"><ChevronDown className="pr-2"/> <p className="pt-0.5 text-[14px] font-black">Genre</p></PopoverTrigger>
        <PopoverContent className="w-[537px] ml-[438px] mt-[5px]">
          <div className="w-[100%] border-b-[2px] pb-4">
            <h3 className="text-[24px] font-semibold ">Genres</h3>
            <p className="font-semibold">See lists of movies by genre</p>
          </div>
          <div className="w-[100%] flex gap-4 flex-wrap mt-[15px] ">
            {data.genres.map((props: zgrlutga, key: number) => {
              return <Link href={`/genres/${props.id}`} key={key}> <div className="border rounded-[9px]  px-[10px] text-[12px] font-semibold flex items-center gap-[5px]">{props.name} <ChevronRight className="w-[14px] p-0"/> </div></Link>
              
            })}
          </div>
        </PopoverContent>
      </Popover>
    </Card>
  );
}
