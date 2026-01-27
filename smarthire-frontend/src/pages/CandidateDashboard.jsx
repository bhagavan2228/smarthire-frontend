export default function CandidateDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
        Candidate Dashboard
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Welcome to SmartHire
      </p>

      {/* Stats cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <StatCard title="Jobs Applied" value="3" />
        <StatCard title="Interviews" value="1" />
        <StatCard title="Offers" value="0" />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#666", marginBottom: "8px" }}>{title}</p>
      <h2 style={{ fontSize: "28px", fontWeight: "700" }}>{value}</h2>
    </div>
  );
}