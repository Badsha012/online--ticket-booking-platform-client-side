import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { toast } from "react-hot-toast";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      await updateProfile(userCredential.user, {
        displayName: form.name,
      });

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google Signup Successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full mt-1 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full mt-1 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full mt-1 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 pr-12"
              />

              {/* Password Eye Icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3l18 18M10.7 10.7a2 2 0 102.6 2.6M6.3 6.3C4.6 7.5 3.3 9.3 3 12c1.2 4.5 5 7.5 9 7.5 1.7 0 3.3-.5 4.8-1.5M17.7 14.7A8.7 8.7 0 0021 12c-1.2-4.5-5-7.5-9-7.5-1.3 0-2.6.3-3.8.8"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M1.5 12C3.1 7 7 3.8 12 3.8c5 0 8.9 3.2 10.5 8.2-1.6 5-5.5 8.2-10.5 8.2S3.1 17 1.5 12zm10.5 3.7a3.7 3.7 0 100-7.4 3.7 3.7 0 000 7.4z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Register
          </button>
        </form>

        {/* Google Signup Button */}
        <button
          onClick={handleGoogleRegister}
          className="w-full mt-5 flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 rounded-xl shadow-sm hover:bg-gray-50 transition duration-200"
        >
          <img
            src="https://i.ibb.co.com/BKdxcZMD/google-lens-icon-logo-symbol-free-png.webp"
            className="w-6 h-6"
            alt="google"
          />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
