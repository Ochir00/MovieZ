import { TOKEN } from "../../util/constants";
import { MovieType } from "../../util/MovieType";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export const Header = async () => {
  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-[79.813rem] flex flex-wrap justify-between ">
        <div className="flex">
          <img src="moviez.icon.svg" alt="" />
          <p>MovieZ</p>
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
