import Welcome from "../components/DashboardCards/Welcome";
import QuickDraft from "../components/DashboardCards/QuickDraft";
import YearlyTarget from "../components/DashboardCards/YearlyTargets";
export default function Dashboard() {
  return (
    <div className="bg-gray-200 min-h-screen  ">
      <div className=" pt-2 mx-4">
        <p className="font-semibold text-lg md:xl">Dashboard</p>
        <div className="w-16 h-0.5 bg-white">
          <hr className="w-7 h-0.5 bg-black" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr ">
          <Welcome />
          <QuickDraft />
          <YearlyTarget />
        </div>
      </div>
    </div>
  );
}
