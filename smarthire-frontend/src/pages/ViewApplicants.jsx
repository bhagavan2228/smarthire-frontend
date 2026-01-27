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
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const openModal = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  const scheduleInterview = () => {
    setApplicants((prev) =>
      prev.map((a) =>
        a.id === selectedApplicant.id
          ? { ...a, status: "INTERVIEW_SCHEDULED" }
          : a
      )
    );
    setShowModal(false);
  };

  return (
    <div>
      <h1 style={{ fontSize: "28px", fontWeight: 700 }}>
        Manage Applicants
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Review applicants and schedule interviews
      </p>

      <table
        style={{
          width: "100%",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          borderCollapse: "collapse",
        }}
      >
        <thead style={{ background: "#f8f9fa" }}>
          <tr>
            <th style={th}>Candidate</th>
            <th style={th}>Email</th>
            <th style={th}>Status</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {applicants.map((app) => (
            <tr key={app.id} style={{ borderTop: "1px solid #eee" }}>
              <td style={td}>{app.name}</td>
              <td style={td}>{app.email}</td>
              <td style={td}>
                <StatusBadge status={app.status} />
              </td>
              <td style={td}>
                <button
                  onClick={() => openModal(app)}
                  style={btn}
                >
                  Schedule Interview
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <InterviewModal
          applicant={selectedApplicant}
          onClose={() => setShowModal(false)}
          onSave={scheduleInterview}
        />
      )}
    </div>
  );
}

/* ---------------- Modal ---------------- */

function InterviewModal({ applicant, onClose, onSave }) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <h3 style={{ marginBottom: "16px" }}>
          Schedule Interview – {applicant.name}
        </h3>

        <div style={{ marginBottom: "12px" }}>
          <label>Date</label>
          <input type="date" style={input} />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Time</label>
          <input type="time" style={input} />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Interviewer</label>
          <input
            type="text"
            placeholder="HR / Tech Lead"
            style={input}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
          <button onClick={onClose} style={cancelBtn}>
            Cancel
          </button>
          <button onClick={onSave} style={btn}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const th = { textAlign: "left", padding: "14px", fontWeight: 600 };
const td = { padding: "14px" };

const btn = {
  padding: "6px 12px",
  background: "#0d6efd",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const cancelBtn = {
  ...btn,
  background: "#6c757d",
};

const input = {
  width: "100%",
  padding: "8px",
  marginTop: "4px",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modal = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "360px",
};

function StatusBadge({ status }) {
  const colors = {
    APPLIED: "#6c757d",
    SHORTLISTED: "#0d6efd",
    INTERVIEW_SCHEDULED: "#fd7e14",
  };

  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        background: colors[status],
        color: "#fff",
      }}
    >
      {status.replace("_", " ")}
    </span>
  );
}