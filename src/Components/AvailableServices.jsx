import React from "react";
import { motion } from "framer-motion";

// Replace these URLs with your actual images or local assets
const services = [
  {
    img: "https://i.ibb.co.com/8DnyhjYG/images-20.jpg",
    title: "Bus Ticket",
    description: "Book comfortable bus tickets to your favorite destinations.",
  },
  {
    img: "https://i.ibb.co.com/b5kfcQzF/istockphoto-178489146-612x612.jpg",
    title: "Train Ticket",
    description: "Reserve train seats easily with real-time availability.",
  },
  {
    img: "https://i.ibb.co.com/1JPQdgsf/Eid220170611171948.webp",
    title: "Launch Ticket",
    description: "Enjoy river cruises with hassle-free ticket booking.",
  },
  {
    img: "https://i.ibb.co.com/8npv4124/4904933.webp",
    title: "Air Ticket",
    description: "Book flights quickly and securely online.",
  },
];

const AvailableServices = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-all">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-white mb-16">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 
                       rounded-3xl p-6 shadow-lg hover:shadow-2xl cursor-pointer transition-all"
          >
            <motion.div
              className="flex flex-col items-center text-center"
              whileHover={{ rotateY: 8, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 mb-4 rounded-full shadow-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AvailableServices;
