import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

function getBarColor(index) {
  return index % 2 === 0 ? "#4f46e5" : "#c7d2fe";
}

// function CustomTooltip({ active, payload }) {
//   if (active && payload && payload.length) {
//     return (
//       <div className="rounded-lg border border-gray-300 bg-white p-2 shadow-md">
//         <p className="mb-1 text-xs font-semibold text-indigo-800">
//           {payload[0].payload.category}
//         </p>
//         <p className="text-sm text-gray-600">
//           Amount:{" "}
//           <span className="text-sm font-medium text-gray-900">
//             €{payload[0].payload.amount}
//           </span>
//         </p>
//       </div>
//     );
//   }
//   return null;
// }

function CustomBarChart({ data, xKey = "category", showXAxisText = true }) {
  return (
    <div className="mt-6 bg-white">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis
            dataKey={xKey}
            tick={showXAxisText ? { fontSize: 12, fill: "#555" } : false}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

          {/* <Tooltip content={CustomTooltip} /> */}
          <Tooltip
            content={<CustomTooltip nameKey="category" valueKey="amount" />}
          />
          <Bar
            dataKey="amount"
            fill="#ff8042"
            radius={[10, 10, 0, 0]}
            activeDot={{ r: 8, fill: "yellow" }}
            activeStyle={{ fill: "green" }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarChart;
