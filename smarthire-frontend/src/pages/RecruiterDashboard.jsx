export default function RecruiterDashboard() {
  return (
    <div>
      <h1 style={title}>Recruiter Dashboard</h1>
      <p style={subtitle}>Hiring overview and pipeline status</p>

      <div style={grid}>
        <Card title="Total Jobs" value="5" />
        <Card title="Applications" value="18" />
        <Card title="Interviews" value="4" />
        <Card title="Hires" value="2" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={card}>
      <p style={cardTitle}>{title}</p>
      <h2 style={cardValue}>{value}</h2>
    </div>
  );
}

const title = { fontSize: "28px", fontWeight: 700 };
const subtitle = { color: "#6b7280", marginBottom: "24px" };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "16px",
};

const card = {
  background: "#ffffff",
  padding: "22px",
  borderRadius: "10px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
};

const cardTitle = { color: "#6b7280", marginBottom: "8px" };
const cardValue = { fontSize: "30px", fontWeight: 700 };