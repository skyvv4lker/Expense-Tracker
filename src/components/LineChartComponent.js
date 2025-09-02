import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts";

function LineChartComponent() {
  const data = [
    { month: "Jan", expense: 30000 },
    { month: "Feb", expense: 31000 },
    { month: "Mar", expense: 36000 },
    { month: "Apr", expense: 34000 },
    { month: "May", expense: 32000 },
    { month: "Jun", expense: 33000 },
    { month: "Jul", expense: 30000 },
    { month: "Aug", expense: 31000 },
    { month: "Sep", expense: 32500 },
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Expenses (Monthly)</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#444" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={35000} stroke="red" label="Budget ₹35,000" />
        <Line type="monotone" dataKey="expense" stroke="#36A2EB" />
      </LineChart>
    </div>
  );
}

export default LineChartComponent;
