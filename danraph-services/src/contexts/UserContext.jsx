import { createContext, useContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { callBackendApi } from '../lib/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Query to fetch user session
  const {
    data: user,
    isLoading,
    error,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        // Try to get from localStorage first
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          return JSON.parse(savedUser);
        }
        
        // If not in localStorage, fetch from API
        const response = await callBackendApi('/auth/session', {
          method: 'POST',
          credentials: 'include',
        });
        
        const userData = response?.data || response;
        if (userData?.user_id) {
          localStorage.setItem('user', JSON.stringify(userData));
          return userData;
        }
        throw new Error('No valid session');
      } catch (error) {
        localStorage.removeItem('user');
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false,
  });

  // Login mutation
  const login = async (email, password) => {
    const response = await callBackendApi('/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    
    const userData = response?.data || response;
    if (userData?.user_id) {
      localStorage.setItem('user', JSON.stringify(userData));
      queryClient.setQueryData(['user'], userData);
      return userData;
    }
    throw new Error('Login failed');
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    queryClient.setQueryData(['user'], null);
    queryClient.clear();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated: !!user?.user_id,
        login,
        logout,
        refetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
