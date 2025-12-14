// Page/Dashboardpage/User/UserProfile.jsx
import { useAuth } from "../../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white p-6 rounded-xl max-w-xl">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Role:</b> {user.role}</p>
    </div>
  );
};

export default UserProfile;
