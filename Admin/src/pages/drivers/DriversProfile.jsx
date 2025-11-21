import { Star, Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import EditDriver from "./Editdriver"; // <--- 1. IMPORT HERE

function DriversProfile({ driver, onClose, onToggleStatus, isUpdating }) {
  const [zoomedImage, setZoomedImage] = useState(null); 
  const [isEditOpen, setIsEditOpen] = useState(false); // <--- 2. ADD STATE

  useEffect(() => {
    document.body.style.overflow = zoomedImage ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [zoomedImage]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (zoomedImage) setZoomedImage(null);
        else if (isEditOpen) setIsEditOpen(false); // Close edit on ESC
        else onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [zoomedImage, onClose, isEditOpen]);

  const openImage = (type) => setZoomedImage(type);
  const closeImage = () => setZoomedImage(null);

  if (!driver) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="px-6 py-3 bg-white sm:max-h-[95vh] max-h-[100vh] overflow-y-auto rounded-lg relative shadow-xl">
        <p
          className="text-right font-semibold text-[20px] cursor-pointer absolute top-3 right-3 hover:bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full"
          onClick={onClose}
        >
          X
        </p>

        <h2 className="font-semibold text-[24px] pt-4 flex items-center gap-3">
            Driver Profile
            {/* 3. EDIT BUTTON */}
            <span 
                onClick={() => setIsEditOpen(true)}
                className="text-blue-600 text-sm cursor-pointer hover:underline font-normal"
            >
                Edit
            </span>
        </h2>

        <div className="flex flex-wrap gap-2 justify-between py-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img 
                src={driver.profile_img_url || "/userprofile.jpg"} 
                alt="Profile" 
                className="w-[80px] h-[80px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span className={`rounded-full w-[13px] h-[13px] ${!driver.suspend ? "bg-[#34C759]" : "bg-[#E1C90F]"}`}></span>
                <span className="font-medium">{!driver.suspend ? "Active" : "Suspended"}</span>
              </p>
              <div className="flex flex-wrap items-center gap-1">
                <p className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-black" />
                  ))}
                </p>
                <p className="text-sm">4.8 Rating</p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button 
              onClick={onToggleStatus}
              disabled={isUpdating}
              className={`px-4 py-2 text-white rounded-lg duration-300 transition-all flex items-center gap-2 ${
                !driver.suspend 
                  ? "bg-[#004AAD] hover:bg-[#004badde]" 
                  : "bg-green-600 hover:bg-green-700"
              } ${isUpdating ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isUpdating && <Loader2 className="w-4 h-4 animate-spin" />}
              {isUpdating 
                ? "Updating..." 
                : !driver.suspend ? "Suspend Driver" : "Activate Driver"
              }
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] font-medium mt-6">Basic details</h2>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-4 py-3">
              <p className="text-[#666666]"><span className="font-medium">Name </span> - {driver.first_name} {driver.last_name}</p>
              <p className="text-[#666666]"><span className="font-medium">Contact </span> - {driver.email} ({driver.phone})</p>
              <p className="text-[#666666]"><span className="font-medium">License No </span> - {driver.license_number || "N/A"}</p>
              <p className="text-[#666666]"><span className="font-medium">Assigned Vehicle </span> - {driver.vehicle_details ? `${driver.vehicle_details.plate_number} | ${driver.vehicle_details.model}` : "No vehicle assigned"}</p>
              <p className="text-[#666666]"><span className="font-medium">Wallet Balance </span> - ₦{driver.balance?.toLocaleString() || 0}</p>
            </div>

            <div className="sm:translate-y-[20px] mt-4 sm:mt-0">
              <h2 className="text-[#004AAD] sm:text-right underline font-semibold py-3 cursor-pointer mb-2">Re-assign Driver</h2>
              <div className="flex justify-between gap-6">
                <div className="flex flex-col items-center">
                  {driver.lincense_img_url ? (
                      <img src={driver.lincense_img_url} alt="Driver License" className="w-[113px] h-[70px] object-cover cursor-pointer hover:opacity-80 transition border rounded" onClick={() => openImage("license")} />
                  ) : ( <div className="w-[113px] h-[70px] bg-gray-200 flex items-center justify-center rounded text-xs text-gray-500">No Image</div> )}
                  <p className="underline text-center cursor-pointer py-1 text-sm" onClick={() => driver.lincense_img_url && openImage("license")}>View License</p>
                </div>
                <div className="flex flex-col items-center">
                  {driver.nin_img_url ? (
                    <img src={driver.nin_img_url} alt="NIN" className="w-[113px] h-[70px] object-cover cursor-pointer hover:opacity-80 transition border rounded" onClick={() => openImage("nin")} />
                  ) : ( <div className="w-[113px] h-[70px] bg-gray-200 flex items-center justify-center rounded text-xs text-gray-500">No Image</div> )}
                  <p className="underline text-center cursor-pointer py-1 text-sm" onClick={() => driver.nin_img_url && openImage("nin")}>View NIN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#58585880] sm:mt-[40px] mt-[30px]"></div>

        <div className="py-6">
          <h2 className="font-medium text-[20px] mb-4"><span>Trips completed </span><span className="text-[#004AAD]">(0)</span></h2>
          <div className="text-center py-8 text-gray-500 border rounded-lg bg-gray-50">
            <p>Trip history will be displayed here when available</p>
          </div>
        </div>
      </div>

      {/* ===== ZOOM MODAL OVERLAY ===== */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeImage}>
          <div className="relative flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeImage} className="absolute -top-12 right-0 text-white text-2xl font-bold hover:text-gray-300">✕</button>
            <img src={zoomedImage === "license" ? driver.lincense_img_url : driver.nin_img_url} alt={zoomedImage} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border-2 border-white" />
          </div>
        </div>
      )}

      {/* ===== 4. EDIT DRIVER OVERLAY ===== */}
      {isEditOpen && (
        <EditDriver 
            driver={driver} 
            onClose={() => setIsEditOpen(false)} 
        />
      )}
    </div>
  );
}

export default DriversProfile;