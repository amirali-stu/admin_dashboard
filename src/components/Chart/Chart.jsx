import React from "react";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
import {
  LineChart,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

function Chart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%" aspect={4}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="purple"
            strokeWidth={2}
            name="My data series name"
          />
          <XAxis dataKey="name" />
          <YAxis
            width="auto"
            label={{ value: "UV", position: "insideLeft", angle: -90 }}
          />
          <Legend align="right" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
