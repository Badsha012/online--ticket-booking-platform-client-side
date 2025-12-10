import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://online-ticket-booking-server-side.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white">
        Loading your bookings...
      </div>
    );

  return (
    <section className="bg-gradient-to-br from-[#020617] to-[#0f172a] min-h-screen py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="text-center mt-20 text-gray-400 text-xl">
            You have no bookings yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {bookings.map((b) => (
              <div
                key={b._id}
                className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg"
              >
                <h2 className="text-xl font-semibold text-blue-400 mb-1">
                  {b.title}
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  {b.from} → {b.to}
                </p>

                <div className="text-gray-300 space-y-1">
                  <p>
                    <span className="text-gray-400">Name:</span> {b.name}
                  </p>
                  <p>
                    <span className="text-gray-400">Email:</span> {b.email}
                  </p>
                  <p>
                    <span className="text-gray-400">Phone:</span> {b.phone}
                  </p>
                  <p>
                    <span className="text-gray-400">Seats:</span> {b.seats}
                  </p>
                  <p>
                    <span className="text-gray-400">Price:</span>{" "}
                    <span className="text-green-400 font-bold">
                      ৳{b.price}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-400">Status:</span>{" "}
                    <span
                      className={`${
                        b.status === "pending"
                          ? "text-yellow-400"
                          : b.status === "approved"
                          ? "text-green-400"
                          : "text-red-400"
                      } font-semibold`}
                    >
                      {b.status || "pending"}
                    </span>
                  </p>
                </div>

                <p className="mt-3 text-xs text-gray-400">
                  Booking Date: {new Date(b.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
