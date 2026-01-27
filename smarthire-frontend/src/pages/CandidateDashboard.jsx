import Card from "../components/ui/Card";

export default function CandidateDashboard() {
  return (
    <div>
      <h1>Candidate Dashboard</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Track your job applications
      </p>

      {/* STATS */}
      <div style={grid}>
        <Card title="Jobs Applied" value="3" />
        <Card title="Interviews" value="1" />
        <Card title="Offers" value="0" />
      </div>

      {/* RECENT APPLICATIONS */}
      <Card>
        <h3>Recent Applications</h3>

        <table style={table}>
          <tbody>
            <tr>
              <td>Frontend Developer</td>
              <td>TechCorp • Bengaluru</td>
              <td><span style={badge}>Under Review</span></td>
            </tr>
            <tr>
              <td>Backend Engineer</td>
              <td>InnovateX • Remote</td>
              <td><span style={badge}>Interview</span></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  margin: "20px 0",
};

const table = {
  width: "100%",
  marginTop: "10px",
};

const badge = {
  background: "#dbeafe",
  color: "#1e40af",
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "12px",
};