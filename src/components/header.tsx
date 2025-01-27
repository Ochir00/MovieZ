
import Image from "next/image";
import { ModeToggle } from "./theme-toggle";


export const Header = async () => {
  return (
    <div className="w-[100vw] flex justify-center pt-5">
      <div className="w-[79.813rem] flex flex-wrap justify-between ">
        <div className="flex">
          <Image src="moviez.icon.svg" alt="" width={1000} height={1000}
          className="w-[20px] h-[20px]"/>
          <p className="text-[#4338CA] ">MovieZ</p>
        </div>
        <div className="flex">
          <button>genre</button>
          <input type="text" />
        </div>
        <div className="flex">
            <ModeToggle />
        </div>
      </div>
    </div>
  );
};
