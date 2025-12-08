import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdvertisementSection = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("https://online-ticket-booking-server-side.vercel.app/Tickets")
      .then((res) => res.json())
      .then((data) => {
        const approved = data.filter((ticket) => ticket.isApproved === true);
        setAds(approved.slice(0, 6));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Featured Advertised Tickets
          </h2>
          <p className="text-gray-400 text-sm">
            Hand-picked top travel deals for you
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ads.map((ticket) => (
            <div
              key={ticket._id}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Price Badge */}
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow">
                  {ticket.price}৳
                </span>
              </div>

              {/* Content */}
              <div className="p-5 text-white space-y-2">
                <h3 className="text-xl font-semibold">
                  {ticket.title}
                </h3>

                <div className="flex justify-between text-sm text-gray-300">
                  <span>🚍 {ticket.transport}</span>
                  <span>🎟 {ticket.quantity} seats</span>
                </div>

                {ticket.perks?.length > 0 && (
                  <p className="text-sm text-gray-300">
                    ⭐ {ticket.perks.slice(0, 2).join(", ")}
                  </p>
                )}

                {/* Button */}
                <Link
                  to={`/tickets/${ticket._id}`}
                  className="inline-block mt-4 w-full text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdvertisementSection;
