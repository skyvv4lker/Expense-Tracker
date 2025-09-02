import React from "react";
import LineChartComponent from "../components/LineChartComponent";

function Reports() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Monthly Report</h2>
      <LineChartComponent />
    </div>
  );
}

export default Reports;
