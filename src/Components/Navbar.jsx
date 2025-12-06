import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase Realtime User Listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div
      className="navbar shadow-sm sticky top-0 z-50 backdrop-blur-lg"
      style={{ backgroundColor: "#011638", color: "white" }}
    >
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img
            src="https://i.ibb.co.com/HpVH7w59/images-14.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <NavLink to="/" className="text-xl md:text-2xl font-semibold text-blue-500">
            Online Ticket Booking
          </NavLink>
        </div>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-lg font-medium">
          {["/", "/tickets", "/about", "/contact"].map((path, index) => {
            const labels = ["Home", "Tickets", "About", "Contact"];
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-bold underline underline-offset-4"
                      : "hover:text-blue-300"
                  }
                >
                  {labels[index]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="navbar-end flex gap-4">
        {user ? (
          <>
            <img
              src={user.photoURL || "https://i.ibb.co.com/3yVwQ0k/default-avatar.png"}
              className="w-10 h-10 rounded-full border"
              alt="user"
            />

            <span className="font-semibold">
              {user.displayName || user.email}
            </span>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-lg bg-white text-blue-500 hover:bg-blue-100 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
