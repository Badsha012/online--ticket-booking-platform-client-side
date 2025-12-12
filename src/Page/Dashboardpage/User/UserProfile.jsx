import React from "react";
import { useAuth } from "../../../hooks/useAuth";

const UserProfile = () => {
  const { user, loading } = useAuth();

  // Handle loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }

  // If user not found
  if (!user) {
    return (
      <div className="text-center text-red-600 text-xl font-semibold mt-10">
        User not found!
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 border mt-6">

      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        User Profile
      </h1>

      <div className="flex flex-col items-center gap-6">

        {/* Profile Image */}
        <img
          src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="User Avatar"
          className="w-32 h-32 rounded-full shadow-xl border-2 border-blue-200"
        />

        {/* Personal Info */}
        <div className="w-full space-y-4">

          <ProfileRow label="Full Name" value={user.displayName || "Not provided"} />
          <ProfileRow label="Email" value={user.email} />
          <ProfileRow label="Role" value={user.role || "user"} />
          <ProfileRow label="User ID" value={user.uid} />

        </div>
      </div>

      {/* Update Button */}
      <div className="text-center mt-8">
        <button className="btn btn-primary px-8">Edit Profile</button>
      </div>
    </div>
  );
};

// Reusable Row Component
const ProfileRow = ({ label, value }) => (
  <div className="flex justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
    <span className="font-semibold text-gray-700">{label}:</span>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default UserProfile;
