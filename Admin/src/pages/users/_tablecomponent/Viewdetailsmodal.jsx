import React from "react";

function Viewdetailsmodal({ onClose, isClosing }) {
  return (
    <div 
    className={`w-[767px] max-h-[95vh] overflow-y-auto relative sm:px-2 mx-2 bg-white rounded-[10px]  animate-fadeIn ${
      isClosing ? 'opacity-0' : 'opacity-100'
    }`}
    onClick={(e) => e.stopPropagation()}
  >
      <button
        onClick={onClose}
        className="absolute right-2 top-2 cursor-pointer px-3 py-2 text-[20px] text-[#262626] font-semibold"
      >
        X
      </button>
      <div className="py-10 px-5 ">
        <h2 className="text-[24px] font-semibold text-[#262626] ">
          User Profile
        </h2>
        <div className="flex justify-between py-3 gap-2 items-center">
          <div className="flex py-3 gap-3 items-center">
            <img
              src="/userprofile.jpg"
              alt=""
              className="sm:w-[98px] sm:h-[98px] w-[50px] h-[50px] rounded-full object-cover "
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
              Email - mandyokoro@gmail.vom (0811234567)
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
          <h2 className="text-[#000000] font-semibold py-3 text-[20px] ">
            Ride History
          </h2>
          <div className="max-w-[689px]">
            <div className="border overflow-x-auto rounded-[15px]  px-2 ">
              <table className="w-full min-w-[600px] ">
                <thead className="border-b whitespace-nowrap">
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
                    <td className="px-3 flex flex-col py-2 w-[128px] ">
                      <span className="text-[14.2px] text-[#595959]">
                        4/4/2024
                      </span>
                      <span className="text-[11.2px] text-[#77787C]">
                        10:00AM
                      </span>
                    </td>
                    <td className="px-3 py-2 w-[128px] ">
                      <span className="text-[14.2px] text-[#595959]">
                        Main Gate
                      </span>
                      <span className="flex gap-2 items-center">
                        <span>
                          <img src="/arrow.png" alt="" className="w-[8px]" />
                        </span>
                        <span className="text-[11.2px] text-[#77787C]">
                          Hostel A
                        </span>
                      </span>
                    </td>
                    <td className="px-3 w-[128px]">₦250</td>
                    <td className="px-3  py-2">
                      <span className="flex gap-1 text-[#202223] items-center">
                        <span className="text-[17px]">James</span>
                        <span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.56248 3V7.875C9.56248 8.02418 9.50322 8.16726 9.39773 8.27275C9.29224 8.37824 9.14916 8.4375 8.99998 8.4375C8.8508 8.4375 8.70772 8.37824 8.60223 8.27275C8.49674 8.16726 8.43748 8.02418 8.43748 7.875V4.35938L3.39795 9.39797C3.29228 9.50364 3.14895 9.56301 2.99951 9.56301C2.85007 9.56301 2.70675 9.50364 2.60107 9.39797C2.4954 9.2923 2.43604 9.14897 2.43604 8.99953C2.43604 8.85009 2.4954 8.70677 2.60107 8.60109L7.6406 3.5625H4.12498C3.9758 3.5625 3.83272 3.50324 3.72723 3.39775C3.62174 3.29226 3.56248 3.14918 3.56248 3C3.56248 2.85082 3.62174 2.70774 3.72723 2.60225C3.83272 2.49676 3.9758 2.4375 4.12498 2.4375H8.99998C9.14916 2.4375 9.29224 2.49676 9.39773 2.60225C9.50322 2.70774 9.56248 2.85082 9.56248 3Z"
                              fill="#202223"
                            />
                          </svg>
                        </span>
                      </span>
                    </td>
                    <td className="px-3 w-[128px]">None</td>
                  </tr>
                  <tr className="">
                    <td className="px-3 flex flex-col py-2 w-[128px]">
                      <span className="text-[14.2px] text-[#595959]">
                        4/4/2024
                      </span>
                      <span className="text-[11.2px] text-[#77787C]">
                        10:00AM
                      </span>
                    </td>
                    <td className="px-3 py-2 w-[128px]">
                      <span className="text-[14.2px] text-[#595959]">
                        Main Gate
                      </span>
                      <span className="flex gap-2 items-center">
                        <span>
                          <img src="/arrow.png" alt="" className="w-[8px]" />
                        </span>
                        <span className="text-[11.2px] text-[#77787C]">
                          Hostel A
                        </span>
                      </span>
                    </td>
                    <td className="px-3 w-[128px]">₦250</td>
                    <td className="px-3  py-2">
                      <span className="flex gap-1 text-[#202223] items-center">
                        <span className="text-[17px]">James</span>
                        <span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.56248 3V7.875C9.56248 8.02418 9.50322 8.16726 9.39773 8.27275C9.29224 8.37824 9.14916 8.4375 8.99998 8.4375C8.8508 8.4375 8.70772 8.37824 8.60223 8.27275C8.49674 8.16726 8.43748 8.02418 8.43748 7.875V4.35938L3.39795 9.39797C3.29228 9.50364 3.14895 9.56301 2.99951 9.56301C2.85007 9.56301 2.70675 9.50364 2.60107 9.39797C2.4954 9.2923 2.43604 9.14897 2.43604 8.99953C2.43604 8.85009 2.4954 8.70677 2.60107 8.60109L7.6406 3.5625H4.12498C3.9758 3.5625 3.83272 3.50324 3.72723 3.39775C3.62174 3.29226 3.56248 3.14918 3.56248 3C3.56248 2.85082 3.62174 2.70774 3.72723 2.60225C3.83272 2.49676 3.9758 2.4375 4.12498 2.4375H8.99998C9.14916 2.4375 9.29224 2.49676 9.39773 2.60225C9.50322 2.70774 9.56248 2.85082 9.56248 3Z"
                              fill="#202223"
                            />
                          </svg>
                        </span>
                      </span>
                    </td>
                    <td className="px-3 w-[128px]">None</td>
                  </tr>
                  <tr className="">
                    <td className="px-3 flex flex-col py-2 ">
                      <span className="text-[14.2px] text-[#595959]">
                        4/4/2024
                      </span>
                      <span className="text-[11.2px] text-[#77787C]">
                        10:00AM
                      </span>
                    </td>
                    <td className="px-3 py-2 ">
                      <span className="text-[14.2px] text-[#595959]">
                        Main Gate
                      </span>
                      <span className="flex gap-2 items-center">
                        <span>
                          <img src="/arrow.png" alt="" className="w-[8px]" />
                        </span>
                        <span className="text-[11.2px] text-[#77787C]">
                          Hostel A
                        </span>
                      </span>
                    </td>
                    <td className="px-3 w-[128px]">₦250</td>
                    <td className="px-3  py-2">
                      <span className="flex gap-1 text-[#202223] items-center">
                        <span className="text-[17px]">James</span>
                        <span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.56248 3V7.875C9.56248 8.02418 9.50322 8.16726 9.39773 8.27275C9.29224 8.37824 9.14916 8.4375 8.99998 8.4375C8.8508 8.4375 8.70772 8.37824 8.60223 8.27275C8.49674 8.16726 8.43748 8.02418 8.43748 7.875V4.35938L3.39795 9.39797C3.29228 9.50364 3.14895 9.56301 2.99951 9.56301C2.85007 9.56301 2.70675 9.50364 2.60107 9.39797C2.4954 9.2923 2.43604 9.14897 2.43604 8.99953C2.43604 8.85009 2.4954 8.70677 2.60107 8.60109L7.6406 3.5625H4.12498C3.9758 3.5625 3.83272 3.50324 3.72723 3.39775C3.62174 3.29226 3.56248 3.14918 3.56248 3C3.56248 2.85082 3.62174 2.70774 3.72723 2.60225C3.83272 2.49676 3.9758 2.4375 4.12498 2.4375H8.99998C9.14916 2.4375 9.29224 2.49676 9.39773 2.60225C9.50322 2.70774 9.56248 2.85082 9.56248 3Z"
                              fill="#202223"
                            />
                          </svg>
                        </span>
                      </span>
                    </td>
                    <td className="px-3 w-[128px]">None</td>
                  </tr>
                  <tr className="">
                    <td className="px-3 flex flex-col py-2 ">
                      <span className="text-[14.2px] text-[#595959]">
                        4/4/2024
                      </span>
                      <span className="text-[11.2px] text-[#77787C]">
                        10:00AM
                      </span>
                    </td>
                    <td className="px-3 py-2 w-[128px]">
                      <span className="text-[14.2px] text-[#595959]">
                        Main Gate
                      </span>
                      <span className="flex gap-2 items-center">
                        <span>
                          <img src="/arrow.png" alt="" className="w-[8px]" />
                        </span>
                        <span className="text-[11.2px] text-[#77787C]">
                          Hostel A
                        </span>
                      </span>
                    </td>
                    <td className="px-3 w-[128px]">₦250</td>
                    <td className="px-3  py-2 w-[128px]">
                      <span className="flex gap-1 text-[#202223] items-center">
                        <span className="text-[17px]">James</span>
                        <span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.56248 3V7.875C9.56248 8.02418 9.50322 8.16726 9.39773 8.27275C9.29224 8.37824 9.14916 8.4375 8.99998 8.4375C8.8508 8.4375 8.70772 8.37824 8.60223 8.27275C8.49674 8.16726 8.43748 8.02418 8.43748 7.875V4.35938L3.39795 9.39797C3.29228 9.50364 3.14895 9.56301 2.99951 9.56301C2.85007 9.56301 2.70675 9.50364 2.60107 9.39797C2.4954 9.2923 2.43604 9.14897 2.43604 8.99953C2.43604 8.85009 2.4954 8.70677 2.60107 8.60109L7.6406 3.5625H4.12498C3.9758 3.5625 3.83272 3.50324 3.72723 3.39775C3.62174 3.29226 3.56248 3.14918 3.56248 3C3.56248 2.85082 3.62174 2.70774 3.72723 2.60225C3.83272 2.49676 3.9758 2.4375 4.12498 2.4375H8.99998C9.14916 2.4375 9.29224 2.49676 9.39773 2.60225C9.50322 2.70774 9.56248 2.85082 9.56248 3Z"
                              fill="#202223"
                            />
                          </svg>
                        </span>
                      </span>
                    </td>
                    <td className="px-3 w-[128px]">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewdetailsmodal;
