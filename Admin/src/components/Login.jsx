import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner"; // 1. Import Sonner
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || "/admin/dashboard";

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  // 2. Removed 'error' state (we use toast now)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // 3. Start a loading toast
    const toastId = toast.loading("Signing in...");

    try {
      const response = await api.post("/v1/auth/login", formData);

      if (response.status === 200) {
        const userData = response.data.data;

        // 4. Update toast to Success
        toast.success(`Welcome back, ${userData.first_name || 'Admin'}!`, {
          id: toastId, // This replaces the "Signing in..." toast
        });

        login(userData);
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error("Login Error Details:", err); // Keep this to see the raw error in console

      let errorMessage = "An unexpected error occurred.";

      if (!err.response) {
        // CASE 1: Network Error or CORS
        // (The browser blocked the response, so err.response is undefined)
        errorMessage = "Network Error: Server is unreachable or CORS issue.";
      }
      else if (err.response.status === 500) {
        // CASE 2: Server Crash
        // 500 errors usually don't return a nice JSON 'message', they return HTML or nothing.
        errorMessage = "Server Error (500). The backend is having trouble.";
      }
      else if (err.response.data && err.response.data.message) {
        // CASE 3: The Backend sent a specific error message (400, 401, 404)
        errorMessage = err.response.data.message;
      }

      // Update the toast
      toast.error(errorMessage, {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-2 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Admin Sign In
        </h2>

        {/* Removed the Red Error Box here */}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="admin@ecocruise.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {isLoading ? "Verifying..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;