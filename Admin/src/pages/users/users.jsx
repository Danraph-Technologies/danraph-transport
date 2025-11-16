import React, { useState, useRef, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import api from "../../services/api"; // Your configured axios instance

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
  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for API filtering and pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Debounce the search term to avoid excessive API calls
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

  // --- React Query to fetch users ---
  const { 
    data: usersData, 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    // The query key now includes all parameters, so it refetches when they change
    queryKey: ['users', page, pageSize, debouncedSearchTerm],
    queryFn: async () => {
      console.log(`Fetching users: page=${page}, search='${debouncedSearchTerm}'`);
      const response = await api.get('/v1/admin/users', {
        params: {
          page: page,
          page_size: pageSize,
          search: debouncedSearchTerm,
        },
      });
      // The docs say the data is in response.data, which has 'items' and 'pagination'
      return response.data;
    },
    // keepPreviousData is great for a smooth pagination experience
    keepPreviousData: true, 
  });

  // Extract items and pagination info, with safe fallbacks
  const users = usersData?.items || [];
  const pagination = usersData?.pagination || {};

  // --- Modal Logic ---
  const handleViewDetails = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Render a loading state
  if (isLoading && !usersData) {
    return <div className="p-5 text-center">Loading users...</div>;
  }
  
  // Render an error state
  if (isError) {
    return <div className="p-5 text-center text-red-500">Error fetching users: {error.message}</div>;
  }

  return (
    <div className="relative">
      <div className="max-w-[1105px] w-full rounded-lg border border-gray-300 py-3 px-4 ">
        <p className="text-[20px] font-semibold py-2">User Management</p>
        
        {/* Search Input */}
        <div className="relative py-3 mb-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-gray-300 outline-none px-10 py-[10px] placeholder:text-[#6264A0]"
            placeholder="Search user by name or email"
          />
          {/* Search Icon */}
          <div className="flex items-center gap-2 text-[#6264A0] absolute left-3 top-1/2 -translate-y-1/2">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0269 2.606C7.84116 2.60967 5.74597 3.47958 4.2004 5.02515C2.65483 6.57072 1.78491 8.66591 1.78125 10.8517C1.78308 13.0393 2.65196 15.137 4.19753 16.6851C5.7431 18.2333 7.83932 19.1057 10.0269 19.1112C11.9671 19.1112 13.7548 18.4287 15.1683 17.2992L18.6017 20.7326C18.7757 20.8943 19.0055 20.9824 19.243 20.9782C19.4804 20.9741 19.7071 20.878 19.8752 20.7103C20.0434 20.5426 20.14 20.3162 20.1448 20.0788C20.1496 19.8413 20.0622 19.6112 19.9009 19.4369L16.4675 16C17.6402 14.5416 18.2794 12.7265 18.2795 10.8551C18.2795 6.30963 14.5724 2.606 10.0269 2.606ZM10.0269 4.44222C13.5816 4.44222 16.4433 7.30049 16.4433 10.8517C16.4433 14.4029 13.5816 17.2784 10.0269 17.2784C6.47227 17.2784 3.61401 14.4132 3.61401 10.8586C3.61401 7.30396 6.47227 4.44222 10.0269 4.44222Z" fill="#6264A0" />
            </svg>
          </div>
        </div>

        {/* The Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full"> {/* Removed min-w here, it's not needed */}
            <thead className="bg-[#004AAD]">
              <tr className="text-white text-left">
                <th className="py-2 pl-3 pr-3 font-normal whitespace-nowrap">Full Name</th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">User Type</th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">Student/Staff ID</th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">Phone Number</th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">Email Address</th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">Status</th>
                <th className="py-2 pl-2 pr-3 font-normal whitespace-nowrap">Wallet Balance</th>
                <th className="py-2 pl-2 pr-4 font-normal whitespace-nowrap">More</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr className="border-b" key={user.id || i}>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">{user.first_name} {user.last_name}</td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">{user.is_staff ? 'Staff' : 'Student'}</td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">{user.student_id || 'N/A'}</td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">{user.phone}</td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">{user.email}</td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">
                    <span className={`rounded-full w-3 h-3 inline-block mr-2 ${user.is_active ? 'bg-[#34C759]' : 'bg-[#F80B0B]'}`}></span>
                    <span>{user.is_active ? 'Active' : 'Deactivated'}</span>
                  </td>
                  <td className="py-4 pl-3 pr-10 whitespace-nowrap">₦{user.balance?.toLocaleString() || '0'}</td>
                  <td className="py-4 pl-3 whitespace-nowrap">
                    <TableMore onViewDetails={handleViewDetails} />
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
              onClick={() => setPage(old => Math.max(old - 1, 1))} 
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="font-medium">Page {pagination.page || 1} of {pagination.total_pages || 1}</span>
            <button 
              onClick={() => setPage(old => old + 1)} 
              disabled={page === pagination.total_pages || !pagination.total_pages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      {/* Modal for viewing details */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center py-4 z-50 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div ref={modalRef} onClick={e => e.stopPropagation()}>
            <Viewdetailsmodal onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;