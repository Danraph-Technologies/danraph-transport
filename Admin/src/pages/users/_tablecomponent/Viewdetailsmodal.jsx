import React from "react";

function Viewdetailsmodal({ onClose, userData }) {
  // Prevent click inside the modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close when clicking the overlay
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-[10px] p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={handleModalClick}
      >
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
          
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src={userData?.profileImage || "/userprofile.jpg"} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-sm font-medium text-green-700">
                {userData?.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>

          {/* Add more user details here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{userData?.name || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{userData?.email || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{userData?.phone || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">User Type</p>
              <p className="font-medium">{userData?.type || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewdetailsmodal;