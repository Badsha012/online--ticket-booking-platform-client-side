// src/components/WhyChooseUs.js
import React from "react";
import { FaShieldAlt, FaTicketAlt, FaHeadset, FaUserFriends } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-blue-700 mb-4" />,
      title: "Secure Payment Gateway",
      description:
        "All transactions are protected with advanced encryption for your safety.",
    },
    {
      icon: <FaTicketAlt className="text-4xl text-blue-700 mb-4" />,
      title: "Instant Ticket Confirmation",
      description:
        "Book tickets quickly and receive instant confirmation via email or SMS.",
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-700 mb-4" />,
      title: "24/7 Customer Support",
      description:
        "Our support team is always available to assist you with bookings or inquiries.",
    },
    {
      icon: <FaUserFriends className="text-4xl text-blue-700 mb-4" />,
      title: "User-Friendly Interface",
      description:
        "Our platform is simple and intuitive, making ticket booking a breeze.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition transform duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
