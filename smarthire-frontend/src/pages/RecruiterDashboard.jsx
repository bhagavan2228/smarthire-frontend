export default function RecruiterDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", fontWeight: 700 }}>
        Recruiter Dashboard
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Overview of hiring activity
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        <StatCard title="Total Jobs" value="5" />
        <StatCard title="Applications" value="15" />
        <StatCard title="Interviews" value="3" />
        <StatCard title="Hires" value="1" />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#666" }}>{title}</p>
      <h2 style={{ fontSize: "26px", fontWeight: 700 }}>{value}</h2>
    </div>
  );
}