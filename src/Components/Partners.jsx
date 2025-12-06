import React from "react";
import { motion } from "framer-motion";

// Replace these URLs with your partner/company logos
const partners = [
  { name: "BusCompany", logo: "https://i.ibb.co/4p3qkWm/buscompany.png" },
  { name: "TrainCompany", logo: "https://i.ibb.co/0GpY7Dv/train.png" },
  { name: "PaymentProvider", logo: "https://i.ibb.co/x6v6JpT/airplane.png" },
  { name: "LaunchCo", logo: "https://i.ibb.co/3h0y7pz/launch.png" },
  { name: "AnotherPartner", logo: "https://i.ibb.co/4S2r8V1/bus.png" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
        Trusted By
      </h2>

      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center w-32 h-20"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-12 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
