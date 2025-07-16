import React from "react";
import ChartData from "../Datas/Datas";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

function Chart({ dataGrid }) {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={4}>
      <LineChart data={ChartData}>
        <Line type="monotone" dataKey="sale" strokeWidth={2} stroke="#8884d8" />
        <XAxis dataKey="name" stroke="#5550bd" />
        <Tooltip />
        {dataGrid && <CartesianGrid stroke="#5550bd" strokeDasharray="5 5" />}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
