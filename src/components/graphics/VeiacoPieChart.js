import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

class VeiacoPieChart extends React.Component {
  COLORS = ["#769AE7", "#B1529E", "#F2E0A1", "#61C87E", "#FFCDD9"];

  pieData = [
    {
      name: "Alimentação",
      value: 1,
    },
    {
      name: "Lazer",
      value: 2,
    },
    {
      name: "Transporte",
      value: 2,
    },
    {
      name: "Saúde",
      value: 4,
    },
  ];

  CustomTooltip = ({ active, payload, label }) => {
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
          <label
            style={{ fontFamily: "Poppins" }}
          >{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <PieChart width={280} height={340}>
        <Pie
          data={this.pieData}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {this.pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={this.COLORS[index % this.COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<this.CustomTooltip />} />
        <Legend alphabetic={true} iconType="cirlce" fontFamily="Poppins" font />
      </PieChart>
    );
  }
}

export default VeiacoPieChart;
