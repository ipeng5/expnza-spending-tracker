import { useEffect, useState } from "react";
import { prepareChartData } from "../../utils/helper";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";

function IncomeOverview({ transactions, onAddIncome }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareChartData(transactions, "source");
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className="text-lg">Income Overview</h5>
          <p className="mt-0.5 text-xs text-gray-400">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>
        <button className="add-btn" onClick={onAddIncome}>
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>
      <div className="mt-10">
        <CustomBarChart data={chartData} xKey="month" showXAxisText={true} />
      </div>
    </div>
  );
}

export default IncomeOverview;
