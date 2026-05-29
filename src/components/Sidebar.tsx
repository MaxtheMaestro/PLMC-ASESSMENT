import {
  LayoutDashboard,
  Users,
  BarChart3,
  LifeBuoy,
  FileText,
  Package,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-50 text-black p-6">
      <h2 className="text-xl font-bold mb-8">
        NovaTech
      </h2>

      <nav className="space-y-4">
        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-700 cursor-pointer">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-700 cursor-pointer">
          <Users size={18} />
          <span>CRM</span>
        </div>

        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-700 cursor-pointer">
          <BarChart3 size={18} />
          <span>Analytics</span>
        </div>

        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-700 cursor-pointer">
          <LifeBuoy size={18} />
          <span>Help Desk</span>
        </div>

        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-700 cursor-pointer">
          <FileText size={18} />
          <span>Documents</span>
        </div>

        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-700 cursor-pointer">
          <Package size={18} />
          <span>Inventory</span>
        </div>
      </nav>
    </aside>
  );
}