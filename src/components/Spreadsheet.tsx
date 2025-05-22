
import React, { useState, useEffect } from "react";
import SpreadsheetHeader from "./SpreadsheetHeader";
import SpreadsheetRow from "./SpreadsheetRow";
import LoadingScreen from "./LoadingScreen";

const Spreadsheet = ({ isLoading }: { isLoading?: boolean }) => {
  // Create rows from 1 to 15
  const rowNumbers = Array.from({ length: 15 }, (_, i) => i + 1);
  
  // Example of a highlighted cell (row 2, column 2 - which corresponds to cell C2 in the mockup)
  const highlightCell = { row: 2, col: 2 };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="overflow-auto h-full border animate-fade-in">
      <div className="min-w-[800px]">
        <SpreadsheetHeader />
        <div className="animate-fade-in">
          {rowNumbers.map((rowNum) => (
            <SpreadsheetRow 
              key={`row-${rowNum}`} 
              rowNumber={rowNum} 
              highlightCell={highlightCell}
              className="animate-fade-in"
              style={{ animationDelay: `${rowNum * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spreadsheet;
