"use client";
import { handleToast } from "@/utils/showToast";

import Link from "next/link";
import React, { useState } from "react";

import { FiUser } from "react-icons/fi";

const page = () => {
  const [menu, setMenu] = useState(false);
  const [phoneType, setPhoneType] = useState("Mobile");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const phoneTypes = ["Home", "Work", "Other"];

  const handlePhoneTypeSelect = (type) => {
    setPhoneType(type);
    setIsDropdownOpen(false);
  };

  return (
    <section className="w-full min-h-screen  bg-[#f8f8f8] ">
      <div className=" lg:pr-32 lg:pl-48 md:pr-16 md:pl-24  px-6 h-full text-black">
        <div className="pt-8 pb-28">
          <div className=" pb-8 mb-8 border-b-[1px] border-[#EBEAED] flex flex-col space-y-2">
            <p className="font-[500] text-[#B6B4BA] text-[14px] leading-[20px] ">
              <Link href="/dashboard">dashboard</Link>{" "}
              <span className="text-[#2E2C34]">/ My account</span>
            </p>{" "}
            <p className="font-[600] text-[#2E2C34] text-[32px] leading-[40px] mt-2">
              Edit details
            </p>
          </div>

          <div className="w-full flex justify-between sm:flex-row flex-col">
            <div className="flex items-start sm:mb-0 mb-9">
              <p className="font-[600] xl:text-[18px] xl:leading-[22.68px]">
                Account Information
              </p>
            </div>
            <div className="flex flex-col lg:pr-24 space-y-8">
              <div className="flex sm:space-x-5 sm:space-y-0 space-y-8 sm:flex-row flex-col">
                <div className="flex flex-col space-y-3">
                  <p className="font-[500] text-[14px] leading-[14px] text-[#504F54]">
                    First name
                  </p>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="border-[1px] border-[#EBEAED] outline-none text-[14px] font-[500] text-[#2E2C34] leading-[20px] p-2.5 xl:w-[295px] placeholder-shown:text-[#84818A]"
                    placeholder="Your first name"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="font-[500] text-[14px] leading-[14px] text-[#504F54]">
                    Last name
                  </p>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="border-[1px] border-[#EBEAED] outline-none text-[14px] leading-[20px] p-2.5 xl:w-[295px] placeholder-shown:text-[#84818A]"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <p className="font-[500] text-[14px] leading-[14px] text-[#504F54]">
                  Email
                </p>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="border-[1px] border-[#EBEAED] outline-none text-[14px] leading-[20px] p-2.5  placeholder-shown:text-[#84818A]"
                  placeholder="Your email"
                />
              </div>
              <div className="flex flex-col space-y-3 relative">
                <p className="font-[500] text-[14px] leading-[14px] text-[#504F54]">
                  Phone
                </p>
                <div className="relative border-[1px] border-[#EBEAED]">
                  <input
                    type="number"
                    name="firstname"
                    id="firstname"
                    className=" outline-none text-[14px] w-full leading-[20px] p-2.5 placeholder-shown:text-[#84818A]"
                    placeholder="0000-0000-0000"
                  />
                  <div className="absolute top-0 right-0 ">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="p-2.5 border-l-[1px] border-[#EBEAED] bg-white  font-[500] text-[#2E2C34] text-[14px] leading-[20px] flex items-center space-x-2"
                    >
                      {phoneType || "Select Type"}
                      <svg
                        className={`ml-1 w-2 h-2 text-[#84818A] transition-transform transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full right-0 mt-1 p-4 bg-white border border-[#EBEAED] ">
                        {phoneTypes.map((type) => (
                          <div
                            key={type}
                            onClick={() => handlePhoneTypeSelect(type)}
                            className="cursor-pointer py-1"
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p className="font-[600] text-[14px] leading-[20px]  bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% bg-clip-text text-transparent">
                  + Add another number
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between my-8 sm:flex-row flex-col w-full">
            <div className="flex items-start sm:mb-0 mb-9">
              <p className="font-[600] xl:text-[18px] xl:leading-[22.68px]">
                Center details
              </p>
            </div>
            <div className="flex flex-col lg:pr-24 space-y-8">
              <div className="flex sm:space-x-5">
                <div className="flex flex-col space-y-3 sm:w-fit w-full">
                  <p className="font-[500] text-[14px] leading-[14px] text-[#504F54]">
                    Center name
                  </p>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="border-[1px] border-[#EBEAED] outline-none text-[14px] font-[500] text-[#2E2C34] leading-[20px] p-2.5 xl:w-[295px] w-full placeholder-shown:text-[#84818A]"
                    placeholder="Center name"
                  />
                </div>
                <div className="sm:flex flex-col space-y-3 xl:w-[295px] w-[211px] hidden"></div>
              </div>
              <div className="flex flex-col space-y-3">
                <p className="font-[500] text-[14px] leading-[14px] text-[#504F54]">
                  Address
                </p>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="border-[1px] border-[#EBEAED] outline-none text-[14px] leading-[20px] p-2.5  placeholder-shown:text-[#84818A]"
                  placeholder="Center address here"
                />
                <p className="font-[600] text-[14px] leading-[20px]  bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% bg-clip-text text-transparent">
                  + Add another center
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center space-x-5 items-center py-8 border-t-[1px] border-[#EBEAED]">
            <Link href="/myacc">
              <p className="font-[600] text-[14px] leading-[20px] text-center">
                Discard{" "}
              </p>
            </Link>
            <Link href="/myacc">
              <button
                className=" flex items-center text-center  sm:py-[11px] sm:px-[24px] sm:gap-[12px] px-[15px] py-[6px]  justify-center bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% sm:text-lg rounded-[43px]  text-white font-[600] "
                onClick={() => {
                  handleToast("please input all fields", <FiUser />, true);
                }}
              >
                <p className="text-center ">Save Changes</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
