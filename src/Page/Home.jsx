import React from "react";

const tickets = [
  // Dummy tickets (Replace with your API data)
  {
    id: 1,
    title: "Dhaka to Cox's Bazar",
    price: 1200,
    quantity: 30,
    transport: "Bus",
    perks: "AC, Comfortable Seats, Snacks",
    img: "https://i.ibb.co/7RkX9dK/bus.jpg",
  },
  {
    id: 2,
    title: "Dhaka to Chittagong",
    price: 900,
    quantity: 20,
    transport: "Train",
    perks: "AC Coach, WiFi",
    img: "https://i.ibb.co/DkHk86s/train.jpg",
  },
];

const Home = () => {
  return (
    <div className="w-full">

      {/* 🌟 HERO SECTION */}
      <div className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/w6FQ3VT/hero-banner.jpg')",
        }}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center">
          <h1 className="text-4xl font-bold mb-3">Explore Tickets Easily</h1>
          <p className="text-lg">Find the best routes, compare prices & book your tickets instantly.</p>
        </div>
      </div>

      {/* ✔️ ADMIN SELECTED TICKETS */}
      <section className="py-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Tickets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...tickets, ...tickets].slice(0, 6).map((t, i) => (
            <div key={i} className="border rounded-xl shadow p-4 bg-white">
              <img src={t.img} alt="" className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-3">{t.title}</h3>

              <p className="text-gray-600">Price: <span className="font-bold">{t.price} BDT</span></p>
              <p className="text-gray-600">Available: {t.quantity}</p>
              <p className="text-gray-600">Transport: {t.transport}</p>
              <p className="text-gray-600">Perks: {t.perks}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                See Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🆕 LATEST TICKETS SECTION */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Latest Tickets</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...tickets, ...tickets].slice(0, 8).map((t, i) => (
              <div key={i} className="border rounded-xl shadow p-4 bg-white">
                <img src={t.img} alt="" className="w-full h-40 object-cover rounded-lg" />
                <h3 className="text-xl font-semibold mt-3">{t.title}</h3>

                <p className="text-gray-600">Price: <span className="font-bold">{t.price} BDT</span></p>
                <p className="text-gray-600">Available: {t.quantity}</p>
                <p className="text-gray-600">Transport: {t.transport}</p>
                <p className="text-gray-600">Perks: {t.perks}</p>

                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                  See Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ EXTRA SECTION 1: Popular Routes */}
      <section className="py-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Popular Routes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Dhaka–Cox’s Bazar", "Dhaka–Sylhet", "Dhaka–Rajshahi", "Dhaka–Barishal"].map((route, i) => (
            <div key={i} className="p-4 border rounded-lg bg-blue-50 text-center font-medium">
              {route}
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ EXTRA SECTION 2: Why Choose Us */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl shadow text-center">
              <h3 className="font-semibold text-lg mb-2">Best Price</h3>
              <p className="text-gray-600">We guarantee the best travel price in the market.</p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow text-center">
              <h3 className="font-semibold text-lg mb-2">Fast Booking</h3>
              <p className="text-gray-600">Book tickets instantly without any hassle.</p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow text-center">
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">We are always here to help you.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
