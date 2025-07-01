"use client"
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SearchMovie } from "./Searchmovie";

export const SearchInput = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Input type="text" />
        </PopoverTrigger>
        <PopoverContent
          className="w-80"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
            <SearchMovie searchValue={"a"}/>
        </PopoverContent>
      </Popover>
    </div>
  );
};
