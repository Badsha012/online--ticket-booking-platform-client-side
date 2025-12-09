import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function TicketDetailsPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://online-ticket-booking-server-side.vercel.app/tickets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTicket(data);
      })
      .catch(() => setError("Failed to load ticket details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white">
        Loading ticket details...
      </div>
    );

  if (error)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-400">
        {error}
      </div>
    );

  if (!ticket)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-300">
        Ticket Not Found
      </div>
    );

  return (
    <section className="bg-gradient-to-br from-[#020617] to-[#0f172a] min-h-screen py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          to="/tickets"
          className="inline-block mb-8 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300"
        >
          ← Back to Tickets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT: Image */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={ticket.image}
              alt={ticket.title}
              className="w-full h-full object-cover"
            />

            <span className="absolute top-4 right-4 bg-blue-600 px-4 py-2 rounded-full shadow text-white">
              ৳ {ticket.price}
            </span>
          </div>

          {/* RIGHT: Details */}
          <div>
            <h1 className="text-4xl font-bold mb-3">{ticket.title}</h1>

            <p className="text-gray-400 text-sm mb-5">
              {ticket.from} → {ticket.to}
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                🚍 {ticket.transportType}
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                🎟 {ticket.quantity} Seats
              </span>
              {ticket.category && (
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  📦 {ticket.category}
                </span>
              )}
            </div>

            {/* Departure Date */}
            <div className="mb-4">
              <p className="text-gray-400 text-sm">Departure Date</p>
              <p className="text-lg font-semibold">
                {ticket.departureDate || "Flexible"}
              </p>
            </div>

            {/* Perks */}
            {ticket.perks?.length > 0 && (
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-1">Included Perks</p>
                <ul className="space-y-1">
                  {ticket.perks.map((perk, index) => (
                    <li key={index} className="text-gray-300">
                      ⭐ {perk}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description */}
            {ticket.description && (
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-1">Description</p>
                <p className="text-gray-300">{ticket.description}</p>
              </div>
            )}

            {/* CTA Buttons */}
            <Link to={`/book/${ticket._id}`} className="flex gap-4 mt-8">
              <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 shadow font-semibold">
                Book Now
              </button>

              <button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 shadow font-semibold">
                Add to Wishlist
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
