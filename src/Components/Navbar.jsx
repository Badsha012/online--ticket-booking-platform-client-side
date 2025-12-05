import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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

          {/* MOBILE MENU */}
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow"
            style={{ backgroundColor: "#011638", color: "white" }}
          >
            <li>
              <NavLink to="/" className="hover:text-blue-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tickets" className="hover:text-blue-400">
                Tickets
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-400">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-400">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-2 items-center">
          <img
            src="https://i.ibb.co.com/HpVH7w59/images-14.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <NavLink to="/" className="text-xl font-semibold text-blue-300">
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

      {/* RIGHT */}
      <div className="navbar-end flex gap-3">
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
      </div>
    </div>
  );
};

export default Navbar;
