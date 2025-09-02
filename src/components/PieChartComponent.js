import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

function PieChartComponent() {
  const data = [
    { name: "Food", value: 500 },
    { name: "Rent", value: 700 },
    { name: "Shopping", value: 350 },
    { name: "Bills", value: 300 },
    { name: "Travel", value: 250 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-center">
      <h2 className="text-lg font-bold mb-4">Expenses</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
}

export default PieChartComponent;
