import React, { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api";
import { RefreshCw, Loader2 } from "lucide-react";
import { toast } from "sonner"; // <--- 1. IMPORT SONNER

// CONFIG: Cache this modal for 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;

// Loading spinner component
const ModalSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function Viewdetailsmodal({ userId, onClose, isClosing }) {
  const queryClient = useQueryClient();

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // 1. Fetch user data
  const {
    data: userData,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await api.get(`/v1/admin/users/${userId}`);
      return response.data;
    },
    enabled: !!userId,
    staleTime: CACHE_DURATION,
    cacheTime: CACHE_DURATION,
  });

  // 2. Mutation to Suspend/Activate User
  const statusMutation = useMutation({
    mutationFn: async (newStatus) => {
      const response = await api.patch(`/v1/admin/users/${userId}/status`, {
        is_active: newStatus,
      });
      return response.data;
    },
    onSuccess: (data, newStatus) => {
      // Success! Refresh both the specific user details AND the main list
      queryClient.invalidateQueries(["user", userId]);
      queryClient.invalidateQueries(["users"]);

      // <--- TOAST SUCCESS
      const action = newStatus ? "activated" : "suspended";
      toast.success(`User has been ${action} successfully`);
    },
    onError: (err) => {
      console.error("Failed to update status", err);
      // <--- TOAST ERROR
      toast.error(
        err.response?.data?.message ||
          "Failed to update status. Please try again."
      );
    },
  });

  // Get user data or use empty object as fallback
  const user = userData || {};

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 3. MANUAL REFRESH WITH TOAST
  const handleManualRefresh = async (e) => {
    e.stopPropagation();

    // Start loading toast
    const toastId = toast.loading("Refreshing details...");

    try {
      await refetch();
      // Update to success
      toast.success("User details updated", { id: toastId });
    } catch (err) {
      // Update to error
      toast.error("Failed to refresh details", { id: toastId });
    }
  };

  // Helper to handle status toggle click
  const handleToggleStatus = () => {
    // Send the OPPOSITE of the current status
    statusMutation.mutate(!user.is_active);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto ${
        isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onClick={onClose}
    >
      <div
        className={`max-w-[790px] w-full sm:px-6 py-3 bg-white sm:max-h-[95vh] max-h-[100vh] overflow-y-auto rounded-lg relative mx-auto ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 cursor-pointer px-3 py-2 text-[20px] text-[#262626] font-semibold"
        >
          X
        </button>

        {isLoading && <ModalSpinner />}

        {isError && (
          <div className="p-10 text-center text-red-500">
            <p>Error loading user details: {error.message}</p>
          </div>
        )}

        {!isLoading && !isError && userData && (
          <div className="py-10 px-5">
            <h2 className="text-[24px] font-semibold text-[#262626] flex items-center justify-between ">
              User Profile
              <button
                onClick={handleManualRefresh}
                disabled={isRefetching}
                className={`border rounded-lg p-2 cursor-pointer transition-all duration-200 ${
                  isRefetching
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "border-gray-300 hover:bg-gray-100 text-gray-700 hover:border-gray-400"
                }`}
                title="Refresh Data"
              >
                <RefreshCw
                  className={`w-5 h-5 ${isRefetching ? "animate-spin" : ""}`}
                />
              </button>
            </h2>

            <div className="flex justify-between py-3 gap-2 items-center">
              <div className="flex py-3 gap-3 items-center">
                <img
                  src={user.profile_picture || "/userprofile.jpg"}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="sm:w-[98px] sm:h-[98px] w-[50px] h-[50px] rounded-full object-cover"
                />
                <div className="flex gap-1 items-center">
                  <div
                    className={`w-[13px] h-[13px] rounded-full ${
                      user.is_active ? "bg-[#34C759]" : "bg-[#F80B0B]"
                    }`}
                  ></div>
                  <p className="font-medium">
                    {user.is_active ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
              <div>
                {/* --- STATUS BUTTON --- */}
                <button
                  className={`border font-semibold rounded-[10px] p-2 text-[14px] cursor-pointer duration-200 transition-all flex items-center gap-2 ${
                    user.is_active
                      ? "border-[#F80B0B] text-[#F80B0B] hover:bg-red-50"
                      : "border-[#34C759] text-[#34C759] hover:bg-green-50"
                  } ${
                    statusMutation.isPending
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleToggleStatus}
                  disabled={statusMutation.isPending}
                >
                  {statusMutation.isPending && (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  )}
                  {statusMutation.isPending
                    ? "Updating..."
                    : user.is_active
                    ? "Suspend User"
                    : "Reactivate User"}
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-[20px] font-medium">Basic Details</h2>
              <div className="flex flex-col gap-3 py-4">
                <p className="text-[#666666]">
                  Name - {user.first_name} {user.last_name}
                </p>
                <p className="text-[#666666]">
                  Contact - {user.email} {user.phone && `(${user.phone})`}
                </p>
                <p className="text-[#666666]">
                  {user.address
                    ? `Address - ${user.address}`
                    : "No address provided"}
                </p>
                {user.faculty && (
                  <p className="text-[#666666]">Faculty - {user.faculty}</p>
                )}
                {user.user_type && (
                  <p className="text-[#666666]">User Type - {user.user_type}</p>
                )}
                {user.user_id && (
                  <p className="text-[#666666]">ID - {user.user_id}</p>
                )}
                {user.created_at && (
                  <p className="text-[#666666]">
                    Member Since - {formatDate(user.created_at)}
                  </p>
                )}
                {user.last_login && (
                  <p className="text-[#666666]">
                    Last Active - {formatDate(user.last_login)}
                  </p>
                )}
              </div>
            </div>

            <div className="border border-[#58585880] my-3"></div>

            <div>
              <h2 className="text-[#000000] font-semibold py-3 text-[20px]">
                Wallet Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-[#666666] text-sm mb-2">
                    Wallet Balance
                  </h3>
                  <p className="text-2xl font-semibold">
                    ₦{user.balance?.toLocaleString() || "0"}
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-[#666666] text-sm mb-2">Ride Balance</h3>
                  <p className="text-2xl font-semibold">
                    ₦{user.ride_balance?.toLocaleString() || "0"}
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-[#58585880] my-3"></div>

            <div>
              <h2 className="text-[#000000] font-semibold py-3 text-[20px]">
                Ride History
              </h2>
              <div className="text-center py-8 text-gray-500">
                <p>Ride history will be displayed here when available</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Viewdetailsmodal;
