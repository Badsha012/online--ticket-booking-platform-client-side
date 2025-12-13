// DashboardLayout.jsx
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LogOut, Home, User, Ticket, CreditCard, Briefcase, PlusCircle, Package, FileText, BarChart3, Shield, Users, Megaphone } from "lucide-react";

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const role = user?.role;

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl transition ${
      isActive
        ? "bg-blue-600 text-white shadow"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gray-100">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN */}
      <div className="drawer-content flex flex-col">
        {/* TOP NAV */}
        <header className="navbar bg-white border-b sticky top-0 z-50 px-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square">☰</label>
          </div>

          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-800">Ticket Booking Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:block text-sm text-gray-600">{user?.email}</span>
            <span className="badge badge-outline capitalize">{role}</span>
            <img
              src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="avatar"
              className="w-9 h-9 rounded-full border"
            />
            <button onClick={logout} className="btn btn-sm btn-outline gap-2">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-72 bg-white border-r min-h-screen px-4 py-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600">Dashboard</h2>
            <p className="text-sm text-gray-500">Welcome back 👋</p>
          </div>

          <nav className="space-y-2">
            <NavLink to="/" className={linkClass}>
              <Home size={18} /> Home
            </NavLink>

            {/* USER */}
            {role === "user" && (
              <>
                <NavLink to="/dashboard/profile" className={linkClass}>
                  <User size={18} /> Profile
                </NavLink>
                <NavLink to="/dashboard/my-bookings" className={linkClass}>
                  <Ticket size={18} /> My Bookings
                </NavLink>
                <NavLink to="/dashboard/transactions" className={linkClass}>
                  <CreditCard size={18} /> Transactions
                </NavLink>
              </>
            )}

            {/* VENDOR */}
            {role === "vendor" && (
              <>
                <NavLink to="/dashboard/vendor-profile" className={linkClass}>
                  <Briefcase size={18} /> Vendor Profile
                </NavLink>
                <NavLink to="/dashboard/add-ticket" className={linkClass}>
                  <PlusCircle size={18} /> Add Ticket
                </NavLink>
                <NavLink to="/dashboard/my-tickets" className={linkClass}>
                  <Package size={18} /> My Tickets
                </NavLink>
                <NavLink to="/dashboard/requested-bookings" className={linkClass}>
                  <FileText size={18} /> Requests
                </NavLink>
                <NavLink to="/dashboard/revenue" className={linkClass}>
                  <BarChart3 size={18} /> Revenue
                </NavLink>
              </>
            )}

            {/* ADMIN */}
            {role === "admin" && (
              <>
                <NavLink to="/dashboard/admin-profile" className={linkClass}>
                  <Shield size={18} /> Admin Profile
                </NavLink>
                <NavLink to="/dashboard/manage-tickets" className={linkClass}>
                  <Ticket size={18} /> Manage Tickets
                </NavLink>
                <NavLink to="/dashboard/manage-users" className={linkClass}>
                  <Users size={18} /> Manage Users
                </NavLink>
                <NavLink to="/dashboard/advertise" className={linkClass}>
                  <Megaphone size={18} /> Advertise
                </NavLink>
              </>
            )}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;