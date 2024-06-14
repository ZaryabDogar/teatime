"use client";
import { useState } from "react";
import Switch from "react-switch";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import ApprovalCard from "@/components/ApprovalCard";
import ApprovalModal from "@/components/ApprovalModal";

const Approvals = () => {
  const [checked, setChecked] = useState(true);
  const [modal, setModal] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const requests = [
    {
      image: "/images/card1.png",
      postedAt: "Today, At 6 am",
      postedBy: "Ed Drummond",
      caption:
        "Going for a walk, this caption can be long this is only an example of a long caption, they might usually be small",
      meter: 85,
      members: 3,
    },
    {
      image: "/images/card2.png",
      postedAt: "Today, At 3 pm",
      postedBy: "JR",
      caption:
        "Our makeup artist Mariyam Reza, is getting ready to glam up the residence today, come in for a free make up fellow ladies",
      meter: 100,
      members: 1,
    },
    {
      image: "/images/card3.png",
      postedAt: "Today, At 5 pm",
      postedBy: "RF",
      caption: "James and jess are loving this spring season",
      meter: 20,
      members: 2,
    },
    {
      image: "/images/card4.png",
      postedAt: "Today, At 8 pm",
      postedBy: "MF",
      caption: "Miranda is here to find here mojo with everyone, come join us",
      meter: 60,
      members: 3,
    },
    {
      image: "/images/card5.png",
      postedAt: "yesterday, At 1 pm",
      postedBy: "WK",
      caption: "We have something special cooking tonight in the kitchen",
      meter: 50,
      members: 3,
    },
    {
      image: "/images/card6.png",
      postedAt: "23 Ocr, At 6 pm",
      postedBy: "RF",
      caption:
        "George has the biggest smile when his grand daughter comes to visit.",
      meter: 26,
      members: 3,
    },
  ];

  return (
    <div className="py-8">
      {/* Toggle */}
      <div className="flex items-center justify-between sm:px-8 px-5">
        <label className="flex sm:flex-row flex-col items-start sm:items-center gap-4">
          <span className="uppercase text-grey text-xs font-bold tracking-[1px]">
            Approval requests turned {checked ? "on" : "off"}
          </span>
          <Switch
            onChange={handleChange}
            checked={checked}
            onColor="#484848"
            offColor="#323232"
            onHandleColor="#26B380"
            offHandleColor="#FF5555"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </label>
        <BsThreeDots className=" text-greyText2 text-[1rem] cursor-pointer" />
      </div>
      {/* Approvals Card */}
      <div className="approvals py-5 px-4">
        {checked ? (
          modal ? (
            <ApprovalModal setModal={setModal} />
          ) : (
            <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-4 2xl:gap-x-6 gap-y-6 2xl:gap-y-8">
              {requests.map((req, i) => (
                <ApprovalCard req={req} setModal={setModal} key={i} />
              ))}
            </div>
          )
        ) : (
          <div className="text-greyText flex flex-col items-center justify-center gap-y-8 lg:py-16 py-8 font-medium">
            <div>
              <Image src="/images/logo.png" width={190} height={190} />
            </div>
            <p className="text-sm text-center">
              Approval requests turned off <br />All posts shared by your care
              workers will be directly shared with everyone
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Approvals;
