import React from "react";


const AppDownloadSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-10">

        {/* Left: Text + CTA */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Download Our Mobile App
          </h2>
          <p className="text-white/90 text-lg md:text-xl">
            Book tickets anytime, anywhere! Enjoy fast, secure, and convenient bookings from your phone.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-white rounded-lg px-5 py-3 flex items-center gap-2 shadow hover:scale-105 transition-transform">
              <img src="https://i.ibb.co.com/WvNrBVdm/g-pay-660.avif" alt="Play Store" className="w-6 h-6"/>
              <span className="font-semibold text-blue-900">Google Play</span>
            </a>
            {/* You can add App Store button similarly */}
          </div>
        </div>

        {/* Right: App Screenshot */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co.com/9kwWQ4v3/271-2711698-bank-details-railway-e-ticket-logo.png"
            alt="App Screenshot"
            className="rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>

      </div>
    </div>
  );
};

export default AppDownloadSection;
