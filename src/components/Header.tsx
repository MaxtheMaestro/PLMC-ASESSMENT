export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">
      <div>
        <h1 className="text-2xl text-black font-bold">
          Internal Tools Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          JS
        </div>

        <div>
          <p className="font-medium">
            John Smith
          </p>

          <p className="text-sm text-slate-500">
            Operations Manager
          </p>
        </div>
      </div>
    </header>
  );
}