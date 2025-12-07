import React from "react";
import { Ticket } from "lucide-react"; // Icon library
import { motion } from "framer-motion";

const offers = [
  {
    title: "20% OFF on Dhaka → Chittagong",
    description: "Book now and enjoy 20% discount on all Dhaka to Chittagong routes!",
    bg: "from-yellow-400 via-red-400 to-pink-500",
  },
  {
    title: "Eid Festival Special",
    description: "Celebrate Eid with special discounts on all routes this festive season.",
    bg: "from-green-400 via-teal-400 to-blue-500",
  },
  {
    title: "New User Promo Code",
    description: "Sign up now and get instant 15% off on your first booking!",
    bg: "from-purple-400 via-pink-500 to-red-500",
  },
];

const PremiumOffers = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-white mb-12">
        Latest Offers & Discounts
      </h2>

      {/* MARQUEE SCROLL */}
      <div className="overflow-x-hidden relative">
        <div className="flex gap-6 animate-marquee hover:animate-none">
          {offers.concat(offers).map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`min-w-[250px] md:min-w-[300px] rounded-2xl p-6 text-white shadow-2xl flex flex-col gap-3 items-start justify-center bg-gradient-to-r ${offer.bg} cursor-pointer border border-white/20 backdrop-blur-sm transition`}
            >
              <div className="flex items-center gap-2 text-lg md:text-xl font-bold">
                <Ticket size={24} /> {offer.title}
              </div>
              <p className="text-sm md:text-base">{offer.description}</p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                Grab Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MARQUEE ANIMATION */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default PremiumOffers;
