export default function BrowseJobs() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Browse Jobs</h1>
        <p className="text-gray-600">Find jobs that match your skills</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white border rounded-lg p-5 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-blue-600">Frontend Developer</p>
            <p className="text-gray-500">TechCorp • Bengaluru</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>

        <div className="bg-white border rounded-lg p-5 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-blue-600">Backend Engineer</p>
            <p className="text-gray-500">InnovateX • Remote</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>

        <div className="bg-white border rounded-lg p-5 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-blue-600">UI/UX Designer</p>
            <p className="text-gray-500">DesignHub • Hyderabad</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>
      </div>

    </div>
  );
}