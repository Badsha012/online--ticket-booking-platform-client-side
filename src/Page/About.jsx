import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen overflow-hidden">

      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-r from-[#011638] via-blue-900 to-[#012a4a] text-white py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideDown typing-text">
          About Our Online Ticket Booking Platform
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-blue-200 animate-fadeIn delay-200">
          Smart, secure, and fast ticket booking for transport, events & entertainment.
        </p>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://i.ibb.co.com/VcLTxcgW/images-15.jpg"
          alt="Ticket Booking"
          className="rounded-2xl shadow-xl hover:scale-105 transition duration-300 animate-slideLeft"
        />
        <div className="animate-slideRight">
          <h2 className="text-3xl font-bold text-gray-800 mb-4  typing-text">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4  typing-text">
            We are a modern online ticket booking platform trusted by thousands of users. Our system ensures fast transactions, secure payments and instant ticket confirmations.
          </p>
          <p className="text-gray-600 leading-relaxed  typing-text">
            Our goal is to simplify ticket purchasing for everyone with a clean user experience and powerful backend infrastructure.
          </p>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              color: "border-blue-500",
              text: "To provide a fast, reliable, and secure ticket booking platform that saves time and delivers convenience to users worldwide.",
            },
            {
              title: "Our Vision",
              color: "border-green-500",
              text: "To become the most trusted digital ticketing solution by implementing smart technologies and customer-first services.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`shadow-xl p-8 rounded-xl border-l-4 ${item.color} bg-gradient-to-br from-white to-slate-50
                hover:scale-105 hover:-translate-y-2 transition duration-300 animate-fadeUp`}
            >
              <h3 className="text-2xl font-bold mb-3  typing-text">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 animate-fadeIn  typing-text">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Secure Payment Gateway",
              "Instant Ticket Confirmation",
              "24/7 Customer Support",
              "User-Friendly Interface",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl
                  hover:scale-110 hover:bg-blue-50 transition duration-300 animate-zoomIn"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {item}
                </h3>
                <p className="text-gray-600 text-sm">
                  We ensure top quality service with modern infrastructure.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="py-20 bg-[#011638]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-4">
          {[
            ["10K+", "Active Users"],
            ["25K+", "Tickets Booked"],
            ["300+", "Events"],
            ["99.9%", "Success Rate"],
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 rounded-3xl shadow-2xl
                hover:-translate-y-3 transition duration-300 animate-fadeUp"
            >
              <h3 className="text-3xl font-bold">{stat[0]}</h3>
              <p className="text-blue-100">{stat[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
   <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12 animate-fadeIn typing-text">
      Meet Our Team
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          name: "CEO",
          position: "Founder & CEO",
          img: "https://i.ibb.co/fLyL8y5/Female-CEO.jpg",
        },
        {
          name: "CTO",
          position: "Chief Technology Officer",
          img: "https://i.ibb.co.com/Jjvd7bzR/images-16.jpg",
        },
        {
          name: "Manager",
          position: "Operations Manager",
          img: "https://i.ibb.co.com/1YJD2StC/istockphoto-1413766112-612x612.jpg",
        },
      ].map((member, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-2xl shadow-xl hover:scale-110 hover:-translate-y-2 transition duration-300 animate-zoomIn"
        >
          <img
            src={member.img}
            className="w-24 h-24 mx-auto rounded-full mb-4"
            alt={member.name}
          />
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.position}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ===== CTA ===== */}
      <section className="py-24  bg-[#012a4a] rounded-2xl text-center text-white animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4 animate-slideDown">
          Ready to Book Your Tickets?
        </h2>
        <p className="mb-6 text-blue-200 animate-fadeIn delay-200">
          Join thousands of users who trust our platform daily.
        </p>
        <Link
          to="/login"
          className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold
            hover:bg-blue-100 hover:scale-105 transition duration-300"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
};

export default About;
