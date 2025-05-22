
import React from "react";

const SpreadsheetHeader = () => {
  const topHeaders = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "X"];
  const secondaryHeaders = ["A", "B", "C", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="flex border-b">
        <div className="w-12 border-r"></div>
        {topHeaders.map((header) => (
          <div key={header} className="flex-1 min-w-[60px] border-r py-2 text-center text-sm font-medium text-gray-600">
            {header}
          </div>
        ))}
      </div>
      <div className="flex border-b">
        <div className="w-12 border-r"></div>
        {secondaryHeaders.map((header, index) => (
          <div key={`${header}-${index}`} className="flex-1 min-w-[60px] border-r py-2 text-center text-sm font-medium text-gray-600">
            {header}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpreadsheetHeader;
