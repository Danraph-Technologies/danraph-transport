import React from "react";
import { Link } from "react-router-dom";

function Vehicle() {
  return (
    <div>
      <div className="w-full border rounded-lg p-3 ">
        <div className="flex flex-wrap justify-between items-center ">
          <h2 className="text-[20px] font-semibold">Vehicle List</h2>

          <Link to="/admin/RegisterVehicle">
            <button className="bg-[#004AAD] hover:bg-[#004AADde] duration-300 transition-all hover:scale-[1.02] rounded-lg px-3 py-2 flex items-center gap-2 text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z"
                  fill="white"
                />
              </svg>

              <span>Register New Vehicle</span>
            </button>
          </Link>
        </div>

        <div className="py-3 relative">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Vehicle"
            className="w-full border rounded-full outline-none py-2 pr-4 pl-10 placeholder:text-[#6264A0] placeholder:font-medium"
          />

          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0269 1.77007C7.84116 1.77373 5.74597 2.64364 4.2004 4.18921C2.65483 5.73478 1.78491 7.82997 1.78125 10.0157C1.78308 12.2033 2.65196 14.301 4.19753 15.8492C5.7431 17.3974 7.83932 18.2698 10.0269 18.2753C11.9671 18.2753 13.7548 17.5927 15.1683 16.4633L18.6017 19.8967C18.7757 20.0584 19.0055 20.1464 19.243 20.1423C19.4804 20.1381 19.7071 20.0421 19.8752 19.8744C20.0434 19.7067 20.14 19.4803 20.1448 19.2428C20.1496 19.0054 20.0622 18.7753 19.9009 18.6009L16.4675 15.1641C17.6402 13.7057 18.2794 11.8905 18.2795 10.0192C18.2795 5.47369 14.5724 1.77007 10.0269 1.77007ZM10.0269 3.60629C13.5816 3.60629 16.4433 6.46455 16.4433 10.0157C16.4433 13.5669 13.5816 16.4425 10.0269 16.4425C6.47227 16.4425 3.61401 13.5773 3.61401 10.0227C3.61401 6.46802 6.47227 3.60629 10.0269 3.60629Z"
                fill="#6264A0"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] table-auto">
            <thead className="bg-[#004AAD] text-white">
              <tr>
                <th className="text-left px-3 py-1">Plate Number</th>
                <th className="text-left px-3 py-1">Model</th>
                <th className="text-left px-3 py-1">Capacity</th>
                <th className="text-left px-3 py-1">Assigned Driver</th>
                <th className="text-left px-3 py-1">Maintenance Log</th>
                <th className="text-left px-3 py-1">Status</th>
                <th className="text-left px-3 py-1">Date Joined</th>
                <th className="text-left px-3 py-1">More</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left px-3 py-1 border-r">ENU-452-AA</td>
                <td className="text-left px-3 py-1 border-r">Ford Transit</td>
                <td className="text-left px-3 py-1 border-r">18-Seater</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>Amanda Okoro</span>
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.344 4.5V11.8125C14.344 12.0363 14.2551 12.2509 14.0968 12.4091C13.9386 12.5674 13.724 12.6562 13.5002 12.6562C13.2764 12.6562 13.0618 12.5674 12.9036 12.4091C12.7454 12.2509 12.6565 12.0363 12.6565 11.8125V6.53906L5.09717 14.097C4.93866 14.2555 4.72368 14.3445 4.49951 14.3445C4.27535 14.3445 4.06036 14.2555 3.90185 14.097C3.74335 13.9384 3.6543 13.7235 3.6543 13.4993C3.6543 13.2751 3.74335 13.0601 3.90185 12.9016L11.4612 5.34375H6.18771C5.96394 5.34375 5.74933 5.25486 5.59109 5.09662C5.43286 4.93839 5.34396 4.72378 5.34396 4.5C5.34396 4.27622 5.43286 4.06161 5.59109 3.90338C5.74933 3.74514 5.96394 3.65625 6.18771 3.65625H13.5002C13.724 3.65625 13.9386 3.74514 14.0968 3.90338C14.2551 4.06161 14.344 4.27622 14.344 4.5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">None</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6.06346"
                          cy="6.06346"
                          r="6.06346"
                          fill="#34C759"
                        />
                      </svg>
                    </span>{" "}
                    Active
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">4/4/2024</td>
                <td className="text-left px-3 py-1 border-r">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51208 2.37793C8.64015 2.37793 7.92676 3.09132 7.92676 3.96325C7.92676 4.83517 8.64015 5.54856 9.51208 5.54856C10.384 5.54856 11.0974 4.83517 11.0974 3.96325C11.0974 3.09132 10.384 2.37793 9.51208 2.37793ZM9.51208 13.4752C8.64015 13.4752 7.92676 14.1885 7.92676 15.0605C7.92676 15.9324 8.64015 16.6458 9.51208 16.6458C10.384 16.6458 11.0974 15.9324 11.0974 15.0605C11.0974 14.1885 10.384 13.4752 9.51208 13.4752ZM9.51208 7.92654C8.64015 7.92654 7.92676 8.63993 7.92676 9.51186C7.92676 10.3838 8.64015 11.0972 9.51208 11.0972C10.384 11.0972 11.0974 10.3838 11.0974 9.51186C11.0974 8.63993 10.384 7.92654 9.51208 7.92654Z"
                      fill="#5C5F62"
                    />
                  </svg>
                </td>
              </tr>

              <tr className="border-b">
                <td className="text-left px-3 py-1 border-r">ENU-452-AA</td>
                <td className="text-left px-3 py-1 border-r">Ford Transit</td>
                <td className="text-left px-3 py-1 border-r">18-Seater</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>Amanda Okoro</span>
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.344 4.5V11.8125C14.344 12.0363 14.2551 12.2509 14.0968 12.4091C13.9386 12.5674 13.724 12.6562 13.5002 12.6562C13.2764 12.6562 13.0618 12.5674 12.9036 12.4091C12.7454 12.2509 12.6565 12.0363 12.6565 11.8125V6.53906L5.09717 14.097C4.93866 14.2555 4.72368 14.3445 4.49951 14.3445C4.27535 14.3445 4.06036 14.2555 3.90185 14.097C3.74335 13.9384 3.6543 13.7235 3.6543 13.4993C3.6543 13.2751 3.74335 13.0601 3.90185 12.9016L11.4612 5.34375H6.18771C5.96394 5.34375 5.74933 5.25486 5.59109 5.09662C5.43286 4.93839 5.34396 4.72378 5.34396 4.5C5.34396 4.27622 5.43286 4.06161 5.59109 3.90338C5.74933 3.74514 5.96394 3.65625 6.18771 3.65625H13.5002C13.724 3.65625 13.9386 3.74514 14.0968 3.90338C14.2551 4.06161 14.344 4.27622 14.344 4.5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">None</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6.06346"
                          cy="6.06346"
                          r="6.06346"
                          fill="#34C759"
                        />
                      </svg>
                    </span>
                    Active
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">4/4/2024</td>
                <td className="text-left px-3 py-1 border-r">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51208 2.37793C8.64015 2.37793 7.92676 3.09132 7.92676 3.96325C7.92676 4.83517 8.64015 5.54856 9.51208 5.54856C10.384 5.54856 11.0974 4.83517 11.0974 3.96325C11.0974 3.09132 10.384 2.37793 9.51208 2.37793ZM9.51208 13.4752C8.64015 13.4752 7.92676 14.1885 7.92676 15.0605C7.92676 15.9324 8.64015 16.6458 9.51208 16.6458C10.384 16.6458 11.0974 15.9324 11.0974 15.0605C11.0974 14.1885 10.384 13.4752 9.51208 13.4752ZM9.51208 7.92654C8.64015 7.92654 7.92676 8.63993 7.92676 9.51186C7.92676 10.3838 8.64015 11.0972 9.51208 11.0972C10.384 11.0972 11.0974 10.3838 11.0974 9.51186C11.0974 8.63993 10.384 7.92654 9.51208 7.92654Z"
                      fill="#5C5F62"
                    />
                  </svg>
                </td>
              </tr>

              <tr className="border-b ">
                <td className="text-left px-3 py-1 border-r">ENU-452-AA</td>
                <td className="text-left px-3 py-1 border-r">Ford Transit</td>
                <td className="text-left px-3 py-1 border-r">18-Seater</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>Amanda Okoro</span>
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.344 4.5V11.8125C14.344 12.0363 14.2551 12.2509 14.0968 12.4091C13.9386 12.5674 13.724 12.6562 13.5002 12.6562C13.2764 12.6562 13.0618 12.5674 12.9036 12.4091C12.7454 12.2509 12.6565 12.0363 12.6565 11.8125V6.53906L5.09717 14.097C4.93866 14.2555 4.72368 14.3445 4.49951 14.3445C4.27535 14.3445 4.06036 14.2555 3.90185 14.097C3.74335 13.9384 3.6543 13.7235 3.6543 13.4993C3.6543 13.2751 3.74335 13.0601 3.90185 12.9016L11.4612 5.34375H6.18771C5.96394 5.34375 5.74933 5.25486 5.59109 5.09662C5.43286 4.93839 5.34396 4.72378 5.34396 4.5C5.34396 4.27622 5.43286 4.06161 5.59109 3.90338C5.74933 3.74514 5.96394 3.65625 6.18771 3.65625H13.5002C13.724 3.65625 13.9386 3.74514 14.0968 3.90338C14.2551 4.06161 14.344 4.27622 14.344 4.5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">None</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6.06346"
                          cy="6.06346"
                          r="6.06346"
                          fill="#E1C90F"
                        />
                      </svg>
                    </span>{" "}
                    In Maintenance
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">4/4/2024</td>
                <td className="text-left px-3 py-1 border-r">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51208 2.37793C8.64015 2.37793 7.92676 3.09132 7.92676 3.96325C7.92676 4.83517 8.64015 5.54856 9.51208 5.54856C10.384 5.54856 11.0974 4.83517 11.0974 3.96325C11.0974 3.09132 10.384 2.37793 9.51208 2.37793ZM9.51208 13.4752C8.64015 13.4752 7.92676 14.1885 7.92676 15.0605C7.92676 15.9324 8.64015 16.6458 9.51208 16.6458C10.384 16.6458 11.0974 15.9324 11.0974 15.0605C11.0974 14.1885 10.384 13.4752 9.51208 13.4752ZM9.51208 7.92654C8.64015 7.92654 7.92676 8.63993 7.92676 9.51186C7.92676 10.3838 8.64015 11.0972 9.51208 11.0972C10.384 11.0972 11.0974 10.3838 11.0974 9.51186C11.0974 8.63993 10.384 7.92654 9.51208 7.92654Z"
                      fill="#5C5F62"
                    />
                  </svg>
                </td>
              </tr>

              <tr className="border-b">
                <td className="text-left px-3 py-1 border-r">ENU-452-AA</td>
                <td className="text-left px-3 py-1 border-r">Ford Transit</td>
                <td className="text-left px-3 py-1 border-r">18-Seater</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>Amanda Okoro</span>
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.344 4.5V11.8125C14.344 12.0363 14.2551 12.2509 14.0968 12.4091C13.9386 12.5674 13.724 12.6562 13.5002 12.6562C13.2764 12.6562 13.0618 12.5674 12.9036 12.4091C12.7454 12.2509 12.6565 12.0363 12.6565 11.8125V6.53906L5.09717 14.097C4.93866 14.2555 4.72368 14.3445 4.49951 14.3445C4.27535 14.3445 4.06036 14.2555 3.90185 14.097C3.74335 13.9384 3.6543 13.7235 3.6543 13.4993C3.6543 13.2751 3.74335 13.0601 3.90185 12.9016L11.4612 5.34375H6.18771C5.96394 5.34375 5.74933 5.25486 5.59109 5.09662C5.43286 4.93839 5.34396 4.72378 5.34396 4.5C5.34396 4.27622 5.43286 4.06161 5.59109 3.90338C5.74933 3.74514 5.96394 3.65625 6.18771 3.65625H13.5002C13.724 3.65625 13.9386 3.74514 14.0968 3.90338C14.2551 4.06161 14.344 4.27622 14.344 4.5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">None</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6.06346"
                          cy="6.06346"
                          r="6.06346"
                          fill="#E1C90F"
                        />
                      </svg>
                    </span>{" "}
                    In Maintenance
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">4/4/2024</td>
                <td className="text-left px-3 py-1 border-r">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51208 2.37793C8.64015 2.37793 7.92676 3.09132 7.92676 3.96325C7.92676 4.83517 8.64015 5.54856 9.51208 5.54856C10.384 5.54856 11.0974 4.83517 11.0974 3.96325C11.0974 3.09132 10.384 2.37793 9.51208 2.37793ZM9.51208 13.4752C8.64015 13.4752 7.92676 14.1885 7.92676 15.0605C7.92676 15.9324 8.64015 16.6458 9.51208 16.6458C10.384 16.6458 11.0974 15.9324 11.0974 15.0605C11.0974 14.1885 10.384 13.4752 9.51208 13.4752ZM9.51208 7.92654C8.64015 7.92654 7.92676 8.63993 7.92676 9.51186C7.92676 10.3838 8.64015 11.0972 9.51208 11.0972C10.384 11.0972 11.0974 10.3838 11.0974 9.51186C11.0974 8.63993 10.384 7.92654 9.51208 7.92654Z"
                      fill="#5C5F62"
                    />
                  </svg>
                </td>
              </tr>

              <tr className="border-b">
                <td className="text-left px-3 py-1 border-r">ENU-452-AA</td>
                <td className="text-left px-3 py-1 border-r">Ford Transit</td>
                <td className="text-left px-3 py-1 border-r">18-Seater</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>Amanda Okoro</span>
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.344 4.5V11.8125C14.344 12.0363 14.2551 12.2509 14.0968 12.4091C13.9386 12.5674 13.724 12.6562 13.5002 12.6562C13.2764 12.6562 13.0618 12.5674 12.9036 12.4091C12.7454 12.2509 12.6565 12.0363 12.6565 11.8125V6.53906L5.09717 14.097C4.93866 14.2555 4.72368 14.3445 4.49951 14.3445C4.27535 14.3445 4.06036 14.2555 3.90185 14.097C3.74335 13.9384 3.6543 13.7235 3.6543 13.4993C3.6543 13.2751 3.74335 13.0601 3.90185 12.9016L11.4612 5.34375H6.18771C5.96394 5.34375 5.74933 5.25486 5.59109 5.09662C5.43286 4.93839 5.34396 4.72378 5.34396 4.5C5.34396 4.27622 5.43286 4.06161 5.59109 3.90338C5.74933 3.74514 5.96394 3.65625 6.18771 3.65625H13.5002C13.724 3.65625 13.9386 3.74514 14.0968 3.90338C14.2551 4.06161 14.344 4.27622 14.344 4.5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">None</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6.06346"
                          cy="6.06346"
                          r="6.06346"
                          fill="#F80B0B"
                        />
                      </svg>
                    </span>{" "}
                    Suspended
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">4/4/2024</td>
                <td className="text-left px-3 py-1 border-r">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51208 2.37793C8.64015 2.37793 7.92676 3.09132 7.92676 3.96325C7.92676 4.83517 8.64015 5.54856 9.51208 5.54856C10.384 5.54856 11.0974 4.83517 11.0974 3.96325C11.0974 3.09132 10.384 2.37793 9.51208 2.37793ZM9.51208 13.4752C8.64015 13.4752 7.92676 14.1885 7.92676 15.0605C7.92676 15.9324 8.64015 16.6458 9.51208 16.6458C10.384 16.6458 11.0974 15.9324 11.0974 15.0605C11.0974 14.1885 10.384 13.4752 9.51208 13.4752ZM9.51208 7.92654C8.64015 7.92654 7.92676 8.63993 7.92676 9.51186C7.92676 10.3838 8.64015 11.0972 9.51208 11.0972C10.384 11.0972 11.0974 10.3838 11.0974 9.51186C11.0974 8.63993 10.384 7.92654 9.51208 7.92654Z"
                      fill="#5C5F62"
                    />
                  </svg>
                </td>
              </tr>

              <tr className="border-b">
                <td className="text-left px-3 py-1 border-r">ENU-452-AA</td>
                <td className="text-left px-3 py-1 border-r">Ford Transit</td>
                <td className="text-left px-3 py-1 border-r">18-Seater</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>Amanda Okoro</span>
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.344 4.5V11.8125C14.344 12.0363 14.2551 12.2509 14.0968 12.4091C13.9386 12.5674 13.724 12.6562 13.5002 12.6562C13.2764 12.6562 13.0618 12.5674 12.9036 12.4091C12.7454 12.2509 12.6565 12.0363 12.6565 11.8125V6.53906L5.09717 14.097C4.93866 14.2555 4.72368 14.3445 4.49951 14.3445C4.27535 14.3445 4.06036 14.2555 3.90185 14.097C3.74335 13.9384 3.6543 13.7235 3.6543 13.4993C3.6543 13.2751 3.74335 13.0601 3.90185 12.9016L11.4612 5.34375H6.18771C5.96394 5.34375 5.74933 5.25486 5.59109 5.09662C5.43286 4.93839 5.34396 4.72378 5.34396 4.5C5.34396 4.27622 5.43286 4.06161 5.59109 3.90338C5.74933 3.74514 5.96394 3.65625 6.18771 3.65625H13.5002C13.724 3.65625 13.9386 3.74514 14.0968 3.90338C14.2551 4.06161 14.344 4.27622 14.344 4.5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">None</td>
                <td className="text-left px-3 py-1 border-r">
                  <div className="flex items-center gap-2">
                    <span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6.06346"
                          cy="6.06346"
                          r="6.06346"
                          fill="#F80B0B"
                        />
                      </svg>
                    </span>{" "}
                    Suspended
                  </div>
                </td>
                <td className="text-left px-3 py-1 border-r">4/4/2024</td>
                <td className="text-left px-3 py-1 border-r">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51208 2.37793C8.64015 2.37793 7.92676 3.09132 7.92676 3.96325C7.92676 4.83517 8.64015 5.54856 9.51208 5.54856C10.384 5.54856 11.0974 4.83517 11.0974 3.96325C11.0974 3.09132 10.384 2.37793 9.51208 2.37793ZM9.51208 13.4752C8.64015 13.4752 7.92676 14.1885 7.92676 15.0605C7.92676 15.9324 8.64015 16.6458 9.51208 16.6458C10.384 16.6458 11.0974 15.9324 11.0974 15.0605C11.0974 14.1885 10.384 13.4752 9.51208 13.4752ZM9.51208 7.92654C8.64015 7.92654 7.92676 8.63993 7.92676 9.51186C7.92676 10.3838 8.64015 11.0972 9.51208 11.0972C10.384 11.0972 11.0974 10.3838 11.0974 9.51186C11.0974 8.63993 10.384 7.92654 9.51208 7.92654Z"
                      fill="#5C5F62"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap overflow-x-auto items-center justify-between pt-2">
          <p className="text-[#667085] text-[14px]">Showing 1 to 10 of 100</p>
          <div className="flex items-center sm:gap-2 gap-1 ">
            <button className="border border-gray-300 rounded-lg py-2 px-3 text-[14px]">
              Previous
            </button>
            <div className="flex gap-2 items-center">
              <button className="border border-gray-300 rounded-lg py-2 px-3 text-[14px] bg-[#004AAD] text-white">
                1
              </button>
              <button className="border border-gray-300 rounded-lg py-2 px-3 text-[14px]">
                2
              </button>
              <button className="border border-gray-300 rounded-lg py-2 px-3 text-[14px]">
                ...
              </button>
              <button className="border border-gray-300 rounded-lg py-2 px-3 text-[14px]">
                10
              </button>
            </div>
            <button className="border border-gray-300 rounded-lg py-2 px-3 text-[14px]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
