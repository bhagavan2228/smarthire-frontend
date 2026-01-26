import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-14 bg-white shadow flex items-center justify-between px-6">
      <h2 className="font-semibold text-gray-700">Dashboard</h2>

      <button
        onClick={handleLogout}
        className="text-sm font-medium text-red-500 hover:text-red-600 transition"
      >
        Logout
      </button>
    </header>
  );
}