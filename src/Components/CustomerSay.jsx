// src/components/CustomerSay.js
import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerSay = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Frequent Traveler",
      image: "https://i.ibb.co/2N0yM2C/user.png",
      message:
        "Booking tickets has never been easier! Fast and reliable service every time.",
    },
    {
      name: "Jane Smith",
      role: "Event Goer",
      image: "https://i.ibb.co/fLyL8y5/Female-CEO.jpg",
      message:
        "I love how easy it is to find event tickets. Highly recommended platform!",
    },
    {
      name: "Ali Khan",
      role: "Traveler",
      image: "https://i.ibb.co/2N0yM2C/user.png",
      message: "Great customer support and seamless booking experience.",
    },
    {
      name: "Sara Williams",
      role: "Concert Lover",
      image: "https://i.ibb.co/fLyL8y5/Female-CEO.jpg",
      message:
        "I can book my tickets within minutes! Super convenient and safe.",
    },
    {
      name: "Michael Lee",
      role: "Business Traveler",
      image: "https://i.ibb.co/2N0yM2C/user.png",
      message: "Reliable and fast platform. I always use it for my trips.",
    },
    {
      name: "Emily Brown",
      role: "Adventure Seeker",
      image: "https://i.ibb.co/fLyL8y5/Female-CEO.jpg",
      message: "I found amazing travel deals here. Highly recommended!",
    },
    {
      name: "David Johnson",
      role: "Movie Goer",
      image: "https://i.ibb.co/2N0yM2C/user.png",
      message: "Easy ticket booking for movies and events. Love it!",
    },
    {
      name: "Laura Davis",
      role: "Traveler",
      image: "https://i.ibb.co/fLyL8y5/Female-CEO.jpg",
      message:
        "A trustworthy platform for all kinds of tickets. Smooth experience.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900 animate-fadeInDown">
          What Our Customers Say
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-500 animate-fadeUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-1 text-blue-800">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{t.role}</p>
              <p className="text-gray-600 text-sm">{t.message}</p>
              <div className="flex justify-center mt-3 gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInDown {
            animation: fadeInDown 1s ease-in-out forwards;
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 1s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default CustomerSay;
