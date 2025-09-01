import React, { useEffect, useState } from "react";
import img1 from "../images/danraph-logo.png";
import img2 from "../images/Danraph-services9.jpg";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaArrowLeft } from "react-icons/fa";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ImageWithSkeleton from "./skeleton";
import { toast } from 'sonner';
import { authApi } from '../lib/auth';

const Signup = () => {
  const [countryCode, setCountryCode] = useState("us");
  const [isLoaded, setIsLoaded] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "", // This will be set by your system
    phone: "",
    password: "",
    terms: false,
    consent: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [successTrigger, setSuccessTrigger] = useState(0);
  const [errorTrigger, setErrorTrigger] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch the country code immediately when the user accesses the site (on page load)
    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.country_code) {
          const newCountryCode = data.country_code.toLowerCase();
          const cachedCountryCode = localStorage.getItem("countryCode");

          // Check if the country is Nigeria (NG)
          if (newCountryCode === "ng") {
            setCountryCode("ng"); // Set country code to 'ng' for Nigeria
            localStorage.setItem("countryCode", "ng");
          } else {
            // If country code is different, update it
            if (newCountryCode !== cachedCountryCode) {
              setCountryCode(newCountryCode);
              localStorage.setItem("countryCode", newCountryCode);
            }
          }
        }
      })
      .catch((err) => {
        console.error("Failed to fetch country code:", err);
      });
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
  };

  const validatePhoneNumber = (phone) => {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, "");
    // Check if it's a Nigerian number (country code 234 or starts with 0)
    if (
      countryCode === "ng" ||
      phone.startsWith("+234") ||
      phone.startsWith("0")
    ) {
      // Remove country code if present
      const localNumber = digits.replace(/^234/, "").replace(/^0/, "");
      // Check length for Nigerian numbers (10 digits after removing leading 0)
      return localNumber.length === 10;
    }
    return true; // For non-Nigerian numbers, rely on the phone input validation
  };

  const handlePhoneChange = (value, country) => {
    const digits = value.replace(/\D/g, "");
    const isNigerian = value.startsWith("+") 
      ? value.startsWith("+234") 
      : value.startsWith("0") || country?.countryCode?.toLowerCase() === 'ng';
    
    if (isNigerian) {
      // Remove country code if present (234)
      const localNumber = digits.startsWith("234")
        ? digits.substring(3)  // Remove 234 country code
        : digits.startsWith("0")
          ? digits // Keep leading 0
          : "0" + digits; // Add leading 0 if missing
          
      // Only allow exactly 11 digits (including leading 0)
      if (localNumber.length > 11) {
        return; // Don't update the input if longer than 11 digits
      }
      
      // Format the number with proper spacing as user types
      let formattedValue = value;
      if (localNumber.length <= 11) {
        // Allow the input to be updated
        setForm(prev => ({
          ...prev,
          phone: value,
          phoneError: ""
        }));
      }
      return;
    }

    setForm((prev) => ({
      ...prev,
      phone: value,
      phoneError: "", // Clear previous error when user types
    }));

    // Update country code
    if (country?.countryCode) {
      setCountryCode(country.countryCode.toLowerCase());
    }
  };

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!form.first_name.trim()) {
      toast.error('First name is required');
      return false;
    }
    if (!form.last_name.trim()) {
      toast.error('Last name is required');
      return false;
    }
    if (!form.email.trim()) {
      toast.error('Email is required');
      return false;
    }
    if (!form.phone.trim()) {
      toast.error('Phone number is required');
      return false;
    }
    if (!form.password) {
      toast.error('Password is required');
      return false;
    }
    if (!form.terms) {
      toast.error('Please accept the terms and conditions');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate all required fields
    if (!validateForm()) {
      return;
    }

    // Phone number validation for Nigeria
    if (
      countryCode === "ng" ||
      form.phone.startsWith("+") ||
      form.phone.startsWith("0")
    ) {
      // Remove all non-digit characters
      const digits = form.phone.replace(/\D/g, "");
      
      // Remove country code if present (234)
      const localNumber = digits.startsWith("234")
        ? digits.substring(3)  // Remove 234 country code
        : digits.startsWith("0")
          ? digits // Keep leading 0
          : "0" + digits; // Add leading 0 if missing
      
      // Now check the length (should be 11 digits including leading 0)
      if (localNumber.length !== 11) {
        toast.error("Phone number must be 11 digits");
        return;
      }
    }

    setIsSubmitting(true);
    let loadingToast;
    
    try {
      loadingToast = toast.loading('Creating your account...');
      
      const userData = {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      };

      const response = await authApi.register(userData);
      
      // If we get here, registration was successful
      toast.success(response?.message || "Registration successful! Please log in.");
      
      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.error('Registration error:', error);
      
      // Extract error message from different possible locations
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.data?.message) {
        errorMessage = error.data.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      // Show the error message
      toast.error(errorMessage, { autoClose: 5000 });
    } finally {
      setIsSubmitting(false);
      if (loadingToast) {
        toast.dismiss(loadingToast);
      }
    }
  };

  return (
    <div className="w-full  min-h-screen bg-white overflow-x-auto min-w-[300px] ">
      <div className="flex  flex-col lg:flex-row w-full max-w-full min-h-screen log:items-center">
        {/* Left Image Section */}
        <div className="hidden lg:block flex-1 w-full max-w-full relative">
          {/* Skeleton overlay */}
          {!isLoaded && (
            <div
              className="w-full h-full bg-gray-200 animate-pulse rounded-lg"
              style={{
                minHeight: 600,
                position: "absolute",
                inset: 0,
                zIndex: 2,
              }}
            />
          )}
          {/* Always render the image */}
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover max-w-full"
            onLoad={() => setIsLoaded(true)}
            style={{ display: isLoaded ? "block" : "none" }}
          />
          {/* Overlay content */}
          {isLoaded && (
            <div className="absolute top-0 left-0 w-full max-w-full lg:max-w-[580px] px-6 py-8">
              <img src={img1} alt="" className="max-w-[165px] w-full" />
              <div className="w-[48px] h-[48px] bg-blue-800 rounded-full mt-14 mb-2"></div>
              <p className="text-[32px] xl:text-[52px] text-white font-semibold py-[5px]">
                Lets Get You Moving
              </p>
              <p className="text-[18px] xl:text-[22px] font-normal text-white">
                Sign up to easily plan your trips and enjoy smooth campus rides.
                Get access to personalized routes and real-time updates.
              </p>
            </div>
          )}
        </div>

        {/* Right Form Section */}
        <div className="flex-1 w-full max-w-full bg-[#F6F9F6] py-6 min-h-screen flex flex-col">
          <p className="text-right p-6 pt-3 hidden lg:block">
            Already have an account?{" "}
            <Link to="/login">
              <span className="font-medium underline cursor-pointer">
                Log in
              </span>
            </Link>
          </p>
          <p className="m-4 lg:hidden">
            <Link to="/" className="inline-block">
              <FaArrowLeft className="text-xl" />
            </Link>
          </p>

          <div className="flex flex-col items-center justify-center flex-1 w-full px-2">
            <div className="flex flex-col justify-center items-center lg:items-start w-full">
              <img
                src={img1}
                alt=""
                className="max-w-[146px] w-full lg:hidden"
              />
              <p className="text-[28px] lg:text-[32px] font-medium py-4 px-16 text-center lg:text-left">
                Get Started
              </p>
              <div className="w-full flex justify-center">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 justify-center items-center w-full max-w-[510px] lg:max-w-[510px] px-2 sm:px-3"
                  autoComplete="off"
                >
                  {/* No inline error message, only toast will show errors */}
                  <div className="flex gap-3 w-full">
                    <div className="flex flex-col flex-1">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        required
                        minLength={2}
                        maxLength={30}
                        autoComplete="given-name"
                        value={form.first_name}
                        onChange={handleInputChange}
                        className="outline-none border border-gray-400 py-2 sm:py:3 px-3 rounded-lg w-full"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        required
                        minLength={2}
                        maxLength={30}
                        autoComplete="family-name"
                        value={form.last_name}
                        onChange={handleInputChange}
                        className="outline-none border border-gray-400 py-2 sm:py:3 px-3 rounded-lg w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      name="email-display"
                      id="email-display"
                      placeholder="User"
                      readOnly
                      value=""
                      className="outline-none border border-gray-400 py-3 px-3 rounded-lg w-full bg-gray-100 text-gray-800 cursor-default placeholder-gray-700 "
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={form.email}
                      onChange={handleInputChange}
                      className="outline-none border border-gray-400 py-3 px-3 rounded-lg w-full"
                    />
                  </div>

                 

                  <div className="flex flex-col w-full">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="w-full">
                      <PhoneInput
                        country={countryCode}
                        enableAreaCodes
                        disableCountryCode={false}
                        disableDropdown={false}
                        countryCodeEditable={false}
                        required
                        enableSearch
                        value={form.phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoComplete: "off",
                        }}
                        inputClass="outline-none border !border-gray-400 py-6 px-3 rounded-lg !w-full"
                        buttonClass="!bg-transparent w-[48px]"
                        containerClass="!w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="password" className="mb-1">
                      Your Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        required
                        value={form.password}
                        onChange={handleInputChange}
                        className="outline-none border border-gray-400 py-3 px-3 rounded-lg w-full pr-10"
                        onInvalid={(e) => e.preventDefault()}
                      />
                      <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex w-full items-start pt-1 pb-1 gap-2">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      required
                      checked={form.terms}
                      onChange={handleInputChange}
                      className="cursor-pointer outline-none translate-y-1 text-black accent-black"
                    />
                    <p>
                      By creating an account, I agree to our{" "}
                      <span className="underline cursor-pointer">
                        Terms of use
                      </span>{" "}
                      and{" "}
                      <span className="underline cursor-pointer">
                        Privacy Policy
                      </span>
                    </p>
                  </div>

                  <div className="flex w-full items-start pt-1 pb-1 gap-2 lg:hidden">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      checked={form.consent}
                      onChange={handleInputChange}
                      className="cursor-pointer outline-none translate-y-1 text-black accent-black"
                    />
                    <p>
                      By creating an account, I am also consenting to receive
                      SMS messages and emails, including product new feature
                      updates, events, and marketing promotions.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-800 w-full px-10 py-2 my-2 rounded-3xl border-2 border-blue-800 hover:bg-transparent transition duration-500 text-white hover:text-blue-800 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating Account..." : "Sign Up"}
                  </button>
                  <Link to="/login">
                    <p>
                      Already have an account?{" "}
                      <span className="font-medium underline">Log in</span>
                    </p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
