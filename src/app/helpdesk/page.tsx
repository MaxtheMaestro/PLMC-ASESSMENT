export default function HelpDeskPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Help Desk
      </h1>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Open Tickets</h3>
          <p className="text-3xl  text-blue-800 font-bold">42</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Resolved Today</h3>
          <p className="text-3xl  text-blue-800 font-bold">18</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Avg Response Time</h3>
          <p className="text-3xl  text-blue-800 font-bold">2.1 hrs</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl text-gray-900 font-semibold mb-4">
          Priority Tickets
        </h2>

        <ul className="space-y-2  text-blue-800 ">
          <li>Login Issue - Ticket #1042</li>
          <li>Billing Error - Ticket #1048</li>
          <li>API Outage - Ticket #1053</li>
        </ul>
      </div>
    </div>
  );
}