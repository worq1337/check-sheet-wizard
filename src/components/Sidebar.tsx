
import React from "react";
import { FileImport, FileExport, Settings, Trash, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
};

const Sidebar = () => {
  const navItems: NavItem[] = [
    { icon: LayoutDashboard, label: "Обзор", active: true },
    { icon: FileImport, label: "Импорт" },
    { icon: FileExport, label: "Экспорт" },
    { icon: Trash, label: "Удалить" },
  ];

  // Settings item to be placed at the bottom
  const settingsItem: NavItem = { icon: Settings, label: "Настройки" };

  return (
    <div className="h-full w-[280px] border-r bg-white">
      <div className="flex h-14 items-center border-b px-6">
        <h1 className="text-xl font-medium">Парсер чеков</h1>
      </div>
      <div className="flex flex-col h-[calc(100%-3.5rem)] justify-between py-4">
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
        
        {/* Settings button at the bottom */}
        <nav className="space-y-1 px-2 mt-auto">
          <button
            className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100"
          >
            <settingsItem.icon className="mr-3 h-5 w-5 text-gray-500" />
            {settingsItem.label}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
