import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import UserProfile from "../Components/Dashboard/UserProfile";

import PrivateRoute from "../Components/PrivateRoute";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import Login from "../Page/Login";
import MyBookingPage from "../Page/MyBookingPage";
import MyBookings from "../Page/MyBookings"; // ✅ Added
import Register from "../Page/Register";
import TicketDetails from "../Page/TicketDetails";
import TicketsList from "../Page/TicketsList";
import Root from "../RootLayout/Root";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/ticket",
        element: <TicketsList />,
      },
    ],
  },

  // Ticket Details (protected)
  {
    path: "/tickets/:id",
    element: (
      <PrivateRoute>
        <TicketDetails />
      </PrivateRoute>
    ),
  },

  // Book Ticket Page (protected)
  {
    path: "/book/:id",
    element: (
      <PrivateRoute>
        <MyBookingPage />
      </PrivateRoute>
    ),
  },

  // My Bookings (protected)
  {
    path: "/my-bookings",
    element: (
      <PrivateRoute>
        <MyBookings /> 
      </PrivateRoute>
    ),
  },

  // Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
