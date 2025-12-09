import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="relative py-24 px-4 md:px-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl text-center text-white overflow-hidden shadow-2xl">
      
      {/* Floating Animated Blobs */}
      <div className="absolute -top-28 -left-28 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-2xl animate-blob animation-delay-4000 -translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug">
          Ready to Book Your Tickets?
        </h2>
        <p className="mb-8 text-blue-200 text-lg md:text-xl">
          Join thousands of users who trust our platform daily for fast, secure, and hassle-free bookings.
        </p>

        <motion.a
          href="/login"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-blue-900 px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
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
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </section>
  );
};

export default Cta;
