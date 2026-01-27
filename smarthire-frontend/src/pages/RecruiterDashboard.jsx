export default function RecruiterDashboard() {
  const stats = [
    { label: "Total Jobs", value: 5 },
    { label: "Applications", value: 15 },
    { label: "Interviews", value: 3 },
    { label: "Hires", value: 1 },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Recruiter Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}