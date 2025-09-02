import React from "react";

function BalanceCard() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-500 p-4 rounded-lg text-center">
        <p className="text-sm">Balance</p>
        <h2 className="text-xl font-bold">₹500</h2>
      </div>
      <div className="bg-red-500 p-4 rounded-lg text-center">
        <p className="text-sm">Expense</p>
        <h2 className="text-xl font-bold">₹2560</h2>
      </div>
      <div className="bg-green-500 p-4 rounded-lg text-center">
        <p className="text-sm">Income</p>
        <h2 className="text-xl font-bold">₹3060</h2>
      </div>
    </div>
  );
}

export default BalanceCard;
