// src/components/Footer.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaCcPaypal, FaCcMastercard, FaCcVisa, FaCcStripe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt1 py-10 bg-[#011638] text-white">
      <div className="max-w-9xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Column 1: Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://i.ibb.co/HpVH7w59/images-14.jpg"
              className="w-12 h-12 rounded-full shadow"
              alt="logo"
            />
            <h2 className="text-2xl font-semibold text-blue-300">
              Online Ticket Booking
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Book bus, train, launch & flight tickets easily. Fast, secure, and user-friendly platform.
          </p>

          {/* Social Icons */}
          <div className=" py-5 flex gap-4 mt-5 text-2xl">
            <a href="https://web.facebook.com/md.badsha.sheikh.423531/" target="_blank" className="hover:text-blue-400 transition"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/md-badsha-sheikh/" target="_blank" className="hover:text-blue-400 transition"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-300">Quick Links</h2>
          <ul className="space-y-3 text-gray-300">
            <li><NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink></li>
            <li><NavLink to="/tickets" className="hover:text-blue-400 transition">Tickets</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-400 transition">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-400 transition">Contact</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-300">Contact Info</h2>
          <p className="text-gray-300 mb-2">📧 mdbadshasheikh2022@gmail.com</p>
          <p className="text-gray-300 mb-2">📞 +880 1998414834</p>
          <p className="text-gray-300">📍 Dhaka, Bangladesh</p>
        </div>

        {/* Column 4: Payment Methods */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-300">Payment Methods</h2>
          <div className="flex gap-4 text-3xl text-gray-300">
            <FaCcPaypal className="hover:text-blue-500 transition" />
            <FaCcMastercard className="hover:text-red-500 transition" />
            <FaCcVisa className="hover:text-blue-400 transition" />
            <FaCcStripe className="hover:text-indigo-400 transition" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className=" text-center py-5 bg-black/20 text-gray-300 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Online Ticket Booking — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
