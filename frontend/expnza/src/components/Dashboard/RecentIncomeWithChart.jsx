import { useEffect, useState } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#6366f1", "#ff6900", "#fa2c37", "#4f46e5"];

function RecentIncomeWithChart({ data, totalIncome }) {
  const [chartData, setChartData] = useState([]);

  function prepareChartData() {
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));

    setChartData(dataArr);
  }

  useEffect(() => {
    console.log("test");
    prepareChartData();
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
