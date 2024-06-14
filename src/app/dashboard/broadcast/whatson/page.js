"use client";
import Link from "next/link";
import React, { useRef, useState } from 'react';
import { CgCalendar } from "react-icons/cg";
import { MdOutlineDelete } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
const WhatsOn = () => {
  const inputStyle =
    "outline-none border-none placeholder:text-white text-white font-bold bg-[#FFFFFF0D] rounded-xl pl-5 pr-8 py-3";

  const date = useRef(null);

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  // State variables for form data
  const [eventData, setEventData] = useState({
    weekCommencing: '',
    venue: '',
    events: weekDays.map((day) => ({ day, name: '', location: '' })),
  });

  // Update event name or location in state
  const handleEventChange = (dayIndex, field, value) => {
    setEventData((prevData) => {
      const updatedEvents = [...prevData.events];
      updatedEvents[dayIndex][field] = value;
      return { ...prevData, events: updatedEvents };
    });
  };

  // Update week commencing or venue in state
  const handleFormChange = (field, value) => {
    setEventData((prevData) => ({ ...prevData, [field]: value }));
  };
  console.log(eventData)

  return (
    <div className=" 2xl:pt-12 bg-lightDark rounded-xl ">
      {/* Heading */}
      <div className="flex items-center justify-between px-8 sm:px-16 py-4 border-b border-[#FFFFFF0D]">
        <h3 className="font-bold leading-[22px] -tracking-[.4px]">Whats on this week</h3>
        <div className="flex items-center sm:gap-x-10 gap-x-2 text-[1.5rem] text-lightWhite">
          <Link href="/dashboard/broadcast">
            <MdOutlineDelete className="cursor-pointer" />
          </Link>
          <RiSettings4Line className="cursor-pointer" />
        </div>
      </div>
      {/* Form */}
      <div className="flex xl:flex-row flex-col items-start xl:gap-x-14 2xl:gap-x-20 px-2">
        {/* Table */}
        <div className="bg-lightDark px-6 py-4 rounded-xl max-w-full">
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] font-bold text-lightWhite uppercase">
                <tr>
                  <th scope="col" className="px-6 py-1 rounded-s-xl">
                    Day
                  </th>
                  <th scope="col" className="px-6 py-1">
                    What
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Where
                  </th>
                </tr>
              </thead>
              <tbody>
                {weekDays.map((day, i) => (
                  <tr
                    key={i}
                    className=" last:border-none border-b border-[#FFFFFF0D]"
                  >
                    <th
                      scope="row"
                      className="pl-8 pr-6 py-5 font-bold text-white whitespace-nowrap"
                    >
                      {day}
                    </th>
                    <td className="px-6 py-5">
                      <input
                        type="text"
                        placeholder="event name"
                        className={inputStyle}
                        value={eventData.events[i].name}
                        onChange={(e) => handleEventChange(i, 'name', e.target.value)}
                      />
                    </td>
                    <td className="px-6 py-5">
                      <input
                        type="text"
                        placeholder="event location"
                        className={inputStyle}
                        value={eventData.events[i].location}
                        onChange={(e) => handleEventChange(i, 'location', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Inputs */}
        <div className="flex xl:flex-col sm:flex-row flex-col gap-4 pt-10 xl:pb-0 xl:pl-0 sm:pl-8 pl-2 pb-4 ">
          <div className="flex flex-col gap-2">
            <p className="uppercase text-lightWhite text-[10px]">
              Week commencing
            </p>
            <div
              className={`${inputStyle} flex items-center justify-between`}
            >
              <input
                type="date"
                className="border-none outline-none h-full w-full bg-transparent text-white input"
                ref={date}
                value={eventData.weekCommencing}
                onChange={(e) => handleFormChange('weekCommencing', e.target.value)}
              />
              <CgCalendar
                className="text-[1.5rem] text-lightWhite cursor-pointer"
                onClick={() => date.current.showPicker()}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="uppercase text-lightWhite text-[10px]">Venue</p>
            <div
              className={`${inputStyle} flex items-center justify-between text-[14px]`}
            >
              <input
                type="text"
                className="border-none outline-none h-full w-full font-medium bg-transparent text-lightWhite placeholder:text-lightWhite"
                placeholder="Venue location"
                value={eventData.venue}
                onChange={(e) => handleFormChange('venue', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="px-10">
        <div className="border-t border-[#FFFFFF0D] py-6 font-bold text-xs text-white flex sm:flex-row flex-col items-center justify-center gap-4">
          <Link href="/dashboard/broadcast">
            <button className="px-20 py-3 bg-[#FFFFFF0D] rounded-2xl">
              Cancel
            </button>
          </Link>
          <Link
            href={{
              pathname: '/dashboard/broadcast/whatson/template',
              query: { eventData: JSON.stringify(eventData) },
              // state: { eventData },
            }}
          >
            <button className="px-20 py-3 bg-gradient-to-r from-btnFrom to-btnTo rounded-2xl">
              Preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
