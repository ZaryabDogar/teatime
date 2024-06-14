import Chart from "@/components/Chart";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";
import { FiCheckCircle, FiUser, FiUsers, FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import Link from "next/link";

const Dashboard = () => {
  const cards = [
    {
      icon: <FiUser />,
      count: 41,
      title: "Residents",
    },
    {
      icon: <FiUsers />,
      count: 220,
      title: "Family members",
    },
    {
      icon: <FaRegHeart />,
      count: 24,
      title: "Care workers",
    },
    {
      icon: <FiHome />,
      count: 20,
      title: "Families connected",
    },
  ];

  const table = [
    {
      title: "Mr",
      fname: "Ed",
      lname: "Trick",
      dob: "12/08/1942",
      consent: false,
    },
    {
      title: "Mr",
      fname: "Jimmy",
      lname: "Jhonson",
      dob: "11/02/1962",
      consent: true,
    },
    {
      title: "Mrs",
      fname: "Rhonda",
      lname: "Patrick",
      dob: "11/02/1956",
      consent: true,
    },
  ];

  return (
    <div className="w-full xl:px-2 py-8 text-white flex flex-col gap-y-8">
      {/* My Dashboard */}
      <div className="flex items-center px-4 justify-between">
        <h3 className="text-textBlack text-base uppercase font-bold">
          My Dashboard
        </h3>
        <BsThreeDots className=" text-greyText2 text-[1rem] cursor-pointer" />
      </div>
      {/* Chart Container */}
      <div className="flex  items-start xl:items-center xl:flex-row flex-col xl:justify-between gap-4">
        {/* Approvals */}
        <div className="flex items-center gap-x-6 bg-gradient-to-r from-btnFrom to-btnTo rounded-2xl pl-6 pr-14 py-4">
          {/* Icon */}
          <div className="bg-[#04040434] p-4 rounded-2xl">
            <FiCheckCircle className="text-primary1 text-[1.5rem]" />
          </div>
          <div className="text-center text-black">
            <h3 className="font-bold text-[30px]">2</h3>
            <p className="text-primary1 text-xs font-bold -tracking-[0.4px]">
              Pending approvals
            </p>
          </div>
        </div>
        {/* Chart */}
        <div className="bg-lightDark flex sm:flex-row flex-col items-center gap-2 rounded-2xl pr-4 pl-2 sm:py-0 py-2 max-w-full justify-between xl:w-[50%] w-full">
          <div className="min-w-[55%]">
            <Chart />
          </div>
          <div className="flex items-center gap-x-4 -tracking-[.4px]">
            <div>
              <h3 className="font-bold text-[22px] leading-[30px]">120</h3>
              <p className="font-normal text-sm text-grey leading-[20px] ">
                Posts shared this week
              </p>
            </div>
            <div className="flex items-center text-green gap-x-2 font-bold">
              <FaArrowUpLong />
              <p className="text-sm">105.23 %</p>
            </div>
          </div>
        </div>
        {/* Family Notifications */}
        <div className="flex items-center gap-x-6 bg-primary1 rounded-2xl pl-6 pr-14 py-4">
          {/* Icon */}
          <div className="bg-gradient-to-r from-[#ff3c0033] to-[#e429832f] bg-opacity-5 p-4 rounded-2xl">
            <GrNotification className="text-red text-[1.5rem]" />
          </div>
          <div className="text-center text-white">
            <h3 className="font-bold text-[30px]">2</h3>
            <p className="text-xs font-bold -tracking-[0.4px]">
              Family Notifications
            </p>
          </div>
        </div>
      </div>
      {/* Cards Container */}
      <div className="flex items-center justify-normal flex-wrap gap-4">
        {cards.map((card, i) => (
          <div
            class="py-4 w-full sm:w-[267px] 2xl:w-[470px] flex flex-col items-center justify-center gap-y-4 bg-lightDark last:bg-gradient-to-r last:from-btnFrom last:to-btnTo rounded-2xl shadow"
            key={i}
          >
            <div
              className={`p-4 ${
                i === 3
                  ? "bg-[#D9D9D9] bg-opacity-20 text-table"
                  : "bg-gradient-to-tr from-cardFrom to-cardTo text-disable backdrop-blur-[2rem]"
              }  text-[1.5rem] rounded-2xl`}
            >
              {card.icon}
            </div>
            <div className="text-center font-bold">
              <h3
                class={`mb-2 text-[30px] ${
                  i === 3 ? "text-primary1" : "text-white"
                }`}
              >
                {card.count}
              </h3>
              <p
                class={`mb-3 text-xs ${
                  i === 3 ? "text-primary1" : "text-grey"
                }`}
              >
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* New Residents */}
      {/* <div className="flex items-center justify-between font-bold text-xl text-greyText2">
        <h3>New residents</h3>
        <Link href="">View all</Link>
      </div> */}
      {/* Table */}
      {/* <div className="bg-lightDark px-6 py-4 rounded-xl">
        <div className="relative overflow-x-auto shadow-md ">
          <table className="w-full text-sm text-center">
            <thead className="text-sm text-white uppercase bg-[#ffffff13] rounded-xl">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-xl">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  D.O.B
                </th>
                <th scope="col" className="px-6 py-3">
                  Sharing consent
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-xl">
                  <span class="sr-only">Menu</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {table.map((item, i) => (
                <tr key={i}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.fname}</td>
                  <td className="px-6 py-4">{item.lname}</td>
                  <td className="px-6 py-4">{item.dob}</td>
                  <td className="px-6 py-4">
                    <div className="text-xl flex items-center justify-center">
                      <span
                        className={`${
                          item.consent
                            ? "bg-sharpGreen text-[#474747]"
                            : "bg-red text-white"
                        } rounded-full p-[2px]`}
                      >
                        {item.consent ? <FiCheckCircle /> : <MdOutlineCancel />}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <BsThreeDots className="text-[rgba(255,255,255,0.6)] text-lg" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
