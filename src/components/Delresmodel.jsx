import React, { useState } from "react";

const Delresmodel = ({ onClose }) => {
  return (
    <section className="bg-transparent h-screen flex flex-col items-center justify-center   px-4">
      <div className="max-w-[574px]  bg-model rounded-xl max-h-[537px]">
        <div className="flex justify-center flex-col py-4 sm:px-8 px-16">
          <h2 className="text-[14px] font-bold text-white ">Delete resident</h2>
          <div
            className=" bg-greyText2  w-full 
                h-[0.5px] mt-3  "
          >
            <div className="flex justify-center  relative">
              <div className="w-[132px] border-t-4 border-blue-500 pt-2  rounded-t-md absolute -top-1"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-white sm:text-start p-8 sm:space-x-10 gap-8 sm:text-sm text-xl">
          <div className="flex flex-col">
            <p className="font-[700]  leading-[24.12px]">First Name</p>
            <p className="font-[700] leading-[24.12px]">Ed</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[700]  leading-[24.12px]">Last Name</p>
            <p className="font-[700]  leading-[24.12px]">Trick</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[700] leading-[24.12px]">D.O.b</p>
            <p className="font-[700] leading-[24.12px]">12/08/1942</p>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-white/10"></div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-3 sm:py-8 gap-x-4 py-2 px-6">
          <button
            type="button"
            className="text-white bg-white/5  font-medium rounded-xl text-sm px-8 py-2 text-center   "
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className={`text-red-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-white`}
            onClick={onClose}
          >
            Delete resident
          </button>
        </div>
      </div>
    </section>
  );
};

export default Delresmodel;
