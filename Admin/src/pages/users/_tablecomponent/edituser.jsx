import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api";
import { toast } from "sonner";
import { Loader2, X } from "lucide-react";

// 1. ADD userId TO PROPS HERE
function EditUser({ user, userId, onClose }) {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address || "", 
  });

  const updateMutation = useMutation({
    mutationFn: async (updatedData) => {
      // 2. USE userId PROP HERE (This guarantees the ID is correct)
      const response = await api.put(`/v1/admin/users/${userId}`, updatedData);
      return response.data;
    },
    onSuccess: () => {
      // 3. USE userId PROP HERE TO REFRESH CACHE
      queryClient.invalidateQueries(["user", userId]);
      queryClient.invalidateQueries(["users"]);
      
      toast.success("User information updated successfully");
      onClose(); 
    },
    onError: (err) => {
      console.error("Update failed", err);
      toast.error(err.response?.data?.message || "Failed to update user");
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // OPTIONAL: If backend rejects "address", create a clean object here
    // const { address, ...payload } = formData; 
    // updateMutation.mutate(payload);
    
    updateMutation.mutate(formData);
  };

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[500px] bg-white rounded-lg shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="font-bold text-[20px]">Edit User Information</h1>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
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

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="rounded-[5px] border border-gray-300 outline-none p-2 focus:border-blue-500 transition"
              />
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

export default EditUser;