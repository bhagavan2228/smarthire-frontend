import { useState } from "react";

export default function ViewApplicants() {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@gmail.com",
      status: "APPLIED",
    },
    {
      id: 2,
      name: "Mark Davis",
      email: "mark@gmail.com",
      status: "SHORTLISTED",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john@gmail.com",
      status: "INTERVIEW_SCHEDULED",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplicants((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: newStatus } : a
      )
    );
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Manage Applicants
      </h1>

      <p style={{ color: "#555", marginBottom: "16px" }}>
        Review and update candidate application status
      </p>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead style={{ background: "#f5f5f5" }}>
            <tr>
              <th style={thStyle}>Candidate</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td style={tdStyle}>{applicant.name}</td>
                <td style={tdStyle}>{applicant.email}</td>
                <td style={tdStyle}>
                  <StatusBadge status={applicant.status} />
                </td>
                <td style={tdStyle}>
                  <select
                    value={applicant.status}
                    onChange={(e) =>
                      updateStatus(applicant.id, e.target.value)
                    }
                  >
                    <option value="APPLIED">Applied</option>
                    <option value="SHORTLISTED">Shortlisted</option>
                    <option value="INTERVIEW_SCHEDULED">
                      Interview Scheduled
                    </option>
                    <option value="SELECTED">Selected</option>
                    <option value="REJECTED">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const thStyle = {
  textAlign: "left",
  padding: "12px",
  fontWeight: "600",
  borderBottom: "1px solid #ddd",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

function StatusBadge({ status }) {
  const colors = {
    APPLIED: "#999",
    SHORTLISTED: "#0d6efd",
    INTERVIEW_SCHEDULED: "#fd7e14",
    SELECTED: "#198754",
    REJECTED: "#dc3545",
  };

  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "12px",
        color: "#fff",
        fontSize: "12px",
        backgroundColor: colors[status],
      }}
    >
      {status.replace("_", " ")}
    </span>
  );
}