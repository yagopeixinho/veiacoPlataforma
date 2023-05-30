import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export function CustomTooltip({ active, payload }) {
  if (active) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#ffff",
          padding: "5px",
          border: "1px solid #cccc",
          outline: "none",
        }}
      >
        <label style={{ fontFamily: "Poppins" }}>{`${payload[0].name}`}</label>
      </div>
    );
  }
  return null;
}

export default function VeiacoPieChart({ data }) {
  const COLORS = [
    "#769AE7",
    "#B1529E",
    "#e7e7a5",
    "#61C87E",
    "#FFCDD9",
    "#a5ffa5",
  ];

  return (
    <PieChart width={280} height={340}>
      <Pie
        data={data?.category}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {data?.category.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend alphabetic={true} iconType="cirlce" fontFamily="Poppins" font />
    </PieChart>
  );
}
