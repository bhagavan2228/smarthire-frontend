export default function Card({ title, value, children }) {
    return (
      <div style={card}>
        {title && <p style={titleStyle}>{title}</p>}
        {value && <h2 style={valueStyle}>{value}</h2>}
        {children}
      </div>
    );
  }
  
  const card = {
    background: "var(--bg-card)",
    borderRadius: "var(--radius)",
    boxShadow: "var(--shadow)",
    padding: "20px",
  };
  
  const titleStyle = {
    color: "var(--text-muted)",
    fontSize: "14px",
  };
  
  const valueStyle = {
    fontSize: "28px",
    fontWeight: 700,
  };