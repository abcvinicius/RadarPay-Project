import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Database,
  TrendingUp,
  MessageSquare,
  Briefcase,
  Puzzle,
  Settings,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Resumo", path: "/" },
  { icon: Database, label: "Dados", path: "/dados" },
  { icon: TrendingUp, label: "Movimientos", path: "/movimientos" },
  { icon: MessageSquare, label: "Mensagens", path: "/mensagens" },
  { icon: Briefcase, label: "Casos", path: "/casos" },
  { icon: Puzzle, label: "Extensões", path: "/extensoes" },
  { icon: Settings, label: "Configurações", path: "/configuracoes" },
  { icon: BarChart3, label: "Médio", path: "/medio" },
];

const Sidebar = () => {
  return (
    <aside className="w-56 border-r border-border bg-sidebar flex flex-col">
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )
                  }
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
