import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'https://backend-services--davetechinnovation1440-53kce6gj.leapcell.dev',
  withCredentials: true, // Important for cookies
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add a request interceptor to include auth token if it exists
api.interceptors.request.use(
  (config) => {
    // You can add auth headers here if needed in the future
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors (e.g., 401 Unauthorized)
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error('Unauthorized access - please login again');
      // You can add redirect logic here if needed
    }
    return Promise.reject(error);
  }
);

export default api;
