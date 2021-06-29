import React, { SyntheticEvent, useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import Van from "../img/11_van_white.png";
import Truck from "../img/12_truck_white.png";
import Premium from "../img/04_premium.png";
import Convertible from "../img/08_convertible_white.png";
import Commercial from "../img/14_commercial_white.png";

const CarFilterDropdown = ({
  checkboxRefs,
  setSelectedItems,
  selectedItems,
  uncheckCheckboxes,
}: {
  checkboxRefs: any;
  setSelectedItems: any;
  selectedItems: any;
  uncheckCheckboxes: any;
}) => {
  const [displayName, setDisplayName] = useState("");
  const handleEvent = (e: SyntheticEvent) => {
    e.stopPropagation();
  };
  const addToCheckboxRefs = (el: any) => {
    if (el && !checkboxRefs.current.includes(el)) {
      checkboxRefs.current.push(el);
    }
  };
  const checkExists = (newElement: string) => {
    if (selectedItems.includes(newElement)) {
      const newArray = selectedItems.filter((item: any) => item !== newElement);
      setSelectedItems(newArray);
    } else {
      setSelectedItems((selectedItems: any) => [...selectedItems, newElement]);
    }
  };
  const selectItem = (name: string) => {
    checkExists(name);
  };
  useEffect(() => {
    if (selectedItems.length <= 1) {
      setDisplayName(selectedItems[0]);
    } else {
      setDisplayName(selectedItems.length.toString() + " Selected");
    }
  }, [selectedItems]);
  return (
    <Menu>
      {({ open }) => (
        <div>
          <Menu.Button
            className={`relative flex flex-row flex-nowrap justify-between items-center rounded border border-primary h-15 mb-4 pt-1 pb-1 pl-3 pr-3 hover:border-secondary
     focus:outline-none transition-colors duration-200 ease-out delay-0 ${
       open ? "text-white bg-fakeBlack border-fakeBlack" : ""
     }`}
          >
            <div className="flex flex-col justify-start items-start pr-2">
              <div className="font-bold text-sm ">More</div>
              <div className={`text-sm`}>{displayName}</div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className={`fill-current transition-transform duration-200 ease-out delay-0 w-wrapper h-wrapper ${
                  selectedItems.length === 0 ? "block" : "hidden"
                }  ${open ? "transform rotate-180" : ""}`}
              >
                <path d="M 100 132.5 c -3.873 0 0.136 2.376 -64.801 -51.738 l 9.603 -11.523 L 100 115.237 l 55.199 -45.999 l 9.603 11.523 C 99.806 134.924 103.855 132.5 100 132.5 Z"></path>
              </svg>
              <svg
                onClick={uncheckCheckboxes}
                className={`ml-xIcon fill-current text-fakeWhite flex self-center w-wrapper h-wrapper ${
                  selectedItems.length > 0 ? "block" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
              >
                <path d="M180 37.918L162.082 20L100 82.208L37.918 20L20 37.918L82.208 100L20 162.082L37.918 180L100 117.792L162.082 180L180 162.082L117.792 100z"></path>
              </svg>
            </div>
          </Menu.Button>
          <Menu.Items
            className={`w-dropdown h-dropdown rounded-lg absolute border-primary focus:outline-none shadow-medium  min-w-200 transform -translate-y-4 pt-3 pb-3`}
          >
            <Menu.Item>
              {({ active }) => (
                <div>
                  <label
                    className={`flex flex-row items-center pt-2 pb-2 pl-4 pr-4 bg-clip-padding" ${
                      active ? "bg-hover" : ""
                    }`}
                    htmlFor="Van"
                    onClick={handleEvent}
                    onChange={() => selectItem("Van")}
                  >
                    <div className="rounded border border-solid border-primary w-checkbox h-checkbox ">
                      <input
                        id="Van"
                        type="checkbox"
                        className="opacity-0 absolute"
                        ref={addToCheckboxRefs}
                      ></input>
                      <svg
                        className="fill-current hidden text-icon pointer-events-none"
                        viewBox="0 0 200 200"
                      >
                        <path d="M132.639 63.231l-48.974 53.26l-17.569-13.51l-12.191 15.855c22.199 17.07 30.128 26.802 38.284 17.932l55.172-60l-14.722-13.537z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-row items-center pl-2 text-md select-none">
                      <img alt="" src={Van} className="h-8 mr-3"></img>
                      <div>Van</div>
                    </div>
                    <div className="flex flex-grow justify-end text-grey text-price select-none">
                      <div>$396</div>
                    </div>
                  </label>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div>
                  <label
                    className={`flex flex-row items-center pt-2 pb-2 pl-4 pr-4 bg-clip-padding" ${
                      active ? "bg-hover" : ""
                    }`}
                    htmlFor="Truck"
                    onClick={handleEvent}
                    onChange={() => selectItem("Truck")}
                  >
                    <div className="rounded border border-solid border-primary w-checkbox h-checkbox ">
                      <input
                        id="Truck"
                        type="checkbox"
                        className="opacity-0 absolute"
                        ref={addToCheckboxRefs}
                      ></input>
                      <svg
                        className="fill-current hidden text-icon pointer-events-none"
                        viewBox="0 0 200 200"
                      >
                        <path d="M132.639 63.231l-48.974 53.26l-17.569-13.51l-12.191 15.855c22.199 17.07 30.128 26.802 38.284 17.932l55.172-60l-14.722-13.537z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-row items-center pl-2 text-md select-none">
                      <img alt="" src={Truck} className="h-8 mr-3"></img>
                      <div>Truck</div>
                    </div>
                    <div className="flex flex-grow justify-end text-grey text-price select-none">
                      <div>$307</div>
                    </div>
                  </label>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div>
                  <label
                    className={`flex flex-row items-center pt-2 pb-2 pl-4 pr-4 bg-clip-padding" ${
                      active ? "bg-hover" : ""
                    }`}
                    htmlFor="Premium"
                    onClick={handleEvent}
                    onChange={() => selectItem("Premium")}
                  >
                    <div className="rounded border border-solid border-primary w-checkbox h-checkbox ">
                      <input
                        id="Premium"
                        type="checkbox"
                        className="opacity-0 absolute"
                        ref={addToCheckboxRefs}
                      ></input>
                      <svg
                        className="fill-current hidden text-icon pointer-events-none"
                        viewBox="0 0 200 200"
                      >
                        <path d="M132.639 63.231l-48.974 53.26l-17.569-13.51l-12.191 15.855c22.199 17.07 30.128 26.802 38.284 17.932l55.172-60l-14.722-13.537z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-row items-center pl-2 text-md select-none">
                      <img alt="" src={Premium} className="h-8 mr-3"></img>
                      <div>Premium</div>
                    </div>
                    <div className="flex flex-grow justify-end text-grey text-price select-none">
                      <div>$331</div>
                    </div>
                  </label>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div>
                  <label
                    className={`flex flex-row items-center pt-2 pb-2 pl-4 pr-4 bg-clip-padding" ${
                      active ? "bg-hover" : ""
                    }`}
                    htmlFor="Convertible"
                    onClick={handleEvent}
                    onChange={() => selectItem("Convertible")}
                  >
                    <div className="rounded border border-solid border-primary w-checkbox h-checkbox ">
                      <input
                        id="Convertible"
                        type="checkbox"
                        className="opacity-0 absolute"
                        ref={addToCheckboxRefs}
                      ></input>
                      <svg
                        className="fill-current hidden text-icon pointer-events-none"
                        viewBox="0 0 200 200"
                      >
                        <path d="M132.639 63.231l-48.974 53.26l-17.569-13.51l-12.191 15.855c22.199 17.07 30.128 26.802 38.284 17.932l55.172-60l-14.722-13.537z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-row items-center pl-2 text-md select-none">
                      <img alt="" src={Convertible} className="h-8 mr-3"></img>
                      <div>Convertible</div>
                    </div>
                    <div className="flex flex-grow justify-end text-grey text-price select-none">
                      <div>$429</div>
                    </div>
                  </label>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div>
                  <label
                    className={`flex flex-row items-center pt-2 pb-2 pl-4 pr-4 bg-clip-padding " ${
                      active ? "bg-hover" : ""
                    }`}
                    htmlFor="Commercial"
                    onClick={handleEvent}
                    onChange={() => selectItem("Commercial")}
                  >
                    <div className="rounded border border-solid border-primary w-checkbox h-checkbox ">
                      <input
                        id="Commercial"
                        type="checkbox"
                        className="opacity-0 absolute"
                        ref={addToCheckboxRefs}
                      ></input>
                      <svg
                        className="fill-current hidden text-icon pointer-events-none"
                        viewBox="0 0 200 200"
                      >
                        <path d="M132.639 63.231l-48.974 53.26l-17.569-13.51l-12.191 15.855c22.199 17.07 30.128 26.802 38.284 17.932l55.172-60l-14.722-13.537z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-row items-center pl-2 text-md select-none">
                      <img alt="" src={Commercial} className="h-8 mr-3"></img>
                      <div>Commercial</div>
                    </div>
                    <div className="flex flex-grow justify-end text-grey text-price select-none">
                      <div>$657</div>
                    </div>
                  </label>
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </div>
      )}
    </Menu>
  );
};

export default CarFilterDropdown;
