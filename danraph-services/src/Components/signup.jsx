import React, { useEffect, useState } from "react";
import img1 from "../images/danraph-logo.png";
import img2 from "../images/Danraph-services9.jpg";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaArrowLeft } from "react-icons/fa";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ImageWithSkeleton from "./skeleton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const validatePassword = (password) => {
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
    password
  );
};

const Signup = () => {
  const [countryCode, setCountryCode] = useState("us");
  const [isLoaded, setIsLoaded] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "", // <-- add this line
    userType: "",
    email: "",
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

  const handlePhoneChange = (value) => {
    setForm((prev) => ({ ...prev, phone: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    // Basic client-side validation
    if (
      !form.firstName ||
      !form.lastName ||
      !form.username || // <-- add this check
      !form.userType ||
      !form.email ||
      !form.phone ||
      !form.password
    ) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }

    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    if (!form.terms) {
      toast.error("You must agree to the Terms of use and Privacy Policy.");
      setLoading(false);
      return;
    }

    if (window.innerWidth < 1024 && !form.consent) {
      toast.error("You must consent to receive SMS messages and emails.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          username: form.username, // <-- add this line
          userType: form.userType,
          email: form.email,
          phone: form.phone,
          password: form.password,
          agreeToTerms: form.terms,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true, // Allow cookies for JWT
        }
      );
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("userType", form.userType);
        toast.success("Signup successful! Redirecting...");
        if (form.userType === "driver") {
          window.location.href = "http://localhost:5174/login";
        } else {
          navigate("/login");
        }
      } else {
        toast.error("Signup failed. Please check your details and try again.");
        console.error("Signup error:", response);
      }
    } catch (err) {
      const apiMsg = err.response?.data?.message;
      // Log all error details for debugging
      console.error("Signup error:", err, err?.response);
      if (apiMsg === "Email already exists") {
        toast.error("Email already exists. Please use a different email.");
      } else if (apiMsg === "Phone number already registered") {
        toast.error(
          "Phone number already registered. Please use a different phone number."
        );
      } else if (apiMsg === "Password must be at least 8 characters") {
        toast.error("Password must be at least 8 characters.");
      } else if (apiMsg === "Invalid email or password") {
        toast.error("Invalid email or password.");
      } else if (apiMsg) {
        toast.error(apiMsg);
      } else {
        toast.error("Signup failed. Please check your details and try again.");
      }
    } finally {
      setLoading(false);
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
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        minLength={2}
                        maxLength={30}
                        autoComplete="off"
                        value={form.firstName}
                        onChange={handleInputChange}
                        className="outline-none border border-gray-400 py-2 sm:py:3 px-3 rounded-lg w-full"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        minLength={2}
                        maxLength={30}
                        autoComplete="off"
                        value={form.lastName}
                        onChange={handleInputChange}
                        className="outline-none border border-gray-400 py-2 sm:py:3 px-3 rounded-lg w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="email">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={form.username}
                      onChange={handleInputChange}
                      className="outline-none border border-gray-400 py-3 px-3 rounded-lg w-full"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="userType">User Type</label>
                    <select
                      name="userType"
                      id="userType"
                      required
                      value={form.userType}
                      onChange={handleInputChange}
                      className="outline-none cursor-pointer border border-gray-400 py-3 px-3 rounded-lg w-full"
                    >
                      <option value="" className="cursor-pointer">
                        Select user type
                      </option>
                      <option value="driver" className="cursor-pointer">
                        Driver
                      </option>
                      <option value="rider" className="cursor-pointer">
                        Rider
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="email">Email Address</label>
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
                    <label
                      htmlFor="password"
                      className="flex items-center justify-between pr-2"
                    >
                      <p>Your Password</p>
                      <p
                        onClick={togglePassword}
                        className="flex items-center cursor-pointer gap-1"
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5 text-gray-600" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-600" />
                        )}{" "}
                        Hide
                      </p>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      required
                      minLength={8}
                      autoComplete="new-password"
                      value={form.password}
                      onChange={handleInputChange}
                      className="outline-none border border-gray-400 py-3 px-3 rounded-lg w-full"
                    />
                    <p className="text-sm">
                      Use 8 or more characters with a mix of letters, numbers &
                      symbols
                    </p>
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
                    className="bg-blue-800 w-full px-10 py-2 my-2 rounded-3xl border-2 border-blue-800 hover:bg-transparent transition duration-500 text-white hover:text-blue-800 flex items-center justify-center group"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white group-hover:text-blue-800"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Signing Up...
                      </span>
                    ) : (
                      "Sign Up"
                    )}
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
