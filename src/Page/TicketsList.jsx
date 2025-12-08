import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllTicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://online-ticket-booking-server-side.vercel.app/tickets")
      .then((res) => res.json())
      .then((data) => {
        const approved = data.filter(
          (t) => t.approved || t.isApproved || t.status === "approved"
        );

        setTickets(approved);
        setFilteredTickets(approved);

        const cats = [
          "All",
          ...new Set(
            approved.map(
              (t) =>
                t.category ||
                t.transportType ||
                t.transport ||
                "General"
            )
          ),
        ];

        setCategories(cats);
      })
      .catch(() => setError("Failed to load tickets"))
      .finally(() => setLoading(false));
  }, []);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") return setFilteredTickets(tickets);

    setFilteredTickets(
      tickets.filter(
        (t) =>
          (t.category ||
            t.transportType ||
            t.transport ||
            "General") === cat
      )
    );
  };

  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white">
        Loading tickets...
      </div>
    );

  if (error)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <section className="bg-gradient-to-br from-[#020617] to-[#0f172a] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            All Available Tickets
          </h1>
          <p className="text-gray-400">
            Browse all verified and approved tickets from our platform
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ticket Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTickets.map((ticket) => (
            <article
              key={ticket._id}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl 
                       overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl 
                       transition duration-300 group min-h-[440px] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  ৳ {ticket.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col h-full text-white">

                <h2 className="text-lg font-semibold mb-1">{ticket.title}</h2>

                <p className="text-sm text-gray-400 mb-3">
                  {ticket.from} → {ticket.to}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-white/10">
                    🚍 {ticket.transportType}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-white/10">
                    🎟 {ticket.quantity} Seats
                  </span>
                </div>

                {/* Perks */}
                {ticket.perks?.length > 0 && (
                  <p className="text-sm text-gray-400 mb-4">
                    ⭐ {ticket.perks.slice(0, 2).join(", ")}
                  </p>
                )}

                {/* Bottom Section */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {ticket.departureDate || "Flexible"}
                  </span>

                  <Link
                    to={`/tickets/${ticket._id}`}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 
                               transition font-medium text-white shadow"
                  >
                    See Details
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
