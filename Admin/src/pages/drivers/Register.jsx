import { ArrowLeft, Loader2, Upload } from "lucide-react";
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import api from "../../services/api";
import { nigerianStatesData } from "../../data/state";

function Register() {
  const navigate = useNavigate();

  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    license_number: "",
    license_expiry: "",
    date_of_birth: "",
    residential_address: "",
    state: "",
    lga: "",
    city: "",
    passport_url: "",
    nin_url: "",
    license_url: ""
  });

  const statesData = nigerianStatesData;

  const lgas = useMemo(() => {
    const selectedStateObject = statesData.find(
      (s) => s.name === formData.state
    );
    return selectedStateObject ? selectedStateObject.lgas : [];
  }, [formData.state, statesData]);

  // --- HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" && { lga: "" }),
    }));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  // --- UPLOAD FUNCTION ---
  const uploadFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    const response = await api.post("/v1/upload", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  };

  // --- SEPARATE MUTATIONS FOR EACH UPLOAD TYPE ---
  const passportMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      setFormData(prev => ({ ...prev, passport_url: data.url }));
      toast.success("Passport uploaded!");
    },
    onError: () => toast.error("Passport upload failed. Please try again.")
  });

  const ninMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      setFormData(prev => ({ ...prev, nin_url: data.url }));
      toast.success("NIN uploaded!");
    },
    onError: () => toast.error("NIN upload failed. Please try again.")
  });

  const licenseMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      setFormData(prev => ({ ...prev, license_url: data.url }));
      toast.success("Driver's License uploaded!");
    },
    onError: () => toast.error("License upload failed. Please try again.")
  });

  const registerMutation = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post("/v1/admin/driver/new", payload);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Driver registered successfully!");
      navigate(-1);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to register driver");
    }
  });

  // --- FILE UPLOAD LOGIC ---
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // Use the correct mutation based on type
    if (type === 'passport') {
      passportMutation.mutate(file);
    } else if (type === 'nin') {
      ninMutation.mutate(file);
    } else if (type === 'license') {
      licenseMutation.mutate(file);
    }
  };

  // --- SUBMIT LOGIC ---
  const handleSubmit = () => {
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.password) {
      return toast.error("Please fill in all required fields (Name, Email, Password)");
    }
    registerMutation.mutate(formData);
  };

  // Check if any upload is in progress
  const isAnyUploading = passportMutation.isPending || ninMutation.isPending || licenseMutation.isPending;

  // --- SKELETON UPLOAD CARD COMPONENT ---
  const UploadCard = ({ label, imageUrl, isUploading, onFileChange, type }) => {
    return (
      <div className="flex flex-col items-center">
        <label className="cursor-pointer group w-full">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => onFileChange(e, type)}
            disabled={isUploading}
          />

          {/* Card Container */}
          <div className={`
            relative border-2 border-dashed rounded-lg overflow-hidden
            transition-all duration-300 h-[140px] w-full
            ${imageUrl
              ? 'border-green-400 bg-green-50'
              : 'border-gray-300 bg-gray-50 hover:border-[#004AAD] hover:bg-blue-50'
            }
          `}>
            {/* Loading Overlay */}
            {isUploading && (
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10">
                <Loader2 className="animate-spin text-white w-8 h-8" />
                <p className="text-white text-sm mt-2">Uploading...</p>
              </div>
            )}

            {/* Content */}
            {imageUrl ? (
              // Uploaded Image Preview
              <div className="w-full h-full relative">
                <img
                  src={imageUrl}
                  alt={label}
                  className="w-full h-full object-cover"
                />
                {/* Overlay on hover to change */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-sm font-medium">Click to change</p>
                </div>
              </div>
            ) : (
              // Skeleton/Placeholder
              <div className="flex flex-col items-center justify-center h-full p-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2 group-hover:bg-[#004AAD]/10 transition-colors">
                  <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#004AAD] transition-colors" />
                </div>
                <p className="text-gray-500 text-sm font-medium text-center group-hover:text-[#004AAD] transition-colors">
                  Upload {label}
                </p>
                <p className="text-gray-400 text-xs mt-1">Click to browse</p>
              </div>
            )}
          </div>
        </label>

        {/* Label below card */}
        <p className="mt-2 text-sm font-medium text-gray-700">{label}</p>

        {/* View link if uploaded */}
        {imageUrl && (
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#004AAD] text-sm underline mt-1 hover:text-[#004bade7]"
          >
            View {label}
          </a>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="sm:px-5 px-1 pb-10">
        <div className="flex gap-2 hover:text-[#000000d5] transition-all duration-300 items-center">
          <ArrowLeft className="cursor-pointer" onClick={handleGoBack} />
          <p className="font-semibold">Register New Driver</p>
        </div>

        {/* --- PASSPORT UPLOAD SECTION --- */}
        <div className="flex items-center gap-3 py-5">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden border border-gray-200 relative">
            {formData.passport_url ? (
              <img src={formData.passport_url} alt="Passport" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <Upload className="w-5 h-5 text-gray-400" />
              </div>
            )}
            {passportMutation.isPending && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Loader2 className="animate-spin text-white w-5 h-5" />
              </div>
            )}
          </div>

          <label className="bg-[#F0F0F0] py-2 rounded-lg px-4 flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-colors">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 'passport')}
              disabled={passportMutation.isPending}
            />
            <img
              src="/UploadSimple.png"
              alt=""
              className="sm:w-[26px] w-[19px]"
            />
            <p className="text-[15px] sm:text-[16px]">
              {passportMutation.isPending ? "Uploading..." : "Upload Passport Image"}
            </p>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-[50px] gap-2 items-start">

          {/* --- LEFT COLUMN (FORM) --- */}
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2 items-center">
                <div className="flex flex-col w-full">
                  <label htmlFor="firstName" className="py-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="lastName" className="py-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="py-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="080..."
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="py-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@gmail.com"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="py-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Set a password"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>

              <div className="flex gap-2 items-center w-full py-2">
                <div className="flex flex-col w-full gap-2">
                  <label>License Number</label>
                  <input
                    type="text"
                    name="license_number"
                    value={formData.license_number}
                    onChange={handleInputChange}
                    placeholder="License Number"
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label>License Expiry</label>
                  <input
                    type="date"
                    name="license_expiry"
                    value={formData.license_expiry}
                    onChange={handleInputChange}
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex flex-col w-full">
                  <label className="py-2">Residential Address</label>
                  <input
                    type="text"
                    name="residential_address"
                    value={formData.residential_address}
                    onChange={handleInputChange}
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="py-2">Date of Birth</label>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="flex flex-col w-full">
                  <label className="py-2">State</label>
                  <div className="relative">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      style={{ color: "black" }}
                      className="border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer w-full outline-none appearance-none bg-white"
                    >
                      <option value="" style={{ color: "gray" }}>Select Your State</option>
                      {statesData.map((state) => (
                        <option key={state.code} value={state.name}>{state.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="py-2">LGA</label>
                  <div className="relative">
                    <select
                      name="lga"
                      value={formData.lga}
                      onChange={handleInputChange}
                      style={{ color: formData.lga ? "black" : "gray" }}
                      className="border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer w-full outline-none appearance-none bg-white"
                      disabled={!formData.state}
                    >
                      <option value="">{formData.state ? "Select Your LGA" : "Select state first"}</option>
                      {lgas.map((lga, index) => (
                        <option key={index} value={lga} style={{ color: "black" }}>{lga}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center mt-2">
                <div className="flex flex-col w-full">
                  <label className="py-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none w-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="py-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none w-full bg-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          {/* --- RIGHT COLUMN (DOCUMENT UPLOADS) --- */}
          <div>
            <h2 className="text-[#212123] font-semibold text-[18px]">
              Upload Identification Documents
            </h2>
            <p className="text-gray-500 text-sm py-2">
              Please upload both NIN and Driver's License
            </p>

            {/* --- TWO DOCUMENT UPLOAD CARDS --- */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* NIN Upload Card */}
              <UploadCard
                label="NIN"
                imageUrl={formData.nin_url}
                isUploading={ninMutation.isPending}
                onFileChange={handleFileChange}
                type="nin"
              />

              {/* Driver's License Upload Card */}
              <UploadCard
                label="Driver's License"
                imageUrl={formData.license_url}
                isUploading={licenseMutation.isPending}
                onFileChange={handleFileChange}
                type="license"
              />
            </div>

            {/* Upload Status Summary */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Upload Status:
              </p>
              <div className="flex gap-4 mt-2">
                <span className={`text-sm flex items-center gap-1 ${formData.nin_url ? 'text-green-600' : 'text-gray-400'}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.nin_url ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  NIN {formData.nin_url ? '✓' : ninMutation.isPending ? '(uploading...)' : '(pending)'}
                </span>
                <span className={`text-sm flex items-center gap-1 ${formData.license_url ? 'text-green-600' : 'text-gray-400'}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.license_url ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  License {formData.license_url ? '✓' : licenseMutation.isPending ? '(uploading...)' : '(pending)'}
                </span>
              </div>
            </div>

            {/* Assign Vehicle Section */}
            <div className="py-8">
              <div className="py-5">
                <h2 className="text-[19px] font-semibold">Assign Vehicle</h2>
                <p className="text-[#212123] text-[18px] italic">
                  Assign vehicle to driver
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="">Choose Vehicle</label>
                <select
                  name="vehicle"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer outline-none bg-white"
                  disabled
                >
                  <option value="">Choose Vehicle (Optional)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-3">
          <button
            onClick={handleSubmit}
            disabled={registerMutation.isPending || isAnyUploading}
            className="bg-[#004AAD] hover:bg-[#004bade7] duration-300 transition-all rounded-[10px] px-10 py-3 text-white flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {registerMutation.isPending ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Registering...
              </>
            ) : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;