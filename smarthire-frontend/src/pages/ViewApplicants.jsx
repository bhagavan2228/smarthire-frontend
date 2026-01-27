export default function ViewApplicants() {
  const applicants = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Frontend Developer",
      status: "Applied",
    },
    {
      id: 2,
      name: "Mark Davis",
      role: "Backend Engineer",
      status: "Shortlisted",
    },
    {
      id: 3,
      name: "John Smith",
      role: "UI/UX Designer",
      status: "Interview",
    },
  ];

  return (
    <div style={styles.container}>
      <h2>Manage Applicants</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {applicants.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.role}</td>
              <td>
                <span style={{ ...styles.badge, ...badgeColor(a.status) }}>
                  {a.status}
                </span>
              </td>
              <td>
                <button style={styles.primaryBtn}>Shortlist</button>
                <button style={styles.secondaryBtn}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const badgeColor = (status) => {
  switch (status) {
    case "Shortlisted":
      return { background: "#dcfce7", color: "#166534" };
    case "Interview":
      return { background: "#dbeafe", color: "#1e40af" };
    default:
      return { background: "#f3f4f6", color: "#374151" };
  }
};

const styles = {
  container: {
    padding: "24px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  badge: {
    padding: "6px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  primaryBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    marginRight: "8px",
    cursor: "pointer",
  },
  secondaryBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};