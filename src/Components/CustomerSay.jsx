import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    role: "Frequent Traveler",
    image: "https://i.ibb.co.com/GvNgZf52/images-26.jpg",
    message:
      "Booking tickets has never been easier! Fast and reliable service every time.",
  },
  {
    name: "Jane Smith",
    role: "Event Goer",
    image: "https://i.ibb.co.com/0VG07cqm/images-27.jpg",
    message:
      "I love how easy it is to find event tickets. Highly recommended platform!",
  },
  {
    name: "Sara Williams",
    role: "Concert Lover",
    image: "https://i.ibb.co/fLyL8y5/Female-CEO.jpg",
    message: "I can book my tickets within minutes! Super convenient and safe.",
  },
  {
    name: "Michael Lee",
    role: "Business Traveler",
    image: "https://i.ibb.co.com/nM1jQfTV/images-28.jpg",
    message: "Reliable and fast platform. I always use it for my trips.",
  },
  {
    name: "Emily Brown",
    role: "Adventure Seeker",
    image: "https://i.ibb.co.com/WWXddpBP/EB-headshot-hires.jpg",
    message: "I found amazing travel deals here. Highly recommended!",
  },
];

const CustomerSay = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900 dark:text-blue-300"
        >
          What Our Customers Say
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="
                  p-6 rounded-2xl shadow-xl
                  bg-white/20 dark:bg-gray-800/30 
                  backdrop-blur-lg border border-white/30 dark:border-gray-700/40
                  text-center
                "
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover shadow mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {t.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  {t.message}
                </p>

                <div className="flex justify-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerSay;
