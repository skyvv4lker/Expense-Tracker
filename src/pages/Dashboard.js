import React from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionLog from "../components/TransactionLog";
import PieChartComponent from "../components/PieChartComponent";

function Dashboard() {
  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <div>
        <BalanceCard />
        <TransactionLog />
      </div>
      <PieChartComponent />
    </div>
  );
}

export default Dashboard;
