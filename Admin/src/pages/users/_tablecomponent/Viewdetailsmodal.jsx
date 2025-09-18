import React from "react";

function Viewdetailsmodal() {
  return (
    <div className="w-[767px] h-auto relative  bg-white rounded-[10px]">
      <p className="absolute right-2 top-2 cursor-pointer px-3 py-2 text-[20px] text-[#262626] font-semibold ">
        X
      </p>
      <div className="py-10 px-5 ">
        <h2 className="text-[24px] font-semibold text-[#262626] ">
          User Profile
        </h2>
        <div className="flex justify-between py-3 gap-2 items-center">
          <div className="flex py-3 gap-3 items-center">
            <img
              src="/userprofile.jpg"
              alt=""
              className="w-[98px] h-[98px] rounded-full object-cover "
            />
            <div className="flex gap-1 items-center">
              <p className="bg-[#34C759] w-[13px] h-[13px] rounded-full"></p>
              <p className="font-medium">Active</p>
            </div>
          </div>
          <div>
            <p className="border border-[#F80B0B] font-semibold rounded-[10px] p-2 text-[14px] cursor-pointer hover:bg-[#ececec] duration-200 transition-all ">
              Suspend User
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] font-medium">Basic Details</h2>
          <div className="flex flex-col gap-3 py-4 ">
            <p className="text-[#666666]">Name - Amanda Okoro</p>
            <p className="text-[#666666]">
              Contact - mandyokoro@gmail.vom (0811234567)
            </p>
            <p className="text-[#666666]">
              Address - No 2 Madubuike Street, Nsukka
            </p>
            <p className="text-[#666666]">
              Faculty - Health Science, Maduka University
            </p>
          </div>
        </div>
        <div className="border border-[#58585880] my-3"></div>
        <div>
          <h2 className="text-[#000000] font-semibold text-[20px] ">
            Ride History
          </h2>
          <div className="border rounded-[10px] w-[689px] px-2 ">
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left  ">
                  <th className="px-3 py-2">Date</th>
                  <th className="px-3 py-2">Destination</th>
                  <th className="px-3 py-2">Fare (₦) </th>
                  <th className="px-3 py-2">Driver</th>
                  <th className="px-3 py-2">Complaints</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="">
                  <td className="px-3 flex flex-col py-2 ">
                    <span className="text-[13.2px] text-[#77787C]">
                      4/4/2024
                    </span>
                    <span className="text-[10.2px] text-[#77787C]">
                      10:00AM
                    </span>
                  </td>
                  <td className="px-3">
                    <span>Main Gate</span>
                    <span>
                        <span>
                            <img src="/arrow.png" alt="" />
                        </span>
                    </span>
                  </td>
                  <td className="px-3">ff</td>
                  <td className="px-3">ff</td>
                  <td className="px-3">ff</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewdetailsmodal;
