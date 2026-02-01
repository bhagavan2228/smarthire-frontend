import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, []);

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(8px)",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}