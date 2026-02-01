import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "../components/ui/Button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const role = email.includes("recruiter")
      ? "RECRUITER"
      : "CANDIDATE";

    localStorage.setItem("token", "dummy-jwt");
    localStorage.setItem("role", role);

    navigate(role === "RECRUITER" ? "/recruiter" : "/candidate");
  };

  return (
    <div style={page}>
      <form style={card} onSubmit={handleLogin}>
        <img src={logo} alt="SmartHire" style={logoStyle} />
        <h2>Login</h2>

        <input
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input placeholder="Password" type="password" style={input} />

        <Button type="submit">Login</Button>

        <p style={footer}>
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f3f4f6",
};

const card = {
  background: "#fff",
  padding: "32px",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
};

const logoStyle = { height: "34px", marginBottom: "16px" };
const footer = { marginTop: "12px", fontSize: "14px" };