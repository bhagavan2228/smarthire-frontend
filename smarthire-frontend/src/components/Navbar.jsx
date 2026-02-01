import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { dark, toggleTheme } = useTheme();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">SmartHire</h2>

      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleTheme}
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md transition-colors"
          onClick={logout}
        >
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            JD
          </div>
          <span className="text-sm font-medium text-gray-700">Logout</span>
        </div>
      </div>
    </header>
  );
}
