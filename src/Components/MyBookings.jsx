import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Layout/AuthProvider";

export default function MyBookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Load my bookings
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://online-ticket-booking-server-side.vercel.app/bookings?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  // ✅ Cancel booking handler
  const handleCancel = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this ticket?");
    if (!confirmCancel) return;

    fetch(`https://online-ticket-booking-server-side.vercel.app/booking/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Cancelled" }),
    })
      .then(res => res.json())
      .then(() => {
        // update UI instantly
        setBookings(prev =>
          prev.map(item =>
            item._id === id ? { ...item, status: "Cancelled" } : item
          )
        );
      });
  };

  if (loading) {
    return (
      <h2 className="text-center mt-20 text-xl font-semibold text-blue-600 animate-pulse">
        Loading your bookings...
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">
          My Booked Tickets
        </h1>
        <p className="text-gray-600 mt-1">
          Manage your booked tickets
        </p>
      </div>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You have no bookings yet
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bookings.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg p-5 space-y-3"
            >
              <h2 className="text-xl font-bold text-blue-800">
                {item.title}
              </h2>

              <p><b>Transport:</b> {item.transport}</p>
              <p><b>Price:</b> ৳{item.price}</p>
              <p><b>Quantity:</b> {item.quantity}</p>

              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  item.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Cancelled"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>

              {/* ✅ Cancel Button */}
              {item.status !== "Cancelled" && (
                <button
                  onClick={() => handleCancel(item._id)}
                  className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold"
                >
                  Cancel Ticket
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
