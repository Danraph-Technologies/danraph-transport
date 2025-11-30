import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api'; 
import { toast } from 'sonner'; // 1. Import Toast

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      try {
        const response = await api.get('/v1/users/me');
        
        if (response.data && response.data.user_id) {
          setUser(response.data); 
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log('No active session found.');
        setUser(null);

        // --- SMART REDIRECT LOGIC START ---
        // 2. Check if the error is a 401 (Unauthorized)
        if (error.response?.status === 401) {
            
            // 3. Don't show error if user is already on Login or Home page
            const currentPath = window.location.pathname;
            const isPublicPage = currentPath === '/login' || currentPath === '/';

            if (!isPublicPage) {
                // 4. Show the "Big App" Toast
                toast.error("Session expired. Redirecting to login...", {
                    duration: 2000, // Show for 2 seconds
                });

                // 5. Kick them out after a short delay so they can read the message
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            }
        }
        // --- SMART REDIRECT LOGIC END ---

      } finally {
        setIsLoading(false);
      }
    };

    checkLoggedInStatus();
  }, []); 

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    const toastId = toast.loading("Logging out...");
    setUser(null); 
    try {
      await api.post('/v1/auth/logout'); 
      toast.success("Logged out successfully", { id: toastId });
      
      // Optional: Full reload to clear any lingering app states
      setTimeout(() => {
          window.location.href = '/login';
      }, 500);
      
    } catch (error) {
      console.error("Logout failed", error);
      toast.dismiss(toastId);
      window.location.href = '/login'; // Force logout anyway
    }
  };

  const value = {
    user,
    isAuthenticated: !!user, 
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};