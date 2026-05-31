import BackButton from "@/components/BackButton";
export default function CRMPage() {
  return (
    <div className="p-8">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">
        CRM Portal
      </h1>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Customers</h3>
          <p className="text-3xl  text-blue-800 font-bold">1,245</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Open Opportunities</h3>
          <p className="text-3xl  text-blue-800 font-bold">38</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Monthly Revenue</h3>
          <p className="text-3xl   text-blue-800 font-bold">$52,000</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold  text-gray-900  mb-4">
          Recent Customers
        </h2>

        <ul className="space-y-2  text-blue-800">
          <li>Acme Corporation</li>
          <li>BlueTech Solutions</li>
          <li>Global Logistics Ltd</li>
          <li>Summit Retail Group</li>
        </ul>
      </div>
    </div>
  );
}