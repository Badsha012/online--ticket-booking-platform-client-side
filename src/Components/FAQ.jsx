// src/components/AdvancedFAQ.js
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, BookOpen, Info, LifeBuoy } from "lucide-react";

/**
 * Features:
 * - Live search filter
 * - Category tabs
 * - Icon + illustration per FAQ
 * - Large left-side title / intro panel
 * - Animated gradient border for active card
 *
 * Requirements:
 * - tailwindcss with dark mode enabled (class strategy recommended)
 * - framer-motion
 * - lucide-react
 */

const rawFaqs = [
  {
    id: 1,
    category: "Booking",
    question: "How do I book a ticket?",
    answer:
      "Select route → choose seats → proceed to secure payment. You'll receive e-ticket via email and SMS.",
    icon: "BookOpen",
    illustration: "https://i.ibb.co.com/GvNgZf52/images-26.jpg",
  },
  {
    id: 2,
    category: "Payments",
    question: "Do you accept card & mobile payments?",
    answer:
      "Yes. We accept major cards, mobile banking apps, and popular payment gateways for secure checkout.",
    icon: "Info",
    illustration: "https://i.ibb.co.com/0VG07cqm/images-27.jpg",
  },
  {
    id: 3,
    category: "Cancellations",
    question: "Can I cancel my booking?",
    answer:
      "Cancellations follow our policy; partial/full refunds are applied depending on fare rules. Processing: 5–7 business days.",
    icon: "LifeBuoy",
    illustration: "https://i.ibb.co/fLyL8y5/Female-CEO.jpg",
  },
  {
    id: 4,
    category: "Support",
    question: "How can I contact customer support?",
    answer:
      "24/7 chat, hotline and email available. Use the Help & Support section on site for instant chat.",
    icon: "Info",
    illustration: "https://i.ibb.co.com/nM1jQfTV/images-28.jpg",
  },
  {
    id: 5,
    category: "Booking",
    question: "Can I book for others?",
    answer:
      "Yes — during checkout provide passenger details for each ticket. Save frequent traveller info for speed.",
    icon: "BookOpen",
    illustration: "https://i.ibb.co.com/YFH4sydV/Emily-Brown.webp",
  },
];

// map icon string -> lucide component
const IconMap = {
  BookOpen,
  Info,
  LifeBuoy,
};

const categories = ["All", ...Array.from(new Set(rawFaqs.map((f) => f.category)))];

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function AdvancedFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");

  // derived list with live search + category
  const faqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rawFaqs.filter((f) => {
      const inCategory = tab === "All" ? true : f.category === tab;
      const inQuery =
        q === "" ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [tab, query]);

  const toggleIndex = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left large title & intro */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-300 leading-tight">
                Frequently Asked
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
                  Questions
                </span>
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Quick answers to the things people ask most. Use the search or
                categories to find what you need — or contact support if you'd
                like more help.
              </p>

              <div className="mt-6 space-y-3">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Search size={16} />
                  </span>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search FAQs..."
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  />
                </div>

                {/* Category tabs */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setTab(c)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition
                        ${tab === c ? "bg-gradient-to-r from-blue-600 to-teal-400 text-white shadow" : "bg-white/60 dark:bg-gray-800/40 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"}
                      `}
                      aria-pressed={tab === c}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <div>Showing <strong>{faqs.length}</strong> results</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ list */}
          <div className="lg:col-span-3">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
              {faqs.length === 0 && (
                <div className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                  No FAQs matched your search. Try a different keyword or contact support.
                </div>
              )}

              {faqs.map((faq, idx) => {
                const IconComponent = IconMap[faq.icon] || Info;
                const isActive = activeIndex === faq.id;

                return (
                  <motion.article
                    key={faq.id}
                    variants={item}
                    layout
                    className={`
                      relative overflow-hidden rounded-2xl border
                      ${isActive ? "faq-gradient-border" : "border-gray-200 dark:border-gray-700"}
                      bg-white/80 dark:bg-gray-800/40 backdrop-blur-md shadow-sm
                    `}
                    aria-labelledby={`faq-${faq.id}`}
                  >
                    {/* gradient glow / animated border element is created via CSS class */}
                    <div className="flex gap-4 p-6 md:p-8">
                      {/* left: illustration + icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <img src={faq.illustration} alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>

                      {/* middle: question + answer */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/30">
                                <IconComponent size={18} className="text-blue-600 dark:text-blue-300" />
                              </div>
                              <h3 id={`faq-${faq.id}`} className="text-lg font-semibold text-blue-800 dark:text-blue-200">
                                {faq.question}
                              </h3>
                            </div>
                            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                              {/* shortened preview when closed */}
                              {!isActive ? (
                                <p className="line-clamp-2">{faq.answer}</p>
                              ) : null}
                            </div>
                          </div>

                          {/* chevron toggle */}
                          <div className="flex-shrink-0">
                            <button
                              onClick={() => toggleIndex(faq.id)}
                              aria-expanded={isActive}
                              aria-controls={`answer-${faq.id}`}
                              className="p-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700/30 transition"
                            >
                              <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                <ChevronDown size={20} className="text-blue-600 dark:text-blue-300" />
                              </motion.div>
                            </button>
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              id={`answer-${faq.id}`}
                              key="answer"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.32 }}
                              className="mt-4 text-gray-700 dark:text-gray-200 text-sm md:text-base"
                            >
                              <p>{faq.answer}</p>

                              {/* optional extras: helpful links / CTA */}
                              <div className="mt-4 flex flex-wrap items-center gap-3">
                                <a href="#" className="text-sm text-blue-600 dark:text-blue-300 font-medium">Read more</a>
                                <a href="#" className="text-sm text-gray-500 dark:text-gray-400">Contact support</a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* component scoped styles for animated gradient border & small utilities */}
      <style>
        {`
          /* animated gradient border for active cards */
          .faq-gradient-border {
            position: relative;
            border-radius: 1rem;
            padding: 1px; /* small padding so inner background shows nicely */
          }
          .faq-gradient-border::before {
            content: "";
            position: absolute;
            inset: 0;
            padding: 1px;
            border-radius: 1rem;
            background: linear-gradient(90deg, rgba(59,130,246,0.18), rgba(14,165,233,0.12), rgba(16,185,129,0.18));
            -webkit-mask: 
              linear-gradient(#000 0 0) content-box, 
              linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            filter: blur(8px);
            opacity: 0.95;
            z-index: 0;
            animation: gradientShift 4s linear infinite;
          }
          .faq-gradient-border > * {
            position: relative;
            z-index: 1;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* small utility for line clamp (if tailwind line-clamp plugin not enabled) */
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </section>
  );
}
