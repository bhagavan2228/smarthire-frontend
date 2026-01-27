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
    <header className="h-14 bg-white border-b shadow-sm flex items-center justify-between px-6">
      
      {/* Left side */}
      <h1 className="text-lg font-semibold text-gray-700">
        Dashboard
      </h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Welcome
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
        >
          Logout
        </button>
      </div>

    </header>
  );
}