import { ModeToggle } from "./theme-toggle";
import SVGComponent from "@/svg/Svg";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

export const Header = async () => {
  return (
    <Card className="w-[100vw] flex justify-center pt-2 pb-3 sticky top-0 z-50 rounded-none border-none">
      <div className="w-[79.813rem] flex flex-wrap justify-between items-center ">
        <Link href={"/"}>
          <div className="flex">
            <SVGComponent props="" />
            <p className="text-[#4338CA] ">MovieZ</p>
          </div>
        </Link>

        <div className="flex gap-4">
          <div className="flex gap-4 items-center">
            <button className="flex justify-center items-center border-[1px] border-solid rounded-[6px] w-[97px] h-[36px] ">
            <Image
              src="down.svg"
              alt="..loading"
              className="w-[20px] h-[20px] "
              width={1000}
              height={1000}
            />
            
              <p className="text-[1rem] ">Genre</p>
              </button>
          </div>
          <input type="text" className="w-[379px] h-[36px] border-[1px] border-solid rounded-[6px]"/>
        </div>
        <div className="flex">
          <ModeToggle/>
        </div>
      </div>
    </Card>

  );
};
