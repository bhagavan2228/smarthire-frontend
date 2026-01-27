export const transitions = {
    transition: "all 0.2s ease",
  };
  
  export const primaryBtn = {
    ...transitions,
    padding: "10px 16px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
  };
  
  export const primaryBtnHover = {
    background: "#1d4ed8",
    transform: "translateY(-1px)",
    boxShadow: "0 6px 18px rgba(37,99,235,0.35)",
  };
  
  export const card = {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "18px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    ...transitions,
  };
  
  export const cardHover = {
    transform: "translateY(-4px)",
    boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
  };