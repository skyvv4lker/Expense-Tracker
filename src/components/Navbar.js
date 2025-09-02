import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 bg-black border-b border-gray-700">
      <h1 className="text-yellow-400 font-bold text-xl">Expense Tracker</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/report" className="hover:text-yellow-400">Report</Link>
        <Link to="/import-export" className="hover:text-yellow-400">Import/Export</Link>
        <Link to="/signin" className="hover:text-yellow-400">Sign-in</Link>
      </div>
    </nav>
  );
}

export default Navbar;
