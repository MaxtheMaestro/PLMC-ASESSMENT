import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

import ToolCard from "@/components/ToolCard";
import {
  Users,
  BarChart3,
  Briefcase,
  LifeBuoy,
  FileText,
  Package,
} from "lucide-react";

const tools = [
  {
    title: "CRM Portal",
    description: "Manage customer relationships.",
    icon: Users,
  },
  {
    title: "HR Management",
    description: "Employee records and onboarding.",
    icon: Briefcase,
  },
  {
    title: "Analytics Dashboard",
    description: "View business performance metrics.",
    icon: BarChart3,
  },
  {
    title: "Help Desk",
    description: "Track support tickets.",
    icon: LifeBuoy,
  },
  {
    title: "Document Center",
    description: "Access internal documents.",
    icon: FileText,
  },
  {
    title: "Inventory Tracker",
    description: "Manage company assets.",
    icon: Package,
  },
];

export default function Home() {
  return (
     <div className="flex min-h-screen bg-blue-200">
    <Sidebar />

    <div className="flex-1">
      <Header />

      <main className="p-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
            />
          ))}
        </div>
      </main>
    </div>
  </div>
  );
}
