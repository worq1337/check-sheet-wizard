
import React from "react";

const SpreadsheetHeader = () => {
  const headers = [
    "N", 
    "Д.y", 
    "Дата", 
    "Время", 
    "Продавец/оператор", 
    "Приложение", 
    "Сумма", 
    "Остаток", 
    "ПК", 
    "p2p"
  ];

  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="flex border-b">
        <div className="w-12 border-r"></div>
        {headers.map((header, index) => (
          <div 
            key={`header-${index}`} 
            className="flex-1 min-w-[60px] border-r py-2 text-center text-sm font-medium text-gray-600"
          >
            {header}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpreadsheetHeader;
