import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="relative py-24 px-4 md:px-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-xl text-center text-white overflow-hidden shadow-lg">
      
      {/* Animated Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Book Your Tickets?
        </h2>
        <p className="mb-6 text-blue-200 text-lg md:text-xl">
          Join thousands of users who trust our platform daily.
        </p>

        <motion.a
          href="/tickets"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition duration-300"
        >
          Book Now
        </motion.a>
      </motion.div>

      {/* Blob Animation CSS */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </section>
  );
};

export default Cta;
