export default function RecruiterDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Recruiter Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          Total Jobs
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          Applications
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          Interviews
        </div>
      </div>
    </div>
  );
}