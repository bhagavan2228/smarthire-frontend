export default function Button({
    children,
    variant = "primary",
    onClick,
    type = "button",
    disabled = false,
    ariaLabel,
  }) {
    const styles = {
      primary: {
        background: "#2563eb",
        color: "#ffffff",
      },
      secondary: {
        background: "#e5e7eb",
        color: "#111827",
      },
      danger: {
        background: "#ef4444",
        color: "#ffffff",
      },
    };
  
    return (
      <button
        type={type}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={onClick}
        style={{
          ...baseStyle,
          ...styles[variant],
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        onMouseEnter={(e) => {
          if (!disabled) e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {children}
      </button>
    );
  }
  
  /* ================= STYLES ================= */
  
  const baseStyle = {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    transition: "all 0.2s ease",
  };