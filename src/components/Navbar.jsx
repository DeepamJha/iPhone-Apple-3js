import { navLists } from "../constants";
import { appleImg, bagImg } from "../utils";
import { searchImg } from "./../utils/index";

const Navbar = () => {
  return (
    <header className=" w-full py-4 sm:px-10 px-5 flex justify-between items-center">
      <nav className=" flex max-sm:w-full  max-sm:screen-max-width md:mx-auto md:gap-7 items-center">
        <img
          className=" cursor-pointer"
          src={appleImg}
          alt="Apple"
          width={13}
          height={17}
        />
        <div className=" flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((item) => (
            <div
              key={item}
              className=" px-5 text-xs cursor-pointer text-gray hover:text-white transition-all"
            >
              {item}
            </div>
          ))}
        </div>
        <div className=" flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            className=" cursor-pointer"
            src={searchImg}
            alt="search"
            width={14}
            height={14}
          />
          <img
            className=" cursor-pointer"
            src={bagImg}
            alt="bag"
            width={14}
            height={14}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
