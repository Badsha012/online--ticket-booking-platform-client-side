import React from "react";
import { CheckCircle } from "lucide-react"; // icon library (built-in in your environment)

const Works = () => {
  return (
    <div className="bg-blue-900 py-4 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee hover:animate-none text-lg font-semibold flex items-center gap-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">

        <span className="flex items-center gap-2">
          <CheckCircle /> Safe & Secure Booking
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> Fast Confirmation
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> 24/7 Customer Support
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> Affordable Prices
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> Easy Refund Policy
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> Online Payment
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> Verified Operators
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> Real-Time Seat Availability
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> No Hidden Charges
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle /> Trusted by Millions
        </span>

      </div>
    </div>
  );
};

export default Works;
