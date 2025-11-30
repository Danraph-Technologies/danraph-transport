import axios from 'axios';
import { toast } from 'sonner'; 

const api = axios.create({
  baseURL: 'https://backend-services--davetechinnovation1440-53kce6gj.leapcell.dev',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

let isRedirecting = false;

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 👇 THE FIX: Check for 401 AND 403
    const status = error.response?.status;
    
    if (status === 401 || status === 403) {
      
      // Prevent redirect loop if already on login
      if (!window.location.pathname.includes('/login') && !isRedirecting) {
        isRedirecting = true;

        toast.error("Session expired. Redirecting to login...", {
          duration: 2000,
        });

        // Clear local storage to be safe
        localStorage.removeItem('user');

        setTimeout(() => {
          window.location.href = '/login';
          isRedirecting = false;
        }, 2000);
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;