// DashboardLayout.jsx
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  const role = user?.role;

  return (
    <div className="drawer lg:drawer-open bg-base-200 min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT AREA */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="navbar bg-white shadow-md sticky top-0 z-50">
          {/* Drawer button for mobile */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost text-2xl"
            >
              ☰
            </label>
          </div>

          {/* Title */}
          <div className="flex-1 px-4 font-bold text-lg text-blue-700">
            Online Booking Ticket Dashboard
          </div>

          {/* User Section */}
          <div className="flex items-center gap-3 pr-4">
            <span>{user?.email}</span>
            <img
              src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              className="w-10 h-10 rounded-full border"
              alt="User Avatar"
            />
          </div>
        </div>

        {/* Outlet Content */}
        <div className="p-5 bg-base-100 flex-1 min-h-screen">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side h-full min-h-screen">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 bg-white p-6 h-full min-h-screen overflow-y-auto shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-5">Navigation</h2>

          <ul className="menu space-y-2">
            <li>
              <NavLink to="/">🏠 Home</NavLink>
            </li>

            {/* USER NAVIGATION */}
            {role === "user" && (
              <>
                <li>
                  <NavLink to="/dashboard/profile">👤 User Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-bookings">
                    🎫 My Booked Tickets
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/transactions">💳 Transactions</NavLink>
                </li>
              </>
            )}

            {/* VENDOR NAVIGATION */}
            {role === "vendor" && (
              <>
                <li>
                  <NavLink to="/dashboard/vendor-profile">
                    🧑‍💼 Vendor Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-ticket">➕ Add Ticket</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-tickets">📦 My Tickets</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/requested-bookings">
                    📑 Requested Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/revenue">📊 Revenue</NavLink>
                </li>
              </>
            )}

            {/* ADMIN NAVIGATION */}
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
                  <NavLink to="/dashboard/advertise">📢 Advertise</NavLink>
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
