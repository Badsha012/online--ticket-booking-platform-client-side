import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Have questions or need support? Our team is ready to help you 24/7.
        </p>
      </section>

      {/* ===== CONTACT INFO + FORM ===== */}
      <section className="max-w-6xl     mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">

        {/* ---- LEFT INFO ---- */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800  typing-text">Get In Touch</h2>
          <p className="text-gray-600  typing-text">
            Feel free to reach out for any ticket booking issues, partnership
            opportunities, or general inquiries.
          </p>

          <div className="space-y-4 text-gray-700  typing-text">
            <p>📍 Address: Dhaka, Bangladesh</p>
            <p>📞 Phone: +880 1998414834</p>
            <p>✉️ Email: mdbadshasheikh2022@gmail.com</p>
            <p>🕘 Support Time: 24/7</p>
          </div>
        </div>

        {/* ---- RIGHT FORM ---- */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== MAP SECTION (OPTIONAL) ===== */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=dhaka&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
