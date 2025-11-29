import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { RefreshCw, Trash2 } from 'lucide-react';
import { toast } from 'sonner'; 
import api from '../../services/api';
import img from "../../assets/danraph-arrow.png";
import RouteModal from './RouteModal'; 

const Manage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  // Fetch Routes Data
  const { data, isLoading: loading, error } = useQuery({
    queryKey: ['adminRoutes'],
    queryFn: async () => {
      const response = await api.get('/v1/admin/routes?page=1&page_size=50');
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  // ---------------------------------------------------------
  // DELETE LOGIC START
  // ---------------------------------------------------------
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await api.delete(`/v1/admin/routes/${id}`);
    },
    onMutate: () => {
      // Start the loading toast and return the ID
      const toastId = toast.loading('Deleting route...');
      return { toastId };
    },
    onSuccess: (_, __, context) => {
      // Update the existing toast to Success
      toast.success('Route deleted successfully', { 
        id: context.toastId 
      });
      queryClient.invalidateQueries(['adminRoutes']); 
    },
    onError: (error, __, context) => {
      // Update the existing toast to Error
      toast.error(error.response?.data?.message || 'Failed to delete route', { 
        id: context.toastId 
      });
    }
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this route?")) {
      deleteMutation.mutate(id);
    }
  };
  // ---------------------------------------------------------
  // DELETE LOGIC END
  // ---------------------------------------------------------

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount || 0);
  };

  const formatDuration = (minutes) => {
    if (!minutes) return '0 mins';
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hrs === 0) return `${mins} Minutes drive`;
    return `${hrs} hr${hrs > 1 ? 's' : ''} ${mins > 0 ? mins + ' mins' : ''} drive`;
  };

  const handleCreate = () => {
    setSelectedRoute(null);
    setIsModalOpen(true);
  };

  const handleEdit = (route) => {
    setSelectedRoute(route);
    setIsModalOpen(true);
  };

  return (
    <div className='sm:px-5 relative'>
      <div className='w-full border border-gray-300 rounded-lg px-5 py-4  '>

        <div className='py-3'>
          <img
            src="/arrow.png"
            alt="left arrow"
            onClick={() => navigate(-1)}
            className='max-w-[20px] rotate-180 my-2 cursor-pointer hover:opacity-70 transition-opacity'
          />
          <h1 className='text-[20px] font-semibold '>Route Management</h1>
        </div>

        <div className='max-w-[933px] w-full overflow-y-auto max-h-[70vh] border border-gray-300 rounded-lg sm:px-6 px-4 py-4 '>
          <p className='text-[20px] font-semibold'>Manage Locations</p>

          {loading && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <RefreshCw className="animate-spin w-8 h-8 text-[#004AAD] mb-2" />
              <p>Loading routes...</p>
            </div>
          )}

          {error && (
            <div className="py-10 text-center text-red-500">
              Failed to load routes. Please try again.
            </div>
          )}

          {!loading && !error && data?.items?.length > 0 ? (
            data.items.map((route) => (
              <div key={route.id} className='pt-5 pb-3 flex flex-wrap items-center gap-4 justify-between overflow-x-auto min-h-[100px] border-b border-gray-300'>

                <div className='flex items-center gap-2 sm:text-[21.04px] text-[19px] font-medium whitespace-nowrap'>
                  <p>{route.start_location}</p>
                  <img src={img} alt="arrow" className='max-w-[18.5px]' />
                  <p>{route.end_location}</p>
                </div>

                <div>
                  <p className='text-[16px] sm:text-[18px] font-normal text-[#231F20]'>
                    {formatDuration(route.estimated_time)}
                  </p>
                </div>

                <div>
                  <p className='text-[#231F20] sm:text-[20.33px] text-[17px] font-medium'>
                    Fee: {formatCurrency(route.price)}
                  </p>
                </div>

                <div 
                  className="group cursor-pointer" 
                  title="Edit Route"
                  onClick={() => handleEdit(route)}
                >
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="44" height="44" rx="22" fill="#EAEAEA" className="transition-colors duration-200 group-hover:fill-[#bdbdbda9]" />
                    <path d="M31.3113 16.8782L27.1216 12.6895C26.9823 12.5501 26.8169 12.4396 26.6349 12.3642C26.4529 12.2888 26.2578 12.25 26.0608 12.25C25.8638 12.25 25.6687 12.2888 25.4867 12.3642C25.3047 12.4396 25.1393 12.5501 25 12.6895L13.4397 24.2498C13.2998 24.3886 13.1889 24.5538 13.1134 24.7358C13.0379 24.9178 12.9994 25.113 13 25.3101V29.4998C13 29.8976 13.158 30.2791 13.4393 30.5604C13.7207 30.8417 14.1022 30.9998 14.5 30.9998H30.25C30.4489 30.9998 30.6397 30.9208 30.7803 30.7801C30.921 30.6395 31 30.4487 31 30.2498C31 30.0509 30.921 29.8601 30.7803 29.7194C30.6397 29.5788 30.4489 29.4998 30.25 29.4998H20.8113L31.3113 18.9998C31.4506 18.8605 31.5611 18.6951 31.6365 18.5131C31.7119 18.3311 31.7507 18.136 31.7507 17.939C31.7507 17.742 31.7119 17.5469 31.6365 17.3649C31.5611 17.1829 31.4506 17.0175 31.3113 16.8782ZM18.6897 29.4998H14.5V25.3101L22.75 17.0601L26.9397 21.2498L18.6897 29.4998ZM28 20.1895L23.8113 15.9998L26.0613 13.7498L30.25 17.9395L28 20.1895Z" fill="black" />
                  </svg>
                </div>

                {/* DELETE BUTTON */}
                <div
                  className={`bg-[#EFEFEF] hover:bg-[#c7c7c7a9] transition-colors duration-200 px-2 py-1 rounded cursor-pointer ${deleteMutation.isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => {
                    if(!deleteMutation.isPending) handleDelete(route.id)
                  }}
                >
                  <p className='text-[#EE1D52] sm:text-[16px] text-[15px] font-medium'>
                    Delete Route
                  </p>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <div className="py-10 text-center text-gray-500">
                No routes found. Click "Create Routes" to add one.
              </div>
            )
          )}
        </div>

        <div className='flex flex-col justify-center items-center pt-10 pb-3'>
          <button 
            onClick={handleCreate}
            className='bg-[#004AAD] text-white text-[18px] font-semibold sm:py-2 py-1 sm:px-10 px-6 rounded-full border-2 border-[#004AAD] hover:bg-white hover:text-[#004AAD] transition-colors duration-500'
          >
            Create Routes
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
          <RouteModal 
             onClose={() => setIsModalOpen(false)} 
             routeData={selectedRoute}
          />
        </div>
      )}
    </div>
  )
}

export default Manage