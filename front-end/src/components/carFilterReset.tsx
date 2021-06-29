import React from "react";

const CarFilterReset = ({ resetAllFilters }: { resetAllFilters: any }) => {
  return (
    <div className="flex flex-row justify-between text-sm mb-2 font-bold">
      <div>Car type</div>
      <button className={`text-icon font-bold`} onClick={resetAllFilters}>
        Reset
      </button>
    </div>
  );
};

export default CarFilterReset;
