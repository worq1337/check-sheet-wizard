
import React from "react";
import SpreadsheetHeader from "./SpreadsheetHeader";
import SpreadsheetRow from "./SpreadsheetRow";

const Spreadsheet = () => {
  // Create rows from 1 to 15
  const rowNumbers = Array.from({ length: 15 }, (_, i) => i + 1);
  
  // Example of a highlighted cell (row 2, column 2 - which corresponds to cell C2 in the mockup)
  const highlightCell = { row: 2, col: 2 };

  return (
    <div className="overflow-auto h-full border">
      <div className="min-w-[800px]">
        <SpreadsheetHeader />
        <div>
          {rowNumbers.map((rowNum) => (
            <SpreadsheetRow 
              key={`row-${rowNum}`} 
              rowNumber={rowNum} 
              highlightCell={highlightCell}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spreadsheet;
