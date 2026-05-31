import { signIn } from "@/auth";

type LoginPageProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { callbackUrl } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-200">
      <div className="w-full max-w-md rounded-xl bg-white p-10 shadow-lg text-center">
        <h1 className="text-2xl font-bold text-black mb-2">NovaTech Solutions</h1>
        <p className="text-slate-500 mb-8">Internal Tools Dashboard</p>

        <form
          action={async () => {
            "use server";
            await signIn("microsoft-entra-id", {
              redirectTo: callbackUrl ?? "/",
            });
          }}
        >
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Sign in with Microsoft
          </button>
        </form>
      </div>
    </div>
  );
}
