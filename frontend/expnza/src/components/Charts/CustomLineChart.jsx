import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

function getBarColor(index) {
  return index % 2 === 0 ? "#4f46e5" : "#c7d2fe";
}

function CustomLineChart({ data }) {
  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-300 bg-white p-2 shadow-md">
          <p className="mb-1 text-xs font-semibold text-indigo-800">
            {payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900">
              €{payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="mt-6 bg-white">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <Tooltip content={CustomTooltip} />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#4f46e5"
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 3, fill: "#818cf8" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;
