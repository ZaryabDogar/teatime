import React from "react";
import { RiSettings4Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

const BoradCasts = () => {
  const broadCasts = [
    {
      title: "Whats on this week",
      slogon: "Tell groups what happening this week in your care center",
      bg: `rgba(222, 53, 11, 0.05)`,
    },
    {
      title: "Food Menu",
      slogon: "Tell everyone whats on the menu this week",
      bg: `rgba(0, 82, 204, 0.05)`,
    },
  ];

  return (
    <div className="pt-6 2xl:pt-12 bg-lightDark rounded-xl py-4">
      <div className="flex items-center justify-between px-8 sm:px-16 pt-4 pb-8 border-b border-[#FFFFFF0D]">
        <h4 className="font-bold text-sm">
          Templates <span className="text-grey">(2)</span>
        </h4>
        <div className="text-[1.5rem] text-[#FFFFFF99] cursor-pointer">
          <RiSettings4Line />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 2xl:gap-x-8 py-6">
        {/* Add Blank broadcast */}
        <div className="w-[242px] h-[312px] bg-[#FFFFFF0D] rounded-xl flex flex-col items-center justify-center gap-6">
          <div className="bg-lightDark px-7 py-6 rounded-2xl cursor-pointer">
            <FaPlus className="text-red text-[1.5rem]" />
          </div>
          <div className="text-center space-y-4 leading-[20px] -tracking-[.4px]">
            <h3 className="font-bold text-[16px]">Add New Blank broadcast</h3>
            <p className="text-xs text-grey px-8">
              Send information to all resident groups
            </p>
          </div>
        </div>
        {broadCasts.map((item, i) => (
          <div
            key={i}
            className="w-[242px] h-[312px] rounded-xl flex flex-col items-center justify-between gap-6"
            style={{ backgroundColor: `${item.bg}` }}
          >
            <div className="px-6 py-4 space-y-8">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-xs font-normal leading-[20px] -tracking-[.4px] text-grey">
                {item.slogon}
              </p>
            </div>
            <div className="py-4 px-6 w-full text-right border-t border-[#FFFFFF0D]">
              <Link
                href={`${
                  i === 0
                    ? "/dashboard/broadcast/whatson"
                    : "/dashboard/broadcast/whatscooking"
                }`}
              >
                <button className="px-8 py-3 rounded-full bg-[#FFFFFF0D] text-xs font-bold">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoradCasts;
