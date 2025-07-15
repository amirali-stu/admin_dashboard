import React from "react";
import ChartData from "./ChartData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

function ChartBox({ title, dataGrid }) {
  const data = ChartData;

  return (
    <div className="mt-4 shadow-[0_0_10px_rgba(0,0,0,0.4)] rounded-md p-4 w-full flex flex-col ">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <div className="flex-1">
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="sale"
              strokeWidth={2}
              stroke="#8884d8"
            />
            <XAxis dataKey="name" stroke="#5550bd" />
            <Tooltip />
            {dataGrid && (
              <CartesianGrid stroke="#5550bd" strokeDasharray="5 5" />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartBox;
