import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

function Chart({ ChartData: data, dataGrid }) {
  return (
    <ResponsiveContainer width="100%" aspect={4}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="sale" strokeWidth={2} stroke="#8884d8" />
        <XAxis dataKey="name" stroke="#5550bd" />
        <Tooltip />
        {dataGrid && <CartesianGrid stroke="#5550bd" strokeDasharray="5 5" />}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
