import React from "react";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

function ImportExport() {
  const sampleData = [
    { Date: "01-09-2024", Title: "Grocery", Category: "Food", Amount: 500, Type: "Expense" },
    { Date: "02-09-2024", Title: "Salary", Category: "Income", Amount: 2000, Type: "Income" },
  ];

  const exportCSV = () => {
    const csv = Papa.unparse(sampleData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "transactions.csv");
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(sampleData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Transactions");
    XLSX.writeFile(wb, "transactions.xlsx");
  };

  const importCSV = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        console.log("Imported Data:", result.data);
        alert("CSV Imported! Check console for data.");
      },
    });
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-center">
      <h2 className="text-lg font-bold mb-4">Import & Export</h2>
      <div className="space-x-4">
        <button onClick={exportCSV} className="bg-blue-500 px-4 py-2 rounded">Export CSV</button>
        <button onClick={exportExcel} className="bg-green-500 px-4 py-2 rounded">Export Excel</button>
      </div>
      <div className="mt-4">
        <input type="file" accept=".csv" onChange={importCSV} className="p-2 border rounded bg-gray-800 text-white" />
      </div>
    </div>
  );
}

export default ImportExport;
