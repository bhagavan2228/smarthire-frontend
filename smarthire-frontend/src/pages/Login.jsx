import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // TEMP mock login (backend will replace this)
    login({ role: "CANDIDATE" });
    navigate("/candidate");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Login</h2>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700
                     text-white py-2 rounded-md font-medium transition"
        >
          Login
        </button>
      </div>

      <p className="text-sm mt-4">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline font-medium">
          Register
        </Link>
      </p>
    </div>
  );
}