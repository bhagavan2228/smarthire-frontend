export default function Badge({ label, status }) {
    const styles = {
      APPLIED: { bg: "#e0e7ff", color: "#1e40af" },
      SHORTLISTED: { bg: "#dcfce7", color: "#166534" },
      INTERVIEW: { bg: "#fef3c7", color: "#92400e" },
      SELECTED: { bg: "#bbf7d0", color: "#065f46" },
      REJECTED: { bg: "#fee2e2", color: "#991b1b" },
    };
  
    const s = styles[status] || {
      bg: "#e5e7eb",
      color: "#374151",
    };
  
    return (
      <span
        role="status"
        style={{
          background: s.bg,
          color: s.color,
          padding: "6px 12px",
          borderRadius: "999px",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    );
  }