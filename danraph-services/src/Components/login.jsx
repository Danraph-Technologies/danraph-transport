import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/danraph-services8.jpg";
import img2 from "../images/danraph-logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ImageWithSkeleton from "./skeleton";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.username || !form.password) {
      setError("All fields are required.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    // Never log sensitive info
    // Submit to backend (actual submission handled elsewhere)
  };

  return (
    <div className=" ">
      <div className="max-w-[100%] flex justify-center  log:items-center ">
        <div className=" flex-1 relative hidden lg:block">
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
            src={img1}
            alt=""
            className="w-full brightness-50"
            style={{ minHeight: 600, display: isLoaded ? "block" : "none" }}
            onLoad={() => setIsLoaded(true)}
          />
          {/* Overlay content */}
          {isLoaded && (
            <div className="absolute top-5 left-8 ">
              <ImageWithSkeleton
                src={img2}
                alt="Danraph Logo"
                className="max-w-[214px] w-full"
                skeletonSize={214}
              />
              <div className="max-w-[530px]">
                <div
                  style={{ backgroundColor: "#F80B0B" }}
                  className="w-[48px] h-[48px] rounded-full my-7"
                ></div>
                <p className="text-white font-semibold text-[52px]">
                  Lets Get Moving
                </p>
                <p className="text-[22px] font-normal text-white">
                  Log in to plan your trips and enjoy hassle. free campus rides.
                  Access your personalized routes and real-time updates.
                </p>
              </div>
            </div>
          )}
        </div>

        <div
          style={{ backgroundColor: "#F6F9F6" }}
          className="  flex-1 w-full pb-5 "
        >
          <div className="flex items-center justify-between pt-9  px-5">
            <p className="">
              <Link to="/" className="inline-block">
                <FaArrowLeft />
              </Link>{" "}
            </p>
            <p className=" hidden sm:block">
              Dont't have an account?{" "}
              <Link to="/signup">
                <span className=" font-medium underline cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 md:mx-24 h-auto mx-3 pt-2 lg:pt-14 ">
            <ImageWithSkeleton
              src={img2}
              alt="Danraph Logo"
              className="lg:hidden block max-w-[146px] w-full m-auto"
              skeletonSize={146}
            />
            <p className="lg:text-left text-center text-[32px] font-medium py-3 ">
              Sign in
            </p>
            <div className="flex justify-center items-center">
              <button className="flex items-center  max-w-[510px] w-full  gap-3 border px-5 py-2 border-gray-700 rounded-3xl justify-center md:text-[20px] text-[15px] hover:bg-gray-300 transition duration-500 ">
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.501 12.7332C22.501 11.8699 22.4296 11.2399 22.2748 10.5865H12.2153V14.4832H18.12C18.001 15.4515 17.3582 16.9099 15.9296 17.8898L15.9096 18.0203L19.0902 20.435L19.3106 20.4565C21.3343 18.6249 22.501 15.9298 22.501 12.7332Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.214 23C15.1068 23 17.5353 22.0666 19.3092 20.4567L15.9282 17.8899C15.0235 18.5083 13.8092 18.9399 12.214 18.9399C9.38069 18.9399 6.97596 17.1083 6.11874 14.5766L5.99309 14.5871L2.68583 17.0954L2.64258 17.2132C4.40446 20.6433 8.0235 23 12.214 23Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.12046 14.5767C5.89428 13.9234 5.76337 13.2233 5.76337 12.5C5.76337 11.7767 5.89428 11.0767 6.10856 10.4234L6.10257 10.2842L2.75386 7.7356L2.64429 7.78667C1.91814 9.21002 1.50146 10.8084 1.50146 12.5C1.50146 14.1917 1.91814 15.79 2.64429 17.2133L6.12046 14.5767Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2141 6.05997C14.2259 6.05997 15.583 6.91163 16.3569 7.62335L19.3807 4.73C17.5236 3.03834 15.1069 2 12.2141 2C8.02353 2 4.40447 4.35665 2.64258 7.78662L6.10686 10.4233C6.97598 7.89166 9.38073 6.05997 12.2141 6.05997Z"
                    fill="#EB4335"
                  />
                </svg>
                Continue With Google
              </button>
            </div>

            <div className="flex justify-center items-center">
              <button className="flex items-center max-w-[510px] w-full gap-3 border px-5 py-2 border-gray-700 rounded-3xl justify-center md:text-[20px] text-[15px] hover:bg-gray-300 transition duration-500">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 29 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28874 23.5C6.05374 23.5 3.03817 22.5591 0.5 20.9356C2.65499 21.0751 6.45807 20.7411 8.82358 18.4848C5.26508 18.3215 3.66026 15.5923 3.45094 14.426C3.75329 14.5426 5.1953 14.6826 6.00934 14.356C1.9159 13.3296 1.28793 9.73732 1.42748 8.64097C2.195 9.17749 3.49745 9.3641 4.00913 9.31744C0.194793 6.58823 1.56703 2.48276 2.24151 1.59635C4.97882 5.38867 9.0812 7.51857 14.1564 7.63704C14.0607 7.21736 14.0102 6.78042 14.0102 6.33164C14.0102 3.11092 16.6134 0.5 19.8247 0.5C21.5025 0.5 23.0144 1.21275 24.0757 2.35284C25.1969 2.09011 26.8843 1.47507 27.7092 0.943205C27.2934 2.43611 25.9989 3.68149 25.2159 4.14308C25.2095 4.12731 25.2224 4.15878 25.2159 4.14308C25.9037 4.03904 27.7648 3.68137 28.5 3.18256C28.1364 4.02125 26.764 5.41573 25.6377 6.19642C25.8473 15.4381 18.7765 23.5 9.28874 23.5Z"
                    fill="#47ACDF"
                  />
                </svg>
                Continue With Twitter
              </button>
            </div>
          </div>

          <div className="flex justify-center px-3">
            <div className="flex items-center justify-center w-full max-w-[470px] py-8">
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="mx-4 text-gray-600 font-semibold">OR</span>
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col justify-center items-center w-full max-w-[510px] px-3"
            >
              {error && (
                <div className="text-red-600 text-sm mb-2">{error}</div>
              )}
              <div className="flex flex-col justify-center w-full">
                <label htmlFor="Username or email address">
                  Username or email address
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  value={form.username}
                  onChange={handleInputChange}
                  className="outline-none w-full px-4 py-2 rounded-lg bg-white border border-gray-400"
                />
              </div>

              <div className="flex flex-col pt-3 justify-center w-full">
                <label
                  htmlFor="password"
                  className="flex items-center justify-between pr-2"
                >
                  <p>Your Password</p>{" "}
                  <p
                    onClick={togglePassword}
                    className="flex items-center cursor-pointer gap-1 "
                  >
                    {" "}
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
                  className="outline-none w-full px-4 py-2 rounded-lg bg-white border border-gray-400"
                />
                <p className="text-right underline py-2 cursor-pointer">
                  Forget your password?
                </p>
              </div>

              <button className="bg-blue-800 w-full px-10 py-2 my-3 rounded-3xl border-2 border-blue-800 hover:bg-transparent transition duration-500 text-white hover:text-blue-800">
                Sign in
              </button>
              <p className=" ">
                Dont't have an account?{" "}
                <Link to="/signup">
                  <span className="font-medium underline cursor-pointer">
                    Sign up
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
