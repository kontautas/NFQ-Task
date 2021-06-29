import React, { useRef, useState } from "react";
import "./App.css";
import CarReset from "./components/carFilterReset";
import CarFilter from "./components/carFilterCars";
import CarDropdown from "./components/carFilterDropdown";
function App() {
  const labelRefs = useRef<Array<HTMLInputElement>>([]);
  const checkboxRefs = useRef<Array<HTMLInputElement>>([]);
  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

  const uncheckCheckboxes = () => {
    checkboxRefs.current.forEach((element: HTMLInputElement) => {
      element.checked = false;
    });
    setSelectedItems([]);
  };
  const resetAllFilters = () => {
    labelRefs.current.forEach((element: HTMLInputElement) => {
      element.checked = false;
    });

    uncheckCheckboxes();
  };

  return (
    <div className="min-h-screen flex flex-row flex-nowrap justify-center items-center">
      <div className="flex flex-col">
        <CarReset resetAllFilters={resetAllFilters} />

        <div className="flex flex-row flex-nowrap justify-start items-center">
          <CarFilter labelRefs={labelRefs} />
          <CarDropdown
            checkboxRefs={checkboxRefs}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            uncheckCheckboxes={uncheckCheckboxes}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
