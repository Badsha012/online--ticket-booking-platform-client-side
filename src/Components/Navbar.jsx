import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const res = await fetch(
            `https://online-ticket-booking-server-side.vercel.app/users/${currentUser.email}`
          );
          const data = await res.json();
          setRole(data.role);
        } catch (error) {
          console.error(error);
        }
      } else {
        setRole("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logout successful");
  };

  const getDashboardPath = () => {
    if (role === "user") return "/dashboard/profile";
    if (role === "vendor") return "/dashboard/vendor-profile";
    if (role === "admin") return "/dashboard/admin-profile";
    return "/dashboard";
  };

  // ✅ Active link style
  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold border-b-2 border-blue-400"
      : "hover:text-blue-300";

  return (
    <div
      className="w-full shadow-sm sticky top-0 z-50 backdrop-blur-lg"
      style={{ backgroundColor: "#011638", color: "white" }}
    >
      <div className="navbar max-w-9xl mx-auto px-4">

        {/* LEFT */}
        <div className="navbar-start flex items-center">
          <button
            className="lg:hidden text-white mr-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          <div className="flex gap-2 items-center">
            <img
              src="https://i.ibb.co.com/HpVH7w59/images-14.jpg"
              className="w-10 h-10 rounded-full"
              alt="logo"
            />
            <NavLink to="/" end className="hidden lg:block text-2xl font-semibold text-blue-400">
              Online Ticket Booking
            </NavLink>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium gap-6">
            <li><NavLink to="/" end className={navClass}>Home</NavLink></li>
            <li><NavLink to="/ticket" className={navClass}>Tickets</NavLink></li>
            <li><NavLink to="/about" className={navClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={navClass}>Contact</NavLink></li>

            {user && (
              <li>
                <NavLink to="/my-bookings" className={navClass}>
                  My Booking
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <>
              <img
                src={user.photoURL || "https://i.ibb.co.com/3yVwQ0k/default-avatar.png"}
                className="w-8 h-8 rounded-full border"
                alt="user"
              />

              <span className="hidden md:block text-sm">
                {user.displayName || user.email}
              </span>

              <NavLink
                to={getDashboardPath()}
                className="px-3 py-1 bg-green-500 rounded text-sm hover:bg-green-600"
              >
                Dashboard
              </NavLink>

              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-500 rounded text-sm hover:bg-red-600"
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
                className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 text-sm"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-[#011638] px-6 py-4 space-y-3">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/ticket" className={navClass}>Tickets</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>

          {user && (
            <>
              <NavLink to="/my-bookings" className={navClass}>My Booking</NavLink>
              <NavLink to={getDashboardPath()} className={navClass}>Dashboard</NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
