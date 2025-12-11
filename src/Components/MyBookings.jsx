import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function MyBookings() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seats: 1,
  });

  useEffect(() => {
    fetch(`https://online-ticket-booking-server-side.vercel.app/tickets/${id}`)
      .then((res) => res.json())
      .then((data) => setTicket(data))
      .catch(() => setError("Failed to load ticket"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      ticketId: id,
      ticketTitle: ticket.title,
      from: ticket.from,
      to: ticket.to,
      seats: formData.seats,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      status: "Pending",
    };

    try {
      await fetch("https://online-ticket-booking-server-side.vercel.app/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      alert("Booking Successful!");
      navigate("/my-bookings"); // redirect to booking list
    } catch (error) {
      alert("Booking Failed!");
    }
  };

  if (loading)
    return <div className="min-h-[60vh] flex items-center justify-center text-white">Loading...</div>;

  if (error)
    return <div className="min-h-[60vh] flex items-center justify-center text-red-500">{error}</div>;

  return (
    <section className="bg-gradient-to-br from-[#020617] to-[#0f172a] min-h-screen py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <Link
          to={"/tickets/" + id}
          className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 text-gray-300"
        >
          ← Back
        </Link>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-4">Book Your Ticket</h1>

          <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <h2 className="text-xl font-semibold">{ticket.title}</h2>
            <p className="text-gray-400 text-sm">
              {ticket.from} → {ticket.to}
            </p>
            <p className="mt-2">
              Price: <span className="text-blue-400 font-bold">৳{ticket.price}</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block mb-1 text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Phone</label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Number of Seats</label>
              <input
                type="number"
                min="1"
                max={ticket.quantity}
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
            </div>

            {/* ❗ BUTTON FIXED */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-lg"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
