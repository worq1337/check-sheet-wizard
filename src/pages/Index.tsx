
import React from "react";
import Sidebar from "@/components/Sidebar";
import Spreadsheet from "@/components/Spreadsheet";

const Index = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-hidden p-0">
          <Spreadsheet />
        </main>
      </div>
    </div>
  );
};

export default Index;
