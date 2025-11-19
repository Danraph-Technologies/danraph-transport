import React from "react";

function Register() {
  return (
    <div>
      <div>
        <div className="flex items-center gap-3 py-5 ">
          <img src="/vehicle.png" alt="" className="w-93px" />
          <div className="bg-[#F0F0F0] py-2 rounded-lg px-4 flex items-center gap-2 cursor-pointer">
            <img
              src="\UploadSimple.png"
              alt=""
              className="sm:w-[26px] w-[19px]"
            />
            <p className="text-[15px] sm:text-[16px]">Upload Vehicle Image</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[50px] gap-[20px] items-center ">
          <div>
            <form action="" className="flex flex-col gap-5 justify-between">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="py-2">
                  Vehicle Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Vehicle 001"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="py-2">
                  Plate Number
                </label>
                <input
                  type="text"
                  name="plate number"
                  id="plate number"
                  placeholder="K43-234-FT5."
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="py-2">
                  Model
                </label>
                <input
                  type="text"
                  name="Model"
                  id="Model"
                  placeholder="Danraph Motors 2012"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="text" className="py-2">
                  Maintenance Issue
                </label>
                <input
                  type="text"
                  name="Maintenance Issue"
                  id="Maintenance Issue"
                  placeholder="None"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" className="py-2">
                  Year manufactured
                </label>
                <div className="relative">
                  <select
                    name="text"
                    id="year"
                    className="border border-[#21212380] w-full rounded-[3px] p-2 py-3 outline-none"
                  >
                    <option value="">Select year</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col py-4">
                <input
                  type="text"
                  name="Color"
                  id="Color"
                  placeholder="None"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
            </form>
          </div>

          <div>
            <h2 className="font-semibold text-[20px]">Upload Vehicle Documents</h2>
            <p className="italic text-[#212123d3]">
              Vehicle License, Proof of Ownership, Vehicle Registration Paper,
              Roadworthiness Certificate, and Insurance Certificate (typically
              Third-Party Insurance)
            </p>
            <div className=" flex flex-col justify-start items-start py-4 ">
              <div className="bg-[#F0F0F0] py-2 rounded-lg px-4 flex items-center gap-2 cursor-pointer">
                <img
                  src="\UploadSimple.png"
                  alt=""
                  className="sm:w-[26px] w-[19px]"
                />
                <p className="text-[15px] sm:text-[16px]">Upload</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="flex flex-col gap-4 items-center">
                <img src="/lincense.jpg" alt="" className="h-[150px]" />
                <p className="underline cursor-pointer">View Drivers licence</p>
                <div className="bg-[#F0F0F0] py-2 rounded-lg px-3 flex items-center gap-2 cursor-pointer">
                  <img
                    src="\UploadSimple.png"
                    alt=""
                    className="sm:w-[24px] w-[18px]"
                  />
                  <p className="text-[15px] sm:text-[16px]">change</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src="/lincense.jpg" alt="" className="h-[150px]" />
                <p className="underline cursor-pointer">View Drivers licence</p>
                <div className="bg-[#F0F0F0] py-2 rounded-lg px-3 flex items-center gap-2 cursor-pointer">
                  <img
                    src="\UploadSimple.png"
                    alt=""
                    className="sm:w-[24px] w-[18px]"
                  />
                  <p className="text-[15px] sm:text-[16px]">change</p>
                </div>
              </div>
            </div>

            <div className="py-2">
              <div className="py-5">
                <h2 className="text-[19px] font-semibold">Assign Vehicle</h2>
                <p className="text-[#212123] text-[18px] italic">
                  Assign vehicle to driver
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="">Choose Vehicle</label>
                <select
                  name=""
                  id=""
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer outline-none"
                >
                  <option value="">Choose Vehicle</option>
                  <option value="">Vehicle 1</option>
                  <option value="">Vehicle 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
