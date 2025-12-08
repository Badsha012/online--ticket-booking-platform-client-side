import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentlyAddedTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://online-ticket-booking-server-side.vercel.app/Tickets")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].reverse();
        setTickets(sorted.slice(0, 8));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-3">
            Recently Added Tickets
          </h2>
          <p className="text-gray-400">
            Browse the latest travel tickets added by our admin
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-72 bg-white/10 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ticket.image}
                    alt={ticket.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Price Badge */}
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    ৳ {ticket.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 text-white space-y-2">
                  <h3 className="text-lg font-semibold">
                    {ticket.title}
                  </h3>

                  <div className="flex justify-between text-sm text-gray-300">
                    <span>🚍 {ticket.transportType}</span>
                    <span>🎟 {ticket.quantity} Seats</span>
                  </div>

                  {ticket?.perks?.length > 0 && (
                    <p className="text-sm text-gray-400">
                      ⭐ {ticket.perks.slice(0, 2).join(", ")}
                    </p>
                  )}

                  {/* Button */}
                  <Link to={`/tickets/${ticket._id}`}>
                    <button className="mt-4 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default RecentlyAddedTickets;
