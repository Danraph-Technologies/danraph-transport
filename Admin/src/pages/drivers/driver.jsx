import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../services/api";
import { RefreshCw } from "lucide-react";
import { toast } from "sonner";

// Cache duration (30 minutes)
const CACHE_DURATION = 30 * 60 * 1000;

// Components
import TableMore from "./tablemore"; 
import DriversProfile from "./DriversProfile";
import AssignVehicle from "./assignVerhicle";

// Debounce Hook
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

const Driver = () => {
  const queryClient = useQueryClient();
  
  // State
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showAssignVehicle, setShowAssignVehicle] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(localSearchTerm, 500);

  // --- 1. FETCH DRIVERS ---
  const {
    data: driversData,
    isLoading,
    isError,
    error,
    refetch: refetchQuery,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["drivers", page, pageSize, debouncedSearchTerm],
    queryFn: async ({ queryKey: [_, page, pageSize, search] }) => {
      const response = await api.get("/v1/admin/driver/list", {
        params: { page, page_size: pageSize, search },
      });
      return response.data;
    },
    keepPreviousData: true,
    staleTime: CACHE_DURATION,
    cacheTime: CACHE_DURATION,
  });

  // --- 2. TOGGLE STATUS MUTATION (Suspend/Activate) ---
  const toggleStatusMutation = useMutation({
    mutationFn: async (driver) => {
      // Determine action based on current status
      // If currently suspended (true) -> we want to 'activate'
      // If currently active (false/null) -> we want to 'suspend'
      const action = driver.suspend ? 'activate' : 'suspend';
      
      // API requires POST and a body (even if empty)
      const response = await api.post(`/v1/admin/driver/${driver.id}/${action}`, {});
      return { response: response.data, action, name: driver.first_name };
    },
    onMutate: () => {
      const toastId = toast.loading("Updating driver status...");
      return { toastId };
    },
    onSuccess: (data, variables, context) => {
      // 1. Refresh the list to show new status color
      queryClient.invalidateQueries(["drivers"]);
      
      // 2. Show success message
      const statusText = data.action === 'suspend' ? 'suspended' : 'activated';
      toast.success(`${data.name} has been ${statusText} successfully`, { 
        id: context.toastId 
      });

      // 3. Update modal data if open (optional, closing it is safer)
      if (selectedDriver) {
         setSelectedDriver(null); 
      }
    },
    onError: (err, variables, context) => {
      console.error("Status update error:", err);
      toast.error(err.response?.data?.message || "Failed to update driver status", { 
        id: context.toastId 
      });
    }
  });

  // Handler passed to children
  const handleToggleStatus = (driver) => {
    const actionText = driver.suspend ? "Activate" : "Suspend";
    
    if (window.confirm(`Are you sure you want to ${actionText} ${driver.first_name}?`)) {
       toggleStatusMutation.mutate(driver);
    }
  };

  // --- 3. REFRESH LOGIC ---
  const refetch = useCallback(async () => {
    await refetchQuery();
  }, [refetchQuery]);

  const handleRefresh = async () => {
    if (isRefreshing) return;
    const toastId = toast.loading("Refreshing driver list...");
    setIsRefreshing(true);
    try {
      await refetch();
      toast.success("Drivers list updated", { id: toastId });
      setTimeout(() => setIsRefreshing(false), 1000);
    } catch (error) {
      setIsRefreshing(false);
      toast.error("Failed to refresh data", { id: toastId });
    }
  };

  const drivers = driversData?.items || [];
  const pagination = driversData?.pagination || { total_pages: 1, page: 1 };

  const lastUpdated = new Date(dataUpdatedAt || 0).toLocaleString("en-US", {
    year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
  });

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US");
  };

  const handleCloseModal = useCallback(() => {
    setSelectedDriver(null);
  }, []);

  const overlayStyle = {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 50, backdropFilter: "blur(4px)",
  };

  if (isError && (!driversData || drivers.length === 0)) {
    return (
      <div style={overlayStyle}>
        <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
          <h3 className="text-xl font-semibold text-gray-800">Failed to Load Data</h3>
          <button onClick={() => refetch()} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <RefreshCw className="w-5 h-5" /> Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {isLoading && (
        <div style={overlayStyle}>
          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-xl">
            <RefreshCw className="w-12 h-12 text-blue-600 animate-spin" />
            <h3 className="text-xl font-medium text-gray-800">Loading Drivers</h3>
          </div>
        </div>
      )}

      <div className="w-full rounded-lg border border-gray-300 py-3 px-4 mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <p className="text-[20px] font-semibold py-2">Driver List</p>
            <p className="text-xs text-gray-500">Last Updated: {dataUpdatedAt ? lastUpdated : "Never"}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 items-center mt-2 sm:mt-0">
            <button onClick={handleRefresh} disabled={isRefreshing} className={`bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg disabled:opacity-50`}>
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
            </button>
            <Link to="/admin/RegisterDriver">
              <button className="bg-[#004AAD] hover:bg-[#004bade0] transition-all duration-300 cursor-pointer flex items-center gap-2 px-3 text-white py-2 rounded-lg ">
                <span>+</span>
                <span>Register a Driver</span>
              </button>
            </Link>
            <button onClick={() => setShowAssignVehicle(true)} className="bg-[#004AAD] hover:bg-[#004bade0] transition-all duration-300 cursor-pointer px-3 text-white py-2 rounded-lg">
              Assign / Reassign Vehicle
            </button>
          </div>
        </div>

        <div className="relative py-3 mb-2">
          <input
            type="text"
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
            className="w-full rounded-full border border-gray-300 outline-none px-10 py-[10px] placeholder:text-[#6264A0]"
            placeholder="Search driver by name..."
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full w-full whitespace-nowrap">
            <thead className="bg-[#004AAD]">
              <tr className="text-white text-left">
                <th className="py-2 pl-3 pr-3 font-normal">Full Name</th>
                <th className="py-2 pl-3 pr-3 font-normal">Total Trips</th>
                <th className="py-2 pl-3 pr-3 font-normal">License No.</th>
                <th className="py-2 pl-2 pr-3 font-normal">Phone Number</th>
                <th className="py-2 pl-2 pr-3 font-normal">Email Address</th>
                <th className="py-2 pl-2 pr-3 font-normal">Status</th>
                <th className="py-2 pl-2 pr-3 font-normal">Date Joined</th>
                <th className="py-2 pl-2 pr-4 font-normal">More</th>
              </tr>
            </thead>

            <tbody>
              {drivers.length > 0 ? (
                drivers.map((driver, i) => (
                  <tr className="border-b" key={driver.id || i}>
                    <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">{driver.first_name} {driver.last_name}</td>
                    <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">0</td>
                    <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">{driver.license_number || "N/A"}</td>
                    <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">{driver.phone}</td>
                    <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">{driver.email}</td>
                    <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                      {/* Fix: Check boolean explicitly if driver.suspend is true */}
                      <span className={`rounded-full w-[12px] h-[12px] inline-block mr-2 ${!driver.suspend ? "bg-[#34C759]" : "bg-[#F80B0B]"}`}></span>
                      <span>{!driver.suspend ? "Active" : "Suspended"}</span>
                    </td>
                    <td className="whitespace-nowrap border-r text-[#5C5C5D] border-[#dbdbdb7e] py-4 pl-3 pr-10">{formatDate(driver.created_at)}</td>
                    <td className="whitespace-nowrap py-4 pl-3">
                      {/* 
                          IMPORTANT FIX: 
                          Pass the whole driver object to handleToggleStatus
                      */}
                      <TableMore 
                        driver={driver} 
                        onViewDetails={() => setSelectedDriver(driver)}
                        onToggleStatus={() => handleToggleStatus(driver)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="8" className="text-center py-10 text-gray-500">No drivers found</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between pt-6">
          <p className="text-[#667085] text-[14px]">Showing page {pagination.page} of {pagination.total_pages}</p>
          <div className="flex items-center gap-2">
            <button onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={page === 1} className="border border-gray-300 rounded-lg py-2 px-3 text-[14px] disabled:opacity-50">Previous</button>
            <button className="border border-gray-300 rounded-lg py-2 px-3 text-[14px] bg-[#004AAD] text-white">{page}</button>
            <button onClick={() => setPage(old => old + 1)} disabled={page === pagination.total_pages} className="border border-gray-300 rounded-lg py-2 px-3 text-[14px] disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>

      {selectedDriver && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={handleCloseModal} />
          <div className="relative z-10">
            <DriversProfile 
              driver={selectedDriver} 
              onClose={handleCloseModal}
              // Pass the driver object here too
              onToggleStatus={() => handleToggleStatus(selectedDriver)}
              isUpdating={toggleStatusMutation.isPending}
            />
          </div>
        </div>
      )}

      {showAssignVehicle && <AssignVehicle onClose={() => setShowAssignVehicle(false)} />}
    </div>
  );
};

export default Driver;