import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img
            src="https://i.ibb.co.com/HpVH7w59/images-14.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <NavLink
            to="/"
            className="text-xl md:text-2xl font-semibold text-blue-500"
          >
            Online Ticket Booking
          </NavLink>
        </div>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-lg font-medium">
          {["/", "/ticket", "/about", "/contact"].map((path, index) => {
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

            {/* ⭐ My Booking — Only visible when user is logged in */}
    {user && (
      <li>
        <NavLink
          to="/book/:id"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold underline underline-offset-4"
              : "hover:text-blue-300"
          }
        >
          My Booking
        </NavLink>
      </li>
    )}

          {/* Profile link only for logged-in user */}
          {user && (
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-bold underline underline-offset-4"
                    : "hover:text-blue-300"
                }
              >
                Profile
              </NavLink>
            </li>
          )}
         
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="navbar-end flex items-center gap-2">
        {user ? (
          <>
            <img
              src={user.photoURL || "https://i.ibb.co.com/3yVwQ0k/default-avatar.png"}
              className="w-8 h-8 rounded-full border"
              alt="user"
            />
            <span className="font-medium text-white">
              {user.displayName || user.email}
            </span>
            <NavLink
              to="/dashboard/profile"
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              Dashboard
            </NavLink>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="px-3 py-1 bg-white text-blue-500 rounded hover:bg-blue-100 text-sm"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
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
