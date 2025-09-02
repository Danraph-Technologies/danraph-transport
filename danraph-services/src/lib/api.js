// Simple fetch wrapper with error handling
const callBackendApi = async (url, options = {}) => {
  const baseURL = "https://backend-services--techwithdunamix9789-guakp32e.leapcell.dev/v1";
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  };
  
  // Get token from localStorage if available
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user?.access_token) {
    defaultHeaders['Authorization'] = `Bearer ${user.access_token}`;
  }

  try {
    // Create a new options object to avoid mutating the original
    const requestOptions = { ...options };
    
    // Set up headers
    requestOptions.headers = new Headers({
      ...defaultHeaders,
      ...(options.headers || {})
    });
    
    // Ensure credentials are included for all requests
    requestOptions.credentials = 'include';
    requestOptions.mode = 'cors';
    
    // Handle request body
    if (requestOptions.body && typeof requestOptions.body === 'object') {
      requestOptions.body = JSON.stringify(requestOptions.body);
    }
    
    // Log request details (without sensitive data)
    const logSafeOptions = { ...requestOptions };
    if (logSafeOptions.body) {
      try {
        logSafeOptions.body = JSON.parse(logSafeOptions.body);
      } catch (e) {
        // Not JSON, leave as is
      }
    }
    
    console.log(`API ${requestOptions.method || 'GET'} ${url}`, {
      ...logSafeOptions,
      headers: Object.fromEntries(requestOptions.headers.entries())
    });
    
    // Make the request
    const response = await fetch(`${baseURL}${url}`, requestOptions);
    
    // Handle response
    let responseData;
    const contentType = response.headers.get('content-type') || '';
    
    try {
      responseData = contentType.includes('application/json')
        ? await response.json()
        : await response.text();
    } catch (e) {
      console.error('Error parsing response:', e);
      responseData = await response.text().catch(() => ({}));
    }
    
    // Log response details
    console.log(`API ${requestOptions.method || 'GET'} ${url} -> ${response.status}`, {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      data: responseData
    });
    
    // Handle non-2xx responses
    if (!response.ok) {
      const error = new Error(responseData?.message || response.statusText || 'Request failed');
      error.status = response.status;
      error.data = responseData;
      
      // Special handling for 401 responses
      if (response.status === 401) {
        console.warn('Authentication failed - clearing local storage');
        localStorage.removeItem('user');
      }
      
      throw error;
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