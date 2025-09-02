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
      // Try to get from localStorage first
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        // If we have a saved user, return it immediately
        // and validate in the background
        if (parsedUser?.user_id) {
          // Validate session in the background
          callBackendApi('/auth/session', {
            method: 'POST',
            credentials: 'include',
          }).then(response => {
            const userData = response?.data || response;
            if (userData?.user_id) {
              localStorage.setItem('user', JSON.stringify(userData));
              queryClient.setQueryData(['user'], userData);
            }
          }).catch(() => {
            // If validation fails, clear the invalid session
            localStorage.removeItem('user');
            queryClient.setQueryData(['user'], null);
          });
          return parsedUser;
        }
      }
      
      // If no saved user or invalid, try to get from API
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
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false,
    // Don't retry on 401 errors
    retryIf: (error) => error.status !== 401,
  });

  // Login mutation
  const login = async (email, password) => {
    try {
      const response = await callBackendApi('/auth/login', {
        method: 'POST',
        body: { email, password },
        credentials: 'include',
      });
      
      console.log('Login response:', response);
      
      // Handle the response based on the actual API structure
      const userData = response?.data || response;
      if (userData?.user_id) {
        localStorage.setItem('user', JSON.stringify(userData));
        queryClient.setQueryData(['user'], userData);
        return userData;
      }
      throw new Error('Login failed');
    } catch (error) {
      console.error('Login error details:', error);
      throw new Error(error.message || 'Login failed. Please check your credentials.');
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Call logout endpoint if you have one
      await callBackendApi('/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('user');
      queryClient.setQueryData(['user'], null);
      queryClient.clear();
    }
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
