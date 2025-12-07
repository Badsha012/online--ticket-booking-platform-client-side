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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const PopularRoutes = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-slate-100 to-blue-50 
    dark:from-gray-900 dark:to-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-16"
        >
          Popular Routes
        </motion.h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {routes.map((route, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer rounded-3xl p-1
              bg-gradient-to-br from-blue-300/20 via-blue-200/20 to-blue-100/10
              dark:from-blue-400/20 dark:via-blue-500/10 dark:to-blue-700/20
              shadow-xl hover:shadow-blue-300/40 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotateY: 6, rotateX: 4 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 
                border border-white/30 dark:border-gray-700/40 
                rounded-3xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                  {route.from} → {route.to}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  Duration: {route.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">
                  Price: {route.price}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
