import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { handleToast } from "@/utils/showToast";

const ApprovalCard = ({ req, setModal }) => {
  const [toolTip, setToolTip] = useState(false);

  const handleModal = (modal) => {
    setModal(modal);
  };


  return (
    <div className="card bg-lightDark rounded-2xl p-5 flex flex-col gap-y-4">
      <div>
        <img
          src={req.image}
          alt="CardImg"
          className="rounded-xl h-[10.851rem] w-full object-cover object-center"
        />
      </div>
      <div className="info flex items-center justify-between relative">
        <h3 className="text-btnFrom uppercase font-bold text-xs">
          {req.postedAt}
        </h3>
        <div className="flex items-center gap-x-2">
          <span className="text-grey font-normal">Posted by</span>
          <div
            className="bg-[#00875A] w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setToolTip(true)} onMouseLeave={()=>setToolTip(false)}
          >
            <p className="text-xs uppercase">{req.postedBy.split(" ")[0]}</p>
          </div>
        </div>
        <div
          className={`${
            toolTip ? "block" : "hidden"
          } absolute -top-12 -right-10 bg-gradient-to-r from-btnFrom to-btnTo p-[1px] rounded-lg`}
        >
          <p className="bg-[#303030] px-6 py-2 rounded-lg text-[#E3E3E3] text-sm">
            {req.postedBy}
          </p>
        </div>
      </div>
      <div className="caption pr-3 h-[4rem] overflow-hidden">
        <p className="text-white font-bold text-sm">{req.caption}</p>
      </div>
      {/* <div className="consent flex items-center justify-between">
        <div className="meter">
          <p className="text-grey py-1">consent meter</p>
          <div className="w-[141px] rounded-full h-[15px] bg-barColor">
            <div
              className={`${
                req.meter >= 50 && req.meter <= 70
                  ? "bg-[#FFD027]"
                  : req.meter < 25
                  ? "bg-red"
                  : "bg-green"
              } h-full rounded-full`}
              style={{ width: `${req.meter}%` }}
            ></div>
          </div>
        </div>
        <div className="members">
          <p className="text-grey py-1">in this post</p>
          <div class="flex items-center justify-end -space-x-2 rtl:space-x-reverse">
            <div className="bg-[#00875A] w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center">
              <p className="text-xs uppercase">{req.postedBy.split(" ")[0]}</p>
            </div>
            <div className="bg-btnFrom w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center">
              <p className="text-xs uppercase">{req.postedBy.split(" ")[0]}</p>
            </div>
            <div className="bg-btnTo w-[1.5rem] h-[1.5rem] rounded-full p-1 flex items-center justify-center">
              <p className="text-xs uppercase">{req.postedBy.split(" ")[0]}</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="buttons border-t border-[#2F2F2F] py-6 flex items-center justify-around xl:flex-row lg:flex-col  w-full xl:space-y-0  lg:space-y-5 space-y-0">
        <button
          className="rounded-2xl px-6 sm:px-10 py-3 bg-[#ffffff0d] xl:w-fit lg:w-full"
          onClick={() => handleModal(true)}
        >
          Review
        </button>
        <button
          className="rounded-2xl px-6 sm:px-10 py-3 bg-gradient-to-r from-btnFrom to-btnTo xl:w-fit lg:w-full"
          onClick={() => handleToast("Post Shared", <FiCheckCircle />, true)}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default ApprovalCard;
