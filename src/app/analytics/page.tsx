export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Revenue</h3>
          <p className="text-3xl  text-blue-800 font-bold">$1.2M</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Growth Rate</h3>
          <p className="text-3xl   text-blue-800 font-bold">14%</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Active Users</h3>
          <p className="text-3xl  text-blue-800 font-bold">8,420</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Key Insights
        </h2>

        <ul className="space-y-2  text-blue-800">
          <li>Sales increased by 14% this quarter</li>
          <li>Customer retention reached 92%</li>
          <li>Support tickets decreased by 8%</li>
        </ul>
      </div>
    </div>
  );
}