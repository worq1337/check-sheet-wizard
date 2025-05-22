
import React from "react";

const SpreadsheetHeader = () => {
  const headers = [
    { text: "N", width: "w-12" },
    { text: "Д.y", width: "w-16" },
    { text: "Дата", width: "w-24" },
    { text: "Время", width: "w-20" },
    { text: "Продавец/оператор", width: "w-40" },
    { text: "Приложение", width: "w-32" },
    { text: "Сумма", width: "w-24" },
    { text: "Остаток", width: "w-24" },
    { text: "ПК", width: "w-12" },
    { text: "p2p", width: "w-16" }
  ];

  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="flex border-b">
        <div className="w-12 border-r flex items-center justify-center py-2 text-sm font-medium text-gray-600">№</div>
        {headers.map((header, index) => (
          <div 
            key={`header-${index}`} 
            className={`${header.width} min-w-[60px] border-r py-2 text-center text-sm font-medium text-gray-600`}
          >
            {header.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpreadsheetHeader;
