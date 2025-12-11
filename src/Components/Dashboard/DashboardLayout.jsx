import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  const role = user?.role; // "user" | "vendor" | "admin"

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="drawer-content flex flex-col">

        {/* 🔹 NAVBAR */}
        <div className="navbar bg-base-200 shadow">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
              ☰
            </label>
          </div>

          <div className="flex-1 px-4 font-bold text-lg">
            Online Ticket Booking Dashboard
          </div>

          <div className="flex items-center gap-3">
            <span>{user?.email}</span>

            <img
              src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </div>

        {/* 🔹 Page Load Area */}
        <div className="p-4 min-h-screen bg-base-100">
          <Outlet />
        </div>
      </div>

      {/* ================= SIDEBAR >>> LEFT MENU ================= */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 bg-base-200 min-h-full p-4">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>

          <ul className="menu space-y-2">

            {/* COMMON LINK */}
            <li>
              <NavLink to="/" className="font-semibold">
                🏠 Home
              </NavLink>
            </li>

            {/* ::::::::::::::::: USER ROLE ::::::::::::::::: */}
            {role === "user" && (
              <>
                <li>
                  <NavLink to="/dashboard/user-profile">
                    👤 User Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/my-bookings">
                    🎫 My Booked Tickets
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/transactions">
                    💳 Transaction History
                  </NavLink>
                </li>
              </>
            )}

            {/* ::::::::::::::::: VENDOR ROLE ::::::::::::::::: */}
            {role === "vendor" && (
              <>
                <li>
                  <NavLink to="/dashboard/vendor-profile">
                    🧑‍💼 Vendor Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/add-ticket">
                    ➕ Add Ticket
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/my-tickets">
                    📦 My Added Tickets
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/requested-bookings">
                    📑 Requested Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/revenue">
                    📊 Revenue Overview
                  </NavLink>
                </li>
              </>
            )}

            {/* ::::::::::::::::: ADMIN ROLE ::::::::::::::::: */}
            {role === "admin" && (
              <>
                <li>
                  <NavLink to="/dashboard/admin-profile">
                    🛡 Admin Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/manage-tickets">
                    📝 Manage Tickets
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/manage-users">
                    👥 Manage Users
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/advertise">
                    📢 Advertise Tickets
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
