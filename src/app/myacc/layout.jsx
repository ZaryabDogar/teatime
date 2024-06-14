"use client";
import { DM_Sans, Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBell } from "react-icons/pi";
import { RiSettings4Line } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const layout = ({ children }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <nav className="sticky top-0 z-50 w-full bg-dark">
        <div className="px-3 py-4 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-start rtl:justify-end">
              <Link href="/dashboard" className="flex ms-2 md:me-24">
                <img
                  src="/images/logo.png"
                  className="h-[57px] me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-sm whitespace-nowrap dark:text-white">
                  Tea Time
                </span>
              </Link>
            </div>
            {/* Info */}
            <div className="text-white sm:flex hidden items-center justify-between w-[75%]">
              <h3 className="font-bold text-[22px] leading-[30px]">
                👋Jimmy Trick
              </h3>
              <div className="flex items-center justify-between gap-x-8">
                <button className="w-full flex items-center justify-between py-[.5rem] px-[1rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-base font-bold">
                  <FaPlus /> Broadcast
                </button>
                <div className="relative cursor-pointer">
                  <p className="w-[1rem] h-[1rem] rounded-full bg-gradient-to-r from-btnFrom to-btnTo flex items-center justify-center text-[8px] absolute -top-1 right-0">
                    1
                  </p>
                  <PiBell className="text-[1.5rem]" />
                </div>
                <div className=" cursor-pointer">
                  <RiSettings4Line className="text-[1.5rem]" />
                </div>
              </div>
            </div>
            {/* User */}
            <div className="flex items-center">
              <div className="flex items-center ms-3 relative">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="">
                    {" "}
                    <Image
                      className="rounded-full"
                      width={32}
                      height={32}
                      src="/images/user.png"
                      alt="user photo"
                    />
                  </Link>
                </button>
                <div
                  className={`z-50 my-4 text-base sm:hidden ${
                    menu ? "block" : "hidden"
                  } list-none bg-dark divide-y divide-gray-100 rounded shadow  text-white absolute top-10 right-0`}
                >
                  <div className="px-4 py-3">
                    <p className="text-sm">Jimmy Trick</p>
                    <p className="text-sm font-medium" role="none">
                      jimmy.trick@teatime.com
                    </p>
                    <Link href="/dashboard">
                      <p className="text-sm font-medium flex gap-x-[.5rem] py-2 items-center bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% w-fit my-2 px-2 rounded-lg">
                        <LuLayoutDashboard />
                        Dashboard
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between gap-x-4 py-4 px-2">
                    <button className="w-full flex items-center justify-between py-[.5rem] px-[1rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-base font-bold">
                      <FaPlus /> Broadcast
                    </button>
                    <div className="relative cursor-pointer">
                      <p className="w-[1rem] h-[1rem] rounded-full bg-gradient-to-r from-btnFrom to-btnTo flex items-center justify-center text-[8px] absolute -top-1 right-0">
                        1
                      </p>
                      <PiBell className="text-[1.5rem]" />
                    </div>
                    <div className=" cursor-pointer">
                      <RiSettings4Line className="text-[1.5rem]" />
                    </div>
                  </div>
                </div>
                <div
                  className={`z-50 my-4 text-base  ${
                    menu ? "sm:block hidden" : "hidden"
                  } list-none bg-dark divide-y divide-gray-100 rounded shadow  text-white absolute top-10 right-0`}
                >
                  <div className="flex items-center justify-center  py-4 px-5 w-full">
                    <Link href="/dashboard">
                      <button className="w-full flex items-center justify-between py-[.5rem] px-[1.5rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80%  font-bold text-sm">
                        <LuLayoutDashboard />
                        Dashboard
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`w-full mx-auto ${dm.className} relative`}>
        {children}
        <div className="absolute -top-[1%] left-5 sm:left-[50%] translate-x-[-50%] max-w-[625px]">
          <ToastContainer
            className="Toastify__toast-container"
            toastStyle={{
              margin: 0,
              padding: 0,
              backgroundColor: "transparent",
              boxShadow: "none",
              width: "100%",
            }}
            closeButton={false}
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="dark"
            icon={false}
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default layout;
