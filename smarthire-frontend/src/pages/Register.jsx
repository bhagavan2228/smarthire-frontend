import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Register</h2>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input className="input mt-1" placeholder="Name" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input className="input mt-1" placeholder="Email" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            className="input mt-1"
            type="password"
            placeholder="Password"
          />
        </div>

        <button className="btn-primary w-full">
          Register
        </button>
      </div>

      <p className="text-sm mt-4">
        Already have an account?{" "}
        <Link to="/login" className="link">
          Login
        </Link>
      </p>
    </div>
  );
}