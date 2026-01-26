import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";

export default function MyApplications() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await axios.get("/applications/my");
        setApps(res.data);
      } catch {
        setError("Failed to load applications");
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Applications</h1>

      {apps.map((a) => (
        <div key={a.id} className="bg-white p-4 rounded shadow mb-3">
          <p className="font-semibold">{a.jobTitle}</p>
          <p>Status: {a.status}</p>
        </div>
      ))}
    </div>
  );
}