import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "BusCompany", logo: "https://i.ibb.co.com/GfNj3355/sfondo-gamma.jpg" },
  { name: "TrainCompany", logo: "https://i.ibb.co.com/9mQ58QgQ/images-23.jpg" },
  { name: "PaymentProvider", logo: "https://i.ibb.co.com/8hSNzmn/images-24.jpg" },
  { name: "LaunchCo", logo: "https://i.ibb.co.com/svJtwBkd/images-25.jpg" },
  { name: "AnotherPartner", logo: "https://i.ibb.co.com/VW7pqFkS/istockphoto-185982719-612x612.jpg" },
];

const Partners = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-white mb-10 sm:mb-12">
          Trusted By Leading Partners
        </h2>

        {/* Infinite Auto Scroll */}
        <div className="overflow-hidden w-full relative">
          <motion.div
            className="flex items-center gap-6 sm:gap-12"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.10 }}
                className="relative backdrop-blur-xl 
                  bg-white/40 dark:bg-white/10 
                  border border-white/30 dark:border-white/20 
                  shadow-md p-3 sm:p-5 rounded-xl 
                  w-28 h-16 sm:w-40 sm:h-24 
                  flex items-center justify-center 
                  hover:shadow-2xl transition-all duration-300
                  hover:border-blue-500 hover:shadow-blue-300/40"
              >
                {/* Tooltip for larger screens only */}
                <span className="hidden sm:block absolute -top-8 opacity-0 hover:opacity-100 
                  bg-black text-white text-xs px-2 py-1 rounded-md transition">
                  {partner.name}
                </span>

                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 sm:max-h-14 w-auto object-contain rounded-md shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
