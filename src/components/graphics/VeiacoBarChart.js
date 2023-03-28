import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function VeiacoBarChart({ data }) {
  return (
    <ResponsiveContainer width="70%" height="50%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          left: -30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalValue" fill="#61C87E" />
      </BarChart>
    </ResponsiveContainer>
  );
}
