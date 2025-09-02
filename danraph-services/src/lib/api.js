// Simple fetch wrapper with error handling
const callBackendApi = async (url, options = {}) => {
  // Use relative URL for proxy
  const baseURL = "/api"; // This will be rewritten to /v1 by the proxy
  
  // Get token from localStorage if available
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  // Set up headers
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  
  // Add auth header if token exists
  if (user?.access_token) {
    headers.set('Authorization', `Bearer ${user.access_token}`);
  }
  
  // Merge with any custom headers
  if (options.headers) {
    Object.entries(options.headers).forEach(([key, value]) => {
      headers.set(key, value);
    });
  }
  
  // Prepare fetch options
  const fetchOptions = {
    ...options,
    headers,
    credentials: 'include',
    mode: 'cors'
  };

  // Handle request body
  if (fetchOptions.body && typeof fetchOptions.body === 'object') {
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }
  
  // Log request details (without sensitive data)
  const logSafeOptions = { ...fetchOptions };
  if (logSafeOptions.body) {
    try {
      logSafeOptions.body = JSON.parse(logSafeOptions.body);
    } catch (e) {
      // Not JSON, leave as is
    }
  }
  
  const fullUrl = `${baseURL}${url.startsWith('/') ? '' : '/'}${url}`;
  console.log(`API ${options.method || 'GET'} ${fullUrl}`, logSafeOptions);
  
  try {
    const response = await fetch(fullUrl, fetchOptions);
    
    // Log response details
    console.log(`API Response (${response.status}) ${options.method || 'GET'} ${fullUrl}`, {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });
    
    // Handle error responses
    if (!response.ok) {
      let errorData;
      try {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          errorData = await response.json();
        } else {
          errorData = await response.text();
        }
      } catch (e) {
        errorData = await response.text();
      }
      
      const error = new Error(errorData?.message || `Request failed with status ${response.status}`);
      error.status = response.status;
      error.data = errorData;
      throw error;
    }
    
    // Parse successful response
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error('API call failed:', error);
    
    // Handle network errors
    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      const networkError = new Error('Network error - could not connect to the server');
      networkError.status = 0;
      networkError.data = { message: 'Network error' };
      throw networkError;
    }
    
    // Re-throw other errors
    throw error;
  }
};

export { callBackendApi };