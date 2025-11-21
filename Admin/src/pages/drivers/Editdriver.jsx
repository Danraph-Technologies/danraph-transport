import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../services/api";
import { toast } from "sonner";
import { Loader2, X } from "lucide-react";

function EditDriver({ driver, onClose }) {
  const queryClient = useQueryClient();

  // Initialize form with existing driver data
  // Note: We format dates to YYYY-MM-DD for HTML date inputs if they exist
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    first_name: driver.first_name || "",
    last_name: driver.last_name || "",
    email: driver.email || "",
    phone: driver.phone || "",
    license_number: driver.license_number || "",
    // Optional fields based on your API
    date_of_birth: formatDateForInput(driver.date_of_birth),
    license_expiry: formatDateForInput(driver.license_expiry),
  });

  // Mutation to update driver
  const updateMutation = useMutation({
    mutationFn: async (updatedData) => {
      // Use driver.id (from the list response)
      const response = await api.put(`/v1/admin/driver/${driver.id}/update`, updatedData);
      return response.data;
    },
    onSuccess: () => {
      // Refresh the main list
      queryClient.invalidateQueries(["drivers"]);
      // If there is a specific query for single driver, invalidate that too
      queryClient.invalidateQueries(["driver", driver.id]);
      
      toast.success("Driver information updated successfully");
      onClose();
    },
    onError: (err) => {
      console.error("Update failed", err);
      toast.error(err.response?.data?.message || "Failed to update driver");
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[600px] bg-white rounded-lg shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="font-bold text-[20px]">Edit Driver Information</h1>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="rounded-[5px] border border-gray-300 outline-none p-2 focus:border-blue-500 transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="rounded-[5px] border border-gray-300 outline-none p-2 focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-[5px] border border-gray-300 outline-none p-2 focus:border-blue-500 transition"
                />
                </div>

                <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-[5px] border border-gray-300 outline-none p-2 focus:border-blue-500 transition"
                />
                </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">License Number</label>
              <input
                type="text"
                name="license_number"
                value={formData.license_number}
                onChange={handleChange}
                className="rounded-[5px] border border-gray-300 outline-none p-2 focus:border-blue-500 transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                        className="rounded-[5px] border border-gray-300 outline-none p-2 focus:border-blue-500 transition"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">License Expiry</label>
                    <input
                        type="date"
                        name="license_expiry"
                        value={formData.license_expiry}
                        onChange={handleChange}
                        className="rounded-[5px] border border-gray-300 outline-none p-2 focus:border-blue-500 transition"
                    />
                </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={updateMutation.isPending}
                className="flex-1 py-2 bg-[#004AAD] text-white rounded-lg hover:bg-[#003d91] font-medium flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {updateMutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                {updateMutation.isPending ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditDriver;