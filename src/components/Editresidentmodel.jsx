import React, { useState } from "react";
import { CgCalendar } from "react-icons/cg";
import { useRef } from "react";

const FamilyModel = ({ onClose }) => {
  const inputStyle =
    "outline-none border-none placeholder:text-white text-white font-bold  rounded-xl ";
  const date = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpeny, setIsOpeny] = useState(false);
  const [selectedOptiony, setSelectedOptiony] = useState("");
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");
  const options = ["Ms", "Mr"];
  const optionsy = ["Yes", "No"];
  // Event handlers for each field
  const handleField1Change = (e) => {
    setField1(e.target.value);
  };

  const handleField2Change = (e) => {
    setField2(e.target.value);
  };

  const handleField3Change = (e) => {
    setField3(e.target.value);
  };
  const handleField4Change = (e) => {
    setField4(e.target.value);
  };
  const handleField5Change = (e) => {
    setField5(e.target.value);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handleSelecty = (option) => {
    setSelectedOptiony(option);
    setIsOpeny(false);
  };

  return (
    <section className="bg-transparent h-screen flex flex-col items-center justify-center sm:pt-[0px]  pt-[32px]">
      <div className="max-w-[574px] bg-model rounded-2xl ">
        <div className="flex justify-center flex-col sm:py-4">
          <h2 className="text-[14px] font-bold text-white ">Edit details</h2>
          <div
            className=" bg-greyText2  w-full 
                h-[0.5px] mt-3  "
          >
            <div className="flex justify-center  relative">
              <div className="w-[132px] border-t-4 border-blue-500 pt-2  rounded-t-md absolute -top-1"></div>
            </div>
          </div>
        </div>
        <div className="max-h-[500px] overflow-y-scroll overflow-x-hidden scrollbar">
          <form action="" className="sm:px-20 px-12 sm:py-8 py-2">
            <div className="grid gap-2 mb-2 sm:grid-cols-2 sm:gap-6 sm:mb-5 max-w-[432px]">
              <div className="">
                <label
                  htmlFor="Family member of"
                  className="block sm:mb-2 mb-[2px]  text-[10px] uppercase font-bold text-white/60 text-start "
                >
                  Title
                </label>
                <div className="relative flex items-center">
                  <div
                    className={`cursor-pointer appearance-none bg-white/10 text-sm rounded-2xl block w-full sm:p-3  p-1 px-2 outline-none text-white font-[700] text-start ${
                      isOpen ? "border-b-2 border-black" : ""
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selectedOption || "Mr."}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                    <svg
                      className={`fill-current h-4 w-4 transition-transform transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
                    </svg>
                  </div>
                  {isOpen && (
                    <div className="absolute w-full mt-2 bg-model rounded-b-md shadow-white/30  shadow-md top-8">
                      {options.map((option) => (
                        <div
                          key={option}
                          className="p-2 cursor-pointer hover:bg-black/10 sm:text-sm text-[12px] font-[700] text-start"
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label
                  for="Last Name"
                  className="block sm:mb-2 mb-[2px] text-[10px] font-bold text-white/60 text-start "
                >
                  D.O.B
                </label>
                <div
                  className={`${inputStyle} flex items-center justify-between pr-2 bg-white/10`}
                >
                  <input
                    type="date"
                    className="border-none text-sm outline-none sm:p-3  p-1 px-2 w-full bg-transparent text-white input text-[10px]"
                    ref={date}
                  />
                  <CgCalendar
                    className="text-[1.5rem] text-lightWhite cursor-pointer "
                    onClick={() => date.current.showPicker()}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  for="First Name"
                  className="block sm:mb-2 mb-[2px] text-[10px] font-bold text-white/60 text-start"
                >
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-white/10  sm:text-sm rounded-2xl  block w-full sm:p-3  p-1 px-2outline-none text-white font-[700] placeholder:text-white text-[12px]"
                  placeholder="Jonathan"
                  required=""
                  value={field1}
                  onChange={handleField1Change}
                />
              </div>
              <div className="w-full">
                <label
                  for="Last Name"
                  className="block sm:mb-2 mb-[2px] text-[10px] font-bold text-white/60 text-start"
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="Last Name"
                  id="Last Name"
                  className="bg-white/10  sm:text-sm rounded-2xl  block w-full sm:p-3  p-1 px-2 outline-none text-white font-[700] placeholder:text-white text-[12px]"
                  value={field2}
                  onChange={handleField2Change}
                  placeholder="Hayes"
                  required=""
                />
              </div>
              <div className="">
                <label
                  for="Email address"
                  className="block sm:mb-2 mb-[2px] text-[10px] font-bold text-white/60 text-start "
                >
                  Email address (optional)
                </label>
                <input
                  type="text"
                  name="Email address"
                  id="Email address"
                  className="bg-white/10  sm:text-sm rounded-2xl  block w-full sm:p-3  p-1 px-2outline-none text-white font-[700] placeholder:text-white text-[12px]"
                  value={field3}
                  onChange={handleField3Change}
                  placeholder="johnh232@gmail.com"
                  required=""
                />
              </div>
              <div className="">
                <label
                  htmlFor="Family member of"
                  className="block sm:mb-2 mb-[2px] text-[10px] uppercase font-bold text-white/60 text-start "
                >
                  Sharing consent
                </label>
                <div className="relative flex items-center">
                  <div
                    className={`cursor-pointer appearance-none bg-white/10 sm:text-sm rounded-2xl block w-full sm:p-3  p-1 px-2text-[12px]  outline-none text-white font-[700] text-start ${
                      isOpen ? "border-b-2 border-black" : ""
                    }`}
                    onClick={() => setIsOpeny(!isOpeny)}
                  >
                    {selectedOptiony || "yes"}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                    <svg
                      className={`fill-current h-4 w-4 transition-transform transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
                    </svg>
                  </div>
                  {isOpeny && (
                    <div className="absolute w-full mt-2 bg-model rounded-b-md shadow-white/30  shadow-md top-8">
                      {optionsy.map((optionsy) => (
                        <div
                          key={optionsy}
                          className="p-2 cursor-pointer hover:bg-black/10 text-sm font-[700] text-start"
                          onClick={() => handleSelecty(optionsy)}
                        >
                          {optionsy}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-white/10"></div>
            <label
              for="Email address"
              className="block sm:mb-2 mb-[2px] text-[12px] font-bold text-white leading-[20px] text-start sm:py-3 py-1"
            >
              Key Family Contact
            </label>
            <div className="grid gap-2 mb- sm:grid-cols-2 sm:gap-6 sm:mb-5 max-w-[432px]">
              <div className="sm:col-span-2">
                <label
                  for="Email address"
                  className="block sm:mb-2 mb-[2px] text-[10px] font-bold text-white/60 text-start "
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="text"
                  name="Email address"
                  id="Email address"
                  className="bg-white/10  sm:text-sm   rounded-2xl  block w-full sm:p-3  p-1 px-2outline-none text-white font-[700] placeholder:text-white text-[12px]"
                  value={field3}
                  onChange={handleField3Change}
                  placeholder="johnh232@gmail.com"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  for="First Name"
                  className="block sm:mb-2 mb-[2px] text-[10px] font-bold text-white/60 text-start"
                >
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="fn"
                  id="brand"
                  className="bg-white/10  sm:text-sm rounded-2xl  block w-full sm:p-3  p-1 px-2outline-none text-white font-[700] placeholder:text-white text-[12px]"
                  placeholder="Jonathan"
                  required=""
                  value={field4}
                  onChange={handleField4Change}
                />
              </div>
              <div className="w-full">
                <label
                  for="Last Name"
                  className="block sm:mb-2 mb-[2px] text-[10px] font-bold text-white/60 text-start"
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="LastName"
                  id="Last Name"
                  className="bg-white/10  sm:text-sm text-[12px] rounded-2xl  block w-full sm:p-3  p-1 px-2 outline-none text-white font-[700] placeholder:text-white"
                  value={field5}
                  onChange={handleField5Change}
                  placeholder="Hayes"
                  required=""
                />
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-white/10"></div>
            <div className="sm:grid sm:grid-cols-2 grid-cols-1 gap-y-3 sm:py-8 gap-x-4 py-2 flex ">
              <button
                type="button"
                className="text-white bg-white/5  font-medium rounded-xl sm:text-sm text-[12px]  sm:px-12 sm:py-2.5 p-1 text-center   "
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`text-red-600 font-medium rounded-xl sm:text-sm text-[12px] sm:px-5 sm:py-2.5 p-1 text-center bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% `}
                // disabled={!field1 || !field2 || !field3}
              >
                Edit family member
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FamilyModel;
