import React from "react";
import { motion } from "framer-motion";

// Replace these URLs with your actual images or local assets
const services = [
  {
    img: "https://i.ibb.co.com/8DnyhjYG/images-20.jpg",
    title: "Bus Ticket",
    description: "Book comfortable bus tickets to your favorite destinations."
  },
  {
    img: "https://i.ibb.co.com/b5kfcQzF/istockphoto-178489146-612x612.jpg",
    title: "Train Ticket",
    description: "Reserve train seats easily with real-time availability."
  },
  {
    img: "https://i.ibb.co.com/1JPQdgsf/Eid220170611171948.webp",
    title: "Launch Ticket",
    description: "Enjoy river cruises with hassle-free ticket booking."
  },
  {
    img: "https://i.ibb.co.com/8npv4124/4904933.webp",
    title: "Air Ticket",
    description: "Book flights quickly and securely online."
  }
];

const AvailableServices = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl p-6 shadow-xl cursor-pointer perspective"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex flex-col items-center text-center"
              whileHover={{ rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 mb-4 rounded-full shadow-lg"
              />
              <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AvailableServices;
