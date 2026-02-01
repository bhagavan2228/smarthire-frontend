export default function EmptyState({ title, message, action }) {
    return (
      <div style={box}>
        <h3>{title}</h3>
        <p style={{ color: "#6b7280", marginBottom: "16px" }}>{message}</p>
        {action}
      </div>
    );
  }
  
  const box = {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  };