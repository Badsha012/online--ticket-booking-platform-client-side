import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email & Password required");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 px-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 border border-gray-200">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to Online Ticket Booking
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Google Button */}
   <button
  onClick={handleGoogleLogin}
  className="w-full mt-5 flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 rounded-xl shadow-sm hover:bg-gray-50 transition duration-200"
>
  <img
    src="https://i.ibb.co.com/BKdxcZMD/google-lens-icon-logo-symbol-free-png.webp"
    className="w-6 h-6"
    alt="google"
  />
  <span className="text-gray-700 font-medium">Continue with Google</span>
</button>

        {/* Bottom Links */}
        <div className="flex justify-between mt-5 text-sm text-gray-600">
          <Link to="/forgot-password" className="hover:text-blue-700">
            Forgot Password?
          </Link>

          <Link to="/register" className="hover:text-blue-700">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
