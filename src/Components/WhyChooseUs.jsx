import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTicketAlt,
  FaHeadset,
  FaUserFriends,
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Secure Payment Gateway",
    description:
      "Your transactions are fully encrypted, ensuring maximum safety and reliability.",
  },
  {
    icon: FaTicketAlt,
    title: "Instant Ticket Confirmation",
    description:
      "Receive instant confirmation through email or SMS right after booking.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Customer Support",
    description:
      "Our expert support team is available anytime to assist you with your queries.",
  },
  {
    icon: FaUserFriends,
    title: "User-Friendly Interface",
    description:
      "Simple, intuitive platform designed for a seamless ticket booking experience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 to-blue-100 
    dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight 
          text-blue-900 dark:text-white mb-16"
        >
          Why Choose Us
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 6,
                  rotateY: -6,
                  boxShadow: "0 15px 40px rgba(59,130,246,0.25)",
                }}
                className="relative group cursor-pointer 
                rounded-2xl p-[2px]
                bg-gradient-to-br from-blue-500/30 via-blue-300/30 to-blue-200/20
                dark:from-blue-400/20 dark:via-blue-500/10 dark:to-blue-700/20
                transition-all duration-300 shadow-xl hover:shadow-blue-300/40"
              >
                {/* Inner Card */}
                <div className="rounded-2xl h-full
                bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl 
                border border-white/40 dark:border-gray-700/40 
                p-8 transition duration-300">
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center
                  rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-400
                  dark:from-blue-400 dark:via-blue-500 dark:to-blue-600
                  ring-4 ring-white/40 dark:ring-gray-800/50
                  shadow-md shadow-blue-500/20 group-hover:scale-110 
                  transition-transform duration-300">
                    <Icon className="text-4xl text-white drop-shadow-md" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 
                  text-blue-900 dark:text-blue-200 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
