export default function RecruiterDashboard() {
  return (
    <div style={styles.wrapper}>
      <h2>Recruiter Dashboard</h2>

      <div style={styles.cards}>
        <Card title="Total Jobs" value="5" />
        <Card title="Applications" value="15" />
        <Card title="Interviews" value="3" />
        <Card title="Hires" value="1" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <p style={styles.value}>{value}</p>
    </div>
  );
}

const styles = {
  wrapper: { padding: "24px" },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  },
  value: {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "8px",
  },
};