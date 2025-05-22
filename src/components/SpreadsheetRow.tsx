
import React from "react";
import { cn } from "@/lib/utils";

type SpreadsheetRowProps = {
  rowNumber: number;
  highlightCell?: {row: number, col: number};
  className?: string;
  style?: React.CSSProperties;
};

const SpreadsheetRow = ({ rowNumber, highlightCell, className, style }: SpreadsheetRowProps) => {
  // Column widths matching header
  const columnWidths = [
    "w-16", "w-24", "w-20", "w-40", 
    "w-32", "w-24", "w-24", "w-12", "w-16"
  ];

  return (
    <div className={cn("flex border-b", className)} style={style}>
      <div className="w-12 border-r flex items-center justify-center py-2 text-sm text-gray-500">
        {rowNumber}
      </div>
      {columnWidths.map((width, index) => (
        <div 
          key={`cell-${rowNumber}-${index}`} 
          className={cn(
            `${width} min-w-[60px] border-r py-2 px-1`,
            highlightCell && highlightCell.row === rowNumber && highlightCell.col === index 
              ? "border-2 border-green-500" 
              : ""
          )}
        >
          {/* Cell content would go here */}
        </div>
      ))}
    </div>
  );
};

export default SpreadsheetRow;
