import { ArrowLeft } from "lucide-react";
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { nigerianStatesData } from "../../data/state";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    state: "",
    lga: "",
  });

  // Use the imported data directly
  const statesData = nigerianStatesData;

  const lgas = useMemo(() => {
    const selectedStateObject = statesData.find(
      (s) => s.name === formData.state
    );
    return selectedStateObject ? selectedStateObject.lgas : [];
  }, [formData.state, statesData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: Name=${name}, Value=${value}`);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" && { lga: "" }),
    }));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="sm:px-5 px-1">
        <div className="flex gap-2 hover:text-[#000000d5] transition-all duration-300 items-center">
          <ArrowLeft className="cursor-pointer" onClick={handleGoBack} />
          <p className="font-semibold">Register New Driver</p>
        </div>
        <div className="flex items-center gap-3 py-5 ">
          <img src="/danraph-image.png" alt="" />
          <div className="bg-[#F0F0F0] py-2 rounded-lg px-4 flex items-center gap-2 cursor-pointer">
            <img
              src="\UploadSimple.png"
              alt=""
              className="sm:w-[26px] w-[19px]"
            />
            <p className="text-[15px] sm:text-[16px]">Upload Passport Image</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-[50px] gap-2 ">
          <div>
            <form action="">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="py-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="py-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="080..."
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="py-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@gmail.com"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="text" className="py-2">
                  Residential Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" className="py-2">
                  State
                </label>
                <div className="relative">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    style={{ color: "black" }}
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer w-full outline-none pr-10 min-h-[48px] h-auto appearance-none"
                    required
                  >
                    <option value="" style={{ color: "gray" }}>
                      Select Your State
                    </option>
                    {statesData.map((state) => (
                      <option key={state.code} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="lga" className="py-2">
                  LGA
                </label>
                <div className="relative">
                  <select
                    name="lga"
                    value={formData.lga}
                    onChange={handleInputChange}
                    style={{ color: formData.lga ? "black" : "gray" }}
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer w-full outline-none pr-10 min-h-[48px] h-auto appearance-none"
                    disabled={!formData.state}
                    required
                  >
                    <option value="">
                      {formData.state
                        ? "Select Your LGA"
                        : "Select a state first"}
                    </option>
                    {lgas.map((lga, index) => (
                      <option
                        key={index}
                        value={lga}
                        style={{ color: "black" }}
                      >
                        {lga}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="border border-[#21212380] my-5 rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-[#212123] font-semibold text-[18px]">
              Upload Identification ID
            </h2>
            <p className="italic font-[300] text-[18px] py-2">
              NIN, Driver Licence
            </p>

            <div className="bg-[#F0F0F0] my-5 py-2 w-[149px] rounded-lg px-4 flex items-center gap-2 cursor-pointer">
              <img src="\UploadSimple.png" alt="" />
              <p>Upload ID</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="flex flex-col gap-4 items-center">
                <img src="/passport2.png" alt="" />
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
                <img src="/passport2.png" alt="" />
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

            <div className="py-8">
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
        <div className="flex justify-center items-center py-3">
          <button className="bg-[#004AAD] hover:bg-[#004bade7] duration-300 transition-all rounded-[10px] px-10 py-2 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
