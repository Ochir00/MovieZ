import { ModeToggle } from "./theme-toggle";
import SVGComponent from "@/svg/Svg";
import Link from "next/link";
import { Card } from "./ui/card";

import Footersvg from "@/svg/Footersvg";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Genrebutton } from "./genrebutton";



export const Header = async () => {
  return (
    <Card className="w-[100vw] flex justify-center pt-2 pb-3 sticky top-0 z-50 rounded-none border-none">
      <div className="w-[79.813rem] flex flex-wrap justify-between items-center ">
        <Link href={"/"}>
          <div className="flex gap-2.5">
            <SVGComponent props="" />
            <p className="text-[#4338CA] italic font-extrabold ">MovieZ</p>
          </div>
        </Link>

        <div className="flex gap-4">
          <div className="flex gap-4 items-center">
            <Genrebutton/>
          </div>
          <input
            type="text"
            className="w-[379px] h-[36px] border-[1px] border-solid rounded-[6px]"
          />
        </div>
        <div className="flex">
          <ModeToggle />
        </div>
      </div>
    </Card>
  );
};
export const Footer = async () => {
  return (
    <div className="w-[100vw] flex justify-center bg-[#4338CA] text-white">
      <div className="w-[1280px] h-[220px] flex justify-between pt-10">
        <div className="">
          <Link href={"/"}>
            <div className="flex gap-2.5">
              <Footersvg props="" />
              <p className="text-[#ffffff] italic font-extrabold ">MovieZ</p>
            </div>
          </Link>
          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        <div className="pl-[400px]">
          <p>Contact Information</p>
          <div className="flex mt-5">
            <div className="flex items-center ">
              <Mail />
            </div>
            <div className="pl-2">
              <p>Email</p>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="flex items-center ">
              <Phone />
            </div>
            <div className="pl-2">
              <p>Phone</p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-semibold">Follow us</p>
          <div className="flex gap-2">
            <p className="font-semibold">Facebook</p>
            <p className="font-semibold">Instagram</p>
            <p className="font-semibold">Twitter</p>
            <p className="font-semibold">YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
