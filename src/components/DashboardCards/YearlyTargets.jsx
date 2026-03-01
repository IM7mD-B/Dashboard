import { FaDollarSign, FaCode, FaUser } from "react-icons/fa";

export default function YTargets() {
  return (
    <div className="w-full px-4 mt-4 bg-white shadow-lg rounded-2xl h-full">
      <div className=" pt-3">
        <h1 className=" font-semibold"> Yearly Targets</h1>
        <p className=" text-xs font-semibold text-gray-800/50 mt-0.5">
          Targets Of The Year
        </p>
      </div>
      <div className=" pb-2">
        <div className=" flex my-3.5 ">
          <div className="bg-blue-200  px-6  mr-3 -mb-1 flex items-center">
            <FaDollarSign className="text-blue-500" />
          </div>

          <div className="mt-3 w-full ">
            <p className=" text-xs font-semibold text-gray-800/50">Money</p>
            <p className=" text-xs my-1 font-semibold text-black">$20000</p>
            <div className="bg-blue-200 w-full mr-3 h-[3px]">
              <div className="bg-blue-500 w-[80%] lg:w-67 h-[3px] rounded-2xl"></div>
            </div>
          </div>
        </div>
        <div className=" flex my-3.5 ">
          <div className="bg-orange-200  px-6  mr-3 -mb-1 flex items-center">
            <FaCode className="text-orange-400" />
          </div>

          <div className="mt-3 w-full">
            <p className=" text-xs font-semibold text-gray-800/50">Projects</p>
            <p className=" text-xs my-1 font-semibold text-black">24</p>
            <div className="bg-orange-200 w-full mr-3 h-[3px]">
              <div className="bg-orange-400 w-[80%] lg:w-67 h-[3px] rounded-2xl"></div>
            </div>
          </div>
        </div>
        <div className=" flex my-3.5 ">
          <div className="bg-green-200  px-6  mr-3 -mb-1 flex items-center">
            <FaUser className="text-green-400" />
          </div>

          <div className="mt-3 w-full">
            <p className=" text-xs font-semibold text-gray-800/50">Money</p>
            <p className=" text-xs my-1 font-semibold text-black">$20000</p>
            <div className="bg-green-200 w-full mr-3 h-[3px]">
              <div className="bg-green-500 w-[80%] lg:w-67 h-[3px] rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
