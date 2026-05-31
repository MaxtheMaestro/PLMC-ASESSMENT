import { auth, signOut } from "@/auth";

function getInitials(name?: string | null) {
  if (!name) return "?";

  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function Header() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">
      <div>
        <h1 className="text-2xl text-black font-bold">
          Internal Tools Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            {getInitials(user?.name)}
          </div>

          <div>
            <p className="font-medium text-black">{user?.name ?? "User"}</p>
            <p className="text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button
            type="submit"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}
