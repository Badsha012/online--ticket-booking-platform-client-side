import React from "react";
import { motion } from "framer-motion";

const routes = [
  { from: "Dhaka", to: "Chittagong", duration: "6h", price: "$15" },
  { from: "Dhaka", to: "Sylhet", duration: "5h", price: "$12" },
  { from: "Dhaka", to: "Khulna", duration: "7h", price: "$18" },
  { from: "Dhaka", to: "Rajshahi", duration: "6.5h", price: "$16" },
  { from: "Chittagong", to: "Cox's Bazar", duration: "4h", price: "$10" },
  { from: "Sylhet", to: "Dhaka", duration: "5h", price: "$12" },
];

const PopularRoutes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Popular Routes
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {routes.map((route, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-xl cursor-pointer perspective"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl"
                whileHover={{ rotateY: 10, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  {route.from} → {route.to}
                </h2>
                <p className="text-gray-600 mb-1">Duration: {route.duration}</p>
                <p className="text-gray-600 mb-4">Price: {route.price}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularRoutes;
