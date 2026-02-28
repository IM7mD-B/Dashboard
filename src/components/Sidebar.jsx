import { FaChartBar,FaRegFile,FaRegCreditCard  } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaRegUser, FaProjectDiagram, FaGraduationCap ,FaRegUserCircle   } from "react-icons/fa";

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed h-full w-38 bg-white shadow-2xl transition-transform  duration-500 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div>
        <h1 className="text-lg text-center mt-12 font-semibold ">Elzero</h1>
      </div>
      <div className="flex items-center justify-center my-4 ">
        <span className="w-7 h-0.5 bg-black"></span>
        <span className="w-2 h-2 bg-black rounded-full mx-1"></span>
        <span className="w-7 h-0.5 bg-black"></span>
      </div>

      <div className="flex flex-col mt-9">
        <button className=" hover:bg-gray-200 mt-3  flex  items-center">
          <FaChartBar className="ml-3 mr-2 text-black h-3 w-4" />

          <p>Dashboard</p>
        </button>

        <button className=" hover:bg-gray-200 mt-3 flex items-center ">
          <IoMdSettings  className="ml-3 mr-2 text-black size-4" />

          <p>Settigns</p>
        </button>

        <button className=" hover:bg-gray-200 mt-3 flex items-center ">
          <FaRegUser  className="ml-3 mr-2 text-black size-4" />

          <p>Profile</p>
        </button>

        <button className=" hover:bg-gray-200 mt-3 flex items-center ">
          <FaProjectDiagram  className="ml-3 mr-2 text-black size-4" />

          <p>Projects</p>
        </button>

        <button className=" hover:bg-gray-200 mt-3 flex items-center ">
          <FaGraduationCap  className="ml-3 mr-2 text-black size-4" />

          <p>Courses</p>
        </button>

        <button className=" hover:bg-gray-200 mt-3 flex items-center ">
          <FaRegUserCircle className="ml-3 mr-2 text-black size-4" />

          <p>Frineds</p>
        </button>

        <button className=" hover:bg-gray-200 mt-3 flex items-center ">
          <FaRegFile  className="ml-3 mr-2 text-black size-4" />

          <p>File</p>
        </button>

        <button className=" hover:bg-gray-200 mt-3 flex items-center ">
          <FaRegCreditCard className="ml-3 mr-2 text-black size-4" />

          <p>Plans</p>
        </button>
      </div>
    </div>
  );
}
