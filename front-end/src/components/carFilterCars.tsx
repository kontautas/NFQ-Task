import React from "react";
import Mini from "../img/01_mini_white.png";
import Economy from "../img/02_economy_white.png";
import Standard from "../img/03_standard_white.png";
import Suv from "../img/05_suv-small_white.png";

const CarFilterCars = ({ labelRefs }: { labelRefs: any }) => {
  const addToLabelRefs = (el: any) => {
    if (el && !labelRefs.current.includes(el)) {
      labelRefs.current.push(el);
    }
  };
  return (
    <div className="flex flex-row flex-nowrap justify-start items-center">
      <div>
        <input
          className="hidden"
          id="Mini"
          type="checkbox"
          ref={addToLabelRefs}
        ></input>
        <label
          htmlFor="Mini"
          className="group relative flex flex-col h-15 min-w-75 items-center pt-1 pb-1 pl-2 pr-2 mb-4 mr-1 rounded border border-primary hover:border-secondary
     focus:outline-none label-checked:text-white label-checked:bg-fakeBlack label-checked:border-fakeBlack"
        >
          <img src={Mini} alt="" className="w-12 h-8"></img>
          <div className="flex flex-row-reverse mr-4 text-sm font-bold">
            Small
            <div className="min-h-14 min-w-0 flex justify-start items-center w-3 h-3 mr-1"></div>
          </div>
          <div className="invisible absolute rounded z-50 -top-66px bg-secondary group-hover:visible">
            <div className="block w-4 h-4 transform rotate-45 bg-secondary origin-center absolute z-minus -bottom-2 left-2/4 -ml-2"></div>
            <div className="p-4 relative text-fakeWhite text-md">$203+</div>
          </div>
        </label>
      </div>
      <div>
        <input
          ref={addToLabelRefs}
          className="hidden"
          id="Economy"
          type="checkbox"
        ></input>
        <label
          htmlFor="Economy"
          className="group relative flex flex-col h-15 min-w-75 items-center pt-1 pb-1 pl-2 pr-2 mb-4 mr-1 rounded border border-primary hover:border-secondary
   focus:outline-none label-checked:text-white label-checked:bg-fakeBlack label-checked:border-fakeBlack"
        >
          <img src={Economy} alt="" className="w-12 h-8"></img>
          <div className="flex flex-row-reverse mr-4 text-sm font-bold">
            Medium
            <div className="min-h-14 min-w-0 flex justify-start items-center w-3 h-3 mr-1"></div>
          </div>
          <div className="invisible absolute rounded z-50 -top-66px bg-secondary group-hover:visible">
            <div className="block w-4 h-4 transform rotate-45 bg-secondary origin-center absolute z-minus -bottom-2 left-2/4 -ml-2"></div>
            <div className="p-4 relative text-fakeWhite text-md">$214+</div>
          </div>
        </label>
      </div>
      <div>
        <input
          ref={addToLabelRefs}
          className="hidden"
          id="Standard"
          type="checkbox"
        ></input>
        <label
          htmlFor="Standard"
          className="group relative flex flex-col h-15 min-w-75 items-center pt-1 pb-1 pl-2 pr-2 mb-4 mr-1 rounded border border-primary hover:border-secondary 
focus:outline-none label-checked:text-white label-checked:bg-fakeBlack label-checked:border-fakeBlack"
        >
          <img src={Standard} alt="" className="w-12 h-8"></img>
          <div className="flex flex-row-reverse mr-4 text-sm font-bold">
            Large
            <div className="min-h-14 min-w-0 flex justify-start items-center w-3 h-3 mr-1"></div>
          </div>
          <div className="invisible absolute rounded z-50 -top-66px bg-secondary group-hover:visible">
            <div className="block w-4 h-4 transform rotate-45 bg-secondary origin-center absolute z-minus -bottom-2 left-2/4 -ml-2"></div>
            <div className="p-4 relative text-fakeWhite text-md">$238+</div>
          </div>
        </label>
      </div>
      <div>
        <input
          ref={addToLabelRefs}
          className="hidden"
          id="Suv"
          type="checkbox"
        ></input>
        <label
          htmlFor="Suv"
          className="group relative flex flex-col h-15 min-w-75 items-center pt-1 pb-1 pl-2 pr-2 mb-4 mr-1 rounded border border-primary hover:border-secondary 
    focus:outline-none label-checked:text-white label-checked:bg-fakeBlack label-checked:border-fakeBlack"
        >
          <img src={Suv} alt="" className="w-12 h-8"></img>
          <div className="flex flex-row-reverse mr-4 text-sm font-bold">
            SUV
            <div className="min-h-14 min-w-0 flex justify-start items-center w-3 h-3 mr-1"></div>
          </div>
          <div className="invisible absolute rounded z-50 -top-66px bg-secondary group-hover:visible">
            <div className="block w-4 h-4 transform rotate-45 bg-secondary origin-center absolute z-minus -bottom-2 left-2/4 -ml-2"></div>
            <div className="p-4 relative text-fakeWhite text-md">$274+</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CarFilterCars;
