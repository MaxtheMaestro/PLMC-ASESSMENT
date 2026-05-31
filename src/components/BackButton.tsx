import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-block mb-6 rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
    >
      ← Back to Dashboard
    </Link>
  );
}