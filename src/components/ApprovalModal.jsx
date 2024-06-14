import { handleToast } from "@/utils/showToast";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineCancel, MdOutlineDelete } from "react-icons/md";

const ApprovalModal = ({ setModal }) => {
  const handleModal = (modal) => {
    setModal(modal);
  };

  const table = [
    {
      title: "Mr",
      fname: "Ed",
      lname: "Trick",
      consent: false,
    },
    {
      title: "Mr",
      fname: "Jimmy",
      lname: "Jhonson",
      consent: true,
    },
    {
      title: "Mrs",
      fname: "Rhonda",
      lname: "Patrick",
      consent: true,
    },
  ];

  return (
    <div className="sm:max-w-3xl sm:h-[497px] m-auto bg-lightDark rounded-xl p-4 flex sm:flex-row flex-col items-center  justify-center gap-4 relative mt-16">
      {/* Icon */}
      <MdOutlineCancel
        className="absolute top-1 right-1 text-btnFrom text-5xl cursor-pointer"
        onClick={() => setModal(false)}
      />
      {/* Image */}
      <div className="w-full h-full sm:pt-0 pt-12">
        <img
          src="/images/modal1.png"
          className="w-full h-full object-cover object-center"
          alt="ModalImg"
        />
      </div>
      {/* Info Side */}
      <div className="pr-4 flex flex-col min-h-full justify-between p-4">
        <div className="info space-y-4">
          <h3 className="text-btnFrom uppercase font-bold text-xs">
            Today, At 6 am
          </h3>
          <div className="flex items-center gap-x-2">
            <div className="bg-[#00875A] w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center cursor-pointer">
              <p className="text-xs uppercase">ED</p>
            </div>
            <p className="text-grey font-normal">Posted by : Ed Drummond</p>
          </div>
          <div className="caption pr-8 h-[4rem] overflow-hidden">
            <p className="text-white font-bold text-sm leading-[19.04px]">
              Going for a walk, this caption can be long this is only an example
              of a long caption, they might usually be small
            </p>
          </div>
        </div>
        {/* <div className="consent flex items-center justify-between">
          <div className="meter">
            <p className="text-grey py-1">consent meter</p>
            <div className="w-[141px] rounded-full h-[15px] bg-barColor">
              <div
                className={`bg-green h-full rounded-full`}
                style={{ width: `${80}%` }}
              ></div>
            </div>
          </div>
          <div className="members">
            <p className="text-grey py-1">in this post</p>
            <div class="flex items-center justify-end -space-x-2 rtl:space-x-reverse">
              <div className="bg-[#00875A] w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center">
                <p className="text-xs uppercase">ED</p>
              </div>
              <div className="bg-btnFrom w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center">
                <p className="text-xs uppercase">MR</p>
              </div>
              <div className="bg-btnTo w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center">
                <p className="text-xs uppercase">RF</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md border-t border-[#2F2F2F] pt-2 pb-4">
          <table className="w-full text-sm">
            <thead className="text-sm text-grey">
              <tr>
                <th scope="col" className="py-3 font-normal text-left">
                  Name
                </th>
                <th scope="col" className="py-3 font-normal text-right">
                  Sharing consent
                </th>
              </tr>
            </thead>
            <tbody>
              {table.map((item, i) => (
                <tr className=" odd:bg-[#232323]">
                  <td className="py-2 pl-1 text-left flex items-center gap-x-3">
                    <div className="bg-[#00875A] w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center cursor-pointer">
                      <p className="text-xs uppercase">ED</p>
                    </div>
                    {item.fname} {item.lname}
                  </td>
                  <td className="py-2 text-right">
                    <div className="text-xl flex items-center justify-center pl-10">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <div className="buttons border-t border-[#2F2F2F] py-6 flex items-center justify-around">
          <button
            className="rounded-2xl px-6 sm:px-10 py-3 bg-[#ffffff0d]"
            onClick={() => {
              handleModal(false);
              handleToast("Post Rejected", <MdOutlineDelete />, false);
            }}
          >
            Reject
          </button>
          <button
            className="rounded-2xl px-6 sm:px-10 py-3 bg-gradient-to-r from-btnFrom to-btnTo"
            onClick={() => {
              handleModal(false);
              handleToast("Post Shared", <FiCheckCircle />, true);
            }}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalModal;
