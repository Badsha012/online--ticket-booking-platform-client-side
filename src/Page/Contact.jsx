import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-blue-100 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Have questions or need support? Our team is ready to help you 24/7.
        </motion.p>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
        
        {/* LEFT INFO */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out for any ticket booking issues, partnership opportunities, or general inquiries.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📍 Address: Dhaka, Bangladesh</p>
            <p>📞 Phone: +880 1998414834</p>
            <p>✉️ Email: mdbadshasheikh2022@gmail.com</p>
            <p>🕘 Support Time: 24/7</p>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>

          <form className="space-y-4">
            {[
              { label: "Full Name", type: "text", placeholder: "Your Name" },
              { label: "Email", type: "email", placeholder: "your@email.com" },
              { label: "Subject", type: "text", placeholder: "Subject" }
            ].map((field, i) => (
              <div key={i}>
                <label className="block mb-1 text-sm font-medium">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=dhaka&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>

    </div>
  );
};

export default Contact;
