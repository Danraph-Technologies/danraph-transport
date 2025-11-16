import React, { useState } from "react";

function AssignVerhicle({ onClose }) {
  const [selectedOption, setSelectedOption] = useState("");
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 px-6 ">
      <div className="bg-white rounded-lg w-full max-w-[550px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">Assign/Reassign Vehicle</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border border-black py-2 px-1 w-full cursor-pointer outline-none "
          >
            <option value="">Select Option</option>
            <option value="assign">Assign Vehicle</option>
            <option value="reassign">Reassign Vehicle</option>
          </select>

          {/* for assigning vehicle*/}
          {selectedOption === 'assign' && (
          <div className="mt-3">
            <h2 className="text-center font-semibold">Assign Vehicle</h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="Drivers Name?"
              className="outline-none w-full border border-black py-2 px-1 my-2 "
            />

            <select
              name=""
              id=""
              className="border border-black py-2 px-1 w-full cursor-pointer outline-none "
            >
              <option value="">Select Vehicle to Assign</option>
              <option value="">Vehicle 001</option>
              <option value="">Vehicle 002</option>
            </select>
          </div>
          )}
          {/* for re-assigning vehicle*/}
          {selectedOption === 'reassign' && (
          <div className="mt-3">
            <h2 className="text-center font-bold">Re-assign Vehicle</h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="Drivers Name?"
              className="outline-none w-full border border-black py-2 px-1 mt-2 "
            />
            <p className="text-[13px] font-medium pb-2">
              Current Vehicle?{" "}
              <span className="text-blue-700">Vehicle 001</span>{" "}
            </p>

            <select
              name=""
              id=""
              className="border border-black py-2 px-1 w-full cursor-pointer outline-none "
            >
              <option value="">Select Vehicle to Re-assign</option>
              <option value="">Vehicle 001</option>
              <option value="">Vehicle 002</option>
            </select>
          </div>
          )}

          {(selectedOption === 'assign' || selectedOption === 'reassign') && (
          <button className="bg-blue-700 py-2 text-white rounded-lg w-full my-4 ">
            Save
          </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssignVerhicle;
