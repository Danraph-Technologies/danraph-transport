// Simple fetch wrapper with error handling
const callBackendApi = async (url, options = {}) => {
  const baseURL = "https://backend-services--techwithdunamix9789-guakp32e.leapcell.dev/v1";
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  try {
    const response = await fetch(`${baseURL}${url}`, {
      ...options,
      credentials: 'include',
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    let responseData;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      throw {
        status: response.status,
        message: responseData?.message || response.statusText || 'Request failed',
        data: responseData || {},
      };
    }

    return responseData;
  } catch (error) {
    console.error('API call failed:', error);
    
    // If it's already a formatted error, just rethrow
    if (error.status) throw error;
    
    // Format the error
    const errorObj = new Error(error.message || 'Network error');
    errorObj.status = 0;
    errorObj.data = error.data || {};
    throw errorObj;
  }
};

export { callBackendApi };