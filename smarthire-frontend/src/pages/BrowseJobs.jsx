export default function BrowseJobs() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Browse Jobs</h2>

      <div className="border rounded-md p-4 flex justify-between">
        <div>
          <p className="font-medium">Backend Engineer</p>
          <p className="text-sm text-gray-500">TechCorp · Remote</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Apply
        </button>
      </div>
    </div>
  );
}