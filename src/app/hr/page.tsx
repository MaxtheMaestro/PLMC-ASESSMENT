import BackButton from "@/components/BackButton";
export default function HRPage() {
  return (
    <div className="p-8">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">
        HR Management
      </h1>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Employees</h3>
          <p className="text-3xl   text-blue-800 font-bold">248</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Open Positions</h3>
          <p className="text-3xl  text-blue-800 font-bold">12</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">New Hires</h3>
          <p className="text-3xl  text-blue-800 font-bold">6</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl text-gray-900 font-semibold mb-4">
          Recent Hires
        </h2>

        <ul className="space-y-2  text-blue-800">
          <li>Sarah Williams</li>
          <li>Michael Brown</li>
          <li>David Chen</li>
        </ul>
      </div>
    </div>
  );
}