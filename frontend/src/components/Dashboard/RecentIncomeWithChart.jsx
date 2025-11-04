import { useEffect, useState } from "react";
import CustomPieChart from "../Charts/CustomPieChart";
import { prepareRecentIncomeChartData } from "../../utils/helper";

const COLORS = ["#6366f1", "#ff6900", "#fa2c37", "#4f46e5"];

function RecentIncomeWithChart({ data, totalIncome }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareRecentIncomeChartData(data);
    setChartData(result);
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>
      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`€${totalIncome}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
}

export default RecentIncomeWithChart;
