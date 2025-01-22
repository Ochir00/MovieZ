import { TOKEN } from "../../util/constants";
import { MovieType } from "../../util/MovieType";

export const Header = async () => {
  return (
    <div className="w-[100vw] flex justify-between">
      <div className="flex flex-wrap justify-between w-[79.813rem]">
        <div className="flex">
          <img src="moviez.icon.svg" alt="" />
          <p>MovieZ</p>
        </div>
        <div className="flex">
          <button>genre</button>
          <input type="text" />
        </div>
        <div className="flex">
            <img src="down.svg" alt="" />
            <button>sun</button>
        </div>
      </div>
    </div>
  );
};
