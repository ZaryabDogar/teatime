import React from "react";

const BroadCastMessages = () => {
  return (
    <div className="py-8 px-4">
      <h3 className="uppercase text-grey font-bold text-xs pb-6">
        broadcasted messages (2)
      </h3>
      <div className="messages flex items-center gap-x-6 flex-wrap">
        <div>
          <img src="/images/temp3.png" alt="boradCastImg" />
          <p className="font-bold text-xs text-black pt-4">Published - 24th of Sep</p>
        </div>
        <div>
          <img src="/images/brtemp3.png" alt="boradCastImg" />
          <p className="font-bold text-xs text-black pt-4">Published - 24th of Sep</p>
        </div>
      </div>
    </div>
  );
};

export default BroadCastMessages;
