
import React from "react";
import { cn } from "@/lib/utils";

type SpreadsheetRowProps = {
  rowNumber: number;
  highlightCell?: {row: number, col: number};
  className?: string;
  style?: React.CSSProperties;
};

const SpreadsheetRow = ({ rowNumber, highlightCell, className, style }: SpreadsheetRowProps) => {
  // Create 11 cells for each row (same as the number of headers)
  const cells = Array(11).fill(null);

  return (
    <div className={cn("flex border-b", className)} style={style}>
      <div className="w-12 border-r flex items-center justify-center py-2 text-sm text-gray-500">
        {rowNumber}
      </div>
      {cells.map((_, index) => (
        <div 
          key={`cell-${rowNumber}-${index}`} 
          className={cn(
            "flex-1 min-w-[60px] border-r py-2 px-1",
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
