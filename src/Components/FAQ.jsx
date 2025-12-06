import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a ticket?",
    answer:
      "You can book a ticket by selecting your route, choosing your seats, and completing the payment securely online.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking according to our cancellation policy. Refunds are processed within 5–7 business days.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refunds are available for cancelled bookings as per the terms and conditions mentioned during the booking process.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our 24/7 support team via email, phone, or live chat available on our website.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-blue-50 transition"
            >
              <span className="text-lg font-semibold text-blue-800">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} className="text-blue-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-600 text-sm md:text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
