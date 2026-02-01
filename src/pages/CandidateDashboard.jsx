import { useNavigate } from "react-router-dom";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

export default function CandidateDashboard() {
  const navigate = useNavigate();

  const applications = [
    { id: 1, role: "Frontend Dev", company: "TechCorp", status: "APPLIED" },
    { id: 2, role: "Backend Dev", company: "InnovateX", status: "INTERVIEW" },
  ];

  return (
    <div>
      <div style={header}>
        <h1>Candidate Dashboard</h1>
        <Button onClick={() => navigate("/browse-jobs")}>
          Browse Jobs
        </Button>
      </div>

      <div style={grid}>
        {applications.map((a) => (
          <div key={a.id} style={card}>
            <div>
              <h4>{a.role}</h4>
              <p>{a.company}</p>
            </div>
            <Badge label={a.status} status={a.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

const header = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
};

const grid = {
  display: "grid",
  gap: "16px",
};

const card = {
  background: "#fff",
  padding: "16px",
  borderRadius: "10px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
  display: "flex",
  justifyContent: "space-between",
};