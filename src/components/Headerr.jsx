import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";

import Image1 from "../assets/images/avatar.png";

export default function Header({ onToggle }) {
  return (
    <div className=" bg-white flex flex-row py-3 px-2 w-full justify-between ">
      <div className=" flex flex-row items-center ">
        <button onClick={onToggle}>
          <IoReorderThreeOutline className="z-50 relative size-7 mr-3 md:size-9" />
        </button>

        <div className=" relative ml-27 md:ml-25 w-38 md:w-46  ">
          <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600 md:size-5" />

          <input
            type="text"
            className=" w-full pl-7 py-1 border
             border-gray-400 rounded-lg outline-none focus:ring-1
             focus:ring-gray-500 shadow  placeholder:text-sm md:placeholder:text-lg"
            placeholder="Typr A Keyword"
          />
        </div>
      </div>

      <div className=" flex flex-row items-center justify-around ">
        <div className="relative mx-2">
          <FaRegBell className="text-gray-700 w-5 h-5 md:w-6 md:h-6" />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <img src={Image1} alt="avatar" className=" size-6 md:size-8" />
      </div>
    </div>
  );
}
