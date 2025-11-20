import React, { useState, useRef, useEffect, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../services/api"; // Your configured axios instance
import { RefreshCw } from "lucide-react";

// Cache duration in milliseconds (30 minutes)
const CACHE_DURATION = 30 * 60 * 1000;

// Your own components
import TableMore from "./_tablecomponent/tablemore";
import Viewdetailsmodal from "./_tablecomponent/Viewdetailsmodal";

// A debounce hook to prevent API calls on every keystroke in the search bar
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

function Users() {
  // State for the modal and loading state
  const queryClient = useQueryClient();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const modalRef = useRef(null);

  // Mutation for updating user status
  const statusMutation = useMutation({
    mutationFn: async ({ userId, newStatus }) => {
      const response = await api.patch(`/v1/admin/users/${userId}/status`, {
        is_active: newStatus,
      });
      return response.data;
    },
    onSuccess: () => {
      // Refresh the users list
      queryClient.invalidateQueries(["users"]);
    },
    onError: (err) => {
      console.error("Error updating status:", err);
      alert("Failed to update status. Please try again.");
    }
  });

  // Handle status change from TableMore
  const handleTableStatusChange = (userId, newStatus) => {
    if (confirm(`Are you sure you want to ${newStatus ? 'activate' : 'deactivate'} this user?`)) {
      statusMutation.mutate({ userId, newStatus });
    }
  };

  // Derived state for modal visibility
  const isModalOpen = selectedUserId !== null;

  // State for API filtering and pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  // Debounce the local search term before triggering API fetches
  const debouncedSearchTerm = useDebounce(localSearchTerm, 500);

  // --- React Query to fetch users ---
  const {
    data: usersData,
    isLoading,
    isError,
    error,
    refetch: refetchQuery,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["users", page, pageSize, debouncedSearchTerm],
    queryFn: async ({ queryKey: [_, page, pageSize, search] }) => {
      console.log(`Fetching users: page=${page}, search='${search}'`);
      const response = await api.get("/v1/admin/users", {
        params: {
          page,
          page_size: pageSize,
          search,
        },
      });
      return response.data;
    },
    keepPreviousData: true,
    staleTime: CACHE_DURATION,
    cacheTime: CACHE_DURATION,
  });

  // Manual refresh function that forces a refetch
  const refetch = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // Force refetch and ignore cache
      await refetchQuery();
    } finally {
      setIsRefreshing(false);
    }
  }, [refetchQuery]);


  // Handle refresh with loading state
  const handleRefresh = async () => {
    if (isRefreshing) return; // Prevent multiple clicks
    setIsRefreshing(true);
    try {
      await refetch();
      // Reset the refresh state after a short delay to show the refresh animation
      setTimeout(() => setIsRefreshing(false), 1000);
    } catch (error) {
      console.error("Error refreshing data:", error);
      setIsRefreshing(false);
    }
  };

  // Format the last updated time
  const lastUpdated = new Date(dataUpdatedAt || 0).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get users from the API response or default to empty array
  const users = usersData?.items || [];
  const pagination = usersData?.pagination || { total_pages: 1, page: 1 };

  // Loading overlay styles
  const overlayStyle = {
    position: "fixed", // Changed from absolute to fixed
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50, // Increased z-index to ensure it's above other content
    backdropFilter: "blur(4px)",
  };

  // Handle retry for failed fetches
  const handleRetry = () => {
    refetch();
  };
  // --- Modal Logic ---
  const handleViewDetails = (userId) => {
    setSelectedUserId(userId);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = useCallback(() => {
    setSelectedUserId(null);
    document.body.style.overflow = "auto";
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, handleCloseModal]);

  // Show error overlay if there's an error and no data exists yet
  if (isError && (!usersData || users.length === 0)) {
    return (
      <div style={overlayStyle}>
        <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
          <div className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Failed to Load Data
          </h3>
          <p className="text-gray-600 text-center">
            {error.message ||
              "Unable to fetch users. Please check your connection and try again."}
          </p>
          <button
            onClick={handleRetry}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div style={overlayStyle}>
          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-xl">
            <RefreshCw className="w-12 h-12 text-blue-600 animate-spin" />
            <h3 className="text-xl font-medium text-gray-800">Loading Users</h3>
            <p className="text-gray-500">
              Please wait while we fetch the latest data
            </p>
          </div>
        </div>
      )}

      <div className="max-w-[1105px] w-full rounded-lg border border-gray-300 py-5 px-4 ">
        <div className="flex flex-wrap gap-y-3 justify-between items-center">
          <p className="text-[20px] font-semibold">User Management</p>
          <p>Last Updated: {dataUpdatedAt ? lastUpdated : "Never"}</p>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`text-white ${
              isRefreshing ? "bg-blue-500" : "bg-blue-700 hover:bg-blue-800"
            } flex items-center gap-2 p-2 rounded-lg text-[14px] transition-colors disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            <RefreshCw
              className={`w-5 h-5 ${isRefreshing ? "animate-spin" : ""}`}
            />
            {isRefreshing ? "Refreshing..." : "Fetch New Data"}
          </button>
        </div>

        {/* Search Input */}
        <div className="relative py-3 mb-2">
          <input
            type="text"
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
            placeholder="Search by name, email, or phone..."
            className="w-full rounded-full border border-gray-300 outline-none px-10 py-[10px] placeholder:text-[#6264A0]"
          />
          {/* Search Icon */}
          <div className="flex items-center gap-2 text-[#6264A0] absolute left-3 top-1/2 -translate-y-1/2">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0269 2.606C7.84116 2.60967 5.74597 3.47958 4.2004 5.02515C2.65483 6.57072 1.78491 8.66591 1.78125 10.8517C1.78308 13.0393 2.65196 15.137 4.19753 16.6851C5.7431 18.2333 7.83932 19.1057 10.0269 19.1112C11.9671 19.1112 13.7548 18.4287 15.1683 17.2992L18.6017 20.7326C18.7757 20.8943 19.0055 20.9824 19.243 20.9782C19.4804 20.9741 19.7071 20.878 19.8752 20.7103C20.0434 20.5426 20.14 20.3162 20.1448 20.0788C20.1496 19.8413 20.0622 19.6112 19.9009 19.4369L16.4675 16C17.6402 14.5416 18.2794 12.7265 18.2795 10.8551C18.2795 6.30963 14.5724 2.606 10.0269 2.606ZM10.0269 4.44222C13.5816 4.44222 16.4433 7.30049 16.4433 10.8517C16.4433 14.4029 13.5816 17.2784 10.0269 17.2784C6.47227 17.2784 3.61401 14.4132 3.61401 10.8586C3.61401 7.30396 6.47227 4.44222 10.0269 4.44222Z"
                fill="#6264A0"
              />
            </svg>
          </div>
        </div>

        {/* The Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#004AAD]">
              <tr className="text-white text-left">
                <th className="py-2 pl-3 pr-3 font-normal whitespace-nowrap">
                  Full Name
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  User Type
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Student/Staff ID
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Gender
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Phone Number
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Email Address
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Status
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Wallet Balance
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Ride Balance
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Date Joined
                </th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">
                  Last Active
                </th>
                <th className="py-2 pl-2 pr-4 font-normal whitespace-nowrap">
                  More
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr className="border-b" key={user.id || i}>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    {user.first_name} {user.last_name}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    {user.is_staff ? "Staff" : "Student"}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    {user.user_id || "N/A"}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    {user.gender || "N/A"}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    {user.phone || "N/A"}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    <span
                      className={`rounded-full w-3 h-3 inline-block mr-2 ${
                        user.is_active ? "bg-[#34C759]" : "bg-[#F80B0B]"
                      }`}
                    ></span>
                    <span>{user.is_active ? "Active" : "Deactivated"}</span>
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    ₦{user.balance?.toLocaleString() || "0"}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    ₦{user.ride_balance?.toLocaleString() || "0"}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    {user.created_at
                      ? new Date(user.created_at).toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    {user.last_login || "N/A"}
                  </td>
                  <td className="py-4 pl-3 whitespace-nowrap">
                    <TableMore 
                      user={user} 
                      onViewDetails={() => handleViewDetails(user.user_id)} 
                      onToggleStatus={handleTableStatusChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="w-full flex justify-center my-5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="font-medium">
              Page {pagination.page || 1} of {pagination.total_pages || 1}
            </span>
            <button
              onClick={() => setPage((old) => old + 1)}
              disabled={
                page === pagination.total_pages || !pagination.total_pages
              }
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal for viewing details */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto transition-opacity duration-200 ${
          isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleCloseModal}
        ref={modalRef}
      >
        {selectedUserId && (
          <div onClick={(e) => e.stopPropagation()}>
            <Viewdetailsmodal 
              userId={selectedUserId}
              onClose={handleCloseModal} 
              isClosing={!isModalOpen} 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
