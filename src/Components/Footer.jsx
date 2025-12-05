import React from "react";
import { NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mt-10 py-10"
      style={{ backgroundColor: "#011638", color: "white" }}
    >
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://i.ibb.co.com/HpVH7w59/images-14.jpg"
              className="w-12 h-12 rounded-full shadow"
              alt="logo"
            />
            <h2 className="text-2xl font-semibold text-blue-300">
              Online Ticket Booking
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            A modern and reliable platform for booking bus, train, and event tickets.
            Fast, secure, and user-friendly experience for everyone.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-300">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>
              <NavLink to="/" className="hover:text-blue-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tickets" className="hover:text-blue-400 transition">
                Tickets
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-400 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-400 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-300">
            Contact Info
          </h2>

          <p className="text-gray-300 mb-2">📧 support@ticketbooking.com</p>
          <p className="text-gray-300 mb-2">📞 +880 1234 567 890</p>
          <p className="text-gray-300">📍 Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-5 bg-black/20 text-gray-300 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Online Ticket Booking — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
