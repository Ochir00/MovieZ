"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChevronRight } from "lucide-react";
import { genreType } from "../../util/MovieType";
import { useRouter } from "next/navigation";

export const MyToggle = ({ genres }: { genres: genreType[] }) => {
  const router = useRouter();
  const handleChange = (values: string[]) => {
    console.log(values);
    router.push(`/genres?genresId=${values}`);
  };
  return (
    <ToggleGroup
      onValueChange={handleChange}
      className="flex gap-5 flex-wrap mt-5 justify-start"
      type="multiple"
    >
      {genres.map((props: genreType, index: number) => {
        console.log(ToggleGroupItem);
        return (
          <ToggleGroupItem
            key={index}
            value={props.id.toString()}
            className="border rounded-[9px]  px-[10px] text-[12px] font-semibold flex items-center justify-start gap-[5px]"
          >
            {props.name}
            <ChevronRight className="h-4" />
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
};
