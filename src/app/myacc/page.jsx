"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBell } from "react-icons/pi";
import { RiSettings4Line } from "react-icons/ri";
const page = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section className="w-full min-h-screen bg-[#f8f8f8] ">
      <div className=" lg:pr-32 lg:pl-48 sm:pr-20 sm:pl-32 px-8 h-full text-black">
        <div className="pt-8 pb-28">
          <div className="">
            <p className="font-[500] text-[#B6B4BA] text-[14px] leading-[20px]">
              <Link href='/dashboard'>dashboard</Link> <span className="text-[#2E2C34]">/ My account</span>
            </p>{" "}
            <p className="font-[600] text-[#2E2C34] text-[32px] leading-[40px] mt-2">
              My details
            </p>
          </div>

          <div className="w-full flex justify-between pt-12 pb-4 border-b-[1px] border-[#EBEAED]">
            <p className="font-[600] bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% bg-clip-text text-transparent sm:text-[24px]  text-xl sm:leading-[40px]">
              Personal details
            </p>
            <Link href="/myacc/edit">
              <button className=" flex items-center text-center sm:w-[138px] sm:py-[11px] sm:px-[24px] sm:gap-[12px] px-[15px] py-[6px]  justify-center bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% sm:text-lg rounded-[43px]  text-white">
                <p className="text-center "> Edit</p>
              </button>
            </Link>
          </div>

          <div className="lg:w-[40%] md:w-[60%] sm:w-[70%] pt-5 flex flex-col space-y-12 justify-start">
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-5">
                <p className="font-[500] text-[#2E2C34] sm:text-[24px] text-xl sm:leading-[20px]">
                  First Name
                </p>
                <p className="font-[500] text-[#860B59] sm:text-[14px]  sm:leading-[20px]">
                  Stephen
                </p>
              </div>
              <div className="flex flex-col space-y-5">
                <p className="font-[500] text-[#2E2C34] sm:text-[24px] text-xl sm:leading-[20px]">
                  Last name
                </p>
                <p className="font-[500] text-[#860B59] sm:text-[14px]  sm:leading-[20px]">
                  King
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <p className="font-[500] text-[#2E2C34] sm:text-[24px] text-xl sm:leading-[20px]">
                Email
              </p>
              <p className="font-[500] text-[#860B59] text-[14px]  leading-[20px]">
                jrockstephen@gmail.com
              </p>
            </div>
            <div className="flex flex-col space-y-5">
              <p className="font-[500] text-[#2E2C34] sm:text-[24px] text-xl sm:leading-[20px]">
                Phone no.
              </p>
              <p className="font-[500] text-[#860B59] sm:text-[14px] sm:leading-[20px]">
                +61 435 435 544
              </p>
            </div>
          </div>

          <div className="w-full flex justify-between py-16 pb-4 border-b-[1px] border-[#EBEAED]">
            <p className="font-[600] bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% bg-clip-text text-transparent sm:text-[24px] sm:leading-[40px] text-xl">
              Centre details
            </p>
          </div>
          <div className=" pt-5 flex flex-col space-y-12 justify-start">
            <div className="flex flex-col space-y-5">
              <p className="font-[500] text-[#2E2C34] sm:text-[24px] text-xl sm:leading-[20px]">
                Center name
              </p>
              <p className="font-[500] text-[#860B59] sm:text-[14px] sm:leading-[20px]">
                RSL Coburg
              </p>
            </div>
            <div className="flex flex-col space-y-5">
              <p className="font-[500] text-[#2E2C34] sm:text-[24px] text-xl sm:leading-[20px]">
                Address
              </p>
              <p className="font-[500] text-[#860B59] sm:text-[14px] sm:leading-[20px]">
                Coburg VIC 3230
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
