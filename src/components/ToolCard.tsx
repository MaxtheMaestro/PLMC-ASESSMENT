import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ToolCard({
  title,
  description,
  icon: Icon,
}: ToolCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <Icon className="mb-4 h-8 w-8 text-red-600" />

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {description}
      </p>
    </div>
  );
}