import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

export default function ViewApplicants() {
  const applicants = [
    { id: 1, name: "Alice", job: "Frontend", status: "APPLIED" },
    { id: 2, name: "Mark", job: "Backend", status: "INTERVIEW" },
  ];

  return (
    <div>
      <h1>Manage Applicants</h1>

      <table style={table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Status</th>
            <th align="right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.job}</td>
              <td>
                <Badge label={a.status} status={a.status} />
              </td>
              <td align="right">
                <Button>Shortlist</Button>{" "}
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const table = {
  width: "100%",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};