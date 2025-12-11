import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [isOpen, setIsOpen] = useState(false); // MOBILE MENU STATE

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const res = await fetch(
          `https://online-ticket-booking-server-side.vercel.app/users/${currentUser.email}`
        );
        const data = await res.json();
        setRole(data.role);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const getDashboardPath = () => {
    if (role === "user") return "/dashboard/profile";
    if (role === "vendor") return "/dashboard/vendor-profile";
    if (role === "admin") return "/dashboard/admin-profile";
    return "/dashboard";
  };

  return (
    <div
      className="w-full shadow-sm sticky top-0 z-50 backdrop-blur-lg"
      style={{ backgroundColor: "#011638", color: "white" }}
    >
      <div className="navbar max-w-9xl mx-auto px-4">

        {/* LEFT SECTION */}
        <div className="navbar-start flex items-center">
          
          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white mr-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* LOGO */}
          <div className="flex gap-2 items-center">
            <img
              src="https://i.ibb.co.com/HpVH7w59/images-14.jpg"
              className="w-10 h-10 rounded-full"
              alt="logo"
            />
            <NavLink to="/" className=" hidden lg:block md:text-2xl font-semibold text-blue-400">
              Online Ticket Booking
            </NavLink>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-lg font-medium">
            <li><NavLink to="/" className="hover:text-blue-300">Home</NavLink></li>
            <li><NavLink to="/ticket" className="hover:text-blue-300">Tickets</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-300">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink></li>

            {user && (
              <li>
                <NavLink to="/my-bookings" className="hover:text-blue-300">
                  My Booking
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <>
              <img
                src={user.photoURL || "https://i.ibb.co.com/3yVwQ0k/default-avatar.png"}
                className="w-8 h-8 rounded-full border"
                alt="user"
              />

              <span className="font-medium text-white hidden md:block">
                {user.displayName || user.email}
              </span>

              <NavLink
                to={getDashboardPath()}
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

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-[#011638] text-white px-6 py-4 space-y-3 shadow-inner">
          <NavLink to="/" className="block hover:text-blue-400">Home</NavLink>
          <NavLink to="/ticket" className="block hover:text-blue-400">Tickets</NavLink>
          <NavLink to="/about" className="block hover:text-blue-400">About</NavLink>
          <NavLink to="/contact" className="block hover:text-blue-400">Contact</NavLink>

          {user && (
            <>
              <NavLink to="/my-bookings" className="block hover:text-blue-400">My Booking</NavLink>
              <NavLink to={getDashboardPath()} className="block hover:text-blue-400">Dashboard</NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
