
import React from "react";
import { BarChart3, Package, Settings, ShoppingBag, ShoppingCart, User, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
};

const Sidebar = () => {
  const navItems: NavItem[] = [
    { icon: LayoutDashboard, label: "Обзор", active: true },
    { icon: ShoppingCart, label: "Продажи" },
    { icon: Package, label: "Товары" },
    { icon: BarChart3, label: "Отчёты" },
    { icon: User, label: "Покупатели" },
    { icon: Settings, label: "Настройки" },
  ];

  return (
    <div className="h-full w-[280px] border-r bg-white">
      <div className="flex h-14 items-center border-b px-6">
        <h1 className="text-xl font-medium">Парсер чеков</h1>
      </div>
      <div className="py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                item.active
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className={cn(
                "mr-3 h-5 w-5",
                item.active ? "text-green-600" : "text-gray-500"
              )} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
