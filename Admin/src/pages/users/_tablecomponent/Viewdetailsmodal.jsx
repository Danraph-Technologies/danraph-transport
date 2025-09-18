import React from "react";

function Viewdetailsmodal() {
  return (
    <div className="w-[767px] relative  bg-white rounded-[10px]">
      <p className="absolute right-2 top-2 cursor-pointer">X</p>
      <div>
        <h2>User Profile</h2>
        <div className="flex justify-between py-3 gap-2 items-center">
          <div className="flex gap-2 items-center">
            <img src="/userprofile.jpg" alt="" />
            <div className="flex gap-2 items-center">
              <p className="bg-[#34C759] w-[13px] h-[13px] rounded-full"></p>
              <p>Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewdetailsmodal;
