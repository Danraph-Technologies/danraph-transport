import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner'; // Assuming you have sonner/toast installed
import api from '../../services/api';

function RouteModal({ onClose, routeData }) { // 1. Accept routeData prop
    const queryClient = useQueryClient();
    const isEditMode = !!routeData; // Boolean: true if editing, false if creating

    // 2. State for form fields
    const [formData, setFormData] = useState({
        route_name: '',
        start_location: '',
        end_location: '',
        price: '',
        discount: '',
        estimated_time: '' // Format: HH:MM or total minutes depending on backend
    });

    // 3. Pre-fill form if in Edit Mode
    useEffect(() => {
        if (routeData) {
            setFormData({
                route_name: routeData.route_name || '',
                start_location: routeData.start_location || '',
                end_location: routeData.end_location || '',
                price: routeData.price || '',
                discount: routeData.discount || '',
                // Assuming backend sends minutes, we might need conversion logic here later
                estimated_time: routeData.estimated_time || '' 
            });
        }
    }, [routeData]);

    // 4. Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 5. API Mutation (Create or Update)
    const mutation = useMutation({
        mutationFn: async (data) => {
            if (isEditMode) {
                // PUT Request
                return await api.put(`/v1/admin/routes/${routeData.id}`, data);
            } else {
                // POST Request (Create) - assuming endpoint is /v1/admin/routes
                return await api.post('/v1/admin/routes', data);
            }
        },
        onSuccess: () => {
            toast.success(isEditMode ? 'Route updated successfully!' : 'Route created successfully!');
            queryClient.invalidateQueries(['adminRoutes']); // Refetch table
            onClose();
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert price to number before sending
        const payload = {
            ...formData,
            price: Number(formData.price),
            discount: Number(formData.discount),
            estimated_time: Number(formData.estimated_time) // Ensure this matches backend expectation (minutes?)
        };
        mutation.mutate(payload);
    };

    return (
        <div className='bg-white max-w-[700px] w-full p-5 rounded-lg'>
            <div className='flex justify-between items-center gap-2 pb-4 pt-2'>
                <h1 className='font-medium text-[20px]'>
                    {isEditMode ? 'Edit Route' : 'Create New Route'}
                </h1>
                <svg onClick={onClose} width="20" height="20" viewBox="0 0 20 20" fill="none" className='cursor-pointer hover:opacity-50 transition-opacity' xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7081 18.2931C19.801 18.386 19.8747 18.4963 19.9249 18.6177C19.9752 18.7391 20.0011 18.8692 20.0011 19.0006C20.0011 19.132 19.9752 19.2621 19.9249 19.3835C19.8747 19.5048 19.801 19.6151 19.7081 19.7081C19.6151 19.801 19.5048 19.8747 19.3835 19.9249C19.2621 19.9752 19.132 20.0011 19.0006 20.0011C18.8692 20.0011 18.7391 19.9752 18.6177 19.9249C18.4963 19.8747 18.386 19.801 18.2931 19.7081L10.0006 11.4143L1.70806 19.7081C1.52042 19.8957 1.26592 20.0011 1.00056 20.0011C0.735192 20.0011 0.480697 19.8957 0.293056 19.7081C0.105415 19.5204 5.23096e-09 19.2659 0 19.0006C-5.23096e-09 18.7352 0.105415 18.4807 0.293056 18.2931L8.58681 10.0006L0.293056 1.70806C0.105415 1.52042 0 1.26592 0 1.00056C0 0.735192 0.105415 0.480697 0.293056 0.293056C0.480697 0.105415 0.735192 0 1.00056 0C1.26592 0 1.52042 0.105415 1.70806 0.293056L10.0006 8.58681L18.2931 0.293056C18.4807 0.105415 18.7352 -5.23096e-09 19.0006 0C19.2659 5.23096e-09 19.5204 0.105415 19.7081 0.293056C19.8957 0.480697 20.0011 0.735192 20.0011 1.00056C20.0011 1.26592 19.8957 1.52042 19.7081 1.70806L11.4143 10.0006L19.7081 18.2931Z" fill="black" />
                </svg>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-y-2'>
                    <label className='text-[#666666]'>Route Name</label>
                    <input type="text" name="route_name" value={formData.route_name} onChange={handleChange} className='outline-none p-2 border border-black rounded-lg w-full ' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <label className='text-[#666666]'>Pickup Location</label>
                    <input type="text" name="start_location" value={formData.start_location} onChange={handleChange} className='outline-none p-2 border border-black rounded-lg w-full ' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <label className='text-[#666666]'>Drop-off Location</label>
                    <input type="text" name="end_location" value={formData.end_location} onChange={handleChange} className='outline-none p-2 border border-black rounded-lg w-full ' />
                </div>

                <h2 className='text-[20px] font-medium py-2'>Pricing Setup/Time</h2>
                <div className='flex flex-col gap-y-2'>
                    <label className='text-[#666666]'>Fixed Fare (₦)</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} className='outline-none p-2 border border-black rounded-lg w-full ' />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label className='text-[#666666]'>Discounts (₦)</label>
                    <input type="number" name="discount" value={formData.discount} onChange={handleChange} className='outline-none p-2 border border-black rounded-lg w-full ' />
                </div>
                 <div className='flex flex-col gap-y-2'>
                    <label className='text-[#666666]'>Estimated Trip Time (Minutes)</label>
                    <input type="number" name="estimated_time" value={formData.estimated_time} onChange={handleChange} className='outline-none p-2 border border-black rounded-lg w-full ' placeholder="e.g. 120" />
                </div>
                
                <button 
                    disabled={mutation.isPending}
                    className='bg-[#004AAD] text-white py-3 rounded-lg font-semibold mt-2 hover:bg-[#003380] disabled:opacity-50'
                >
                    {mutation.isPending ? 'Processing...' : (isEditMode ? 'Update Route' : 'Create Route')}
                </button>
            </form>
        </div>
    )
}

export default RouteModal;
