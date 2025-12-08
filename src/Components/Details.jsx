import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth } from "../firebase";

export default function Details() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [countdown, setCountdown] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://online-ticket-booking-server-side.vercel.app/Tickets/${id}`)
      .then(res => res.json())
      .then(data => setTicket(data));
  }, [id]);

  // ✅ Countdown Timer
  useEffect(() => {
    if (!ticket) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const depart = new Date(ticket.departureTime).getTime();
      const diff = depart - now;

      if (diff <= 0) {
        setIsExpired(true);
        setCountdown("Expired");
        clearInterval(interval);
        return;
      }

      const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setCountdown(`${hrs}h ${mins}m ${secs}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [ticket]);

  const isDisabled =
    isExpired || ticket?.quantity === 0;

  // ✅ Booking Submit
  const handleBooking = () => {
    if (quantity > ticket.quantity) {
      return alert("Available ticket er cheye beshi nite parba na");
    }

    const booking = {
      ticketId: ticket._id,
      email: auth.currentUser.email,
      quantity,
      status: "Pending",
      date: new Date()
    };

    fetch("https://your-server.com/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(() => {
        alert("Booking Successful!");
        setShowModal(false);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{ticket?.title}</h2>
      <p>Route: {ticket?.route}</p>
      <p>Price: ৳{ticket?.price}</p>
      <p>Available Seat: {ticket?.quantity}</p>

      <p className="text-red-500 font-semibold">
        Countdown: {countdown}
      </p>

      <button
        disabled={isDisabled}
        onClick={() => setShowModal(true)}
        className={`btn mt-4 ${
          isDisabled ? "btn-disabled" : "btn-primary"
        }`}
      >
        Book Now
      </button>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-80">
            <h3 className="text-lg font-bold mb-3">
              Enter Ticket Quantity
            </h3>

            <input
              type="number"
              min="1"
              max={ticket.quantity}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="input input-bordered w-full mb-4"
            />

            <button
              onClick={handleBooking}
              className="btn btn-success w-full"
            >
              Confirm Booking
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="btn btn-outline w-full mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
