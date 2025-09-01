import { createFetchClient } from "@zayne-labs/callapi";

// Create a configured fetch client
const api = createFetchClient({
  baseURL: "https://backend-services--techwithdunamix9789-guakp32e.leapcell.dev/v1",
  credentials: "include",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Simple wrapper to handle the API calls
const callBackendApi = async (url, options = {}) => {
  try {
    console.log('API Request:', { url, options });
    const response = await api(url, {
      ...options,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    
    console.log('API Response:', response);
    
    // If the response has an error status, throw it
    if (response.error || response.status >= 400) {
      // Try to get the error message from different possible locations
      const errorMessage = 
        response.message || 
        response.data?.message || 
        response.error?.message || 
        'Request failed';
      
      const error = new Error(errorMessage);
      error.status = response.status || 500;
      error.data = response.data || response;
      error.raw = response; // Keep the raw response for debugging
      console.error('API Error:', error);
      throw error;
    }
    
    return response;
  } catch (error) {
    console.error('API call failed:', error);
    
    // If it's already formatted, just rethrow
    if (error.status) throw error;
    
    // Format the error
    const errorObj = new Error(error.message || 'Network error');
    errorObj.status = 0;
    errorObj.data = { message: error.message || 'Unable to connect to the server' };
    throw errorObj;
  }
};

export { callBackendApi };
