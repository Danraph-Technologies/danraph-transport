import { createFetchClient } from "@zayne-labs/callapi";

const callBackendApi = createFetchClient({
  baseURL: "https://backend-services--techwithdunamix9789-guakp32e.leapcell.dev/v1",
  credentials: "include",
  retryAttempts: 0, // Disable retry attempts to prevent multiple failed requests
  validateStatus: (status) => status < 500, // Accept all responses except server errors
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add response interceptor to handle errors
callBackendApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle network errors
    if (!error.response) {
      return Promise.reject({
        message: 'Network error. Please check your connection.',
      });
    }

    // Handle HTTP errors
    const { status, data } = error.response;
    
    let errorMessage = 'An error occurred';
    
    if (status === 403 && data?.message === 'user already exists') {
      errorMessage = 'This email is already registered. Please use a different email or log in.';
    } else if (data?.message) {
      errorMessage = data.message;
    } else if (status === 422 && data?.errors) {
      // Handle validation errors
      errorMessage = Object.values(data.errors)[0] || 'Validation failed';
    } else if (status === 401) {
      errorMessage = 'Unauthorized. Please log in again.';
    } else if (status === 403) {
      errorMessage = 'You do not have permission to perform this action.';
    } else if (status === 404) {
      errorMessage = 'The requested resource was not found.';
    } else if (status >= 500) {
      errorMessage = 'Server error. Please try again later.';
    }

    return Promise.reject({
      message: errorMessage,
      status,
      data: data || {},
    });
  }
);

export { callBackendApi };