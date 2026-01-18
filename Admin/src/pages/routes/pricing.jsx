import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Pricing() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
    key: 'selection',
  });
  const dropdownRef = useRef(null);
  const calendarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        !event.target.closest(".calendar-icon")
      ) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (showCalendar) setShowCalendar(false);
  };

  const toggleCalendar = (e) => {
    e.stopPropagation();
    setShowCalendar(!showCalendar);
    setShowDateRange(false);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDateRange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDateRange(!showDateRange);
    setShowCalendar(false);
  };

  const handleDateRangeChange = (ranges) => {
    setDateRange(ranges.selection);
  };

  const applyDateRange = () => {
    // Here you can add logic to filter data based on the selected date range
    console.log('Date Range Selected:', dateRange);
    setShowDateRange(false);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
    // Here you would typically update your data based on the selected date
  };

  // Simple calendar component
  const Calendar = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-100 ${
            i === selectedDate.getDate() ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() =>
            handleDateSelect(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
            )
          }
        >
          {i}
        </div>
      );
    }

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 1,
                  1
                )
              )
            }
            className="p-1 hover:bg-gray-100 rounded"
          >
            &lt;
          </button>
          <span className="font-medium">
            {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
          </span>
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1,
                  1
                )
              )
            }
            className="p-1 hover:bg-gray-100 rounded"
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="font-medium text-gray-500">
              {day}
            </div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="border rounded-lg w-full p-2 ">
        <div className="flex justify-between text-[20px] font-semibold  ">
          <h2>Pricing & Commission</h2>
          <p className="flex items-center gap-2 ">
            <span>Today</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z"
                fill="black"
                fill-opacity="0.4"
              />
            </svg>
          </p>
        </div>

        <div className="md:grid-cols-4 mm:grid-cols-2 le:grid-cols-2 grid grid-cols-1 items-center gap-4 py-5">
          <div className="w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex  flex-col gap-2 ">
            <p className="sm:text-[17px] text-[15px] le:text-[16px]">
              Active Drivers
            </p>

            <div className="flex  flex-wrap gap-1 justify-between">
              <p className="sm:text-[25px] text-[20px]  font-semibold">700</p>
              <p className="flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer">
                <span>+15.03%</span>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>

          <div className="w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex  flex-col gap-2 ">
            <p className="sm:text-[17px] text-[15px] le:text-[16px]">
              Total Commissioned Earned
            </p>

            <div className="flex  flex-wrap gap-1 justify-between">
              <p className="sm:text-[25px] text-[20px]  font-semibold">500</p>
              <p className="flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer">
                <span>+15.03%</span>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>

          <div className="w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex  flex-col gap-2 ">
            <p className="sm:text-[17px] text-[15px] le:text-[16px]">
              Total Payouts to Drivers
            </p>

            <div className="flex  flex-wrap gap-1 justify-between">
              <p className="sm:text-[25px] text-[20px]  font-semibold">
                100,000
              </p>
              <p className="flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer">
                <span>+15.03%</span>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>

          <div className="w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex  flex-col gap-2 ">
            <p className="sm:text-[17px] text-[15px] le:text-[16px]">
              Active USers
            </p>

            <div className="flex  flex-wrap gap-1 justify-between">
              <p className="sm:text-[25px] text-[20px]  font-semibold">200</p>
              <p className="flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer">
                <span>+15.03%</span>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 justify-between items-center">
            <h2 className="font-semibold text-[20px]">
              Drivers Earning Report
            </h2>
            <Link to="/admin/manage-route">
              <button className="rounded-lg text-white flex items-center gap-2 bg-blue-700 p-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.625 7.8125C15.625 8.06114 15.5262 8.2996 15.3504 8.47541C15.1746 8.65123 14.9361 8.75 14.6875 8.75H8.75V14.6875C8.75 14.9361 8.65123 15.1746 8.47541 15.3504C8.2996 15.5262 8.06114 15.625 7.8125 15.625C7.56386 15.625 7.3254 15.5262 7.14959 15.3504C6.97377 15.1746 6.875 14.9361 6.875 14.6875V8.75H0.9375C0.68886 8.75 0.450403 8.65123 0.274587 8.47541C0.0987721 8.2996 0 8.06114 0 7.8125C0 7.56386 0.0987721 7.3254 0.274587 7.14959C0.450403 6.97377 0.68886 6.875 0.9375 6.875H6.875V0.9375C6.875 0.68886 6.97377 0.450403 7.14959 0.274587C7.3254 0.0987721 7.56386 0 7.8125 0C8.06114 0 8.2996 0.0987721 8.47541 0.274587C8.65123 0.450403 8.75 0.68886 8.75 0.9375V6.875H14.6875C14.9361 6.875 15.1746 6.97377 15.3504 7.14959C15.5262 7.3254 15.625 7.56386 15.625 7.8125Z"
                    fill="white"
                  />
                </svg>
                <span>Create/View routes</span>
              </button>
            </Link>
          </div>

          <div className="py-3 relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className=" pl-10 w-full border rounded-full outline-none p-2 placeholder:text-[#6264A0]"
            />

            <div className="absolute left-3 top-1/2 -translate-y-1/2">
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

          {/* 
          
          by Date Dropdown */}
          <div className="flex justify-end " ref={dropdownRef}>
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <div className="relative">
                  <div
                    className="calendar-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCalendar(e);
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <path
                        d="M12.6667 2.6665H12V1.33317H10.6667V2.6665H5.33333V1.33317H4V2.6665H3.33333C2.59333 2.6665 2.00667 3.2665 2.00667 3.99984L2 13.3332C2 14.0665 2.59333 14.6665 3.33333 14.6665H12.6667C13.4 14.6665 14 14.0665 14 13.3332V3.99984C14 3.2665 13.4 2.6665 12.6667 2.6665ZM12.6667 13.3332H3.33333V5.99984H12.6667V13.3332Z"
                        fill="#4B5563"
                      />
                      <path
                        d="M5.33333 7.33317H4V8.6665H5.33333V7.33317Z"
                        fill="#4B5563"
                      />
                      <path
                        d="M8.66667 7.33317H7.33333V8.6665H8.66667V7.33317Z"
                        fill="#4B5563"
                      />
                      <path
                        d="M12 7.33317H10.6667V8.6665H12V7.33317Z"
                        fill="#4B5563"
                      />
                      <path
                        d="M5.33333 9.99984H4V11.3332H5.33333V9.99984Z"
                        fill="#4B5563"
                      />
                      <path
                        d="M8.66667 9.99984H7.33333V11.3332H8.66667V9.99984Z"
                        fill="#4B5563"
                      />
                      <path
                        d="M12 9.99984H10.6667V11.3332H12V9.99984Z"
                        fill="#4B5563"
                      />
                    </svg>
                  </div>
                  {showCalendar && (
                    <div
                      ref={calendarRef}
                      className="absolute z-50 right-0 mt-1"
                    >
                      <Calendar />
                    </div>
                  )}
                </div>
                Sort by Date
                <svg
                  className={`w-5 h-5 ml-2 -mr-1 transition-transform duration-200 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 z-10 w-56 mt-1 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      This Week
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      This Month
                    </a>
                    <div className="relative">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={toggleDateRange}
                      >
                        Custom Range
                      </a>
                      {showDateRange && (
                        <div className="absolute right-0 z-20 mt-1 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 p-4">
                          <div className="flex flex-col space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">From:</label>
                              <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={dateRange.startDate ? dateRange.startDate.toISOString().split('T')[0] : ''}
                                onChange={(e) => setDateRange(prev => ({
                                  ...prev,
                                  startDate: e.target.value ? new Date(e.target.value) : null
                                }))}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
                              <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={dateRange.endDate ? dateRange.endDate.toISOString().split('T')[0] : ''}
                                min={dateRange.startDate ? dateRange.startDate.toISOString().split('T')[0] : ''}
                                onChange={(e) => setDateRange(prev => ({
                                  ...prev,
                                  endDate: e.target.value ? new Date(e.target.value) : null
                                }))}
                              />
                            </div>
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowDateRange(false);
                                }}
                                className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  applyDateRange();
                                }}
                                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                                disabled={!dateRange.startDate || !dateRange.endDate}
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="overflow-x-auto max-w-full py-3 ">
            <table className="min-w-full whitespace-nowrap">
              <thead className="bg-[#004AAD]">
                <tr className="text-white text-left">
                  <th className="py-2 pl-3 pr-3  font-normal">Driver Name</th>
                  <th className="py-2 pl-2 pr-3  font-normal">
                    Total Trips Completed
                  </th>
                  <th className="py-2 pl-2 pr-3  font-normal">
                    Total Fare Collected (₦)
                  </th>

                  <th className="py-2 pl-2 pr-4 font-normal">More</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b ">
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    James Okeke
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    30
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    5,000
                  </td>

                  <td className="whitespace-nowrap  py-4 pl-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
                        fill="#5C5F62"
                      />
                    </svg>
                  </td>
                </tr>

                <tr className="border-b ">
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    James Okeke
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    30
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    5,000
                  </td>

                  <td className="whitespace-nowrap  py-4 pl-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
                        fill="#5C5F62"
                      />
                    </svg>
                  </td>
                </tr>

                <tr className="border-b ">
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    James Okeke
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    30
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    5,000
                  </td>

                  <td className="whitespace-nowrap  py-4 pl-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
                        fill="#5C5F62"
                      />
                    </svg>
                  </td>
                </tr>

                <tr className="border-b ">
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    James Okeke
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    30
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    5,000
                  </td>

                  <td className="whitespace-nowrap  py-4 pl-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
                        fill="#5C5F62"
                      />
                    </svg>
                  </td>
                </tr>

                <tr className="border-b ">
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    James Okeke
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    30
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    5,000
                  </td>

                  <td className="whitespace-nowrap  py-4 pl-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
                        fill="#5C5F62"
                      />
                    </svg>
                  </td>
                </tr>

                <tr className="border-b ">
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    James Okeke
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    30
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    5,000
                  </td>

                  <td className="whitespace-nowrap  py-4 pl-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
                        fill="#5C5F62"
                      />
                    </svg>
                  </td>
                </tr>

                <tr className="border-b ">
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    James Okeke
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    30
                  </td>
                  <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-3">
                    5,000
                  </td>

                  <td className="whitespace-nowrap  py-4 pl-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
                        fill="#5C5F62"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
