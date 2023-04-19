import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function VeiacoBarChart({ data }) {

  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <XAxis dataKey="dateLabel" />
        <YAxis />
        <Tooltip labelStyle={{ fontFamily: "Poppins", outline: "none" }} />
        <Bar dataKey="totalValue" name="Valor" fill="#61C87E" />
      </BarChart>
    </ResponsiveContainer>
  );
}
