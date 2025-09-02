import React from "react";

function TransactionLog() {
  const transactions = [
    { date: "01 Sep 2024", title: "Grocery", category: "Food", amount: 500, type: "Expense" },
    { date: "02 Sep 2024", title: "Salary", category: "Income", amount: 2000, type: "Income" },
    { date: "03 Sep 2024", title: "Electricity Bill", category: "Bills", amount: 600, type: "Expense" },
    { date: "04 Sep 2024", title: "Investments", category: "Income", amount: 1000, type: "Income" },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Transaction Log</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400">
            <th className="text-left">Date</th>
            <th className="text-left">Title</th>
            <th className="text-left">Category</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} className="border-b border-gray-700">
              <td>{t.date}</td>
              <td>{t.title}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td className={t.type === "Expense" ? "text-red-400" : "text-green-400"}>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionLog;

