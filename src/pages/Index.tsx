
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Spreadsheet from "@/components/Spreadsheet";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-hidden p-0">
          <Spreadsheet isLoading={isLoading} />
        </main>
      </div>
    </div>
  );
};

export default Index;
