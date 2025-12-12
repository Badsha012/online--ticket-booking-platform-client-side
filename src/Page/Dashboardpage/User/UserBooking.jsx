import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
//import { auth } from "../firebase";

const UserBooking = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://online-ticket-booking-server-side.vercel.app/bookings?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  if (loading) {
    return (
      <div className="text-center py-16 text-xl font-semibold">
        Loading your bookings...
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-16 text-xl font-semibold">
        You have no booked tickets yet.
      </div>
    );
  }

  return (
    <div className="py-10 px-5">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Booked Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((item) => (
          <div
            key={item._id}
            className="border rounded-xl shadow-md p-4 bg-white"
          >
            <img
              src={item.ticketImage}
              alt={item.ticketName}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-bold mt-3">{item.ticketName}</h3>

            <p className="text-gray-600 mt-1">
              Quantity: <span className="font-semibold">{item.quantity}</span>
            </p>

            <p className="text-gray-600">
              Total Price:{" "}
              <span className="font-semibold">{item.totalPrice}৳</span>
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Booking Date: {new Date(item.bookingDate).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBooking; 
