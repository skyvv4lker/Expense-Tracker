import React from "react";

function SignIn() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded bg-gray-800 text-white" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-800 text-white" />
        <button className="bg-yellow-500 px-4 py-2 rounded w-full">Login</button>
      </div>
    </div>
  );
}

export default SignIn;
