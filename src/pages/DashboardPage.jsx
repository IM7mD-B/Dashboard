import Welcome from "../components/DashboardCards/Welcome";

export default function Dashboard() {
  return (
    <div className="bg-gray-200 min-h-screen  ">

      <div className=" pt-2 mx-4">
        <p className="font-semibold text-lg md:xl">Dashboard</p>
        <div className="w-16 h-0.5 bg-white">
          <hr className="w-7 h-0.5 bg-black"/>
        </div>

        <Welcome />
      </div>


    </div>
  );
}
