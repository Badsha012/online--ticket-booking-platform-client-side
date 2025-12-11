import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyBookingsList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://online-ticket-booking-server-side.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://online-ticket-booking-server-side.vercel.app/booking/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Booking Deleted Successfully!", { position: "top-right" });

        setBookings(bookings.filter((item) => item._id !== id));
      }
    } catch (error) {
      toast.error("Delete Failed!", { position: "top-right" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <ToastContainer />

      <h1 className="text-3xl font-bold mb-8 text-center">My Bookings</h1>

      {bookings.length === 0 && (
        <p className="text-gray-400 text-center">No bookings found</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((item) => (
          <div
            key={item._id}
            className="bg-white/10 p-5 rounded-xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-bold">{item.ticketTitle}</h2>
            <p className="text-gray-300">
              {item.from} → {item.to}
            </p>

            <p className="mt-1">Seats: <span className="font-semibold">{item.seats}</span></p>

            <p className="text-yellow-400 mt-1">
              Status: <span className="font-semibold">{item.status}</span>
            </p>

            <button
              onClick={() => handleDelete(item._id)}
              className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
