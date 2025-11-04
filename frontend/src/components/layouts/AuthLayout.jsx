import Chart from "../../assets/images/chart.png";
import { LuTrendingUpDown } from "react-icons/lu";

function AuthLayout({ children }) {
  return (
    <div className="flex">
      <div className="h-screen w-screen px-12 pt-8 pb-12 md:w-[60vw]">
        <h2 className="logo-font text-5xl font-medium text-black">expnza</h2>
        {children}
      </div>

      <div className="relative hidden h-screen w-[40vw] overflow-hidden bg-blue-50 bg-cover bg-center bg-no-repeat p-8 md:block">
        <div className="absolute -top-7 -left-5 h-48 w-48 rounded-[40px] bg-indigo-600" />
        <div className="absolute top-[30%] -right-10 h-56 w-48 rounded-[40px] border-[20px] border-violet-600" />
        <div className="absolute -bottom-7 -left-5 h-48 w-48 rounded-[40px] bg-blue-500" />
        <div className="z-20 grid grid-cols-1">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="120,000"
            color="bg-primary"
          />
        </div>
        <img
          src={Chart}
          className="absolute bottom-10 w-64 shadow-lg shadow-cyan-400/15 lg:w-[90%]"
        />
      </div>
    </div>
  );
}

export default AuthLayout;

const StatsInfoCard = function ({ icon, label, value, color }) {
  return (
    <div className="z-10 flex gap-6 rounded-xl border border-gray-200/50 bg-white p-4 shadow-md shadow-indigo-400/10">
      <div
        className={`flex h-12 w-12 items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="mb-1 text-xs text-gray-500">{label}</h6>
        <span className="text-[20px]">€{value}</span>
      </div>
    </div>
  );
};
