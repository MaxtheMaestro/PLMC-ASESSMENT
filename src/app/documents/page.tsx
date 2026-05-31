import BackButton from "@/components/BackButton";
export default function DocumentsPage() {
  return (
    <div className="p-8">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">
        Document Center
      </h1>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Documents</h3>
          <p className="text-3xl  text-blue-800 font-bold">1,024</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Policies</h3>
          <p className="text-3xl text-blue-800 font-bold">56</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-sm text-gray-900">Shared Files</h3>
          <p className="text-3xl text-blue-800 font-bold">312</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl text-blue-800 font-semibold mb-4">
          Recently Updated
        </h2>

        <ul className="space-y-2 text-gray-900">
          <li>Employee Handbook</li>
          <li>Security Policy</li>
          <li>IT Procedures Guide</li>
        </ul>
      </div>
    </div>
  );
}