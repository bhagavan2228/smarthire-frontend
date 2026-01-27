import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-6">Register</h2>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700
                     text-white py-2 rounded-md font-medium transition"
        >
          Register
        </button>
      </div>

      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 hover:underline font-medium"
        >
          Login
        </Link>
      </p>
    </div>
  );
}