function CustomTooltip({ active, payload, coordinate }) {
  if (active && payload && payload.length) {
    const { x, y } = coordinate;

    return (
      <div
        className="bg-white shadow-md rounded-lg p-2 border border-gray-300"
        style={{
          position: "absolute",
          left: x,
          top: y,
          transform: "translate(-50%, -100%)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        <p className="text-xs font-semibold text-indigo-800 mb-1">
          {payload[0].name}
        </p>
        <p className="text-sm  text-gray-600 ">
          Amount:{" "}
          <span className="text-sm font-medium text-gray-900">
            €{payload[0].value}
          </span>
        </p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
