export default function MyApplications() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">My Applications</h1>

      <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Job</th>
              <th className="text-left p-3">Company</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">Frontend Developer</td>
              <td className="p-3">TechCorp</td>
              <td className="p-3 text-yellow-600">Under Review</td>
            </tr>

            <tr className="border-t">
              <td className="p-3">Backend Engineer</td>
              <td className="p-3">InnovateX</td>
              <td className="p-3 text-green-600">Interview</td>
            </tr>

            <tr className="border-t">
              <td className="p-3">UI/UX Designer</td>
              <td className="p-3">DesignHub</td>
              <td className="p-3 text-gray-500">Applied</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}