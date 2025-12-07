import React from "react";
import { motion } from "framer-motion";

const AppDownloadSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">

        {/* Left: Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Download Our Mobile App
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            Book tickets anytime, anywhere! Enjoy fast, secure, and convenient bookings from your phone.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <a
              href="#"
              className="bg-white rounded-lg px-6 py-3 flex items-center gap-3 shadow-lg hover:scale-105 hover:shadow-blue-400/40 transition-transform duration-300"
            >
              <img
                src="https://i.ibb.co.com/WvNrBVdm/g-pay-660.avif"
                alt="Google Play"
                className="w-6 h-6"
              />
              <span className="font-semibold text-blue-900">Google Play</span>
            </a>

            <a
              href="#"
              className="bg-white rounded-lg px-6 py-3 flex items-center gap-3 shadow-lg hover:scale-105 hover:shadow-blue-400/40 transition-transform duration-300"
            >
              <img
                src="https://i.ibb.co.com/3s2H5b1/appstore-logo.png"
                alt="App Store"
                className="w-6 h-6"
              />
              <span className="font-semibold text-blue-900">App Store</span>
            </a>
          </div>
        </motion.div>

        {/* Right: App Screenshot */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative rounded-3xl shadow-2xl border-4 border-white/30 overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src="https://i.ibb.co.com/9kwWQ4v3/271-2711698-bank-details-railway-e-ticket-logo.png"
              alt="App Screenshot"
              className="rounded-3xl w-full object-cover"
            />
            {/* Optional floating glow effect */}
            <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AppDownloadSection;
