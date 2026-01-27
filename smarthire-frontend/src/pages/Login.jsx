import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 TEMP MOCK LOGIN (until backend ready)
    let role = "CANDIDATE";
    if (email.includes("recruiter")) role = "RECRUITER";

    const userData = {
      email,
      role,
    };

    login(userData);

    // ✅ REDIRECT BASED ON ROLE
    if (role === "RECRUITER") {
      navigate("/recruiter", { replace: true });
    } else {
      navigate("/candidate", { replace: true });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}