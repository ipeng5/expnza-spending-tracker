export default function CustomTooltip({
  active,
  payload,
  nameKey = "name",
  valueKey = "amount",
}) {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-2 shadow-md">
      <p className="mb-1 text-xs font-semibold text-indigo-800">
        {data[nameKey]}
      </p>
      <p className="text-sm text-gray-600">
        Amount:{" "}
        <span className="text-sm font-medium text-gray-900">
          €{data[valueKey]}
        </span>
      </p>
    </div>
  );
}
