// src/pages/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // এখানে তুমি Firebase বা API call করতে পারো
    console.log("Email:", email, "Password:", password);
    alert("Login functionality is not connected yet!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Login to TicketBari
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot Password & Signup */}
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <Link to="/forgot-password" className="hover:text-blue-700">Forgot Password?</Link>
          <Link to="/signup" className="hover:text-blue-700">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
