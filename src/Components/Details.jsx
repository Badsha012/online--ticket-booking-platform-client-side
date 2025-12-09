import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Layout/AuthProvider";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  const [countdown, setCountdown] = useState("");
  const [ setIsExpired] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");

  // ✅ Load Ticket
  useEffect(() => {
    fetch(`https://online-ticket-booking-server-side.vercel.app/tickets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTicket(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // ✅ Countdown Timer (only for display)
  useEffect(() => {
    if (!ticket) return;

    const interval = setInterval(() => {
      const now = new Date();
      const departure = new Date(
        `${ticket.departureDate} ${ticket.departureTime}`
      );
      const diff = departure - now;

      if (diff <= 0) {
        setCountdown("Time Expired");
        setIsExpired(true);
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [ticket]);

  // ✅ Handle Booking
  const handleBooking = () => {
    setError("");

    if (qty < 1) {
      setError("Quantity must be at least 1");
      return;
    }

    if (qty > ticket.quantity) {
      setError("Quantity can't be more than available seats");
      return;
    }

    const bookingData = {
      ticketId: ticket._id,
      title: ticket.title,
      transport: ticket.transport,
      price: ticket.price,
      quantity: qty,
      userEmail: user?.email,
      status: "Pending",
      bookingTime: new Date(),
    };

    fetch("https://online-ticket-booking-server-side.vercel.app/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then(() => {
        setShowModal(false);
        navigate("/my-bookings");
      });
  };

  // ✅ Loading State
  if (loading) {
    return (
      <h2 className="text-center mt-16 text-xl font-semibold text-blue-600 animate-pulse">
        Loading...
      </h2>
    );
  }

  // ✅ Not Found
  if (!ticket) {
    return (
      <h2 className="text-center mt-16 text-xl font-semibold text-red-600">
        Ticket not found
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">Ticket Details</h1>
        <p className="text-gray-600 mt-1">
          View your journey details before booking
        </p>
      </div>

      {/* Ticket Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <img src={ticket.image} className="w-full h-72 object-cover" alt="" />

        <div className="p-8 space-y-5">
          <h2 className="text-3xl font-bold text-blue-800">{ticket.title}</h2>

          {/* ✅ Countdown visible but not blocking */}
          <p className="text-lg font-semibold text-red-600">
            Departure Countdown: {countdown}
          </p>

          {/* Journey Information */}
          <div className="bg-gray-100 p-5 rounded-xl border space-y-2">
            <p>
              <b>Departure Date:</b> {ticket.departureDate}
            </p>
            <p>
              <b>Departure Time:</b> {ticket.departureTime}
            </p>
            <p>
              <b>Transport:</b> {ticket.transport}
            </p>
            <p>
              <b>Available Seats:</b> {ticket.quantity}
            </p>
            <p>
              <b>Fare:</b> ৳{ticket.price}
            </p>
          </div>

          {/* ✅ Book Now Button (Testing Mode) */}
          <button
            onClick={() => {
              if (!user) return navigate("/login");
              setShowModal(true);
            }}
            disabled={ticket.quantity === 0} // ✅ only sold out disables
            className={`w-full px-6 py-3 font-bold text-lg rounded-lg 
              ${
                ticket.quantity === 0
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            {ticket.quantity === 0 ? "Sold Out" : "Book Now"}
          </button>
        </div>
      </div>

      {/* ✅ Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4 shadow-lg">
            <h2 className="text-xl font-bold text-blue-800">Book Ticket</h2>

            <label className="block text-gray-700 font-medium">
              Enter Quantity:
            </label>

            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="w-full border p-2 rounded-lg"
            />

            {error && <p className="text-red-600">{error}</p>}

            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={handleBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
