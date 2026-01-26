import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitJob = async () => {
    try {
      setLoading(true);
      setError("");
      await axios.post("/jobs", { title, description, location });
      navigate("/recruiter/manage-jobs");
    } catch {
      setError("Failed to post job");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Post Job</h2>

      <input className="w-full mb-3 border p-2"
        placeholder="Title" onChange={(e) => setTitle(e.target.value)} />

      <textarea className="w-full mb-3 border p-2"
        placeholder="Description" onChange={(e) => setDescription(e.target.value)} />

      <input className="w-full mb-3 border p-2"
        placeholder="Location" onChange={(e) => setLocation(e.target.value)} />

      <button onClick={submitJob}
        className="bg-blue-600 text-white px-4 py-2">
        Submit
      </button>
    </div>
  );
}